import React from "react";
import {
  PiInstagramLogoLight,
  PiLinkedinLogo,
  PiGithubLogo,
} from "react-icons/pi";
import classes from "./classes.module.scss";

const SocialLinks = () => {
  return (
    <ul className={classes.socialLinks}>
      <li>
        <a href="https://www.linkedin.com/in/djordje369/" target="_blank">
          <PiInstagramLogoLight />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/djordje369/" target="_blank">
          <PiLinkedinLogo />
        </a>
      </li>
      <li>
        <a href="https://github.com/djoda369" target="_blank">
          <PiGithubLogo />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
