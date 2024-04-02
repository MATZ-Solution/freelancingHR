import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from "../sidebar";

const ChangePassword = () => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <div className="content content-page bookmark">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
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
                          type="password"
                          className="form-control floating pass-input"
                        />
                        <div className="password-icon ">
                          <span className="fas toggle-password fa-eye-slash" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-block">
                      <label className="focus-label">New Password </label>
                      <div className="position-relative">
                        <input
                          type="password"
                          className="form-control floating pass-input1"
                        />
                        <div className="password-icon ">
                          <span className="fas toggle-password1 fa-eye-slash" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-block">
                      <label className="focus-label">Confirm Password </label>
                      <div className="position-relative">
                        <input
                          type="password"
                          className="form-control floating pass-inputs"
                        />
                        <div className="password-icon ">
                          <span className="fas toggle-passwords fa-eye-slash" />
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
    </>
  );
};
export default ChangePassword;
