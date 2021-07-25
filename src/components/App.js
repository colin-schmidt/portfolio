import React from "react";
import Nav from "./Nav";
import Bio from "./Bio";
import Proficient from "./Proficient";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
      }}
    >
      <Nav />
      <Bio />
      <Proficient />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
