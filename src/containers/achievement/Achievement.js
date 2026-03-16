import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>

          <div className="achievement-layout">

  <div className="achievement-feature">
    <AchievementCard
      isDark={isDark}
      cardInfo={{
        title: achievementSection.achievementsCards[0].title,
        description: achievementSection.achievementsCards[0].subtitle,
        image: achievementSection.achievementsCards[0].image,
        imageAlt: achievementSection.achievementsCards[0].imageAlt,
        footer: achievementSection.achievementsCards[0].footerLink
      }}
    />
  </div>

  <div className="achievement-cert-list">
    {achievementSection.certificates && achievementSection.certificates.length > 0 ? (
      achievementSection.certificates.map((cert, i) => (
    <a
  key={i}
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  className="cert-item"
>
  <div className="cert-text">
    <div className="cert-name">{cert.name}</div>
    <div className="cert-org">{cert.org}</div>
  </div>

  <span className="cert-arrow">-→</span>
</a>
      ))
    ) : (
      <p>No certificates found</p>
    )}
  </div>


          </div>
        </div>
      </div>
    </Fade>
  );
}
