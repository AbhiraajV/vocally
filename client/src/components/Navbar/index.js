import React from "react";
import Button from "../Button";
import "./index.css";
import { RenderLogo, RenderButtons } from "../../utils/RenderHelper";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <RenderLogo />
      </div>
      <RenderButtons children={<Button>Download the mobile App</Button>} />
    </div>
  );
}

export default Navbar;
