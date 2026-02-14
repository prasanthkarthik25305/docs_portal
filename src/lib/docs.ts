import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const docsDirectory = path.join(process.cwd(), "_docs");

export async function getDocContent(
  version: string,
  locale: string,
  slug: string
) {
  const fullPath = path.join(
    docsDirectory,
    version,
    locale,
    `${slug}.md`
  );

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);

  return processedContent.toString();
}
