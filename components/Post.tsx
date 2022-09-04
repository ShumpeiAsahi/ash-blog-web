import ReactMarkdown from "react-markdown";
import styles from "../styles/Post.module.css";
import Image from "next/image";

type Props = {
  title: string;
  content: string;
  date: string;
  thumbnail?: string | null;
};
export const Post = (props: Props) => {
  return (
    <>
      <p className="mt-8">{props.date}</p>
      <h1 className="text-3xl font-bold my-4">{props.title}</h1>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={props.thumbnail ? `${props.thumbnail}` : "/japanese-style.jpg"}
          layout="fill"
          alt="thumbnail"
          objectFit="contain"
        ></Image>
      </div>
      <div className={styles.post}>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
    </>
  );
};
