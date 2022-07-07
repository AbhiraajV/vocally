import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import Logo from "./logo.svg";
const RenderSocial = () => (
  <div className="Social">
    <FaFacebookF />
    <FaTwitter />
    <FaYoutube />
    <FaLinkedin />
    <FaInstagramSquare />
  </div>
);
const RenderLogo = () => <img src={Logo} />;
const RenderButtons = ({ children }) => (
  <div className="Buttons">
    <div className="align">
      <BsFillTelephoneFill />
      <span>+769 586 4558</span>
    </div>
    <div className="align">
      <MdEmail />
      <span>service@openauto.ca</span>
    </div>
    {children}
  </div>
);
export { RenderLogo, RenderButtons, RenderSocial };
