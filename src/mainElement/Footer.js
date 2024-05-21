import React from "react";
import "./Footer.css";
import { ReactComponent as Instagram } from "../img/instagram.svg";
import { ReactComponent as Whatsapp } from "../img/whatsapp.svg";
import { ReactComponent as Telegram } from "../img/paper-plane.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="social_media">
          <a href="https://instagram.com">
            <div className="svg_wrapper">
              <Instagram />
            </div>
          </a>
          <a href="https://www.whatsapp.com/">
            <div className="svg_wrapper">
              <Whatsapp />
            </div>
          </a>
          <a href="https://web.telegram.org/a/#-1001854223148">
            <div className="svg_wrapper">
              <Telegram />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
