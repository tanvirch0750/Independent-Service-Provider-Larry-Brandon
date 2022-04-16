import React from "react";
import AboutMeHome from "../../components/About-me-home/AboutMeHome";
import Banner from "../../components/Banner/Banner";
import Heading from "../../components/Heading/Heading";
import Services from "../../components/Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutMeHome />
      <div className="home-services">
        <Heading
          heading="Admit it. You've considered avoiding your taxes altogether."
          text="But you don't have to. I'm here to help make sure you get back every dime you're entitled to."
        />
        <Services />
      </div>
    </>
  );
};

export default Home;
