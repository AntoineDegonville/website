import React from "react";
import "./ModalStack.css";
import TextyAnim from "rc-texty";

const ModalStack = ({ stackclicked, entered, stackclickedoff }) => {
  console.log(entered);
  return (
    <div className="allscreencanvas">
      {stackclicked ? (
        <>
          <div className="canvasstack">
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
              TECH
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
                REACT / REACT NATIVE
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
                HTML / CSS
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
                EXPRESS / AXIOS
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
                HEROKU / MONGODB
              </TextyAnim>
            </div>
          </div>
        </>
      ) : (
        <div
          className={
            entered === 1 && stackclickedoff === true ? "offclick" : null
          }
        ></div>
      )}
    </div>
  );
};

export default ModalStack;
