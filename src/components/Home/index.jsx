import React, { useContext, useEffect, useState } from "react";

import { FirebaseContext } from "../../firebase/index";
import { CookieContext } from "../../session/index";

import folderImg from "../../assets/Images/home-upload.svg";
import arrow from "../../assets/Images/arrow.PNG";

const HomePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { firestore } = useContext(FirebaseContext);

  const { getCookie } = useContext(CookieContext);

  useEffect(() => {
    document.documentElement.scrollTop = 0;

    document.title = "home | personalCollection";

    const unsub = firestore
      .collection("users")
      .doc(`${getCookie()}`)
      .onSnapshot((snap) => {
        let { firstname, lastname } = snap.data();
        setFirstName(firstname);
        setLastName(lastname);
      });

    return () => unsub();
  }, [firestore, getCookie]);

  return (
    <main className="main-home-container min-h-100">
      <div className="div-home-welcome-text-arrow-container">
        <div className="div-home-welcome-text">
          <div className="div-welcome-text-name">
            Hey 👋,&nbsp;{firstName}&nbsp;&nbsp;{lastName}
          </div>
          <div className="div-welcome-text-message">
            Hope you are having a good day!
          </div>
        </div>
        <div className="div-home-arrow">
          <img src={arrow} alt="arrow" />
          <div>
            {/* upload <span>videos</span> or <span>photos</span> */}
            upload <span>photos</span>
          </div>
        </div>
      </div>
      <div className="div-home-img">
        <img src={folderImg} alt="upload folder illustration from undraw.co" />
      </div>
    </main>
  );
};

export default HomePage;
