import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Logo } from "./Logo";

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
            <Logo logo="/logo.svg" />
            <span className="text-xl text-stone-900 font-bold uppercase tracking-wide ml-4">
              人生は神ゲー
            </span>
          </a>
        </Link>
        <button
          className="inline-flex p-3 rounded md:hidden text-stone-900 ml-auto outline-none z-20"
          onClick={handleClick}
        >
          <Image
            className="rounded-full"
            src={`${active ? "/924_x_h.svg" : "/bars_24.svg"}`}
            width={24}
            height={24}
            alt="logo"
          ></Image>
        </button>
        <div className={`w-full hidden md:inline-flex md:flex-grow md:w-auto`}>
          <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto">
            <Link href="/profile">
              <a className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-stone-900 font-bold items-center justify-center">
                Profile
              </a>
            </Link>
            <Link href="/terms">
              <a className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-stone-900 font-bold items-center justify-center">
                Terms
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <div
        className={`${
          active ? "right-0" : "-right-full"
        } fixed transition-all w-full h-screen top-0 z-10 bg-zinc-100 opacity-80`}
      >
        <ul className="mt-32">
          <li className="text-center my-4">
            <Link href="/about">
              <a className="w-full px-3 py-2 rounded text-2xl text-stone-900 font-bold">
                Profile
              </a>
            </Link>
          </li>
          <li className="text-center my-4">
            <Link href="/terms">
              <a className="w-full px-3 py-2 rounded text-2xl text-stone-900 font-bold">
                Terms
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
