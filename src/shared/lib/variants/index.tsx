"use client";

/**
 * Переиспользуемый переключатель вариантов интерфейса (для сравнения дизайн-вариантов
 * прямо в работающем приложении). Самодостаточная версия — зависит только от React.
 *
 * Как пользоваться (без пропсов):
 *   const v = useVariant("rnp.weekend", {
 *     options: ["band", "grey", "red"],
 *     labels: { band: "A·подложка", grey: "B·серые", red: "C·красные" },
 *     default: "band",
 *     title: "РНП: выходные",     // необязательно — имя группы в виджете
 *     section: "Таблица",          // необязательно — тема для группировки
 *   });
 *   // дальше ветвишь рендер по v
 *
 * Виджет <VariantSwitcher/> монтируется ОДИН раз (в корневом layout) и сам показывает
 * все группы, которые сейчас зарегистрированы вызовами useVariant. Выбор сохраняется в
 * localStorage по id. В виджете можно вернуть всё «По умолчанию», сбросить одну группу (↺)
 * и сохранить текущий набор как именованный пресет. По умолчанию виджет СКРЫТ (чтобы демо было чистым) — показать:
 * `?variants` в URL или ⌘+⌥+V (macOS) / Ctrl+Alt+V (Win/Linux).
 */

import {
  Fragment,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

interface Group {
  id: string;
  title?: string; // человекочитаемое имя группы (в виджете); fallback — id
  section?: string; // тема для визуальной группировки в виджете; fallback — «Прочее»
  control?: "slider"; // как рисовать в виджете: по умолчанию кнопки, "slider" — нотчевый ползунок
  hidden?: boolean; // значение живёт в сторе (readVariant/setVariant работают), но в виджете
  // не показывается — у настройки есть своё место в интерфейсе
  options: string[];
  labels?: Record<string, string>;
  default: string;
  current: string;
  refs: number; // счётчик потребителей — группа исчезает из виджета, когда никто её не использует
}

const groups = new Map<string, Group>();
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}
function subscribe(l: () => void) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

const storageKey = (id: string) => `variants:${id}`;

function loadPersisted(id: string, options: string[], def: string): string {
  if (typeof window === "undefined") return def;
  try {
    const v = window.localStorage.getItem(storageKey(id));
    if (v && options.includes(v)) return v;
  } catch {
    /* приватный режим / переполнение */
  }
  return def;
}

// Свёрнутость виджета — тоже помним между перезагрузками.
const COLLAPSE_KEY = "variants:__collapsed";
function loadCollapsed(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(COLLAPSE_KEY) === "1";
  } catch {
    return false;
  }
}
function saveCollapsed(v: boolean) {
  try {
    window.localStorage.setItem(COLLAPSE_KEY, v ? "1" : "0");
  } catch {
    /* игнорируем */
  }
}

// Свёрнутые темы (section) внутри виджета — тоже помним между перезагрузками.
const SECTIONS_KEY = "variants:__sections";
function loadClosedSections(): string[] {
  try {
    const parsed: unknown = JSON.parse(
      window.localStorage.getItem(SECTIONS_KEY) ?? "[]",
    );
    return Array.isArray(parsed)
      ? parsed.filter((s): s is string => typeof s === "string")
      : [];
  } catch {
    return [];
  }
}
function saveClosedSections(v: string[]) {
  try {
    window.localStorage.setItem(SECTIONS_KEY, JSON.stringify(v));
  } catch {
    /* игнорируем */
  }
}

function register(
  id: string,
  cfg: {
    options: string[];
    labels?: Record<string, string>;
    default?: string;
    title?: string;
    section?: string;
    control?: "slider";
    hidden?: boolean;
  },
) {
  const existing = groups.get(id);
  if (existing) {
    existing.refs++;
    if (!existing.title && cfg.title) existing.title = cfg.title; // первый непустой title выигрывает
    if (!existing.section && cfg.section) existing.section = cfg.section;
    if (!existing.control && cfg.control) existing.control = cfg.control;
    if (cfg.hidden) existing.hidden = true;
    return;
  }
  const def = cfg.default ?? cfg.options[0];
  groups.set(id, {
    id,
    title: cfg.title,
    section: cfg.section,
    control: cfg.control,
    hidden: cfg.hidden,
    options: cfg.options,
    labels: cfg.labels,
    default: def,
    current: loadPersisted(id, cfg.options, def),
    refs: 1,
  });
  emit();
}

