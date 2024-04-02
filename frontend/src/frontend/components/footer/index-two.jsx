// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { jobsecbg01, jobsecbg02 } from "../imagepath";
import { Link } from "react-router-dom";

const FooterTwo = (props) => {
  const currentYear = new Date().getFullYear();

  // eslint-disable-next-line react/prop-types, no-unused-vars
  const pathname = props.location && props.location.pathname.split("/")[1];

  const exclusionArray = ["/index-two"];

  // eslint-disable-next-line react/prop-types
  if (props.location && exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }

  return (
    <>
      {/* News */}
      <section className="section job-register-two">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="register-job-blk justify-content-center">
                <div
                  className="job-content-blk text-center aos"
                  data-aos="fade-up"
                >
                  <h2>Find Your Next Great Job Opportunity!</h2>
                  <p>
                    Quisque pretium dolor turpis, quis blandit turpis semper ut.
                    Nam malesuada eros nec luctus laoreet.
                  </p>
                </div>
                <div className="bg-img">
                  <img
                    src={jobsecbg01}
                    className="img-fluid job-right-bg"
                    alt="Img"
                  />
                  <img
                    src={jobsecbg02}
                    className="img-fluid job-left-bg"
                    alt="Img"
                  />
                </div>
              </div>
              <div
                className="sign-in-btn text-center mt-5 aos"
                data-aos="fade-up"
              >
                <Link to="/login" className="btn btn-primary">
                  Register XGEN Freelancing Platform{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer footer-two" id="bottom-scroll">
        <div className="footer-top ">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-3">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Useful Links</h2>
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
              <div className="col-xl-2 col-md-3">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Pages</h2>
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
              <div className="col-xl-3 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Featured Categories</h2>
                  <ul>
                    <li>
                      <Link to="#">Website Design</Link>
                    </li>
                    <li>
                      <Link to="#">Mobile Apps</Link>
                    </li>
                    <li>
                      <Link to="#">Android Apps</Link>
                    </li>
                    <li>
                      <Link to="#">iPhone Apps</Link>
                    </li>
                    <li>
                      <Link to="#">Software Architecture</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Get Contact</h2>
                  <ul className="info-contact">
                    <li>Phone: (406) 555-0120</li>
                    <li>E-mail: info@example.com</li>
                  </ul>
                  <h2 className="footer-title mb-0">Newsletter</h2>
                  <div
                    className="banner-content aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <form
                      className="form"
                      name="store"
                      method="post"
                      action="#"
                    >
                      <div className="form-inner mb-0">
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Email here.."
                          />
                          <button
                            className="btn btn-primary sub-btn"
                            type="submit"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
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
              <div className="col-md-12">
                <div className="copyright-text text-center">
                  <p className="mb-0">
                    Copyright {currentYear} © XGEN Freelancing Platform. All right reserved.{" "}
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
export default FooterTwo;
