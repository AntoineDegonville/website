import React, { useState } from "react";
import TextyAnim from "rc-texty";
import "./App.css";
import pythagore from "../src/assets/video/Pytha360flip.mp4";
import sound from "../src/assets/sounds/sound.mp3";
import enter from "../src/assets/sounds/enter.mp3";
import rainsound from "../src/assets/sounds/rain.mp3";
import pine from "../src/assets/video/PineSite.mp4";

function App() {
  const [opac, setOpac] = useState(false);
  const [video, setVideo] = useState();
  const [videopytha, setVideoPytha] = useState();
  const [clicked, setClicked] = useState(false);
  const [entered, setEntered] = useState(0);
  const [clickedoff, setClickedOff] = useState(false);

  let audiopad = new Audio(sound);
  let audioenter = new Audio(enter);
  let audiorain = new Audio(rainsound);

  return (
    <>
      <div className="background">
        <div className="container">
          <div className={!opac ? "buttonenter" : "buttonout"}>
            <p
              className="enter"
              onClick={() => {
                video.play();
                videopytha.play();
                audioenter.play();

                audiorain.loop = true;
                audiorain.volume = 0.7;
                audioenter.volume = 1;

                setEntered(1);
                setTimeout(() => {
                  setOpac(true);
                  audiopad.play();
                  audiopad.volume = 1;
                  audiorain.play();
                }, 2000);
              }}
            >
              Enter
            </p>
          </div>
          <div className="containerpytha">
            <video
              ref={(videoRef) => setVideo(videoRef)}
              className={!opac ? "video" : "videoout"}
              src={pythagore}
              type="video/mp4"
            ></video>
            <p className="pythatext">
              "There is geometry in the humming of the strings, there is music
              in the spacing of the spheres."
            </p>
          </div>
        </div>
      </div>

      <div className="allscreen">
        <div className="leftsidebar">
          <div className={opac ? "headername" : "headeroff"}>
            <div className="headertitle1">
              <div
                className={opac ? "antoinedegonville" : "antoinedegonvilleoff"}
              >
                {opac ? (
                  <TextyAnim
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
                    Antoine Degonville
                  </TextyAnim>
                ) : null}
              </div>
            </div>
            <div className="headertitle">
              {opac ? (
                <TextyAnim
                  type="mask-bottom"
                  smooth="random"
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
                  Developper Fullstack
                </TextyAnim>
              ) : null}
            </div>
          </div>
          <div className={opac ? "test" : "invisible"}>
            <p style={{ color: "white" }}></p>
          </div>
          <div className={opac ? "clickme" : null}>
            <p
              className={opac ? "onclick" : "invisible"}
              onClick={() => {
                setClicked(!clicked);
                setClickedOff(true);
              }}
            >
              INFOS
            </p>
          </div>
        </div>

        <video
          ref={(videoRef) => setVideoPytha(videoRef)}
          className={opac ? "videopine" : "videopineoff"}
          src={pine}
          type="video/mp4"
          height="100%"
          width="100%"
          loop={true}
        />
      </div>

      <div className="allscreencanvas">
        {clicked ? (
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
                MOTIVATION PROJET
                {/* COMING SOON */}
              </TextyAnim>
              <div className="descriptioncontainer">
                <p className="description">
                  Après plusieurs années passées à étudier, pratiquer, puis
                  enseigner les musiques électroniques, ses machines et
                  logiciels, je souhaite aujourd’hui passer du côté technique de
                  l’informatique. Lors de ma récente formation de développeur
                  web, l’aisance avec laquelle j’ai appréhendé ces nouveaux
                  concepts a confirmé que ce métier est fait pour moi. J’ai
                  maintenant hâte de mettre mes compétences au service d’une
                  équipe pour continuer de progresser.
                </p>
              </div>
            </div>
          </>
        ) : (
          <div
            className={entered === 1 && clickedoff === true ? "offclick" : null}
          ></div>
        )}
      </div>
    </>
  );
}
export default App;
