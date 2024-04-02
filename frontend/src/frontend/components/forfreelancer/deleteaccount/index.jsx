import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { Sidebar } from "../sidebar";
import { Link } from "react-router-dom";
const FreelancerDeleteAccount = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <div className="content content-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="dashboard-sec payout-section freelancer-statements">
                <div className="page-title portfolio-title">
                  <h3 className="mb-0">Delete Account</h3>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-block">
                      <label className="focus-label">
                        Please Explain Further{" "}
                        <span className="label-star"> *</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={5}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-block">
                      <label className="focus-label">
                        Password <span className="label-star"> *</span>
                      </label>
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
                    <div className="d-flex doc-btn">
                      <Link to="#" className="btn btn-gray">
                        Cancel
                      </Link>
                      <Link to="#" className="btn btn-primary">
                        Delete Account
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
      {/* The Modal */}
      <div className="modal fade custom-modal" id="delete-acc">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body del-modal">
              <form>
                <div className="text-center pt-0 mb-5">
                  <i className="fas fa-exclamation-triangle fa-3x" />
                  <h3>Are you sure? Want to delete Account</h3>
                </div>
                <div className="submit-section text-center">
                  <button
                    data-bs-dismiss="modal"
                    className="btn btn-primary black-btn click-btn"
                  >
                    Cancel
                  </button>
                  &nbsp;
                  <button type="submit" className="btn btn-primary click-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /The Modal */}
    </>
  );
};
export default FreelancerDeleteAccount;
