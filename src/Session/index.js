import React from "react";

export const CookieContext = React.createContext();

const CookieProvider = (props) => {
  const setCookie = (uid) => {
    document.cookie = `personalCollectionUid=${uid};path=/;secure`;
  };

  const getCookie = () => {
    if (document.cookie) {
      const allCookies = [...document.cookie.split(";")].reverse();

      for (let i = 0; i < allCookies.length; i++) {
        let [name, value] = allCookies[i].split("=");

        if (name.trim() === "personalCollectionUid") return value;
      }
    }

    return "";
  };

  const value = { setCookie, getCookie };

  return (
    <CookieContext.Provider value={value}>
      {props.children}
    </CookieContext.Provider>
  );
};

export default CookieProvider;
