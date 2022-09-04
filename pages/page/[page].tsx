import Head from "next/head";
import { CardList } from "../../components/CardList";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import {
  BLOG_DESCRIPTION,
  BLOG_SUBTITLE,
  BLOG_TITLE,
  PAGE_SIZE,
} from "../../lib/env";
import { postsSlice, postsSortsByDate, range } from "../../lib/tools";
import { ArticleList } from "../../lib/type";
import { getArticles, getFiles } from "../api/Article";

type PageProps = {
  posts: ArticleList;
  pages: number[];
  current_page: number;
};

type PathParams = {
  params: {
    page: number;
  };
};

export const getStaticPaths = async () => {
  const files = getFiles();
  const count = files.length;

  const paths = range(1, Math.ceil(count / PAGE_SIZE)).map((i) => ({
    params: { page: i.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (paths: PathParams) => {
  const currentPage = paths.params.page;
  const posts = getArticles();

  const pages = range(1, Math.ceil(posts.length / PAGE_SIZE));

  const sortedPosts = postsSortsByDate(posts);

  const slicedPosts = postsSlice(sortedPosts, PAGE_SIZE, currentPage);

  return { props: { posts: slicedPosts, pages, current_page: currentPage } };
};

const Page: React.FC<PageProps> = ({ posts, pages, current_page }) => {
  return (
    <div className="w-full md:w-8/12 mx-auto text-gray-800">
      <Head>
        <title>{BLOG_TITLE}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <div className="w-full md:w-8/12 mx-auto">
          <div>
            <h1 className="text-xl font-bold mt-16 mb-4 text-center">
              {BLOG_SUBTITLE}
            </h1>
            <p className="text-slate-500 mb-16 text-center">
              {BLOG_DESCRIPTION}
            </p>
          </div>
          <p className="text-2xl font-bold mt-20 mb-12 mx-2">{`Page ${current_page}`}</p>
          <CardList posts={posts} />
          <Pagination pages={pages} current_page={current_page} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
