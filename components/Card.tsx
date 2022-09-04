/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type CardProps = {
  slug: string;
  title: string;
  date: string;
  description: string | null;
  thumbnail?: string | null;
};
export const Card = (props: CardProps) => {
  return (
    <Link href={`/articles/${props.slug}`}>
      <a>
        <div>
          <p className="mx-2 mb-2">{props.date}</p>
          <span className="font-bold text-2xl mx-2">{props.title}</span>
          <div className="mt-2">
            <img
              src={
                props.thumbnail ? `${props.thumbnail}` : "/japanese-style.jpg"
              }
              alt="thumbnail"
              className="w-full object-cover h-40"
            />
          </div>
          <p className="text-slate-500 mt-4 mx-2">{props.description}</p>
        </div>
      </a>
    </Link>
  );
};
