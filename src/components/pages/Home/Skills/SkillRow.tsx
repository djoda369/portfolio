import React, { FC } from "react";
import classes from "./classes.module.scss";

interface SkillRowProps {
  title: string;
  skills: string[];
}

const SkillRow: FC<SkillRowProps> = ({ title, skills }) => {
  return (
    <div className={classes.skills}>
      <h2 className={classes.h5}>{title}</h2>
      <ul>
        {skills.map((skill, i) => {
          return (
            <li key={i} className={classes.text}>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillRow;
