import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./Family.scss";
import StyleContext from "../../contexts/StyleContext";
import { familySection } from "../../portfolio";

export default function Family() {
  const { isDark } = useContext(StyleContext);

  if (!familySection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="family-main" id="family">
        <div className="family-text-div">
          <h1 className={isDark ? "dark-mode family-heading" : "family-heading"}>
            {familySection.title}
          </h1>

          <p className={isDark ? "dark-mode family-subtitle" : "family-subtitle"}>
            {familySection.subTitle}
          </p>

          <div className="family-paragraphs">
            {familySection.description.map((para, idx) => (
              <p
                key={idx}
                className={isDark ? "dark-mode family-paragraph" : "family-paragraph"}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="family-image-div">
          <img
            alt="Family"
            src={familySection.image}
            className="family-image"
          />
        </div>
      </div>
    </Fade>
  );
}