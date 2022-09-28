import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

interface Button {
  link: string;
}
export const Button = ({ link }: Button) => {
  return (
    <Link href={`/${link}`}>
      <a className="shadow bg-claretDark hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-fit flex justify-center items-center">
        <span className="pl-1">Czytaj więcej</span>
        <BsArrowRightShort className="text-2xl" />
      </a>
    </Link>
  );
};
