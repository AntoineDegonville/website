import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ModalInfos from "./components/ModalInfos";
import ModalStack from "./components/ModalStack";
import ModalContact from "./components/ModalContact";
import ModalProjets from "./components/ModalProjets";
import "./App.css";
import pythagore from "../src/assets/video/Pytha360flip.mp4";
import sound from "../src/assets/sounds/sound.mp3";
import enter from "../src/assets/sounds/enter.mp3";
import rainsound from "../src/assets/sounds/rain.mp3";
// import pine from "../src/assets/video/PineSite.mp4";

function App() {
  const [opac, setOpac] = useState(false);
  const [video, setVideo] = useState();
  const [videopytha, setVideoPytha] = useState();
  const [entered, setEntered] = useState(0);
  const [infosclicked, setInfosClicked] = useState(false);
  const [infosclickedoff, setInfosClickedOff] = useState(false);
  const [stackclicked, setStackClicked] = useState(false);
  const [stackclickedoff, setStackClickedOff] = useState(false);
  const [contactclicked, setContactClicked] = useState(false);
  const [contactclickedoff, setContactClickedOff] = useState(false);
  const [projetsclicked, setProjetsClicked] = useState(false);
  const [projetsclickedoff, setProjetsClickedOff] = useState(false);

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
                videopytha.play();
                video.play();
                audioenter.play();
                audioenter.volume = 0.6;
                audiorain.loop = true;
                audiorain.volume = 0.7;
                audioenter.volume = 1;
                setEntered(1);
                setTimeout(() => {
                  setOpac(true);
                  audiopad.play();
                  audiopad.volume = 0.8;
                  setTimeout(() => {
                    audiorain.play();
                    audiorain.volume = 0.4;
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
            </p>
          </div>
        </div>
      </div>

      <div className="allscreen">
        <Sidebar
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
          ref={(videoRef) => setVideoPytha(videoRef)}
          className={opac ? "videopine" : "videopineoff"}
          src="https://res.cloudinary.com/dta6lllnx/video/upload/v1610049300/PineSite_jdafms.mp4"
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
