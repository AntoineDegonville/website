import React, { useState } from "react";
import "./App.css";
import pythagore from "../src/assets/video/Pytha360flip.mp4";
import sound from "../src/assets/sounds/sound.mp3";
import enter from "../src/assets/sounds/enter.mp3";
import rainsound from "../src/assets/sounds/rain.mp3";

function App() {
  const [opac, setOpac] = useState(false);
  const [video, setVideo] = useState();
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
            onClick={() => {
              video.play();
              audioenter.play();
              audiorain.loop = true;
              audiorain.volume = 0.7;
              audioenter.volume = 1;
              setOpac(true);
              setTimeout(() => {
                audiopad.play();
                audiopad.volume = 1;
              }, 1000);
            }}
          >
            Enter
          </p>
        </div>
      </div>

      <div className="allscreen">
        <div className="leftsidebar">
          <div className={opac ? "headername" : "headeroff"}>
            <div className="headertitle1">
              <p>Antoine Degonville</p>
            </div>
            <div className="headertitle">
              <p>Developper Fullstack</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
