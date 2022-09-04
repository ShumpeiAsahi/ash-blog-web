import { ArticleList } from "../lib/type";
import { Card } from "./Card";

type Props = {
  posts: ArticleList;
};

export const CardList = (props: Props) => {
  return (
    <>
      {props.posts.map((post) => {
        return (
          <div key={post.slug} className="mb-16">
            <Card
              slug={post.slug}
              title={post.data.title}
              date={post.data.date}
              description={post.data.description}
              thumbnail={post.data.thumbnail}
            />
          </div>
        );
      })}
    </>
  );
};
