import React from "react";
import { SocialIcon } from "react-social-icons";

import landingPageThree from "../../assets/Images/landing-page-3.png";

const Footer = () => {
  return (
    <footer className="lp-footer border-t">
      <div className="footer-d-sh">
        <div>
          <h3>Connect With Creator: </h3>
          <ul className="list-non-bullet">
            <li className="list-item-inline">
              <SocialIcon url="https://github.com/hsnice16" target="_blank" />
            </li>
            {/* <li className="list-item-inline">
              <SocialIcon
                url="https://www.linkedin.com/in/hsnice16/"
                target="_blank"
              />
            </li>
            <li className="list-item-inline">
              <SocialIcon url="https://twitter.com/hsnice16" target="_blank" />
            </li> */}
          </ul>
        </div>
        {/* <div>
          <h3>Credits: </h3>
          <ul className="list-non-bullet">
            <li className="list-item-inline">
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                firebase
              </a>
            </li>
            <li className="list-item-inline">
              <a
                href="https://www.pexels.com/"
                target="_blank"
                rel="noreferrer"
              >
                pexels
              </a>
            </li>
            <li className="list-item-inline">
              <a href="https://undraw.co/" target="_blank" rel="noreferrer">
                undraw.co
              </a>
            </li>
            <li className="list-item-inline">
              <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
                unsplash
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="footer-d-img">
        <img src={landingPageThree} alt="brand logo" />
        <small>
          &#169; {new Date(Date.now()).getFullYear()}, <br />
          All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
