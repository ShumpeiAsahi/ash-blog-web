import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Card.module.css";

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
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={
                props.thumbnail ? `${props.thumbnail}` : "/japanese-style.jpg"
              }
              layout="fill"
              alt="thumbnail"
              objectFit="cover"
            ></Image>
          </div>
          <p className="text-slate-500 mt-4 mx-2">{props.description}</p>
        </div>
      </a>
    </Link>
  );
};
