import "./Footer.css";
import logoWhite from "../../assets/logo-white.svg";
import instagramIcon from "../../assets/footer-instagram-icon.svg";
import browserIcon from "../../assets/footer-browser-icon.svg";
import twitterIcon from "../../assets/footer-twitter-icon.svg";
import youtubeIcon from "../../assets/footer-youtube-icon.svg";
import sendArrowIcon from "../../assets/send-icon-white.svg";
import FlexGrid from "../FlexGrid/FlexGrid";

function Footer() {
  return (
    <div className="Footer background-black">
      <FlexGrid center1440={true}>
        <div className="footer-container flex-grid padding-bottom-footer padding-top-64">
          <div className="footer-flex-grid flex-grid footer-company-info">
            <div className="logo-footer">
              <img src={logoWhite} />
            </div>
            <div>
              <div className="light-grey footer-h3">
                Copyright © 2020 Nexcent ltd.
              </div>
              <div className="light-grey padding-top-8 footer-h3">
                All rights reserved
              </div>
            </div>
            <div className="footer-flex-social">
              <div className="cursor-pointer">
                <img src={instagramIcon} />
              </div>
              <div className="cursor-pointer">
                <img src={browserIcon} />
              </div>
              <div className="cursor-pointer">
                <img src={twitterIcon} />
              </div>
              <div className="cursor-pointer">
                <img src={youtubeIcon} />
              </div>
            </div>
          </div>

          <div className="footer-flex-grid">
            <div className="footer-links-parent">
              <div className="footer-links-grid-col">
                <div>
                  <div className="white headline-4 padding-bottom-12">
                    Company
                  </div>
                </div>
                <div>
                  <div className="light-grey cursor-pointer footer-h3">
                    About us
                  </div>
                </div>
                <div>
                  <div className="light-grey cursor-pointer footer-h3">
                    Blog
                  </div>
                </div>
                <div>
                  <div className="light-grey cursor-pointer footer-h3">
                    Contact us
                  </div>
                </div>
                <div>
                  <div className="light-grey cursor-pointer footer-h3">
                    Pricing
                  </div>
                </div>
                <div>
                  <div className="light-grey cursor-pointer footer-h3">
                    Testimonials
                  </div>
                </div>
              </div>

              <div className="footer-links-grid-col">
                <div>
                  <div className="white headline-4 padding-bottom-12">
                    Support
                  </div>
                </div>
                <div>
                  <div className="light-grey cursor-pointer footer-h3">
                    Help center
                  </div>
                </div>
                <div>
                  <div className="light-grey cursor-pointer footer-h3">
                    Terms of service
                  </div>
                </div>
                <div>
                  <div className="light-grey cursor-pointer footer-h3">
                    Legal
                  </div>
                </div>
                <div>
                  <div className="light-grey cursor-pointer footer-h3">
                    Privacy policy
                  </div>
                </div>
                <div>
                  <div className="light-grey cursor-pointer footer-h3">
                    Status
                  </div>
                </div>
              </div>
              <div className="footer-links-grid-col">
                <div>
                  <div className="white headline-4 padding-bottom-12">
                    Stay up to date
                  </div>
                </div>

                <div className="email-input-field">
                  <input placeholder="Your email here:" />
                  <img src={sendArrowIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FlexGrid>
    </div>
  );
}

export default Footer;
