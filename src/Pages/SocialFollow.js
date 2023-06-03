import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
     
      <a href="https://www.linkedin.com/in/garima-chouhan-134370158/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100013853130079/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://twitter.com/garimachouhan91" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a href="https://www.instagram.com/garimachouhan992/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
    </div>
  );
}