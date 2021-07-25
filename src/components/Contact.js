import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      class="container-fluid"
      style={{ backgroundColor: "#e2e2e2", opacity: "75%" }}
    >
      <h1
        id="contact"
        style={{
          textAlign: "center",
          marginTop: "10rem",
        }}
      >
        Contact Me
      </h1>
      <div>
        <FaLinkedin size="32px" />
      </div>
      <div>
        <FaGithub size="32px" />
      </div>
      <div>
        <FaEnvelope size="32px" />
      </div>
    </div>
  );
};

export default Contact;

/* 


*/
