import React from "react";
import "./index.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  RenderButtons,
  RenderLogo,
  RenderSocial,
} from "../../utils/RenderHelper";
function Footer() {
  return (
    <div className="Footer">
      <div className="Logo-Footer">
        <RenderLogo />
        <span>Open Auto @ all rights reserved</span>
      </div>
      <div className="CTA">
        <RenderButtons />
        <RenderSocial />
      </div>
    </div>
  );
}

export default Footer;