function unregister(id: string) {
  const g = groups.get(id);
  if (!g) return;
  g.refs--;
  if (g.refs <= 0) {
    groups.delete(id);
    emit();
  }
}

/**
 * Синхронное чтение текущего варианта БЕЗ подписки — для чистых render-функций,
 * которые не могут вызвать хук. Подписку (ре-рендер при переключении) должен
 * обеспечить useVariant с тем же id выше по дереву того же компонента.
 */
export function readVariant<T extends string>(id: string, def: T): T {
  return (groups.get(id)?.current as T | undefined) ?? def;
}

// Группы, из которых состоят пресеты: только видимые в виджете.
const tracked = (g: Group) => !g.hidden;

function writeValue(g: Group, value: string) {
  g.current = value;
  try {
    if (value === g.default) window.localStorage.removeItem(storageKey(g.id));
    else window.localStorage.setItem(storageKey(g.id), value);
  } catch {
    /* игнорируем */
  }
}

export function setVariant(id: string, value: string) {
  const g = groups.get(id);
  if (!g || g.current === value) return;
  // Было ли на экране несохранённое — смотрим ДО изменения.
  const continuing = isUnsavedActive();
  writeValue(g, value);
  if (tracked(g)) trackUnsaved(continuing);
  emit();
}

/** Вернуть одну группу к варианту по умолчанию и забыть сохранённый выбор. */
export function resetVariant(id: string) {
  const g = groups.get(id);
  if (g) setVariant(id, g.default);
}

/** Вернуть к вариантам по умолчанию все группы, видимые в виджете (hidden не трогаем —
 *  у них своё место в интерфейсе). Черновик не трогает: это переход, а не правка. */
export function resetAllVariants() {
  let changed = false;
  for (const g of groups.values()) {
    if (!tracked(g) || g.current === g.default) continue;
    writeValue(g, g.default);
    changed = true;
  }
  if (changed) emit();
}

// ── Пресеты: именованные наборы «группа → вариант», живут в localStorage ──────────
interface Preset {
  name: string;
  values: Record<string, string>;
}

// Несохранённый набор: заводится сам при правке параметров и становится пресетом только
// после явного сохранения. Один на всё приложение.
interface Unsaved {
  values: Record<string, string>;
}

const PRESETS_KEY = "variants:__presets";
const UNSAVED_KEY = "variants:__unsaved";
let presets: Preset[] = [];
let unsaved: Unsaved | null = null;
let presetsVersion = 0; // входит в снапшот виджета: меняется при любом изменении списка

function loadPresets() {
  try {
    const parsed: unknown = JSON.parse(
      window.localStorage.getItem(PRESETS_KEY) ?? "[]",
    );
    if (Array.isArray(parsed)) {
      presets = parsed.filter(
        (p): p is Preset =>
          !!p &&
          typeof p.name === "string" &&
          !!p.values &&
          typeof p.values === "object",
      );
    }
    const u = JSON.parse(
      window.localStorage.getItem(UNSAVED_KEY) ?? "null",
    ) as Unsaved | null;
    if (u && u.values && typeof u.values === "object") {
      unsaved = { values: u.values };
    }
  } catch {
    /* битый JSON / приватный режим — остаёмся без пресетов */
  }
  presetsVersion++;
  emit();
}

function persistPresets() {
  try {
    window.localStorage.setItem(PRESETS_KEY, JSON.stringify(presets));
    if (unsaved)
      window.localStorage.setItem(UNSAVED_KEY, JSON.stringify(unsaved));
    else window.localStorage.removeItem(UNSAVED_KEY);
  } catch {
    /* игнорируем */
  }
  presetsVersion++;
  emit();
}

// Значение, которое набор задаёт группе: своё, а если группы в наборе нет (или её
// вариант с тех пор удалили из кода) — вариант по умолчанию.
const valueIn = (values: Record<string, string>, g: Group) =>
  g.id in values && g.options.includes(values[g.id]) ? values[g.id] : g.default;

