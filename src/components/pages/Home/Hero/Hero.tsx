import React from "react";
import classes from "./classes.module.scss";
import CallToActionBtn from "@/components/buttons/CallToActionBtn";
import BrowseProjectsBtn from "@/components/buttons/BrowseProjectsBtn";
import Image from "next/image";

const HeroHome = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero__text}>
        <div className={classes.hero__text_intro}>
          <p className={classes.h6}>Hey, I`m Djordje(George)</p>
          <h1 className={classes.h2}>
            <span className={classes.primary}>Full</span>stack Developer
          </h1>
        </div>
        <p className={classes.text}>
          I`m a fullstack developer based in Serbia, I`ll help you or your team
          build efficient web application`s with pixel perfect frontend and
          scalable backend!
        </p>
        <div className={classes.hero__text_btns}>
          <CallToActionBtn />
          <BrowseProjectsBtn />
        </div>
      </div>
      <div className={classes.hero__image}>
        <div className={classes.img_container}>
          <Image
            src="https://media.licdn.com/dms/image/D4D03AQG_S_Qkfc0t1Q/profile-displayphoto-shrink_800_800/0/1693883447981?e=1718841600&v=beta&t=24Z-UdZnczOKAx8K8sselSlok7syZurkDPNHkgCg7ig"
            alt="Profile Image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
