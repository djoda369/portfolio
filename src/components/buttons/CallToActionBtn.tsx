import React from "react";
import classes from "./classes.module.scss";
import Link from "next/link";

const CallToActionBtn = () => {
  return (
    <Link href="/contact">
      <div className={classes.callToActBtn}>Get In Touch</div>
    </Link>
  );
};

export default CallToActionBtn;
