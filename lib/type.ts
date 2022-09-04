export type ArticleList = {
  slug: string;
  data: {
    [key: string]: string;
  };
}[];

export type Article = {
  content: string;
  data: { [key: string]: string };
};
