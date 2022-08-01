import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer";

interface children {
  children: JSX.Element;
}

export const Layout = ({ children }: children) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
