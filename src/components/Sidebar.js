import React, { useState } from "react";
import TextyAnim from "rc-texty";
import "../components/Sidebar.css";

const Sidebar = ({
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
        <div className={stack ? "menustackclicked" : "menustack"}>
          <p
            onClick={() => {
              setStackClicked(!stackclicked);
              setStackClickedOff(true);
              setStack(!stack);
              setProjets(false);
              setInfos(false);
              setContact(false);
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
              console.log(">>>>", projetsclicked);
              setProjetsClickedOff(true);
              setProjets(!projets);
              setStack(false);
              setInfos(false);
              setContact(false);
            }}
          >
            PROJETS
          </p>
        </div>
        <div className={infos ? "menuinfosclicked" : "menuinfos"}>
          <p
            onClick={() => {
              setInfosClicked(!infosclicked);
              setInfosClickedOff(true);
              setInfos(!infos);
              setProjets(false);
              setStack(false);
              setContact(false);
            }}
          >
            INFOS
          </p>
        </div>
        <div className={contact ? "menucontactclicked" : "menucontact"}>
          <p
            onClick={() => {
              setContactClicked(!contactclicked);
              setContactClickedOff(true);
              setContact(!contact);
              setProjets(false);
              setStack(false);
              setInfos(false);
            }}
          >
            CONTACT
          </p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
