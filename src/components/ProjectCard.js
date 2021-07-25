import React from "react";

const ProjectCard = (props) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={props.thumbnail} class="card-img-top" alt="project thumbnail" />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