// Набор «активен», если он касается хотя бы одной группы на экране и все группы на
// экране стоят в его значениях (не упомянутые в нём — по умолчанию).
function isActive(values: Record<string, string>): boolean {
  let seen = false;
  for (const g of groups.values()) {
    if (!tracked(g)) continue;
    if (g.id in values) seen = true;
    if (g.current !== valueIn(values, g)) return false;
  }
  return seen;
}
const isPresetActive = (p: Preset) => isActive(p.values);
const isUnsavedActive = () => !!unsaved && isActive(unsaved.values);

function currentValues(): Record<string, string> {
  const values: Record<string, string> = {};
  for (const g of groups.values()) if (tracked(g)) values[g.id] = g.current;
  return values;
}

const isAllDefault = () =>
  [...groups.values()].every((g) => !tracked(g) || g.current === g.default);

// Правка параметра ведёт несохранённый набор: если он на экране — правим его, иначе
// заводим новый от того, что сейчас на экране (прежний несохранённый заменяется).
// Совпал с «По умолчанию» или с сохранённым пресетом — исчезает: сохранять нечего.
function trackUnsaved(continuing: boolean) {
  unsaved =
    isAllDefault() || presets.some(isPresetActive)
      ? null
      : {
          values: {
            ...(continuing ? unsaved?.values : null),
            ...currentValues(),
          },
        };
  persistPresets();
}

// Пресет запоминает текущие значения всех групп, видимых в виджете. Сохранение под
// существующим именем перезаписывает пресет на его месте.
function savePreset(name: string, values = currentValues()) {
  const next: Preset = { name, values };
  presets = presets.some((p) => p.name === name)
    ? presets.map((p) => (p.name === name ? next : p))
    : [...presets, next];
  if (isActive(values)) unsaved = null;
  persistPresets();
}

function deletePreset(name: string) {
  presets = presets.filter((p) => p.name !== name);
  persistPresets();
}

// Применяем ко всем группам на экране: которых в наборе нет — возвращаем к варианту
// по умолчанию, иначе в них осталось бы значение от прошлого набора или ручной правки.
// В localStorage пишем и для групп, которых сейчас нет на экране, — они подхватят
// значение при монтировании.
function applyValues(values: Record<string, string>) {
  for (const g of groups.values()) {
    if (tracked(g)) writeValue(g, valueIn(values, g));
  }
  for (const [id, value] of Object.entries(values)) {
    if (groups.has(id)) continue;
    try {
      window.localStorage.setItem(storageKey(id), value);
    } catch {
      /* игнорируем */
    }
  }
  emit();
}
const applyPreset = (p: Preset) => applyValues(p.values);

function saveUnsaved(name: string) {
  if (!unsaved) return;
  const { values } = unsaved;
  unsaved = null;
  savePreset(name, values);
}

// Выбросить несохранённый набор. Если он был на экране — вернуться к «По умолчанию».
function discardUnsaved() {
  if (!unsaved) return;
  const wasActive = isUnsavedActive();
  unsaved = null;
  persistPresets();
  if (wasActive) resetAllVariants();
}

/**
 * Регистрирует группу вариантов и возвращает текущий выбранный вариант.
 * `enabled=false` — не регистрировать (например, когда вариативность тут не нужна),
 * тогда всегда возвращается default и группа не попадает в виджет.
 */
export function useVariant<T extends string>(
  id: string,
  cfg: {
    options: T[];
    labels?: Record<T, string>;
    default?: T;
    title?: string;
    section?: string;
    control?: "slider";
    hidden?: boolean;
  },
  enabled = true,
): T {
  useEffect(() => {
    if (!enabled) return;
    register(
      id,
      cfg as {
        options: string[];
        labels?: Record<string, string>;
        default?: string;
        title?: string;
        section?: string;
        control?: "slider";
        hidden?: boolean;
      },
    );
    return () => unregister(id);
    // cfg намеренно вне зависимостей: группа регистрируется один раз на id
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, enabled]);

  const def = (cfg.default ?? cfg.options[0]) as T;
  return useSyncExternalStore(
    subscribe,
    () => (enabled ? ((groups.get(id)?.current as T) ?? def) : def),
    () => def,
  );
}

// Снимок для виджета: меняется, когда меняется состав групп или текущие значения.
function snapshot(): string {
  return (
    [...groups.values()].map((g) => `${g.id}=${g.current}`).join("|") +
    `#${presetsVersion}`
  );
}

