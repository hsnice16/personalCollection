import React from "react";

// import horseRunning from "../../assets/Videos/horse-running.mp4";

import landingPageOne from "../../assets/Images/landing-page-1.jpg";
import landingPageTwo from "../../assets/Images/landing-page-2.jpg";

const Main = () => {
  return (
    <main>
      {/* <section
        id="section-1"
        className="min-h-50 pad-2 display-grid grid-t-c-bs-2"
      >
        <div className="col1">
          <h1 className="font-s-2 pad-s-1">
            <span className="span">Now, </span>
            You can collect your videos at one place.
          </h1>
        </div>
        <div className="col2 pad-2 pad-s-1">
          <div className="div-video">
            <video className="div-video-content" autoPlay loop muted>
              <source src={horseRunning} type="video/mp4" />
              Your browser either does not support mp4 video type or video tag.
            </video>
          </div>
        </div>
      </section> */}
      <section
        id="section-2"
        className="min-h-50 pad-2 display-grid grid-t-c-bs-2"
      >
        <div className="col2">
          <h1 className="font-s-2 pad-2 pad-1-0">
            <span className="span">Now</span>, You can collect your pics in one
            place.
          </h1>
        </div>
        <div className="col1 position-rel pad-2 pad-s-0">
          <div className="div-card position-rel animation-down-5">
            <img
              className="div-card-img"
              src={landingPageOne}
              alt="img 1: a man holding an open book"
            />
          </div>
          <div className="div-card position-abs animation-up-5">
            <img
              className="div-card-img"
              src={landingPageTwo}
              alt="img 2: three girls standing"
            />
          </div>
        </div>
        <div className="col2">
          <h1 className="font-s-2 pad-2 pad-1-0">
            {/* You can collect your pics at one place{" "}
            <span className="span">Too</span>. */}
            And Can share with others from&nbsp;
            <span className="span">Anywhere</span>
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Main;
