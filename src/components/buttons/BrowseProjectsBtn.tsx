import React from "react";
import classes from "./classes.module.scss";
import Link from "next/link";

const BrowseProjectsBtn = () => {
  return (
    <Link href="/projects">
      <div className={classes.browseProjectsBtn}>Browse Projects</div>
    </Link>
  );
};

export default BrowseProjectsBtn;
