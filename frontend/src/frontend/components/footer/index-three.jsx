// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { Appstore, Googleplay, Top_icon } from "../imagepath";

const FooterThree = (props) => {
  const currentYear = new Date().getFullYear();

  // eslint-disable-next-line no-unused-vars, react/prop-types
  const pathname = props.location && props.location.pathname.split("/")[1];

  const exclusionArray = ["/index-three"];

  // eslint-disable-next-line react/prop-types
  if (props.location && exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }

  return (
    <>
      {/* Footer */}
      <footer className="footer footer-three">
        {/* Footer Top Nav */}
        <div className="footer-top-blk">
          <div className="container">
            <div className="footer-social-group">
              <div className="row">
                <div className="col-md-6 col-lg-6 ">
                  <ul className="nav footer-bottom-nav p-0 mb-0">
                    <li>
                      <Link to="/chats">Chat</Link>
                    </li>
                    <li>
                      <Link to="/faq">Faq</Link>
                    </li>
                    <li>
                      <Link to="/review">Reviews</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/term-condition">Terms of use</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="social-icon d-flex">
                    <span>Follow us on : </span>
                    <ul>
                      <li>
                        <Link to="#" className="icon" target="_blank">
                          <i className="fab fa-facebook-f" />{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="icon" target="_blank">
                          <i className="fab fa-linkedin-in" />{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="icon" target="_blank">
                          <i className="fab fa-twitter" />{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top Nav */}
        <div className="footer-top ">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-4">
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
                    <li>
                      <Link to="/forgot-password">Forgot Password</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
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
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Other Links</h2>
                  <ul>
                    <li>
                      <Link to="/freelancer-dashboard">Freelancers</Link>
                    </li>
                    <li>
                      <Link to="/freelancer-portfolio">Freelancer Details</Link>
                    </li>
                    <li>
                      <Link to="/project">Project</Link>
                    </li>
                    <li>
                      <Link to="/project-details">Project Details</Link>
                    </li>
                    <li>
                      <Link to="/post-project">Post Project</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Categories</h2>
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
                    <li>
                      <Link to="/project">Software Architecture</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget footer-menu">
                  <div className="applicate-mobile-blk">
                    <h6>Mobile Application</h6>
                    <p>
                      We help our customers harness the power of AI to make
                      smarter decisions
                    </p>
                  </div>
                  <div className="row g-2">
                    <div className="col-lg-4 col-md-6 col-6">
                      <Link to="#">
                        <img
                          className="img-fluid"
                          src={Appstore}
                          alt="app-store"
                        />
                      </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6">
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
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          {/* Copyright */}
          <div className="copyright">
            <div className="row">
              <div className="col-md-12 col-lg-12 ">
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
        {/* /Footer Bottom */}
      </footer>
      {/* /Footer */}
    </>
  );
};
export default FooterThree;
