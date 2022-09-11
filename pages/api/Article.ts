import fs from "fs";
import matter from "gray-matter";
import { CONTENT_REPO } from "../../lib/env";
import { Article, ArticleList } from "../../lib/type";

export const getArticles = (): ArticleList => {
  const files = getFiles();
  const posts = ([] = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(`${CONTENT_REPO}/${fileName}`, "utf-8");
    const { data } = matter(fileContent);
    return { slug, data };
  }));
  return posts;
};

export const getArticle = (slug: string): Article => {
  const file = fs.readFileSync(`${CONTENT_REPO}/${slug}.md`, "utf-8");
  const { data, content } = matter(file);
  const post = {
    data: data,
    content: content,
  };
  return post;
};

export const getFiles = (): string[] => fs.readdirSync("posts");
