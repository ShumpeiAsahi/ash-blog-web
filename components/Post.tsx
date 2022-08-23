import ReactMarkdown from "react-markdown";

type Props = {
  title: string;
  content: string;
};
export const Post = (props: Props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <ReactMarkdown>{props.content}</ReactMarkdown>
    </>
  );
};