// Ключ localStorage для запомненной видимости панели (тумблер Ctrl+Alt+V).
const VISIBLE_KEY = "variants:__visible__";

// Прокручиваемая область панели: у краёв содержимое плавно растворяется, а не
// обрывается резкой линией — и сразу видно, что список прокручивается. Маску пишем
// инлайном (без внешнего CSS), чтобы файл оставался самодостаточным. Fade гасится с
// той стороны, где прокрутка уже упёрлась в край.
const FADE = 12;
function VariantsScrollArea({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mask, setMask] = useState<string | undefined>(undefined);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const top = el.scrollTop > 1 ? FADE : 0;
      const bottom =
        el.scrollTop + el.clientHeight < el.scrollHeight - 1 ? FADE : 0;
      setMask(
        top || bottom
          ? `linear-gradient(to bottom, transparent 0, black ${top}px, black calc(100% - ${bottom}px), transparent 100%)`
          : undefined,
      );
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);
  return (
    <div
      ref={ref}
      style={{
        maskImage: mask,
        WebkitMaskImage: mask,
        marginTop: 8,
        minHeight: 0,
        flex: 1,
        overflowY: "auto",
        paddingRight: 2,
      }}
    >
      {children}
    </div>
  );
}

/** Плавающий служебный виджет переключения вариантов. Монтируется один раз в layout.
 *  По умолчанию СКРЫТ (чтобы демо заказчику было чистым). Показывается, если:
 *   • в URL есть параметр `?variants`, или
 *   • включён сочетанием клавиш ⌘+⌥+V (macOS) / Ctrl+Alt+V (Win/Linux); запоминается. */
