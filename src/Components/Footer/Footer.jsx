import React from "react";

import "./Footer.scss";

import gPlus from "../../img/G+.svg";
import Twitter from "../../img/Twitter.svg";
import Youtube from "../../img/Youtube.svg";
import Instagram from "../../img/Instagram.svg";
import Facebook from "../../img/Facebook.svg";
import Apple from "../../img/US_UK_Download_on_the.svg";
import GooglePlay from "../../img/google-play-badge.svg";
import Amazon from "../../img/amazon.svg";
import First from "../../img/Rectangle 4.png";
import Second from "../../img/Rectangle 4 Copy.png";
import Third from "../../img/Rectangle 4 Copy 2.png";
import Fourth from "../../img/Rectangle 4 Copy 3.png";
import Fifth from "../../img/Rectangle 4 Copy 4.png";
import Sixth from "../../img/Rectangle 4 Copy 5.png";
import AmazonLogo from "../../img/AmazonLogo.svg"

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container flexParentWrapper">
          <div className="everywhere">
            <p className="everywhere-title">IMDb Everywhere</p>
            <div className="toDownload">
              <img src={Apple} alt="" />
              <img className="platforms" src={GooglePlay} alt="" />
              <img className="platforms" src={Amazon} alt="" />
            </div>
            <p className="down-Text">
              Find showtimes, watch trailers, browse photos, track your
              Watchlist and rate your favorite movies and TV shows on your phone
              or tablet!
            </p>
            <a href="#" className="mobileSite">
              IMDB Mobile site
            </a>
          </div>
          <div className="followUs">
            <p className="everywhere-title">Follow us</p>
            <div className="imgFlex">
              <div className="imageWrapper">
                <img src={Facebook} alt="" className="socialMedia" />
              </div>
              <div className="imageWrapper">
                <img src={Instagram} alt="" className="socialMedia" />
              </div>
              <div className="imageWrapper">
                <img src={Youtube} alt="" className="socialMedia" />
              </div>
              <div className="imageWrapper">
                <img src={gPlus} alt="" className="socialMedia" />
              </div>
              <div className="imageWrapper">
                <img src={Twitter} alt="" className="socialMedia" />
              </div>
            </div>
          </div>
          <div className="flickGallery">
            <p className="everywhere-title">Flick Gallery</p>
            <div className="imgFlex additional">
              <div>
                <img src={First} alt="" />
              </div>
              <div>
                <img src={Second} alt="" />
              </div>
              <div>
                <img src={Third} alt="" />
              </div>
              <div>
                <img src={Fourth} alt="" />
              </div>
              <div>
                <img src={Fifth} alt="" />
              </div>
              <div>
                <img src={Sixth} alt="" />
              </div>
            </div>
          </div>
          <div className="manyLinks">
            <div className="link-container">
              <a className="footer-link" href="">
                Home
              </a>
              <a className="footer-link" href="">
                Top Rated Movies
              </a>
              <a className="footer-link" href="">
                Box Office
              </a>
              <a className="footer-link" href="">
                TV
              </a>
              <a className="footer-link" href="">
                Coming Soon
              </a>
              <a className="footer-link" href="">
                Site Index
              </a>
              <a className="footer-link" href="">
                Search
              </a>
            </div>
            <div className="link-container">
              <a className="footer-link" href="">
                Contact Us
              </a>
              <a className="footer-link" href="">
                Message Boards
              </a>
              <a className="footer-link" href="">
                Account
              </a>
              <a className="footer-link" href="">
                News
              </a>
              <a className="footer-link" href="">
                Press Room
              </a>
              <a className="footer-link" href="">
                Advertising
              </a>
              <a className="footer-link" href="">
                Jobs
              </a>
            </div>
            <div className="link-container">
              <a className="footer-link" href="">
                IMDb Pro
              </a>
              <a className="footer-link" href="">
                Box Office Mojo
              </a>
              <a className="footer-link" href="">
                Withoutabox
              </a>
              <a className="footer-link" href="">
                Conditions of Use
              </a>
              <a className="footer-link" href="">
                Privacy Policy
              </a>
              <a className="footer-link" href="">
                Interest-Based Ads
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="amazonCompany container">
        <div className="companyLogo">An <img className="logoAmazon" src={AmazonLogo} alt="" /> company.</div>
        <div className="copyright"><p className="copyright-text"><a className="footer-link">Copyright ©</a> 1990-2016 <a className="footer-link">IMDb.com, Inc.</a></p></div>
      </div>
    </>
  );
}
