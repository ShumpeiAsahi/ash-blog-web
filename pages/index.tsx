import Head from "next/head";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Pagination } from "../components/Pagination";
import { BLOG_SUBTITLE, BLOG_TITLE, PAGE_SIZE } from "../lib/env";
import { postsSlice, postsSortsByDate, range } from "../lib/tools";
import { getArticles } from "./api/Article";

type PageProps = {
  posts: {
    slug: string;
    data: {
      [key: string]: string;
    };
  }[];
  pages: number[];
  current_page: number;
};

export const getStaticProps = () => {
  const currentPage = 1;
  const posts = getArticles();

  const pages = range(1, Math.ceil(posts.length / PAGE_SIZE));

  const sortedPosts = postsSortsByDate(posts);

  const slicedPosts = postsSlice(sortedPosts, PAGE_SIZE, currentPage);

  return { props: { posts: slicedPosts, pages, current_page: currentPage } };
};

const Home: React.FC<PageProps> = ({ posts, pages, current_page }) => {
  return (
    <div className="w-full md:w-8/12 mx-auto text-gray-800">
      <Head>
        <title>{BLOG_TITLE}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />

      <main>
        <div className="w-full md:w-8/12 mx-auto">
          <div>
            <h1 className="text-xl font-bold mt-16 mb-4 text-center">
              {BLOG_SUBTITLE}
            </h1>
            <p className="text-slate-500 mb-16 text-center">
              技術について書いています。
            </p>
          </div>
          {posts.map((post) => {
            return (
              <Card
                key={post.slug}
                slug={post.slug}
                title={post.data.title}
                date={post.data.date}
                description={post.data.description}
                thumbnail={post.data.thumbnail}
              />
            );
          })}
          <Pagination pages={pages} current_page={current_page} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
