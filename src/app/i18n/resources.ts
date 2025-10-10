import fs from "fs";
import path from "path";

export function loadResources() {
  const localesDir = path.resolve(process.cwd(), "src/locales");
  const resources: Record<string, Record<string, any>> = {};

  // Проходим по всем языковым папкам
  for (const lng of fs.readdirSync(localesDir)) {
    const langDir = path.join(localesDir, lng);
    if (!fs.lstatSync(langDir).isDirectory()) continue;

    resources[lng] = {};

    // Загружаем все JSON файлы в этой папке
    for (const file of fs.readdirSync(langDir)) {
      if (!file.endsWith(".json")) continue;

      const ns = path.basename(file, ".json");
      const filePath = path.join(langDir, file);
      let content;
      try {
        content = JSON.parse(fs.readFileSync(filePath, "utf8"));
      } catch (e) {
        console.error(`Ошибка при чтении ${filePath}:`, e);
        continue;
      }

      resources[lng][ns] = content;
    }
  }

  return resources;
}
