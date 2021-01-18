import React from "react";
import "./ModalProjets.css";
import TextyAnim from "rc-texty";

const ModalProjets = ({ projetsclicked, entered, projetsclickedoff }) => {
  // console.log(projetsclicked);
  return (
    <div className="allscreencanvas">
      {projetsclicked ? (
        <>
          <div className="canvas">
            <TextyAnim
              className="text3"
              type="left"
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
              WORKS
            </TextyAnim>
            <div className="descriptioncontainerprojet">
              <a
                className="linkcolor"
                target="_blank"
                rel="noreferrer"
                href="https://talkwithabot.netlify.app/"
              >
                <TextyAnim
                  className="descriptionstackprojet"
                  type="left"
                  duration={(e) => {
                    if (e.index === 8) {
                      return 800;
                    }
                    return 1000;
                  }}
                  interval={(e) => {
                    if (e.index === 2) {
                      return 500;
                    }
                    return e.index * 30;
                  }}
                  onEnd={(type) => {
                    // console.log(type);
                  }}
                >
                  TALK WITH A BOT
                </TextyAnim>
              </a>
              <a
                className="linkcolor"
                target="_blank"
                rel="noreferrer"
                href="https://vintedclone.netlify.app/"
              >
                <TextyAnim
                  className="descriptionstackprojet"
                  type="right"
                  duration={(e) => {
                    if (e.index === 8) {
                      return 800;
                    }
                    return 1000;
                  }}
                  interval={(e) => {
                    if (e.index === 2) {
                      return 500;
                    }
                    return e.index * 30;
                  }}
                  onEnd={(type) => {
                    // console.log(type);
                  }}
                >
                  VINTED
                </TextyAnim>
              </a>
              <a
                className="linkcolor"
                target="_blank"
                rel="noreferrer"
                href="https://marvelfindyourcharacters.netlify.app/"
              >
                <TextyAnim
                  className="descriptionstackprojet"
                  type="right"
                  duration={(e) => {
                    if (e.index === 8) {
                      return 800;
                    }
                    return 1000;
                  }}
                  interval={(e) => {
                    if (e.index === 2) {
                      return 500;
                    }
                    return e.index * 30;
                  }}
                  onEnd={(type) => {
                    // console.log(type);
                  }}
                >
                  MARVEL
                </TextyAnim>
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={
              entered === 1 && projetsclickedoff === true ? "offclick" : null
            }
          ></div>
        </>
      )}
    </div>
  );
};

export default ModalProjets;
