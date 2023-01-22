/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BLOG_TITLE, GITHUB_URL, TWITTER_URL } from "../lib/env";
import { ProfileImage } from "../components/ProfileImage";
import { ProfileLink } from "../components/ProfileLink";

const Profile: React.FC = () => {
  return (
    <div className="w-full md:w-8/12 mx-auto text-gray-800">
      <Head>
        <title>{`Profile | ${BLOG_TITLE}`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />

      <main>
        <div className="w-full md:w-8/12 mx-auto">
          <h1 className="text-3xl font-bold mt-16 mb-4 mx-4">Profile</h1>
          <div className="w-1/3 my-12 mx-auto">
            <ProfileImage />
          </div>
          <p className="text-center text-xl mt-8 mb-4">あさひ</p>
          <div className="flex justify-center">
            <div className="mx-3">
              <ProfileLink url={TWITTER_URL}></ProfileLink>
            </div>
            <div className="mx-3">
              <ProfileLink url={GITHUB_URL}></ProfileLink>
            </div>
          </div>
          <div className="mt-16 mb-4 mx-4">
            <p>1997年生まれのエンジニア。</p>
            <br />
            <p>【経歴】</p>
            <p>
              2021年4月 新卒入社したSIerでエンジニアとしてのキャリアをスタート。
            </p>
            <p>2022年5月 ソフトウェア企業で業務委託。</p>
            <br />
            <p>【保有スキル】</p>
            <p>言語</p>
            <p>TypeScript/Next/Kotlin/Vue/Ruby on Rails/PHP/Clojure</p>
            <p>OS・インフラ</p>
            <p>Ubuntu/Docker/Kubernetes/AWS/GCP</p>
            <br />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
