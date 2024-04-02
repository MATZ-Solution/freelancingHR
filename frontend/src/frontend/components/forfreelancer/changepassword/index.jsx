import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from "../sidebar";

const FreelancerChangePassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const currentYear = new Date().getFullYear();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
  const [password1, setPassword1] = useState("");

  const togglePasswordVisibility1 = () => {
    setIsPasswordVisible1(!isPasswordVisible1);
  };
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
  const [password2, setPassword2] = useState("");

  const togglePasswordVisibility2 = () => {
    setIsPasswordVisible2(!isPasswordVisible2);
  };

  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Start Navigation */}

        {/* Page Content */}
        <div className="content content-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-4 theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>
                  <Sidebar />
                </StickyBox>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="dashboard-sec payout-section freelancer-statements">
                  <div className="page-title portfolio-title">
                    <h3 className="mb-0">Change Password</h3>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label className="focus-label">Old Password </label>
                        <div className="position-relative">
                          <input
                            type={isPasswordVisible ? "text" : "password"}
                            className="form-control floating pass-input1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div
                            className="password-icon"
                            onClick={togglePasswordVisibility}
                          >
                            <span
                              className={`fas toggle-password1 ${
                                isPasswordVisible ? "fa-eye" : "fa-eye-slash"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-block">
                        <label className="focus-label">New Password </label>
                        <div className="position-relative">
                          <input
                            type={isPasswordVisible1 ? "text" : "password"}
                            className="form-control floating pass-input1"
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                          />
                          <div
                            className="password-icon"
                            onClick={togglePasswordVisibility1}
                          >
                            <span
                              className={`fas toggle-password1 ${
                                isPasswordVisible1 ? "fa-eye" : "fa-eye-slash"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-block">
                        <label className="focus-label">Confirm Password </label>
                        <div className="position-relative">
                          <input
                            type={isPasswordVisible2 ? "text" : "password"}
                            className="form-control floating pass-input1"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                          />
                          <div
                            className="password-icon"
                            onClick={togglePasswordVisibility2}
                          >
                            <span
                              className={`fas toggle-password1 ${
                                isPasswordVisible2 ? "fa-eye" : "fa-eye-slash"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="d-flex doc-btn">
                        <Link to="#" className="btn btn-gray">
                          Cancel
                        </Link>
                        <Link
                          to="#password-changed"
                          data-bs-toggle="modal"
                          className="btn btn-primary"
                        >
                          Update
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Footer */}
        <footer className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className=" col-lg-4 col-md-12">
                  <div className="footer-bottom-logo">
                    <Link to="/index" className="menu-logo">
                      <img
                        src="assets/img/logo.svg"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </Link>
                    <p>
                      We’re always in search for talented and motivated people.
                      Don’t be shy introduce yourself!
                    </p>
                    <ul>
                      <li>
                        <Link to="#">
                          <i
                            className="fa-brands fa-facebook-f"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i
                            className="fa-brands fa-twitter"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i
                            className="fa-brands fa-instagram"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i
                            className="fa-brands fa-linkedin"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    </ul>
                    <Link to="#" className="btn btn-connectus">
                      Contact with us
                    </Link>
                  </div>
                </div>
                <div className=" col-lg-8 col-md-12">
                  <div className="row">
                    <div className="col-xl-3 col-md-6">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">Useful Links</h2>
                        <ul>
                          <li>
                            <Link to="/about">
                              <i className="fas fa-angle-right me-1" />
                              About Us
                            </Link>
                          </li>
                          <li>
                            <Link to="/blog-list">
                              <i className="fas fa-angle-right me-1" />
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link to="/login">
                              <i className="fas fa-angle-right me-1" />
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link to="/register">
                              <i className="fas fa-angle-right me-1" />
                              Register
                            </Link>
                          </li>
                          <li>
                            <Link to="/forgot-password">
                              <i className="fas fa-angle-right me-1" />
                              Forgot Password
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">Help &amp; Support</h2>
                        <ul>
                          <li>
                            <Link to="#">
                              <i className="fas fa-angle-right me-1" />
                              Browse Candidates
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fas fa-angle-right me-1" />
                              Employers Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fas fa-angle-right me-1" />
                              Job Packages
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fas fa-angle-right me-1" />
                              Jobs Featured
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fas fa-angle-right me-1" />
                              Post A Job
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">Other Links</h2>
                        <ul>
                          <li>
                            <Link to="/freelancer-dashboard">
                              <i className="fas fa-angle-right me-1" />
                              Freelancers
                            </Link>
                          </li>
                          <li>
                            <Link to="/freelancer-portfolio">
                              <i className="fas fa-angle-right me-1" />
                              Freelancer Details
                            </Link>
                          </li>
                          <li>
                            <Link to="/project">
                              <i className="fas fa-angle-right me-1" />
                              Project
                            </Link>
                          </li>
                          <li>
                            <Link to="/project-details">
                              <i className="fas fa-angle-right me-1" />
                              Project Details
                            </Link>
                          </li>
                          <li>
                            <Link to="/post-project">
                              <i className="fas fa-angle-right me-1" />
                              Post Project
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">Connect With Us</h2>
                        <ul>
                          <li>
                            <Link to="/freelancer-chats">
                              <i className="fas fa-angle-right me-1" />
                              Chat
                            </Link>
                          </li>
                          <li>
                            <Link to="/faq">
                              <i className="fas fa-angle-right me-1" />
                              Faq
                            </Link>
                          </li>
                          <li>
                            <Link to="/freelancer-review">
                              <i className="fas fa-angle-right me-1" />
                              Reviews
                            </Link>
                          </li>
                          <li>
                            <Link to="/privacy-policy">
                              <i className="fas fa-angle-right me-1" />
                              Privacy Policy
                            </Link>
                          </li>
                          <li>
                            <Link to="/term-condition">
                              <i className="fas fa-angle-right me-1" />
                              Terms of use
                            </Link>
                          </li>
                        </ul>
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
                  <div className="col-md-12">
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
        <div className="modal fade" id="payout_modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4>Payout Setting</h4>
                <span className="modal-close">
                  <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                    <i className="fa fa-times orange-text" />
                  </Link>
                </span>
              </div>
              <div className="modal-body">
                <div className="modal-info">
                  <h5>Payout Methods</h5>
                  <div className="payout-method-option">
                    <div className="d-flex align-items-center">
                      <div className="payout-icon">
                        <img src="assets/img/icon/bank-line.svg" alt="icon" />
                      </div>
                      <div className="payout-method-content">
                        <h5>Bank Transfer</h5>
                        <p className="mb-0">Connect your bank account</p>
                      </div>
                    </div>
                    <Link className="badge badge-paid">
                      <span>Connect</span>
                    </Link>
                  </div>
                  <div className="payout-method-option">
                    <div className="d-flex align-items-center">
                      <div className="payout-icon">
                        <img src="assets/img/icon/paypal-line.svg" alt="icon" />
                      </div>
                      <div className="payout-method-content">
                        <h5>Paypal</h5>
                        <p className="mb-0">Connect your Paypal account</p>
                      </div>
                    </div>
                    <Link className="badge badge-paid">
                      <span>Connect</span>
                    </Link>
                  </div>
                </div>
                <form>
                  <div className="submit-section text-end">
                    <Link
                      data-bs-dismiss="modal"
                      className="btn btn-cancel submit-btn"
                    >
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-primary submit-btn"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* The Modal */}
        <div
          className="modal fade success-modal hire-modal"
          id="password-changed"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-body pt-4">
                <div className="success-msg-content text-center">
                  <h4>Password Changed!!! </h4>
                  <p>
                    Your Password Changed successfully,
                    <br />
                    Please login to Continue
                  </p>
                  <Link
                    to="#"
                    data-bs-dismiss="modal"
                    className="btn btn-primary mt-3"
                  >
                    Okay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /The Modal */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};
export default FreelancerChangePassword;
