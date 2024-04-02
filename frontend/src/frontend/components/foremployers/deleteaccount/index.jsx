import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from "../sidebar";
const DeleteAccount = () => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
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
    </>
  );
};
export default DeleteAccount;
