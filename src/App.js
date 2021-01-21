import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Sidebar from "./components/Sidebar";
import ModalInfos from "./components/ModalInfos";
import ModalStack from "./components/ModalStack";
import ModalContact from "./components/ModalContact";
import ModalProjets from "./components/ModalProjets";
import "./App.css";
import pythagore from "../src/assets/video/Pytha360flip.mp4";

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
  const [theme, setTheme] = useState("");

  useEffect(() => {
    // VARIABLES COOKIES
    let maxCookieValue = 2,
      initCookie = 0,
      expirationDays = 1;
    let cookieName = "Theme";
    let getCookie = Cookies.get(cookieName);

    // COOKIES INITIALIZATION AND INCREMENT.

    if (getCookie == null) {
      Cookies.set(cookieName, initCookie + 1, { expires: expirationDays });
      setVideoToPlay(
        "https://res.cloudinary.com/dta6lllnx/video/upload/v1610049300/PineSite_jdafms.mp4"
      );
      setTheme("pine");
    } else if (getCookie >= initCookie && getCookie < maxCookieValue) {
      getCookie++;
      Cookies.set(cookieName, getCookie, { expires: expirationDays });
      setVideoToPlay(
        "https://res.cloudinary.com/dta6lllnx/video/upload/v1610994722/LOOP2_rifnvj.mp4"
      );
      setTheme("sunset");
    } else if (getCookie >= maxCookieValue) {
      Cookies.remove(cookieName);
      setVideoToPlay(
        "https://res.cloudinary.com/dta6lllnx/video/upload/v1610994706/LOOP1_hkk4ty.mp4"
      );
      setTheme("flowers");
    }
  }, []);

  let audioenter = new Audio("");
  if (theme === "pine") {
    audioenter = new Audio(
      "https://res.cloudinary.com/dta6lllnx/video/upload/v1611244385/PineSounds/entertrue_qs0o0w.mp3"
    );
  }
  if (theme === "sunset") {
    audioenter = new Audio(
      "https://res.cloudinary.com/dta6lllnx/video/upload/v1611243838/SummerSounds/enterflower_rracl9.mp3"
    );
  }
  if (theme === "flowers") {
    audioenter = new Audio(
      "https://res.cloudinary.com/dta6lllnx/video/upload/v1611244204/FlowerSounds/enterflower_iohjq2.mp3"
    );
  }

  //audio pine
  let audiorain = new Audio(
    "https://res.cloudinary.com/dta6lllnx/video/upload/v1611156225/PineSounds/rain_wq0gtk.mp3"
  );
  let pinehome = new Audio(
    "https://res.cloudinary.com/dta6lllnx/video/upload/v1611156935/PineSounds/pineloop_nkzd3i.mp3"
  );
  // audio sunset
  let audiobird = new Audio(
    "https://res.cloudinary.com/dta6lllnx/video/upload/v1611225925/SummerSounds/loop_kjbyk4.mp3"
  );
  let chimeshome = new Audio(
    "https://res.cloudinary.com/dta6lllnx/video/upload/v1611225934/SummerSounds/chimes_z2klau.mp3"
  );
  // audio flowers
  let marimbahome = new Audio(
    "https://res.cloudinary.com/dta6lllnx/video/upload/v1611244928/FlowerSounds/marimba_oysqpi.mp3"
  );
  let audiovinyl = new Audio(
    "https://res.cloudinary.com/dta6lllnx/video/upload/v1611244930/FlowerSounds/vinyl_aq3r8t.mp3"
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
                  setTimeout(() => {
                    if (theme === "pine") {
                      pinehome.volume = 0.8;
                      pinehome.play();
                      pinehome.loop = true;
                      audiorain.play();
                      audiorain.volume = 0.04;
                      audiorain.loop = true;
                    }
                    if (theme === "sunset") {
                      chimeshome.volume = 0.5;
                      chimeshome.play();
                      chimeshome.loop = true;
                      audiobird.play();
                      audiobird.volume = 0.08;
                      audiobird.loop = true;
                    }
                    if (theme === "flowers") {
                      marimbahome.volume = 0.4;
                      marimbahome.play();
                      marimbahome.loop = true;
                      audiovinyl.play();
                      audiovinyl.volume = 0.08;
                      audiovinyl.loop = true;
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
          theme={theme}
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
