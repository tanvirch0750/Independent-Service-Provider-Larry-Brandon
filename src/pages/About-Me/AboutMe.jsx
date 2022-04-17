import React from "react";
import PageHeadImg from "../../components/PageHeadingImg/PageHeadImg";
import aboutMeImg from "../../Images/Self/tanvir200kb.jpg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <PageHeadImg text="About Me" />
      <section className="about-me">
        <div className="container">
          <div className="about-me-container">
            <div className="about-me-img">
              <img src={aboutMeImg} alt="Tanvir" />
            </div>
            <div className="about-me-text">
              <p>
                Hi my name is Mohammad Tanvir Chowdhury. On the way to becoming
                a Junior Frontend Web-developer. Thanks to Programming Hero
                Bootcamp, without them I cannot reach this far. My goal is to
                become a full stack web developer and get job in a big IT firm.
                For that I am working hard every day and continue to working
                hard until I reach my goal. As my great instructor Jhankar
                Mahbub bhaia says, "NEVER GIVE UP".
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
