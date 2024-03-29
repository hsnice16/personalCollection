import React from "react";
import { BsFilePlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

import { BiShareAlt } from "react-icons/bi";
import Error from "../Error/index";
import ProgressBar from "../ProgressBar/index";

import Modal from "../Modal/index";
import { FaDownload } from "react-icons/fa";

const MainBody = ({
  state,
  dispatch,
  handleChange,
  handleDeleteBtnClick,
  handleShareBtnClick,
  handleDownloadBtnClick,
}) => {
  return (
    <section>
      <h2 className="font-s-2">Your Collection</h2>
      <div className="div-file-chooser">
        <input
          type="file"
          id="photo-picker"
          accept="image/*"
          onChange={handleChange}
        />
        <label htmlFor="photo-picker">
          <BsFilePlus className="file-plus" />
          <div>Add File</div>
        </label>
      </div>
      {state.loading ? (
        <ProgressBar gettingPics={true} />
      ) : (
        <>
          {state.error && (
            <div className="error-container">
              <Error error={state.error} />
            </div>
          )}

          {state.uploading && (
            <ProgressBar uploadingPic={true} progress={state.progress} />
          )}

          {state.deleting && <Modal deletingPic={true} />}

          {state.shareURL && (
            <Modal
              sharePicURL={state.shareURL}
              dispatch={dispatch}
              copiedToClipboard={state.copiedToClipboard}
            />
          )}

          {state.allImages.length === 0 && (
            <div className="div-no-pics">
              <span>No moment yet, ☝️ upload today</span>
            </div>
          )}

          <ul className="photo-container">
            {state.allImages.length
              ? state.allImages.map((image) => (
                  <li
                    key={image.id}
                    onMouseOver={() => {
                      dispatch({ type: "showButtons", payload: true });
                      dispatch({ type: "listId", payload: image.id });
                    }}
                    onMouseOut={() => {
                      dispatch({ type: "showButtons", payload: false });
                      dispatch({ type: "listId", payload: "" });
                    }}
                  >
                    <div
                      className={`div-btn-container ${
                        state.showButtons && state.listId === image.id
                          ? ""
                          : "div-btn-container-visiblity"
                      }`}
                    >
                      <button
                        className="btn-delete"
                        onClick={() => handleDeleteBtnClick(image.name)}
                      >
                        <MdDeleteForever className="svg" />
                      </button>
                      <button
                        className="btn-share"
                        onClick={() => handleShareBtnClick(image.url)}
                      >
                        <BiShareAlt className="svg" />
                      </button>
                      <button
                        className="btn-download"
                        onClick={() =>
                          handleDownloadBtnClick(image.url, image.name)
                        }
                      >
                        <FaDownload className="svg" />
                      </button>
                    </div>
                    <img
                      src={image.url}
                      alt={`${image.name}`}
                      className={`${
                        state.showButtons && state.listId === image.id
                          ? "img-opacity"
                          : ""
                      }`}
                    />
                  </li>
                ))
              : ""}
          </ul>
        </>
      )}
    </section>
  );
};

export default MainBody;
