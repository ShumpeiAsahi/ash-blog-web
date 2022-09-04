/* eslint-disable @next/next/no-img-element */
import ReactMarkdown from "react-markdown";
import styles from "../styles/Markdown.module.css";

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
      <img
        src={props.thumbnail ? `${props.thumbnail}` : "/japanese-style.jpg"}
        alt="thumbnail"
        className="w-full"
      />
      <div className={styles.post}>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
    </>
  );
};
