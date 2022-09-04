import Image from "next/image";

type Props = {
  logo: string;
  className?: string;
};
export const Logo = (props: Props) => {
  return (
    <>
      <Image
        className={`${props.className} rounded-full`}
        src={props.logo}
        width={40}
        height={40}
        alt="logo"
      ></Image>
    </>
  );
};
