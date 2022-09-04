import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { getArticle, getFiles } from "../api/Article";

type PageProps = {
  content: string;
  data: { [key: string]: string };
};

type PathParams = {
  params: {
    slug: string;
  };
};

export const getStaticPaths = async () => {
  const files = getFiles();
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (paths: PathParams) => {
  const post = getArticle(paths.params.slug);
  return { props: post };
};

const ArticlePage: React.FC<PageProps> = ({ content, data }) => {
  return (
    <>
      <Header />
      <Post title={data.title} content={content} thumbnail={data.thumbnail} />
      <Footer />
    </>
  );
};
export default ArticlePage;
