"use client";

import React, { FC } from "react";
import classes from "./classes.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarProps {
  showContact?: boolean;
}

const NavBar: FC<NavBarProps> = ({ showContact }) => {
  const pathname = usePathname();

  return (
    <nav className={classes.nav}>
      <ul>
        <Link href="/">
          <li className={pathname === "/" ? classes.primary : classes.inactive}>
            Home
          </li>
        </Link>
        <Link href="/projects">
          <li
            className={
              pathname === "/projects" ? classes.primary : classes.inactive
            }
          >
            Projects
          </li>
        </Link>
        <Link href="/about">
          <li
            className={
              pathname === "/about" ? classes.primary : classes.inactive
            }
          >
            About
          </li>
        </Link>
        {showContact && (
          <Link href="/contact">
            <li
              className={
                pathname === "/contact" ? classes.primary : classes.inactive
              }
            >
              Contact
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
