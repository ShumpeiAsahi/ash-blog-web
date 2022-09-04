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
      <a className="mx-4 ">
        <div>
          <p>{props.date}</p>
          <div>
            <span className="font-bold text-lg">{props.title}</span>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={
                  props.thumbnail ? `${props.thumbnail}` : "/japanese-style.jpg"
                }
                layout="fill"
                alt="thumbnail"
                objectFit="contain"
              ></Image>
            </div>
          </div>
          <p className="text-slate-500">{props.description}</p>
        </div>
      </a>
    </Link>
  );
};
