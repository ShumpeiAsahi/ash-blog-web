import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BLOG_TITLE, GITHUB_URL, TWITTER_URL } from "../lib/env";
import { ProfileImage } from "../components/ProfileImage";
import { ProfileLink } from "../components/ProfileLink";

const Terms: React.FC = () => {
  return (
    <div className="w-full md:w-8/12 mx-auto text-gray-800">
      <Head>
        <title>{`Terms | ${BLOG_TITLE}`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />

      <main>
        <div className="w-full md:w-8/12 mx-auto">
          <h1 className="text-3xl font-bold mt-16 mb-4 mx-4">Terms</h1>
          <div className="w-1/3 my-12 mx-auto">
            <ProfileImage />
          </div>
          <p className="text-center text-xl mt-8 mb-4">ash</p>
          <div className="flex justify-center">
            <div className="mx-3">
              <ProfileLink url={TWITTER_URL}></ProfileLink>
            </div>
            <div className="mx-3">
              <ProfileLink url={GITHUB_URL}></ProfileLink>
            </div>
          </div>
          <div className="mt-16 mb-4 mx-4">
            <h2 className="font-bold text-lg">プライバシーポリシー</h2>
            <br />
            <h3 className="font-bold">個人情報の利用目的について</h3>
            <p>
              当ブログでは、お問い合わせやコメント投稿の際に氏名・メールアドレス等の個人情報を入力いただく場合があります。
            </p>
            <p>
              取得した個人情報は、必要な連絡のみに利用させていただくもので、これらの目的以外では利用いたしません。
            </p>
            <br />
            <h3 className="font-bold">個人情報の利用目的について</h3>
            <p>
              取得した個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
            </p>
            <p>・本人の同意が得られた場合</p>
            <p>・法令により開示が求められた場合</p>
            <br />
            <br />
            <h2 className="font-bold text-lg">免責事項</h2>
            <br />
            <h3 className="font-bold">個人情報の利用目的について</h3>
            <p>
              当ブログは、掲載内容によって生じた損害に対する一切の責任を負いません。
            </p>
            <p>
              各コンテンツでは、できる限り正確な情報提供を心がけておりますが、正確性や安全性を保証するものではありません。
            </p>
            <p>
              また、リンク先の他サイトで提供される情報・サービスについても、責任を負いかねますのでご了承ください。
            </p>
            <br />
            <br />
            <h2 className="font-bold text-lg">著作権</h2>
            <p>
              当ブログに掲載されている文章・画像の著作権は、運営者に帰属しています。
            </p>
            <p>
              法的に認められている引用の範囲を超えて、無断で転載することを禁止します。
            </p>
            <br />
            <br />
            <h2 className="font-bold text-lg">プライバシーポリシーの変更</h2>
            <p>
              当ブログは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直して改善に努めます。
            </p>
            <p>
              修正された最新のプライバシーポリシーは常に本ページにて開示されます。
            </p>
            <br />
            <br />
            <p>制定日:2022年9月3日</p>
            <br />
            <p>あさひ</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
