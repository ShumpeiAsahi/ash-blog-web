import ReactMarkdown from "react-markdown";
import styles from '../styles/Post.module.css'

type Props = {
  title: string;
  content: string;
};
export const Post = (props: Props) => {
  return (
    <>
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <div className={styles.post}>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
    </>
  );
};
