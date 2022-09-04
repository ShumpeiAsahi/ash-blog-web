import { Logo } from "./Logo";

type Props = {
  url?: string;
};
export const ProfileLink = (props: Props) => {
  let sns;
  if (props.url?.startsWith("https://github.com")) {
    sns = "github";
  } else if (props.url?.startsWith("https://twitter.com")) {
    sns = "twitter";
  }

  return (
    <>
      {props.url ? (
        <a href={props.url} target="_blank" rel="noreferrer">
          <Logo logo={`/${sns}.svg`} />
        </a>
      ) : (
        <></>
      )}
    </>
  );
};
