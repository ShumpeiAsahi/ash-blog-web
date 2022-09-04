import fs from "fs";
import matter from "gray-matter";
import { Article, ArticleList } from "../../lib/type";

export const getArticles = (): ArticleList => {
  const files = fs.readdirSync("posts");
  const posts = ([] = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data } = matter(fileContent);
    return { slug, data };
  }));
  return posts;
};

export const getArticle = (slug: string): Article => {
  const file = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data, content } = matter(file);
  const post = {
    data: data,
    content: content,
  };
  return post;
};

export const getFiles = (): string[] => fs.readdirSync("posts");
