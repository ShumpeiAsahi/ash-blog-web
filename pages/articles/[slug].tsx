import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { BLOG_TITLE } from "../../lib/env";
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
  const paths = files
    ? files.map(({ name }) => ({
        params: {
          slug: name.replace(/\.md$/, ""),
        },
      }))
    : [{ params: { slug: "not_found" } }];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (paths: PathParams) => {
  return { props: getArticle(paths.params.slug) };
};

const ArticlePage: React.FC<PageProps> = ({ content, data }) => {
  return (
    <>
      <div className="w-full md:w-8/12 mx-auto text-gray-800">
        <Head>
          <title>{`${data.title} | ${BLOG_TITLE} `}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <Header />
        <main>
          <div className="w-full md:w-8/12 mx-auto">
            <Post
              title={data.title}
              content={content}
              date={data.date}
              thumbnail={data.thumbnail}
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
export default ArticlePage;
