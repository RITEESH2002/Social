import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Use from "./Use/Use";
import Contact from "./Contact/Contact";
import Find from "./Find/Find";
import { Nav } from "../components";

const Starting = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Use />
      <Contact />
      <Find />
    </div>
  );
};

export default Starting;
