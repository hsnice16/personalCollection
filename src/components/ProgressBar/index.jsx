import React from "react";

const ProgressBar = ({
  gettingPics = false,
  deletingPic = false,
  uploadingPic = false,
  progress = 0,
}) => {
  return (
    <div className="loading pad-2" role="status">
      <div className="circle circle1 list-item-inline"></div>
      <div className="circle circle2 list-item-inline"></div>
      <div className="circle circle3 list-item-inline"></div>
      {gettingPics && (
        <>
          <br />
          <br />
          <div>Getting&nbsp;&nbsp;pics...</div>
        </>
      )}
      {deletingPic && (
        <>
          <br />
          <br />
          <div>Deleting...</div>
        </>
      )}
      {uploadingPic && (
        <>
          <br />
          <br />
          <div>Uploading&nbsp;&nbsp;{progress}%...</div>
        </>
      )}
    </div>
  );
};

export default ProgressBar;
