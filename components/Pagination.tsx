import Link from "next/link";

type Props = {
  pages: number[];
  current_page: number;
};
export const Pagination = (props: Props) => {
  return (
    <div className="text-center my-8">
      {props.pages.map((page) => (
        <Link href={`${page == 1 ? "/" : `/page/${page}`}`} key={page}>
          <a
            className={`${
              props.current_page == page && "font-bold"
            } px-2 text-xl`}
          >
            {page}
          </a>
        </Link>
      ))}
    </div>
  );
};
