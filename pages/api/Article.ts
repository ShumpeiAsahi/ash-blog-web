import fs, { Dirent } from "fs";
import matter from "gray-matter";
import { ABOUT_PATH, CONTENT_REPO } from "../../lib/env";
import { Article, ArticleList } from "../../lib/type";

export const getArticles = (): ArticleList => {
  const files = getFiles();
  return ([] = files
    ? files
        .filter((file) => file.isFile())
        .map(({ name }) => {
          const slug = name.replace(/\.md$/, "");
          const fileContent = fs.readFileSync(
            `${CONTENT_REPO}/${name}`,
            "utf-8"
          );
          const { data } = matter(fileContent);
          return { slug, data };
        })
    : []);
};

export const getArticle = (slug: string): Article => {
  const file = fs.readFileSync(`${CONTENT_REPO}/${slug}.md`, "utf-8");
  const { data, content } = matter(file);
  return {
    data: data,
    content: content,
  };
};

export const getProfile = (): Article => {
  const file = fs.readFileSync(`${ABOUT_PATH}/profile.md`, "utf-8");
  const { data, content } = matter(file);
  return {
    data: data,
    content: content,
  };
};

export const getFiles = (): Dirent[] | undefined => {
  try {
    return fs
      .readdirSync(`${CONTENT_REPO}`, { withFileTypes: true })
      .filter((file) => file.name != ".git");
  } catch {
    return undefined;
  }
};
