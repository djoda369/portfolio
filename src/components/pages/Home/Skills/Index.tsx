import React from "react";
import classes from "./classes.module.scss";
import SkillRow from "./SkillRow";

const Skills = () => {
  const frontEndSkills = {
    title: "Frontend",
    skills: ["Javascript", "React", "NextJs", "SCSS"],
  };
  const backEndSkills = {
    title: "Backend",
    skills: ["NodeJs", "Express", "MongoDb", "Moongose"],
  };
  const softSkills = {
    title: "Soft Skills",
    skills: [
      "Collaboration",
      "Leadership",
      "Teamwork",
      "Effective Communication",
    ],
  };
  const otherSkills = {
    title: "Other",
    skills: [
      "Responsive Design",
      "Material UI",
      "Tanstack query/table",
      "State Managment",
    ],
  };

  const skillsArr = [frontEndSkills, backEndSkills, softSkills, otherSkills];

  return (
    <section className={classes.section}>
      <h2 className={classes.h3}>
        Skills<span className={classes.primary}>.</span>
      </h2>
      <div className={classes.section__skills}>
        <ul>
          {skillsArr.map((skillGroup) => {
            return (
              <li key={skillGroup.title}>
                <SkillRow title={skillGroup.title} skills={skillGroup.skills} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
