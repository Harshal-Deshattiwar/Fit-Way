import React from "react";
import "./footerStyle.css";
import { BsInstagram ,BsFacebook,BsTwitter,BsSnapchat} from "react-icons/bs";
function Footer() {
  return (
    <div className="footer-dark" id="aboutFooter">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="/">Basic training</a>
                </li>
                <li>
                  <a href="/">Body Building</a>
                </li>
                <li>
                  <a href="/">Yoga</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="/">Company</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>FITWAY</h3>
              <p>
                If we could give every individual the right amount of
                nourishment and exercise, not too little and not too much, we
                would have found the safest way to health
              </p>
            </div>
            <div className="col item social">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <BsFacebook></BsFacebook>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              < BsInstagram></BsInstagram>
              </a>
              <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                <BsTwitter></BsTwitter>
              </a>
              <a href="https://www.snapchat.com/ " target="_blank" rel="noopener noreferrer">
                <BsSnapchat></BsSnapchat>
              </a>
            </div>
          </div>
          <br />
          <p className="copyright bringCenter">FITWAY.ltd © 2018</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
