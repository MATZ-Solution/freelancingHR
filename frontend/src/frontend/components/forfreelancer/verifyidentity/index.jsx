import React, { useEffect } from "react";
import StickyBox from "react-sticky-box";
import { Sidebar } from "../sidebar";
import Select from "react-select";
import { Link } from "react-router-dom";

const FreelancerVerifyIdentity = () => {
  const options = [
    { value: 0, label: "Select" },
    { value: 1, label: "Option1" },
    { value: 2, label: "Option2" },
  ];
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
                  <h3 className="mb-0">Verification Details</h3>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="mb-3">
                      <label className="focus-label">Document Type</label>
                      <Select
                        options={options}
                        defaultValue="Select" // Default value is "Select"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="mb-3">
                      <label className="focus-label">Document Number</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-block">
                      <label className="form-label">Document Number</label>
                      <div className="upload-sets">
                        <label className="upload-filesview">
                          Browse File
                          <input type="file" />
                        </label>
                        <h6>Or Drag &amp; Drop here</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="d-flex doc-btn">
                      <Link
                        to="#success-verified"
                        data-bs-toggle="modal"
                        className="btn btn-primary"
                      >
                        Submit Verification
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Modal */}
      <div
        className="modal fade success-modal hire-modal"
        id="success-verified"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body pt-4">
              <div className="success-msg-content text-center">
                <h4>Verification Submitted Successfully </h4>
                <p>
                  You will be verified once, admin approves your verification
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

      {/* /Page Content */}
    </>
  );
};
export default FreelancerVerifyIdentity;
