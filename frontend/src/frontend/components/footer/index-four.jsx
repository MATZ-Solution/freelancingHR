// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { Appstore, Googleplay, Top_icon } from "../imagepath";
const FooterFour = (props) => {
  const currentYear = new Date().getFullYear();

  // eslint-disable-next-line no-unused-vars, react/prop-types
  const pathname = props.location && props.location.pathname.split("/")[1];

  const exclusionArray = ["/index-four"];
  // eslint-disable-next-line react/prop-types
  if (props.location && exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  // console.log(props.location,"location")
  return (
    <>
      {/* Footer */}
      <footer className="footer footer-four">
        <div className="footer-top ">
          <div className="container">
            <div className="row row-gap">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="subscribe-four">
                      <div className="banner-content">
                        <form
                          className="form"
                          name="store"
                          method="post"
                          action="/project"
                        >
                          <div className="form-inner">
                            <div className="input-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Your Email address....."
                              />
                              <button
                                className="btn btn-primary sub-btn"
                                type="submit"
                              >
                                Send mail
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Useful Links</h2>
                      <ul>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/blog-list">Blog</Link>
                        </li>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Help &amp; Support</h2>
                      <ul>
                        <li>
                          <Link to="#">Browse Candidates</Link>
                        </li>
                        <li>
                          <Link to="#">Employers Dashboard</Link>
                        </li>
                        <li>
                          <Link to="#">Job Packages</Link>
                        </li>
                        <li>
                          <Link to="#">Jobs Featured</Link>
                        </li>
                        <li>
                          <Link to="#">Post A Job</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Catgeories</h2>
                      <ul>
                        <li>
                          <Link to="/project">Website Design</Link>
                        </li>
                        <li>
                          <Link to="/project">Mobile Apps</Link>
                        </li>
                        <li>
                          <Link to="/project">Android Apps</Link>
                        </li>
                        <li>
                          <Link to="/project">iPhone Apps</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="footer-widget footer-menu play-app">
                      <div className="row">
                        <div className="col-lg-4 col-md-4">
                          <div className="free-customer">
                            <p>Toll Free Customer Care</p>
                            <h6>+91 26447 99875</h6>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="free-customer">
                            <p>Customization Email</p>
                            <h6>custom@example.com</h6>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="free-customer">
                            <p>Need live support?</p>
                            <h6>info@example.com</h6>
                          </div>
                        </div>
                      </div>
                      <div className="applicate-mobile-blk">
                        <h6>Mobile Application</h6>
                        <p>
                          Download our App and get the latest Breaking News
                          Alerts and latest headlines and daily articles near
                          you.
                        </p>
                      </div>
                      <div className="row g-2">
                        <div className="col-lg-4">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              src={Appstore}
                              alt="app-store"
                            />
                          </Link>
                        </div>
                        <div className="col-lg-4">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              src={Googleplay}
                              alt="google-play"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-12 ">
                  <div className="copyright-text text-center">
                    <p className="mb-0">
                      Copyright {currentYear} © XGEN Freelancing Platform. All right reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
      {/* /Footer */}
    </>
  );
};
export default FooterFour;
