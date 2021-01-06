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
  const [clicked, setClicked] = useState(false);
  const [entered, setEntered] = useState(0);
  const [clickedoff, setClickedOff] = useState(false);
  console.log(clicked);

  let audiopad = new Audio(sound);
  let audioenter = new Audio(enter);
  let audiorain = new Audio(rainsound);

  return (
    <>
      <div className="background">
        <video
          ref={(videoRef) => setVideo(videoRef)}
          className={!opac ? "video" : "videoout"}
          src={pythagore}
          type="video/mp4"
        />

        <div className={!opac ? "buttonenter" : "buttonout"}>
          <p
            className="noselect"
            onClick={() => {
              video.play();
              audioenter.play();
              audiorain.loop = true;
              audiorain.volume = 0.7;
              audioenter.volume = 1;

              setEntered(1);
              setTimeout(() => {
                setOpac(true);
                audiopad.play();
                audiopad.volume = 1;
              }, 2000);
            }}
          >
            Enter
          </p>
        </div>

        <p className="pythatext">
          "There is geometry in the humming of the strings, there is music in
          the spacing of the spheres."
        </p>
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
          <div className={opac ? "clickme" : null}>
            <p
              className={opac ? "onclick" : "invisible"}
              onClick={() => {
                setClicked(!clicked);
                setClickedOff(true);
              }}
            >
              ABOUT
            </p>
          </div>
        </div>

        <video
          className={opac ? "videopine" : "videopineoff"}
          src={pine}
          type="video/mp4"
          height="100%"
          width="100%"
          autoPlay={true}
          loop={true}
        />
      </div>
      <div className="allscreencanvas">
        {clicked ? (
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
              {/* MANGE TES MORTS */}
              COMING SOON
            </TextyAnim>
          </div>
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
