import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, useScroll } from "framer-motion";
import { menuItems } from "./menuItems";
import { useOnClickOutside } from "usehooks-ts";

type Ref = HTMLElement | null;

export const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const ref = useRef<Ref>(null);
  const { scrollY } = useScroll();

  useOnClickOutside(ref, () => setModalOpen(false));

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest);
    });
  }, []);

  function openCloseHamburger() {
    setModalOpen((prev) => !prev);
  }

  return (
    <nav ref={ref}>
      <div className="lg:flex items-center justify-between h-22 items-center container mx-auto ">
        <div className="flex flex-wrap justify-between items-center py-4">
          <div className="">
            <Link href="/" passHref>
              <a className="flex items-center">
                <motion.div className="lg:w-[82px] lg:h-[150px] w-[41px] h-[75px] relative">
                  <Image
                    src="/assets/logo/Logo.webp"
                    alt="Logo Andrzej Dromert"
                    layout="fill"
                    priority
                  />
                </motion.div>
                <span className="ml-5 lg:ml-8 font-black lg:text-3xl">
                  ANDRZEJ DROMERT
                </span>
              </a>
            </Link>
          </div>
          <button
            className="cursor-pointer text-3xl mx-3 my-1 block lg:hidden outline-none focus:outline-none"
            type="button"
            aria-label="menu"
            onClick={openCloseHamburger}
          >
            {isModalOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        <div
          className={`lg:flex items-center ${
            isModalOpen ? "block" : " hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:ml-auto">
            {menuItems.map((item) => (
              <li key={item.title} className="md:flex-none flex justify-center">
                <Link href={item.link}>
                  <a
                    onClick={openCloseHamburger}
                    className="mx-3 py-2 uppercase text-base hover:opacity-75 text-center font-bold tracking-wide"
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
