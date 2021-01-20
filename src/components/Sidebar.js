import React, { useState } from "react";
import TextyAnim from "rc-texty";
import "../components/Sidebar.css";

const Sidebar = ({
  theme,
  videotoplay,
  opac,
  setInfosClicked,
  setInfosClickedOff,
  infosclicked,
  stackclicked,
  setStackClicked,
  setStackClickedOff,
  contactclicked,
  setContactClicked,
  setContactClickedOff,
  projetsclicked,
  setProjetsClicked,
  setProjetsClickedOff,
}) => {
  const [stack, setStack] = useState(false);
  const [projets, setProjets] = useState(false);
  const [infos, setInfos] = useState(false);
  const [contact, setContact] = useState(false);

  let item1 = new Audio("");
  let item2 = new Audio("");
  let item3 = new Audio("");
  let item4 = new Audio("");

  if (theme === "pine") {
    item1 = new Audio(
      "https://res.cloudinary.com/dta6lllnx/video/upload/q_10/v1611061426/PineSounds/pineitem1_uwrbdd.mp3"
    );
    item2 = new Audio(
      "https://res.cloudinary.com/dta6lllnx/video/upload/q_10/v1611061427/PineSounds/pineitem2_yqhkzd.mp3"
    );
    item3 = new Audio(
      "https://res.cloudinary.com/dta6lllnx/video/upload/q_10/v1611061427/PineSounds/pineitem3_eucn60.mp3"
    );
    item4 = new Audio(
      "https://res.cloudinary.com/dta6lllnx/video/upload/q_10/v1611061427/PineSounds/pineitem4_asz1kd.mp3"
    );
  }

  return (
    <div className="leftsidebar">
      <div className={opac ? "headername" : "headeroff"}>
        <div className="headertitle1">
          <div className={opac ? "antoinedegonville" : "antoinedegonvilleoff"}>
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
      <div className={opac ? "menu" : "invisible"}>
        <div className={infos ? "menuinfosclicked" : "menuinfos"}>
          <p
            onClick={() => {
              setInfosClicked(!infosclicked);
              setInfosClickedOff(true);
              setStackClicked(false);
              setProjetsClicked(false);
              setContactClicked(false);
              setInfos(!infos);
              setProjets(false);
              setStack(false);
              setContact(false);
              if (
                !infosclicked &&
                videotoplay ===
                  "https://res.cloudinary.com/dta6lllnx/video/upload/v1610049300/PineSite_jdafms.mp4"
              ) {
                item1.volume = 1;
                item1.play();
              }
            }}
          >
            WHO AM i ?
          </p>
        </div>
        <div className={stack ? "menustackclicked" : "menustack"}>
          <p
            onClick={() => {
              setStackClicked(!stackclicked);
              setStackClickedOff(true);
              setProjetsClicked(false);
              setInfosClicked(false);
              setContactClicked(false);
              setStack(!stack);
              setProjets(false);
              setInfos(false);
              setContact(false);
              if (
                !stackclicked &&
                videotoplay ===
                  "https://res.cloudinary.com/dta6lllnx/video/upload/v1610049300/PineSite_jdafms.mp4"
              ) {
                item2.volume = 1;
                item2.play();
              }
            }}
            className="border"
          >
            STACK
          </p>
        </div>
        <div className={projets ? "menuprojetclicked" : "menuprojet"}>
          <p
            onClick={() => {
              setProjetsClicked(!projetsclicked);
              setProjetsClickedOff(true);
              setStackClicked(false);
              setInfosClicked(false);
              setContactClicked(false);
              setProjets(!projets);
              setStack(false);
              setInfos(false);
              setContact(false);
              if (
                !projetsclicked &&
                videotoplay ===
                  "https://res.cloudinary.com/dta6lllnx/video/upload/v1610049300/PineSite_jdafms.mp4"
              ) {
                item3.volume = 1;
                item3.play();
              }
            }}
          >
            PROJECTS
          </p>
        </div>

        <div className={contact ? "menucontactclicked" : "menucontact"}>
          <p
            onClick={() => {
              setContactClicked(!contactclicked);
              setContactClickedOff(true);
              setStackClicked(false);
              setProjetsClicked(false);
              setInfosClicked(false);
              setContact(!contact);
              setProjets(false);
              setStack(false);
              setInfos(false);
              if (
                !contactclicked &&
                videotoplay ===
                  "https://res.cloudinary.com/dta6lllnx/video/upload/v1610049300/PineSite_jdafms.mp4"
              ) {
                item4.volume = 1;
                item4.play();
              }
            }}
          >
            LINK
          </p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
