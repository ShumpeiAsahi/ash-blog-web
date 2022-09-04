/* eslint-disable @next/next/no-img-element */

type Props = {
  logo: string;
  className?: string;
};
export const Logo = (props: Props) => {
  return (
    <>
      <img
        src={props.logo}
        alt="logo"
        className={`${props.className} rounded-full h-10 w-10`}
      />
    </>
  );
};
