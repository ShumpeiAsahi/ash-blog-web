import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { BLOG_TITLE } from "../../lib/env";

const ArticlePage: React.FC = () => {
  return (
    <>
      <div className="w-full md:w-8/12 mx-auto text-gray-800">
        <Head>
          <title>{`404 Not Found | ${BLOG_TITLE} `}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <Header />
        <main>
          <div className="w-full md:w-8/12 mx-auto">
            <h1>Not found</h1>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
export default ArticlePage;
