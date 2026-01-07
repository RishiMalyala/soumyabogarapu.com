import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => (
            <li
              key={i}
              className="software-skill-inline"
              name={skill.skillName}
            >
              {/* IMAGE-BASED ICON (preferred) */}
              {skill.icon ? (
                <img
                  src={skill.icon}
                  alt={skill.skillName}
                  title={skill.skillName}
                  className="skill-image-icon"
                />
              ) : (
                /* FALLBACK: FontAwesome (if ever used) */
                <i className={skill.fontAwesomeClassname}></i>
              )}

              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
