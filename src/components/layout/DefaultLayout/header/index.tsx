import React from "react";
import classes from "./classes.module.scss";
import NavBar from "../navbar/NavBar";
import { AiOutlineMessage } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <header className={classes.header}>
      Logo
      <NavBar />
      <Link href="/contact">
        <div className={classes.btn_container}>
          <AiOutlineMessage />
        </div>
      </Link>
    </header>
  );
};

export default Header;
