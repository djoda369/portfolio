import React from "react";
import NavBar from "../navbar/NavBar";
import SocialLinks from "./SocialLinks";
import classes from "./classes.module.scss";
import CallToActionBtn from "@/components/buttons/CallToActionBtn";
import BrowseProjectsBtn from "@/components/buttons/BrowseProjectsBtn";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section>
        <NavBar showContact={true} />
        <SocialLinks />
      </section>
      <section>
        <div className={classes.contact_section}>
          <p className={classes.h6}>Interested in working together?</p>
          <div>
            <CallToActionBtn />
            <BrowseProjectsBtn />
          </div>
        </div>
        <p className={classes.h7}>©2023 All Rights Reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
