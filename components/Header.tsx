import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-white p-3 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Image
              className="rounded-full"
              src="/logo.svg"
              width={40}
              height={40}
              alt="logo"
            ></Image>
            <span className="text-xl text-stone-900 font-bold uppercase tracking-wide ml-4">
              人生は神ゲー
            </span>
          </a>
        </Link>
        <button
          className="inline-flex p-3 rounded md:hidden text-stone-900 ml-auto outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className={`w-full hidden md:inline-flex md:flex-grow md:w-auto`}>
          <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto">
            <Link href="/about">
              <a className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-stone-900 font-bold items-center justify-center hover:bg-stone-600 hover:text-stone-900">
                About
              </a>
            </Link>
            <Link href="/terms">
              <a className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-stone-900 font-bold items-center justify-center hover:bg-stone-600 hover:text-stone-900">
                Terms
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
