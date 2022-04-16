import React from "react";
import AboutMeHome from "../../components/About-me-home/AboutMeHome";
import Banner from "../../components/Banner/Banner";
import Heading from "../../components/Heading/Heading";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutMeHome />
      <Heading
        heading="Admit it. You've considered avoiding your taxes altogether."
        text="But you don't have to. I'm here to help make sure you get back every dime you're entitled to."
      />
    </>
  );
};

export default Home;
