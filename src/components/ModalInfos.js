import React from "react";
import "./ModalInfos.css";
import TextyAnim from "rc-texty";
import CV from "../assets/cv/CVAntoineDegonville.pdf";

const ModalInfos = ({ infosclicked, entered, infosclickedoff }) => {
  return (
    <div className="allscreencanvas">
      {infosclicked ? (
        <>
          <div className="canvas">
            <TextyAnim
              className="text1"
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
              CREATIVE / CURIOUS
            </TextyAnim>
            <div className="descriptioncontainerinfos">
              <TextyAnim
                className="description"
                type="scaleBig"
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
                  return e.index * 2;
                }}
                onEnd={(type) => {
                  // console.log(type);
                }}
              >
                My name is Antoine Degonville, I am a FullStack Développer MERN
                (mongoDB, Express, React, NodeJS). Lover of Do It Yourself and
                autonomous learning I was formed by the school Le Reacteur in
                Paris. I have always been passionate by the digital environment.
                I am also a multidisciplinary artist : electronic musician,
                graphic designer and painter. The creative process is the
                foundation of what I am and what I like.
              </TextyAnim>
              <div className="contactme">
                <span className="underline">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:antoinedegonville.pro@gmail.com"
                    className="contactmemail"
                  >
                    Contact Me
                  </a>
                </span>
                <span className="m-10"> /</span>
                <span className="underline">
                  <a href={CV} className="contactmemail" download>
                    CV
                  </a>
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          className={
            entered === 1 && infosclickedoff === true ? "offclick" : null
          }
        ></div>
      )}
    </div>
  );
};

export default ModalInfos;
