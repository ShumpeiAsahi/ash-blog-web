import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  PreviewData,
} from "next";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { ParsedUrlQuery } from "querystring";

type PageProps = {
  content: string;
  data: { [key: string]: any };
};

type PathParams = {
  slug: string;
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

export const getStaticProps = async ({ slug }: PathParams) => {
  const file = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data, content } = matter(file);
  const post = {
    data: data,
    content: content,
  };
  return { props: post };
};

const ArticlePage: React.FC<PageProps> = ({ content, data }: PageProps) => {
  return (
    <>
      <Header />
      <h1>{data.title}</h1>｝<ReactMarkdown>{content}</ReactMarkdown>
      <Footer />
    </>
  );
};
export default ArticlePage;
