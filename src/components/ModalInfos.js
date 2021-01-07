import React from "react";
import "./ModalInfos.css";
import TextyAnim from "rc-texty";

const ModalInfos = ({ infosclicked, entered, infosclickedoff }) => {
  return (
    <div className="allscreencanvas">
      {infosclicked ? (
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
              MOTIVATION RIGEUR
            </TextyAnim>
            <div className="descriptioncontainer">
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
                Après plusieurs années passées à étudier, pratiquer, puis
                enseigner les musiques électroniques, ses machines et logiciels,
                je souhaite aujourd’hui passer du côté technique de
                l’informatique. Lors de ma récente formation de développeur web,
                l’aisance avec laquelle j’ai appréhendé ces nouveaux concepts a
                confirmé que ce métier est fait pour moi. J’ai maintenant hâte
                de mettre mes compétences au service d’une équipe pour continuer
                de progresser.
              </TextyAnim>
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
