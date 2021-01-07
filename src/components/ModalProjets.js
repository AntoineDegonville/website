import React from "react";
import "./ModalProjets.css";
import TextyAnim from "rc-texty";

const ModalProjets = ({ projetsclicked, entered, projetsclickedoff }) => {
  console.log(projetsclicked);
  return (
    <div className="allscreencanvas">
      {projetsclicked ? (
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
              PROJETS
            </TextyAnim>
            <div className="descriptioncontainer">
              <TextyAnim
                className="descriptionstack"
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
              <TextyAnim
                className="descriptionstack"
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
              <TextyAnim
                className="descriptionstack"
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
