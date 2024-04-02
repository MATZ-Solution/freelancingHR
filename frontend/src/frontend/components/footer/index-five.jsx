// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { Appstore, Googleplay, Top_icon } from "../imagepath";
const FooterFive = (props) => {
  const currentYear = new Date().getFullYear();

  // eslint-disable-next-line no-unused-vars, react/prop-types
  const pathname = props.location && props.location.pathname.split("/")[1];

  const exclusionArray = ["/index-five"];

  // eslint-disable-next-line react/prop-types
  if (props.location && exclusionArray.indexOf(props.location.pathname) >= 0) {
    return ""; // Return null instead of an empty string
  }
  // console.log(props.location,"location")

  return (
    <>
      <footer className="footer footer-five">
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
                  <h2 className="footer-title">Featured Catgeories</h2>
                  <ul>
                    <li>
                      <Link to="/project">Illustration</Link>
                    </li>
                    <li>
                      <Link to="/project">Link Building</Link>
                    </li>
                    <li>
                      <Link to="/project">Python Dev</Link>
                    </li>
                    <li>
                      <Link to="/project">Angular Dev</Link>
                    </li>
                    <li>
                      <Link to="/project">Node JS</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Subscribe</h2>
                  <div
                    className="banner-content aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
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
                            <i className="fas fa-long-arrow-alt-right long-arrow" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="applicate-mobile-blk">
                    <h6 className="mb-3">Mobile Application</h6>
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
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-12 col-lg-12 ">
                  <div className="footer-bottom-content">
                    <div className="copyright-text">
                      <p className="mb-0">
                        Copyright {currentYear} © XGEN Freelancing Platform. All right reserved.
                      </p>
                    </div>
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
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
      {/* /Footer */}
    </>
  );
};
export default FooterFive;
