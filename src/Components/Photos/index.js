import React from "react";
import { withAuthorization } from "../../session/index";

import Main from "./main";

const PhotosPage = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default withAuthorization(PhotosPage);
