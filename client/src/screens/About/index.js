import React from "react";
import Button from "../../components/Button";
import AboutImg from "./about.png";
function About() {
  return (
    <div className="About">
      <img src={AboutImg} width={"40%"} height={"100%"} />
      <div className="align verticle">
        <span className="form-lg-text">Focused on Time Saving</span>
        <span className="form-sm-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
        <Button>Download the mobile app</Button>
      </div>
    </div>
  );
}

export default About;
