import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

type PageProps = {
  content: string;
  data: { [key: string]: any };
};

type PathParams = {
  params: {
    slug: string;
  };
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
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

export const getStaticProps = async (paths: PathParams) => {
  console.log("paths:", paths);
  console.log("slug:", paths.params.slug);
  const file = fs.readFileSync(`posts/${paths.params.slug}.md`, "utf-8");
  const { data, content } = matter(file);
  const post = {
    data: data,
    content: content,
  };
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
