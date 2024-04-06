import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { bank_line, paypal_line, wallet_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";
import { useState } from "react";
import ErrorModal from "../../../../admin/component/pages/CustomModal/ErrorsModal";

const FreelancerAppliedJob = () => {

  // #########################  VARIABLE START #########################################

  let [error, setError] = useState(false)
  let token = localStorage.getItem('token')
  let [allJobs, setAllJobs] = useState([])

  // #########################  VARIABLE END #########################################



  // #########################  API START #########################################

  const getAllJob = async () => {
    try {
      const getAllJobRequest = await fetch(`https://freelanceserver.xgentechnologies.com/job/allAppliedJobs`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
      if (!getAllJobRequest.ok) {
        setError(true)
      }
      const response = await getAllJobRequest.json()
      console.log(response)
      if (response.message === 'Success') {
        setAllJobs(response?.data)
      }
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  // #########################  API END #########################################


  // #########################  USE EFFECT START #########################################

  useEffect(() => {
    getAllJob()
  }, [])

  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  // #########################  USE EFFECT  END #########################################


  // #########################  FUNCTION START #########################################

  function dates(date) {
    const dates = new Date(date);
    const formattedDate = dates.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    return formattedDate
  }

  // ######################### FUNCTION END #########################################



  if (error) {
    return <ErrorModal message={'Something Went Wrong'} />
  }

  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar values='appliedJob' />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="dashboard-sec payout-section">
                <div className="page-title portfolio-title" style={{ marginBottom: "0px" }}>
                  <h3 className="mb-0">Applied Job</h3>
                  {/* <Link
                    className="btn btn-primary title-btn"
                    data-bs-toggle="modal"
                    to="#payout_modal"
                  >
                    <i className="feather-settings" /> Payout Setting
                  </Link> */}
                </div>
                {/* <div className="widget-section">
                  <div className="row row-gap">
                    <div className="col-md-6 col-xl-4 d-flex">
                      <div className="dash-widget flex-fill">
                        <div className="dash-info">
                          <div className="d-flex">
                            <div className="dashboard-icon">
                              <img src={wallet_icon} alt="Img" />
                            </div>
                            <div className="dash-widget-info">
                              <span>Previous Payout</span>
                              <h5>$5,231.00</h5>
                            </div>
                          </div>
                          <div className="badge badge-paid">
                            <span>Paid</span>
                          </div>
                        </div>
                        <div className="dash-widget-more d-flex align-items-center justify-content-between">
                          <div className="dash-widget-date">
                            <span>17 Aug 2023</span>
                          </div>
                          <Link
                            to="/freelancer-completed-projects"
                            className="d-flex"
                          >
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4 d-flex">
                      <div className="dash-widget flex-fill">
                        <div className="dash-info">
                          <div className="d-flex">
                            <div className="dashboard-icon">
                              <img src={wallet_icon} alt="Img" />
                            </div>
                            <div className="dash-widget-info">
                              <span>Balance</span>
                              <h5>$3,270.00</h5>
                            </div>
                          </div>
                          <div className="badge badge-pending">
                            <span>Pending</span>
                          </div>
                        </div>
                        <div className="dash-widget-more d-flex align-items-center justify-content-between">
                          <div className="dash-widget-date">
                            <Link to="#"> Payout Request</Link>
                          </div>
                          <Link
                            to="/freelancer-completed-projects"
                            className="d-flex"
                          >
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4 d-flex">
                      <div className="dash-widget flex-fill d-flex align-items-center">
                        <div className="dash-info mb-0">
                          <div className="d-flex">
                            <div className="dashboard-icon">
                              <img src={wallet_icon} alt="Img" />
                            </div>
                            <div className="dash-widget-info">
                              <span>Total Projects</span>
                              <h5>107</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* Table */}
                <div className="table-top-section">
                  {/* <div className="table-header">
                    <h5 className="mb-0">Payout History</h5>
                  </div> */}
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Job Title</th>
                        <th>Job Category</th>
                        <th>Job Type</th>
                        <th>Status</th>
                        <th>Last Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        allJobs?.map((data, index) => {
                          return (
                            <tr key={index}>
                              <td>{data.jobTitle}</td>
                              <td>{data.jobCategory}</td>
                              <td>{data.jobType}</td>
                              <td>
                                <div className={`badge ${ data.status === 'pending' ? 'badge-pending': data.status === 'success'? 'badge-success' : 'badge-fail'}`}>
                                  <span>{data.status}</span>
                                </div>
                              </td>
                              <td>{dates(data.lastDate)}</td>
                            </tr>
                    )
                        })
                      }

                  </tbody>
                </table>
              </div>
              {/* /Table */}
            </div>
          </div>
        </div>

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
                        <img src={bank_line} alt="icon" />
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
                        <img src={paypal_line} alt="icon" />
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
                <form action="#">
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
      </div>
    </div >
      {/* /Page Content */ }
    </>
  );
};
export default FreelancerAppliedJob;
