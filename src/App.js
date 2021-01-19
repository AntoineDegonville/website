import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ModalInfos from "./components/ModalInfos";
import ModalStack from "./components/ModalStack";
import ModalContact from "./components/ModalContact";
import ModalProjets from "./components/ModalProjets";
import "./App.css";
import pythagore from "../src/assets/video/Pytha360flip.mp4";
import sound from "../src/assets/sounds/sound.mp3";
import enter from "../src/assets/sounds/enter.mp3";

function App() {
  const [opac, setOpac] = useState(false);
  const [video, setVideo] = useState();
  const [videohome, setVideoHome] = useState();
  const [entered, setEntered] = useState(0);
  const [infosclicked, setInfosClicked] = useState(false);
  const [infosclickedoff, setInfosClickedOff] = useState(false);
  const [stackclicked, setStackClicked] = useState(false);
  const [stackclickedoff, setStackClickedOff] = useState(false);
  const [contactclicked, setContactClicked] = useState(false);
  const [contactclickedoff, setContactClickedOff] = useState(false);
  const [projetsclicked, setProjetsClicked] = useState(false);
  const [projetsclickedoff, setProjetsClickedOff] = useState(false);
  const [videotoplay, setVideoToPlay] = useState();

  function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  useEffect(() => {
    const videoarr = [
      "https://res.cloudinary.com/dta6lllnx/video/upload/v1610049300/PineSite_jdafms.mp4",
      "https://res.cloudinary.com/dta6lllnx/video/upload/v1610994722/LOOP2_rifnvj.mp4",
      "https://res.cloudinary.com/dta6lllnx/video/upload/v1610994706/LOOP1_hkk4ty.mp4",
    ];

    const pushthegoodlink = () => {
      setVideoToPlay(videoarr[random(0, 2)]);
    };
    pushthegoodlink();
  }, []);

  let audiopad = new Audio(sound);
  let audioenter = new Audio(enter);
  //audio test
  let audiorain = new Audio(
    "https://res.cloudinary.com/dta6lllnx/video/upload/v1611061427/PineSounds/rain_y67tdy.mp3"
  );
  let pinehome = new Audio(
    "https://res.cloudinary.com/dta6lllnx/video/upload/v1611061427/PineSounds/pineloop_gjp1mp.mp3"
  );
  let pinepad = new Audio(
    "https://res.cloudinary.com/dta6lllnx/video/upload/v1611061427/PineSounds/pinepad_l4h7d2.mp3"
  );

  return (
    <>
      <div className="background">
        <div className="container">
          <div className={!opac ? "buttonenter" : "buttonout"}>
            <p
              className="enter"
              onClick={() => {
                videohome.play();
                video.play();
                audioenter.play();
                audioenter.volume = 0.6;
                audioenter.volume = 1;
                setEntered(1);
                setTimeout(() => {
                  setOpac(true);
                  audiopad.play();
                  audiopad.volume = 0.8;
                  setTimeout(() => {
                    if (
                      videotoplay ===
                      "https://res.cloudinary.com/dta6lllnx/video/upload/v1610049300/PineSite_jdafms.mp4"
                    ) {
                      pinehome.play();
                      pinehome.loop = true;
                      pinepad.play();
                      pinepad.loop = true;
                      audiorain.play();
                      audiorain.volume = 0.3;
                      audiorain.loop = true;
                    }
                  }, 1500);
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
              <br />
              <br />
              Pythagoras
            </p>
          </div>
        </div>
      </div>

      <div className="allscreen">
        <Sidebar
          videotoplay={videotoplay}
          opac={opac}
          setInfosClicked={setInfosClicked}
          setInfosClickedOff={setInfosClickedOff}
          infosclicked={infosclicked}
          setStackClicked={setStackClicked}
          setStackClickedOff={setStackClickedOff}
          stackclicked={stackclicked}
          setContactClicked={setContactClicked}
          setContactClickedOff={setContactClickedOff}
          contactclicked={contactclicked}
          setProjetsClicked={setProjetsClicked}
          setProjetsClickedOff={setProjetsClickedOff}
          projetsclicked={projetsclicked}
        ></Sidebar>
        <video
          ref={(videoRef) => setVideoHome(videoRef)}
          className={opac ? "videopine" : "videopineoff"}
          src={videotoplay}
          type="video/mp4"
          height="100%"
          width="100%"
          loop={true}
        />
      </div>

      <ModalInfos
        infosclicked={infosclicked}
        entered={entered}
        infosclickedoff={infosclickedoff}
      ></ModalInfos>
      <ModalStack
        stackclicked={stackclicked}
        entered={entered}
        stackclickedoff={stackclickedoff}
      ></ModalStack>
      <ModalContact
        contactclicked={contactclicked}
        entered={entered}
        contactclickedoff={contactclickedoff}
      ></ModalContact>
      <ModalProjets
        projetsclicked={projetsclicked}
        entered={entered}
        projetsclickedoff={projetsclickedoff}
      ></ModalProjets>
    </>
  );
}
export default App;
