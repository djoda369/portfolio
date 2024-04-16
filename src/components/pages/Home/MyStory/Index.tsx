import React from "react";
import classes from "./styles.module.scss";

const MyStory = () => {
  return (
    <section className={classes.section}>
      <h2 className={classes.h3}>
        My Story<span className={classes.primary}>.</span>
      </h2>
      <div className={classes.section__text}>
        <p className={classes.text}>
          My journey as a fullstack developer started back at the end of 2022
          when I got my first <span className={classes.primary}>freelance</span>{" "}
          project.
        </p>
        <p className={classes.text}>
          After being on my own for a while, I decided to try and find a full
          time job.I started as a frontend developer at a company called{" "}
          <span className={classes.primary}>Zerox</span> located in Serbia.
        </p>
        <p className={classes.text}>
          I learnt a lot In my first corporate job inlucding backend
          technologies like{" "}
          <span className={classes.primary}>NodeJs/Express</span>!
        </p>
        <p className={classes.text}>
          With my new <span className={classes.primary}>experience</span> I
          would like to return to the freelance path.
        </p>
      </div>
    </section>
  );
};

export default MyStory;
