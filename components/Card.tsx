import Link from "next/link";
import Image from "next/image";

type CardProps = {
  slug: string;
  title: string;
  date: string;
  description: string | null;
};
export const Card = (props: CardProps) => {
  return (
    <Link href={`/articles/${props.slug}`}>
      <a className="mx-4">
        <div>
          <p>{props.date}</p>
          <div>
            <span className="font-bold text-lg">{props.title}</span>
            <Image
              src="/japanese-style.jpg"
              width="80"
              height="80"
              alt="logo"
            ></Image>
          </div>
          <div>
            <p>Kotlin</p>
            <p>Web</p>
          </div>
          <p>{props.description}</p>
        </div>
      </a>
    </Link>
  );
};
