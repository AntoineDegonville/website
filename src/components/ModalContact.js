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
              <TextyAnim
                className="description"
                type="mask-top"
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
                antoinedegonville.pro@gmail.com
              </TextyAnim>
              <TextyAnim
                className="description"
                type="mask-top"
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
                06 35 49 67 29
              </TextyAnim>
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
