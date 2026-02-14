import fs from "fs";
import path from "path";

const docsDirectory = path.join(process.cwd(), "_docs");

export function getAllDocs() {
  const versions = fs.readdirSync(docsDirectory);

  const documents: { id: string; content: string }[] = [];

  versions.forEach((version) => {
    const locales = fs.readdirSync(path.join(docsDirectory, version));

    locales.forEach((locale) => {
      const files = fs.readdirSync(
        path.join(docsDirectory, version, locale)
      );

      files.forEach((file) => {
        const content = fs.readFileSync(
          path.join(docsDirectory, version, locale, file),
          "utf8"
        );

        documents.push({
          id: `/${locale}/docs/${version}/${file.replace(".md", "")}`,
          content
        });
      });
    });
  });

  return documents;
}
