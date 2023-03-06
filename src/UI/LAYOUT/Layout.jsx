import React from "react";
import Hero from "../HEADER/Hero";
const Layout = ({ children }) => {
  return (
    <>
      <Hero />
      <main>{children}</main>
    </>
  );
};

export default Layout;
