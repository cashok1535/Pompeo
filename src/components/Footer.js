import React from "react";
import email from "../img/email.png";
import find from "../img/find.png";
import call from "../img/call.png";
import pompeo from "../img/Pompeo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title">
        <img src={pompeo} alt="" />
      </div>
      <div className="footer__text">
        I have always striven to fix beauty in wood, stone,
        <br /> glass or pottery, that has been my creed.
      </div>
      <div className="footer__connection">
        <div className="footer__connection__element">
          <img src={email} alt="" />
          <div className="footer__connection__element--title">EMAIL</div>
          pompeopotery@gmail.com
        </div>
        <div className="footer__connection__element">
          <img src={find} alt="" />
          <div className="footer__connection__element--title">FIND</div>Central
          Park, Manhattan
          <br /> New York, 1101
        </div>
        <div className="footer__connection__element">
          <img src={call} alt="" />
          <div className="footer__connection__element--title">CALL</div>+1 292
          345 678
        </div>
      </div>
      <div className="footer__info">Template design by <span className="footer__info__black"> Dorian Hoxha </span>- <span className="footer__info__black"> Image License Info</span> Powered by <span className="footer__info__black"> Webflow</span></div>
    </footer>
  );
}

export default Footer;
