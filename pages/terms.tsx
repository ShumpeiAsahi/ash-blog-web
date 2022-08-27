import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>からをやぶる</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <div>
          <h1 className="text-lg font-bold my-16 text-center">
            東京在住エンジニアのブログ
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;