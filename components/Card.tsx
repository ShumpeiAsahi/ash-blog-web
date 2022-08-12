import Link from "next/link";
import Image from "next/image";

type CardProps = {
  title: String;
  date: String;
  description: String | null;
};
export const Card = (props: CardProps) => {
  return (
    <Link href="/">
      <a className="mx-4">
        <div>
          <p>{props.date}</p>
          <div>
            <span className="font-bold text-lg">
            {props.title}
            </span>
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
