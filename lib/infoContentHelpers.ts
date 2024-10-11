import path from "path";
import fs from "fs";
import matter from "gray-matter";

export const getListOfInfoPages = () => {
  const folder = path.join(process.cwd(), "content", "info");
  const files = fs.readdirSync(folder);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((slug) => slug.replace(".md", ""));
};

export const getPostContent = (slug: string) => {
  const file = path.join(process.cwd(), "content", "info", slug) + ".md";
  const content = fs.readFileSync(file, "utf8");
  return matter(content);
};
