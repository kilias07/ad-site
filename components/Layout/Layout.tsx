import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer";
import { AnimatePresence } from "framer-motion";

interface children {
  children: JSX.Element;
}

export const Layout = ({ children }: children) => {
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter={true}>{children}</AnimatePresence>
      <Footer />
    </>
  );
};
