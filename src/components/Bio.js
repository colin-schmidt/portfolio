import React from "react";

const Bio = () => {
  return (
    // Bio Section
    <div id="bio" class="container-fluid" style={{paddingBottom: "10rem"}}>
      <div class="row">
        {/* Picture */}
        <div class="col" style={{maxWidth:"33%", marginTop: "3rem"}} align="right">
          <img
            class="img-fluid"
            style={{ maxHeight: "20rem"}}
            src="https://lh3.googleusercontent.com/lxE6lqzjoKKYpTML7CQ2VEt4s9QhqG8EGWBQTgXocStmblpSCbuXeuNRnQ0CyGMQtoqRt0wYoI3BYeQlqysoh7JX_1ce8hrlHnII_hXnSAE0TgAd0t-MeKx0wohpRf8sj9NX6ifw-yh2B8Q8KoQSY2A-e9XmpPn5HXq1dmeyc4mr1-IUzf3yl6HO52oM_nIv1we2sFS0kbMtIWzZ2EiJ_d7xBWXBmRUO9QHxTgvzLLgXgGb_8VRBDWaqTA9Ta6l4SgfulOFUmOIz5RgMnSgyT3-SpRoT9ACXJa0LlNHwunTsRT3gwYQyz_5CL1VsyNgFu6G4qJUWaMS-MX-m355OLpt717ENZqottKSJyUjbk_FBgKVKhnDCfYioqgUQ1gIslO6fcjGNG315l2XiKj8qX7F1N3IpHMdNI6QHurHX7TK0xEZ-E_irPFKdcz1Oz7poUSDhVtX49_8cT5NnjumVW0u3opVaIelFENK-_UWVrUuVI091TmC7bbBZ8l7_ABteYHMnGpUuXymDGgL8EyQJBsn1f-8PGKAwOzYwXHakVglEjYJ1qy9cR7CGk25_lUGMdcveZnyNRiEDkZgPuthFUy-_yKkOck5_qKWETukomo1F7iPPVGaP6stLHXtp0GHM6IJrS-rZ7KkPs6Qei2eAeWjWBLwAGENSYHDSF82LJq_08VconhqCfAn_WNvKQ1i3qU0JCxoCESugmmFhpMsvXnA=w995-h1208-no?authuser=0"
            alt="headshot"
          ></img>
        </div>
        {/* Bio Text */}
        <div class="col" style={{maxWidth:"50%", marginTop: "3rem"}}>
          <h1 class="display-1">Colin Schmidt</h1>
          <h3 class="display-7">
            Hi there, my name is Colin Schmidt. I am a former bilingual
            elementary educator and current front-end web developer. I am
            passionate about helping people, solving problems, and learning new
            things.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Bio;
