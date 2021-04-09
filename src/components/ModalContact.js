import React from "react";
import "./ModalContact.css";
import TextyAnim from "rc-texty";

const ModalContact = ({ contactclicked, entered, contactclickedoff }) => {
  return (
    <div className="allscreencanvas">
      {contactclicked ? (
        <>
          <div className="canvas">
            <TextyAnim
              className="text4"
              type="mask-top"
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
              {/* RELATION */}
              NETWORK
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
                  src="https://res.cloudinary.com/dlmhpqesp/image/upload/v1617966397/WebSite/Logo/linkedin_zbnhxp.png"
                ></img>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AntoineDegonville"
                className="link3"
              >
                <img
                  alt="github"
                  className="logogithub"
                  src="https://res.cloudinary.com/dlmhpqesp/image/upload/v1617966397/WebSite/Logo/github_d3ecxb.png"
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
                  src="https://res.cloudinary.com/dlmhpqesp/image/upload/v1617966399/WebSite/Logo/instagram_j3nqbv.svg"
                ></img>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:antoinedegonville.pro@gmail.com"
                className="link2"
              >
                <img
                  alt="gmail"
                  className="logogmail"
                  src="https://res.cloudinary.com/dlmhpqesp/image/upload/v1617966471/WebSite/Logo/gmail_cp5u5i.svg"
                ></img>
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
