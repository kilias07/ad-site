import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

interface Button {
  link: string;
}
export const Button = ({ link }: Button) => {
  return (
    <Link href={`/${link}`}>
      <a className="bg-claretDark px-2 py-1 rounded-2xl flex items-center text-white text-base w-fit">
        <span className="pl-1">Czytaj więcej</span>
        <BsArrowRightShort className="text-2xl" />
      </a>
    </Link>
  );
};
