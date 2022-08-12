import { GetStaticPaths, GetStaticProps } from "next";

type PageProps = {
  title: string;
  author: string;
};

type PathParams = {
  id: string;
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  return {
    paths: [
      { params: { id: "001" } },
      { params: { id: "002" } },
      { params: { id: "003" } },
    ],
    fallback: false, // 上記以外のパスでアクセスした場合は 404 ページにする
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  // ファイル名が [id].tsx なので id パラメーターを取り出すことができる
  const { id } = context.params as PathParams;

  // 本来はここで getBook(id) のように API を呼び出してデータを取得する
  const props: PageProps = {
    title: `Title-${id}`,
    author: `Author-${id}`,
  };

  // ページコンポーネントに渡す PageProps オブジェクトを
  // props プロパティに設定したオブジェクトを返す
  return { props };
};

const ArticlePage: React.FC<PageProps> = ({ title, author }: PageProps) => {
  return (
    <>
      <ul>
        <li>タイトル: {title}</li>
        <li>著者: {author}</li>
      </ul>
    </>
  );
};
export default ArticlePage;
