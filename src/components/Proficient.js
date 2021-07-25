import React from "react";
import {
  FaReact,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";

const Proficient = () => {
  return (
    <div class="container-fluid" style={{textAlign: "center", backgroundColor: '#e2e2e2', opacity: "75%"}}>
      <div>
        <h3 style={{marginBottom: "4rem"}}>I am proficient with the following technologies:</h3>
      </div>
      {/* Icons */}
      <div class="container">
        <div class="row">
          <div class="col">
            <FaHtml5 size="64px" />
            <p>HTML5</p>
          </div>
          <div class="col">
            <FaCss3Alt size="64px" />
            <p>CSS3</p>
          </div>
          <div class="col">
            <FaBootstrap size="64px" />
            <p>Bootstrap</p>
          </div>
          <div class="col">
            <FaJsSquare size="64px" />
            <p>JavaScript/ES6</p>
          </div>
          <div class="col">
            <FaReact size="64px" />
            <p>React.JS</p>
          </div>
          <div class="col">
            <FaGithub size="64px" />
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proficient;
