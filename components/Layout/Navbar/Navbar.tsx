import { useRef, useState } from "react";
import { useOnClickOutside } from "../../../hooks/useClickOutside";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { menuItems } from "./menuItems";
import { AnimatePresence, motion } from "framer-motion";
import { Theme } from "./Theme";
import { Logo } from "./Logo";
type Ref = HTMLElement | null;

export const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const refNavbar = useRef<Ref>(null);

  useOnClickOutside(refNavbar, () => setModalOpen(false));

  function openCloseHamburger() {
    setModalOpen((prev) => !prev);
  }

  return (
    <nav
      ref={refNavbar}
      className={`z-50 sticky top-0 shadow-bottom dark:shadow-bottom-dark`}
    >
      <div className="flex items-center justify-between py-1 container mx-auto">
        <Link href="/" passHref>
          <a
            className="flex items-center"
            onClick={() => isModalOpen && setModalOpen(false)}
          >
            <div className="w-8 h-16 relative">
              <Logo />
            </div>
            <span className="ml-3 font-bold lg:text-xl font-lato">
              ANDRZEJ DROMERT
            </span>
          </a>
        </Link>
        <div className="flex items-center lg:hidden">
          <Theme />
          <span className="border-r border-grayLighter w-1 h-4 ml-2 mr-7" />
          <button
            className="cursor-pointer text-xl my-1 outline-none focus:outline-none mr-3"
            type="button"
            aria-label="menu"
            onClick={openCloseHamburger}
          >
            {isModalOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        <ul className="hidden lg:flex items-center">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link href={item.link}>
                <a className="mx-2 py-2 text-base text-xl hover:opacity-75 text-center font-medium tracking-tighter">
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
          <Theme />
        </ul>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="lg:hidden overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            key="box"
          >
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.title} className="flex justify-center">
                  <Link href={item.link}>
                    <a
                      onClick={openCloseHamburger}
                      className="mx-2 py-2 text-base text-center font-medium tracking-tighter"
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