export function VariantSwitcher() {
  // подписка на стор (значение снапшота само не используем — читаем groups ниже)
  useSyncExternalStore(subscribe, snapshot, () => "");
  // Стартуем с false (совпадает с SSR), затем восстанавливаем из localStorage.
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => setCollapsed(loadCollapsed()), []);
  const toggleCollapsed = () =>
    setCollapsed((c) => {
      saveCollapsed(!c);
      return !c;
    });

  // Темы (section) сворачиваются по клику на заголовок — когда групп много, лишние
  // можно убрать с глаз. Свёрнутая тема показывает число групп и сколько из них изменено.
  const [closedSections, setClosedSections] = useState<string[]>([]);
  useEffect(() => setClosedSections(loadClosedSections()), []);
  const toggleSection = (sec: string) =>
    setClosedSections((c) => {
      const next = c.includes(sec) ? c.filter((s) => s !== sec) : [...c, sec];
      saveClosedSections(next);
      return next;
    });

  // Видимость панели. Стартуем с false (совпадает с SSR), затем в эффекте включаем,
  // если задан ?variants в URL или ранее включили клавишами.
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let ls = false;
    try {
      ls = window.localStorage.getItem(VISIBLE_KEY) === "1";
    } catch {
      /* приватный режим */
    }
    const url = new URLSearchParams(window.location.search).has("variants");
    setVisible(ls || url);
  }, []);
  // Тумблер показать/скрыть панель (и запомнить выбор):
  //   macOS — ⌘ + ⌥ + V,  Windows/Linux — Ctrl + Alt + V.
  // Проверяем по e.code === "KeyV": на macOS ⌥ (Option) меняет e.key на спецсимвол (√),
  // а code от раскладки и модификаторов не зависит.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.altKey && e.code === "KeyV") {
        e.preventDefault();
        setVisible((v) => {
          const next = !v;
          try {
            window.localStorage.setItem(VISIBLE_KEY, next ? "1" : "0");
          } catch {
            /* игнор */
          }
          return next;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Пресеты читаем из localStorage после монтирования (на сервере их нет).
  useEffect(() => loadPresets(), []);
  // Ввод имени нового пресета: null — поле скрыто, строка — набираемое имя.
  const [naming, setNaming] = useState<string | null>(null);
  const namingCancelled = useRef(false);
  const [copied, setCopied] = useState(false);

  const list = [...groups.values()]
    .filter((g) => !g.hidden)
    .sort((a, b) => (a.title ?? a.id).localeCompare(b.title ?? b.id));
  if (!visible || list.length === 0) return null;

  // Группировка по темам (section). Внутри темы — порядок как в list (по названию),
  // сами темы — по алфавиту. Один общий grid, поэтому колонка названий выравнивается
  // сквозь все темы, а заголовки тем растянуты на всю ширину (col-span-full).
  const bySection = new Map<string, Group[]>();
  for (const g of list) {
    const sec = g.section ?? "Прочее";
    if (!bySection.has(sec)) bySection.set(sec, []);
    bySection.get(sec)!.push(g);
  }
  const sections = [...bySection.keys()].sort((a, b) => a.localeCompare(b));
  // Подпись свёрнутой темы: «3» или «3 · изменено 1».
  const sectionSummary = (sec: string) => {
    const gs = bySection.get(sec)!;
    const changed = gs.filter((g) => g.current !== g.default).length;
    return changed ? `${gs.length} · изменено ${changed}` : `${gs.length}`;
  };

  // Строка пресетов. «По умолчанию» — встроенный пресет: он же сброс всех групп.
  // Показываем только пресеты, которые касаются групп на этом экране.
  const allDefault = list.every((g) => g.current === g.default);
  const shownPresets = presets.filter((p) =>
    list.some((g) => g.id in p.values),
  );
  const activePreset = shownPresets.find(isPresetActive);
  const u = unsaved;
  const unsavedActive = isUnsavedActive();
  const startNaming = () => {
    let n = 1;
    while (presets.some((p) => p.name === `Пресет ${n}`)) n++;
    namingCancelled.current = false;
    setNaming(`Пресет ${n}`);
  };
  // Enter и уход фокуса сохраняют (набранное имя не теряется), Esc отменяет.
  const commitNaming = () => {
    const name = (naming ?? "").trim();
    if (name && !namingCancelled.current) saveUnsaved(name);
    setNaming(null);
  };
  // Текущие значения всех видимых групп — строками `id=value`, чтобы вставить в промпт:
  // id и value — те же строки, что в коде, по ним useVariant находится поиском.
  const copyValues = () => {
    const lines = sections.flatMap((sec) =>
      bySection.get(sec)!.map((g) => `${g.id}=${g.current}`),
    );
    navigator.clipboard
      .writeText(lines.join("\n"))
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => {
        /* нет доступа к буферу (не https / запрет) */
      });
  };

  // Служебная панель всегда поверх всего: максимальное значение z-index. Модалки
  // приложения живут на z-[9999], их дропдауны выше, и переключатель, будучи
  // инструментом сравнения, обязан оставаться доступным поверх любого из них.
  // Адаптация под проект без Tailwind: разметка панели та же, классы заменены на
  // inline-стили (без hover-эффектов).
  const PINK = "#c026d3";
  const pill = (active: boolean): React.CSSProperties => ({
    borderRadius: 999,
    border: 0,
    font: "inherit",
    background: active ? PINK : "transparent",
    color: active ? "#fff" : "#a21caf",
    boxShadow: active ? "none" : "inset 0 0 0 1px #f5d0fe",
  });
  const bare: React.CSSProperties = {
    background: "none",
    border: 0,
    font: "inherit",
    color: "inherit",
    cursor: "pointer",
  };
  const ellipsis: React.CSSProperties = {
    maxWidth: 140,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };
  return (
    <div
      data-variants-switcher
      style={{
        position: "fixed",
        bottom: 12,
        right: 12,
        zIndex: 2147483647,
        display: "flex",
        flexDirection: "column",
        maxHeight: "calc(100dvh - 1.5rem)",
        maxWidth: "min(92vw, 460px)",
        borderRadius: 8,
        border: "1px dashed rgba(232, 121, 249, 0.8)",
        background: "rgba(255, 255, 255, 0.9)",
        padding: "10px 12px",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: 11,
        lineHeight: 1,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(12px)",
        userSelect: "none",
      }}
    >
      {/* Глобальные стили проекта вешают transition на span, svg и path — в панели
          переключение должно быть мгновенным. */}
      <style>{"[data-variants-switcher] * { transition: none; }"}</style>
      <button
        type="button"
        onClick={toggleCollapsed}
        style={{
          ...bare,
          display: "flex",
          width: "100%",
          flexShrink: 0,
          alignItems: "center",
          gap: 6,
          color: PINK,
          padding: 0,
        }}
      >
        <span
          style={{
            display: "inline-block",
            height: 6,
            width: 6,
            borderRadius: "50%",
            background: PINK,
          }}
        />
        <span
          style={{
            fontSize: 9,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
          }}
        >
          UI variants
        </span>
        <span style={{ marginLeft: "auto", fontSize: 9 }}>
          {collapsed ? `${list.length} ▸` : "▾"}
        </span>
      </button>
      {!collapsed && (
        <div
          style={{
            marginTop: 8,
            display: "flex",
            flexShrink: 0,
            flexWrap: "wrap",
            alignItems: "center",
            gap: 4,
            borderBottom: "1px dashed #f5d0fe",
            paddingBottom: 8,
          }}
        >
          <button
            type="button"
            onClick={resetAllVariants}
            title="Вернуть все группы к вариантам по умолчанию"
            style={{
              ...pill(allDefault),
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            По умолчанию
          </button>
          {shownPresets.map((p) => (
            <span
              key={p.name}
              style={{
                ...pill(p === activePreset),
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <button
                type="button"
                onClick={() => applyPreset(p)}
                title={p.name}
                style={{ ...bare, ...ellipsis, padding: "4px 4px 4px 8px" }}
              >
                {p.name}
              </button>
              <button
                type="button"
                onClick={() => deletePreset(p.name)}
                title="Удалить пресет"
                aria-label={`Удалить пресет «${p.name}»`}
                style={{ ...bare, padding: "4px 8px 4px 2px", opacity: 0.5 }}
              >
                ×
              </button>
            </span>
          ))}
          {/* Несохранённый набор — пунктирная плашка: ✓ превращает её в поле имени и
              сохраняет пресетом, × выбрасывает. */}
          {u && naming === null && (
            <span
              style={{
                ...pill(unsavedActive),
                boxShadow: "none",
                border: `1px dashed ${unsavedActive ? PINK : "#f0abfc"}`,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <button
                type="button"
                onClick={() => applyValues(u.values)}
                style={{ ...bare, padding: "3px 4px 3px 7px" }}
              >
                Новый •
              </button>
              <button
                type="button"
                onClick={startNaming}
                title="Сохранить как пресет"
                aria-label="Сохранить как пресет"
                style={{ ...bare, padding: "3px 3px" }}
              >
                ✓
              </button>
              <button
                type="button"
                onClick={discardUnsaved}
                title="Выбросить несохранённый набор"
                aria-label="Выбросить несохранённый набор"
                style={{ ...bare, padding: "3px 7px 3px 3px", opacity: 0.5 }}
              >
                ×
              </button>
            </span>
          )}
          {naming !== null && (
            <input
              autoFocus
              value={naming}
              maxLength={24}
              placeholder="Название"
              aria-label="Название пресета"
              onFocus={(e) => e.currentTarget.select()}
              onChange={(e) => setNaming(e.target.value)}
              onBlur={commitNaming}
              onKeyDown={(e) => {
                e.stopPropagation();
                if (e.key === "Enter") commitNaming();
                if (e.key === "Escape") {
                  namingCancelled.current = true;
                  setNaming(null);
                }
              }}
              style={{
                width: 112,
                borderRadius: 999,
                border: 0,
                background: "#fff",
                padding: "4px 8px",
                font: "inherit",
                color: "#701a75",
                outline: "none",
                boxShadow: `inset 0 0 0 1px ${PINK}`,
                userSelect: "text",
              }}
            />
          )}
          <button
            type="button"
            onClick={copyValues}
            style={{
              ...bare,
              marginLeft: "auto",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: "4px 2px",
              color: PINK,
            }}
          >
            {copied ? (
              "✓ Скопировано"
            ) : (
              <>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Копировать
              </>
            )}
          </button>
        </div>
      )}
      {!collapsed && (
        <VariantsScrollArea>
          <div
            style={{
              display: "grid",
              alignItems: "start",
              columnGap: 12,
              rowGap: 10,
              gridTemplateColumns: "auto 1fr",
            }}
          >
            {sections.map((sec, si) => (
              <Fragment key={sec}>
                <button
                  type="button"
                  onClick={() => toggleSection(sec)}
                  aria-expanded={!closedSections.includes(sec)}
                  style={{
                    ...bare,
                    gridColumn: "1 / -1",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: 0,
                    textAlign: "left",
                    fontSize: 9,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: PINK,
                    ...(si === 0
                      ? {}
                      : {
                          marginTop: 6,
                          borderTop: "1px dashed #f5d0fe",
                          paddingTop: 8,
                        }),
                  }}
                >
                  <span>{sec}</span>
                  {closedSections.includes(sec) && (
                    <span style={{ opacity: 0.7 }}>{sectionSummary(sec)}</span>
                  )}
                  <span style={{ marginLeft: "auto" }} aria-hidden="true">
                    {closedSections.includes(sec) ? "▸" : "▾"}
                  </span>
                </button>
                {(closedSections.includes(sec) ? [] : bySection.get(sec)!).map(
                  (g) => (
                    <Fragment key={g.id}>
                      <span
                        title={g.id}
                        style={{
                          whiteSpace: "nowrap",
                          paddingTop: 4,
                          textAlign: "right",
                          // Жирность постоянная: толстые штрихи лучше передают цвет, и
                          // разница «дефолт — бледный / изменено — насыщенный» заметна.
                          fontWeight: 700,
                          color:
                            g.current === g.default
                              ? "rgba(112, 26, 117, 0.45)"
                              : "#701a75",
                        }}
                      >
                        {g.title ?? g.id}
                      </span>
                      {g.control === "slider" ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          {/* Нотчевый ползунок: точки-деления, залитые до текущей включительно. */}
                          <div
                            style={{
                              position: "relative",
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              padding: "0 4px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                left: 4,
                                right: 4,
                                top: "50%",
                                height: 1,
                                background: "#f5d0fe",
                              }}
                            />
                            {g.options.map((opt, i) => {
                              const filled =
                                i <= Math.max(0, g.options.indexOf(g.current));
                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => setVariant(g.id, opt)}
                                  title={g.labels?.[opt] ?? opt}
                                  style={{
                                    position: "relative",
                                    height: 12,
                                    width: 12,
                                    padding: 0,
                                    borderRadius: "50%",
                                    border: `1px solid ${filled ? PINK : "#f0abfc"}`,
                                    background: filled ? PINK : "#fff",
                                    cursor: "pointer",
                                  }}
                                />
                              );
                            })}
                          </div>
                          <span
                            style={{
                              color: "#a21caf",
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            {g.labels?.[g.current] ?? g.current}
                          </span>
                          {g.current !== g.default && (
                            <button
                              type="button"
                              onClick={() => resetVariant(g.id)}
                              title="Вернуть вариант по умолчанию"
                              aria-label={`Вернуть вариант по умолчанию: ${g.title ?? g.id}`}
                              style={{
                                ...bare,
                                padding: "4px 6px",
                                color: PINK,
                              }}
                            >
                              ↺
                            </button>
                          )}
                        </div>
                      ) : (
                        <div
                          style={{ display: "flex", flexWrap: "wrap", gap: 4 }}
                        >
                          {g.options.map((opt) => {
                            const active = g.current === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => setVariant(g.id, opt)}
                                style={{
                                  ...pill(active),
                                  borderRadius: 6,
                                  padding: "4px 8px",
                                  cursor: "pointer",
                                }}
                              >
                                {g.labels?.[opt] ?? opt}
                                {opt === g.default && (
                                  <span
                                    style={{ marginLeft: 4, opacity: 0.5 }}
                                    title="По умолчанию"
                                    aria-label="по умолчанию"
                                  >
                                    •
                                  </span>
                                )}
                              </button>
                            );
                          })}
                          {g.current !== g.default && (
                            <button
                              type="button"
                              onClick={() => resetVariant(g.id)}
                              title="Вернуть вариант по умолчанию"
                              aria-label={`Вернуть вариант по умолчанию: ${g.title ?? g.id}`}
                              style={{
                                ...bare,
                                padding: "4px 6px",
                                color: PINK,
                              }}
                            >
                              ↺
                            </button>
                          )}
                        </div>
                      )}
                    </Fragment>
                  ),
                )}
              </Fragment>
            ))}
          </div>
        </VariantsScrollArea>
      )}
    </div>
  );
}
