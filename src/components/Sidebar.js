import React, { useState } from "react";
import TextyAnim from "rc-texty";
import "../components/Sidebar.css";

const Sidebar = ({
  theme,
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

  // ITEM SOUND INITIALIZATION
  let item1 = new Audio("");
  let item2 = new Audio("");
  let item3 = new Audio("");
  let item4 = new Audio("");

  // PINE
  if (theme === "pine") {
    item1 = new Audio(
      "https://res.cloudinary.com/dlmhpqesp/video/upload/v1617962985/WebSite/pineitem1_amtfkx.mp3"
    );
    item2 = new Audio(
      "https://res.cloudinary.com/dlmhpqesp/video/upload/v1617962986/WebSite/pineitem2_o0jwzg.mp3"
    );
    item3 = new Audio(
      "https://res.cloudinary.com/dlmhpqesp/video/upload/v1617962986/WebSite/pineitem3_bhma3r.mp3"
    );
    item4 = new Audio(
      "https://res.cloudinary.com/dlmhpqesp/video/upload/v1617962986/WebSite/pineitem4_i0mwe2.mp3"
    );
  }
  //FLOWERS
  if (theme === "flowers") {
    item1 = new Audio(
      "https://res.cloudinary.com/dlmhpqesp/video/upload/v1617964003/WebSite/FlowersSound/item1_ffpimd.mp3"
    );
    item2 = new Audio(
      "https://res.cloudinary.com/dlmhpqesp/video/upload/v1617964003/WebSite/FlowersSound/item2_k4xb7h.mp3"
    );
    item3 = new Audio(
      "https://res.cloudinary.com/dlmhpqesp/video/upload/v1617964003/WebSite/FlowersSound/item3_tw5nbu.mp3"
    );
    item4 = new Audio(
      "https://res.cloudinary.com/dlmhpqesp/video/upload/v1617964003/WebSite/FlowersSound/item4_i089fw.mp3"
    );
  }
  // SUNSET
  if (theme === "sunset") {
    item1 = new Audio(
      "https://res.cloudinary.com/dlmhpqesp/video/upload/v1617965443/WebSite/SunsetSound/item1_rchd3f.mp3"
    );
    item2 = new Audio(
      "https://res.cloudinary.com/dlmhpqesp/video/upload/v1617965443/WebSite/SunsetSound/item2_p4dxwb.mp3"
    );
    item3 = new Audio(
      "https://res.cloudinary.com/dlmhpqesp/video/upload/v1617965443/WebSite/SunsetSound/item3_bz13jj.mp3"
    );
    item4 = new Audio(
      "https://res.cloudinary.com/dlmhpqesp/video/upload/v1617965443/WebSite/SunsetSound/item4_utxqtw.mp3"
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
        <div className="reload">
          <a
            className="reloadclick"
            href="https://antoinedegonville.netlify.app/"
          >
            Reload the page for another experience.
          </a>
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
              if (!infosclicked && theme === "pine") {
                item1.volume = 1;
                item1.play();
              }
              if (!infosclicked && theme === "flowers") {
                item1.volume = 0.5;
                item1.play();
              }
              if (!infosclicked && theme === "sunset") {
                item1.volume = 0.5;
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
              if (!stackclicked && theme === "pine") {
                item2.volume = 1;
                item2.play();
              }
              if (!stackclicked && theme === "flowers") {
                item2.volume = 0.5;
                item2.play();
              }
              if (!stackclicked && theme === "sunset") {
                item2.volume = 0.5;
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
              if (!projetsclicked && theme === "pine") {
                item3.volume = 1;
                item3.play();
              }
              if (!projetsclicked && theme === "flowers") {
                item3.volume = 0.5;
                item3.play();
              }
              if (!projetsclicked && theme === "sunset") {
                item3.volume = 0.5;
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
              if (!contactclicked && theme === "pine") {
                item4.volume = 1;
                item4.play();
              }
              if (!contactclicked && theme === "flowers") {
                item4.volume = 0.5;
                item4.play();
              }
              if (!contactclicked && theme === "sunset") {
                item4.volume = 0.5;
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
