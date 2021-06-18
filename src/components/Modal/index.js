import React from "react";
import ProgressBar from "../ProgressBar/index";

import { MdContentCopy } from "react-icons/md";
import copy from "copy-to-clipboard";

const Modal = ({
  deletingPic = false,
  sharePicURL = "",
  dispatch = null,
  copiedToClipboard = false,
}) => {
  const handleDivModalContainer = (event) => {
    if (event.target.classList.contains("div-modal-container")) {
      if (sharePicURL) dispatch({ type: "shareURL", payload: "" });
      if (copiedToClipboard)
        dispatch({ type: "copiedToClipboard", paylaod: false });
    }
  };

  return (
    <div
      className="div-modal-container"
      style={{ top: document.documentElement.scrollTop }}
      onClick={handleDivModalContainer}
    >
      <div className="div-modal">
        {deletingPic && <ProgressBar deletingPic={deletingPic} />}

        {sharePicURL && (
          <div className="div-share-url-container">
            <input className="input-share-url" value={sharePicURL} readOnly />
            <MdContentCopy
              className="copy-to-clipboard-svg"
              onClick={() => {
                if (copy(sharePicURL))
                  dispatch({ type: "copiedToClipboard", payload: true });
              }}
            />
          </div>
        )}

        {copiedToClipboard && (
          <span className="span-copied-to-clipboard">copied to clipboard</span>
        )}
      </div>
    </div>
  );
};

export default Modal;
