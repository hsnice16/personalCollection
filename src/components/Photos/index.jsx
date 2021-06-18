import React, { useEffect } from "react";

import Main from "./Main";

const PhotosPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;

    document.title = "photos | personalCollection";
  }, []);

  return (
    <>
      <Main />
    </>
  );
};

export default PhotosPage;
