import React from "react";
import "./ModalContact.css";
import TextyAnim from "rc-texty";
import linkedin from "../assets/img/linkedin.png";
import instagram from "../assets/img/instagram.svg";
import gmail from "../assets/img/gmail.svg";

const ModalContact = ({ contactclicked, entered, contactclickedoff }) => {
  return (
    <div className="allscreencanvas">
      {contactclicked ? (
        <>
          <div className="canvas">
            <TextyAnim
              className="text"
              type="mask-bottom"
              duration={(e) => {
                if (e.index === 8) {
                  return 1000;
                }
                return 1000;
              }}
              interval={(e) => {
                if (e.index === 2) {
                  return 500;
                }
                return e.index * 50;
              }}
              onEnd={(type) => {
                // console.log(type);
              }}
            >
              RELATION
            </TextyAnim>
            <div className="descriptioncontainercontact">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/antoine-degonville-ab65a9107/"
                className="link"
              >
                <img
                  alt="linkedin"
                  rel="noreferrer"
                  className="logolinkedin"
                  src={linkedin}
                ></img>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/antoinedegonville/"
                className="link1"
              >
                <img
                  alt="instagram"
                  className="logoinstagram"
                  src={instagram}
                ></img>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:antoinedegonville.pro@gmail.com"
                className="link2"
              >
                <img alt="gmail" className="logogmail" src={gmail}></img>
              </a>
            </div>
          </div>
        </>
      ) : (
        <div
          className={
            entered === 1 && contactclickedoff === true ? "offclick" : null
          }
        ></div>
      )}
    </div>
  );
};

export default ModalContact;
