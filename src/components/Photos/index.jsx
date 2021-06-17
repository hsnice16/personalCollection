import React from "react";
import { withAuthorization } from "../../session/index";

import Main from "./Main";

const PhotosPage = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default withAuthorization(PhotosPage);
