import ReactMarkdown from "react-markdown";
import styles from "../styles/Post.module.css";
import Image from "next/image";

type Props = {
  title: string;
  content: string;
  thumbnail?: string | null;
};
export const Post = (props: Props) => {
  return (
    <>
      <h1 className="text-2xl font-bold">{props.title}</h1>
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
