import ReactMarkdown from "react-markdown";

type Props = {
  title: string;
  content: string;
};
export const Post = (props: Props) => {
  return (
    <>
      <h1 className="text-xl font-bold">{props.title}</h1>
      <div>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
    </>
  );
};
