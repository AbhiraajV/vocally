import React from "react";
import "./index.css";
import formImage from "./form-img.png";
import formImagePlace from "./form-img-place.png";
import Form from "./helper/form";
import Image from "../../components/ProgressiveImage";
function Hero() {
  return (
    <div className="Hero">
      <Form />
      <div>
        <Image
          src={formImage}
          placeholderSrc={formImagePlace}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
}

export default Hero;
