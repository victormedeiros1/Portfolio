import React from "react";

import { ContactStyles } from "./styles";
import HeaderSection from "../HeaderSection";
import BigLogo from "../BigLogo";

function Contact() {
  return (
    <ContactStyles className="contact">
      <div className="contact--left">
        <HeaderSection title="CONTACT" />
        <div className="contact--left--medias">
          <ul className="contact--left--medias--list">
            <li className="contact--left--medias--list--item">
              <a href="#" className="contact--left--medias--list--item--link">
                <img
                  alt="linkedin icon"
                  className="contact--left--medias--list--item--link--icon"
                  src="/images/medias/linkedin.svg"
                />
                LinkedIn
              </a>
            </li>
            <li className="contact--left--medias--list--item">
              <a href="#" className="contact--left--medias--list--item--link">
                <img
                  alt="github icon"
                  className="contact--left--medias--list--item--link--icon"
                  src="/images/medias/github.svg"
                />
                GitHub
              </a>
            </li>
            <li className="contact--left--medias--list--item">
              <a href="#" className="contact--left--medias--list--item--link">
                <img
                  alt="dribbble icon"
                  className="contact--left--medias--list--item--link--icon"
                  src="/images/medias/dribbble.svg"
                />
                Dribbble
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact--right">
        <BigLogo />
      </div>
    </ContactStyles>
  );
}

export default Contact;
