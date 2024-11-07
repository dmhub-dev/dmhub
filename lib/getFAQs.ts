import path from "path";
import fs from "fs";
import matter from "gray-matter";

const getListOfInfoPages = () => {
  const folder = path.join(process.cwd(), "content", "faqs");
  const files = fs.readdirSync(folder);
  return files.filter((file) => file.endsWith(".md"));
};

const getFileContent = (filename: string) => {
  const file = path.join(process.cwd(), "content", "faqs", filename);
  const content = fs.readFileSync(file, "utf8");
  return matter(content);
};

export const getFAQsContent = (type = "consumer") => {
  const fileList = getListOfInfoPages();
  const faqData = fileList.map((i) => getFileContent(i));

  return faqData.map((i) => ({
    question: i.data.title,
    type: i.data.type,
    answer: i.content,
  }));
};
