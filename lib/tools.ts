import { ArticleList } from "./type";

export const PAGE_SIZE = 2;

export const range = (start: number, end: number) =>
  [...Array(end - start + 1)].map((_, i) => start + i);

export const postsSortsByDate = (posts: ArticleList): ArticleList =>
  posts.sort((postA, postB) =>
    new Date(postA.data.date) > new Date(postB.data.date) ? -1 : 1
  );

export const postsSlice = (
  posts: ArticleList,
  pageSize: number,
  currentPage: number
) => posts.slice(pageSize * (currentPage - 1), pageSize * currentPage);
