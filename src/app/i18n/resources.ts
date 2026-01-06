export async function loadResources(): Promise<
  Record<string, Record<string, any>>
> {
  const langs = ["en", "ru", "lv"];
  const namespaces = [
    "start",
    "membership",
    "app",
    "contacts",
    "modal",
    "workspaces",
  ];
  const resources: Record<string, Record<string, any>> = {};

  for (const lng of langs) {
    resources[lng] = {};

    for (const ns of namespaces) {
      try {
        const res = await fetch(`/locales/${lng}/${ns}.json`);
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const json = await res.json();
        resources[lng][ns] = json;
      } catch (e) {
        console.error(`Ошибка загрузки /locales/${lng}/${ns}.json:`, e);
        resources[lng][ns] = {}; // чтобы не падало
      }
    }
  }

  return resources;
}
