import React from "react";
import Header from "./header";
import classes from "./classes.module.scss";
import Footer from "./footer";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className={classes.container}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
