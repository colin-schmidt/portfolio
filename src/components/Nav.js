import React from "react";

const Nav = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg"
        style={{ backgroundColor: "#e2e2e2" }}
      >
        <div class="container=fluid">
          <a href="#bio">
            <button class="btn">Bio</button>
          </a>

          <a href="#projects">
            <button class="btn">Projects</button>
          </a>
          
          <a href="#contact">
            <button class="btn">Contact Me</button>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
