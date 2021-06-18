import React, { useEffect } from "react";
import Main from "./Main";

const LandingPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;

    document.title = "personalCollection";
  }, []);

  return (
    <>
      <Main />
    </>
  );
};

export default LandingPage;
