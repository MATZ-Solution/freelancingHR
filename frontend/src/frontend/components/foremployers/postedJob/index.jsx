import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { bank_line, paypal_line, wallet_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";
import { useState } from "react";
import ErrorModal from "../../../../admin/component/pages/CustomModal/ErrorsModal";
import Select from "react-select";
import SuccessModal from '../../../../admin/component/pages/CustomModal/index'

const CompanyPostedJob = () => {

  // #########################  VARIABLE START #########################################
  const history = useHistory();
  let [error, setError] = useState(false)
  let [flag, setFlag] = useState(false)
  let token = localStorage.getItem('token')
  let [allJobs, setAllJobs] = useState([])
  let [projectUserData, setProjectUserData] = useState([])
  const [blobUrl, setBlobUrl] = useState(null);
  let [statusDetails, setStatusDetails] = useState({
    status: "",
    getSingleJob: ""
  })
  let [showSuccessModal, setSuccessModal] = useState({
    status: false,
    message: "",
    errorStatus: false
  })
  const options = [
    { value: 1, label: "pending" },
    { value: 2, label: "approved" },
    { value: 3, label: "reject" },
  ];

  // const cancelModal = () => {
  //   let modal = document.getElementById('changeStatus')
  //   if (modal) {
  //     modal.classList.remove('show')
  //     modal.style.display = 'none'
  //     modal.setAttribute('aria-modal', 'false');
  //   }
  // }


  // #########################  VARIABLE END #########################################



  // #########################  API START #########################################

  const getAllJob = async () => {
    try {
      const getAllJobRequest = await fetch(`http://localhost:4500/job/allPostJobs`, {
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
        setFlag(false)
      }
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  const getAllJobUser = async (singleJobID) => {
    setStatusDetails({ ...statusDetails, getSingleJob: singleJobID })
    try {
      const getAllprojectRequest = await fetch(`http://localhost:4500/job/userAppliedJobs/${singleJobID}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
      if (!getAllprojectRequest.ok) {
        setError(true)
      }
      const response = await getAllprojectRequest.json()
      console.log(response)
      if (response?.message === 'Success' && response?.data?.length !== 0) {
        setProjectUserData(response?.data)
      }
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  const updateStatus = async () => {
    try {
      const request = await fetch(`http://localhost:4500/job/updateStatus`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          jobId: statusDetails.getSingleJob,
          status: statusDetails.status
        })
      })
      if (!request.ok) {
        setError(true)
      }
      const response = await request.json()
      console.log(response)

      if (!response.ok) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: true });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: false })
        }, 2000)
      }
      if (response.statusCode === 200) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: false });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: true })
        }, 2000)
        setFlag(true)
        history.push('/company-postedJob')
        // cancelModal()
      }
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  const deleteJob = async (id) => {
    try {
      const request = await fetch(`http://localhost:4500/job/deleteJob`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ jobId: id })
      })
      if (!request.ok) {
        setError(true)
      }
      const response = await request.json()
      if (!response.ok) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: true });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: false })
        }, 2000)
      }
      if (response.statusCode === 200) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '' })
        }, 2000)
        setFlag(true)

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
  }, [flag])

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

  async function Download(url) {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setBlobUrl(blobUrl);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `document`; // Specify the desired file name
      link.click();
    } catch (error) {
      alert(error)
    }

  }

  const handleChangeStatus = (selectedOption) => {
    setStatusDetails({ ...statusDetails, status: selectedOption.label });
  }

  console.log("this is all jobs", allJobs)

  // ######################### FUNCTION END #########################################

  if (error) {
    return <ErrorModal message={'Something Went Wrong'} />
  }

  return (
    <>
      {/* Page Content */}
      {/* {showSuccessModal.status && (<SuccessModal message={showSuccessModal.message} errorStatus={showSuccessModal.errorStatus} />)} */}

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar values='postedJob' />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="dashboard-sec payout-section">
                <div className="page-title portfolio-title" style={{ marginBottom: "0px" }}>
                  <h3 className="mb-0">Posted Job</h3>
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
                </div>
                {
                  allJobs.length === 0 ?
                    <p>No Job Found</p>
                    :
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Job Title</th>
                            <th>Job Category</th>
                            <th>Job Type</th>
                            <th>Status</th>
                            <th>Last Date</th>
                            <th>Action</th>
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
                                    <div className={`badge ${data.status === 'pending' ? 'badge-pending' : data.status === 'approved' ? 'badge-success' : 'badge-fail'}`}>
                                      <span>{data.status}</span>
                                    </div>
                                  </td>
                                  <td>{dates(data.lastDate)}</td>
                                  <td>
                                    {/* <div className="dropdown profile-action"> */}
                                    <Link
                                      to="#"
                                      className="action-icon "
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <Link
                                        className="dropdown-item"
                                        to={`/edit-job/${data?.id}`}
                                      // data-bs-toggle="modal"
                                      // data-bs-target="#"
                                      >
                                        <i className="fas fa-pencil-alt me-1" /> Edit
                                      </Link>
                                      <div
                                        className="dropdown-item"
                                        onClick={() => deleteJob(data?.id)}
                                      >
                                        <i className="far fa-trash-alt me-1" /> Delete
                                      </div>

                                      <Link data-bs-toggle="modal" to="#file" className="dropdown-item"
                                        onClick={() => getAllJobUser(data?.id)}
                                      >
                                        <i className="feather-eye me-1" />
                                        View Applicants
                                      </Link>
                                    </div>
                                    {/* </div> */}
                                    {/* <Link data-bs-toggle="modal" to="#file" className="btn btn-primary sub-btn"
                                onClick={() => getAllJobUser(data?.id)}
                              >
                                View Applicants
                              </Link> */}

                                  </td>
                                </tr>
                              )
                            })
                          }

                        </tbody>
                      </table>
                    </div>
                }

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
      {/* /Page Content */}

      {/* Modal */}
      <>
        <div className="modal fade" id="file">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Applied Applicants</h4>
                <span className="modal-close">
                  <Link to="#" data-bs-dismiss="modal" aria-label="Close"
                    onClick={() => { setProjectUserData([]) }}
                  >
                    <i className="fa fa-times orange-text" />

                  </Link>
                </span>
              </div>
              <div className="modal-body" style={{ padding: "15px" }}>
                <div className="table-top-section">
                </div>
                <div className="table-responsive">
                  {
                    projectUserData?.length !== 0 ?
                      <>
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Applicants Name</th>
                              <th>Email</th>
                              <th>Phone Number</th>
                              <th>Status</th>
                              <th>Apply Date</th>
                              <th>Document</th>
                              <th>Change Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              projectUserData?.map((data, index) => {
                                return (
                                  <tr key={index}>
                                    <td>{data?.firstName} {data?.lastName}</td>
                                    <td>{data?.email}</td>
                                    <td>{data?.phoneNumber ? <>{data?.phoneNumber}</> : <p style={{ color: "red" }}>Not Available</p>}</td>
                                    <td>
                                      <div className={`badge ${data?.status === 'pending' ? 'badge-pending' : data.status === 'approved' ? 'badge-success' : 'badge-fail'}`}>
                                        <span>{data?.status}</span>
                                      </div>
                                    </td>
                                    <td>{dates(data?.createdAt)}</td>
                                    <td>
                                      <button
                                        className="btn btn-primary sub-btn"
                                        onClick={() => Download(data?.resume)}
                                      >Download CV</button>
                                    </td>
                                    <td>
                                      <Link data-bs-toggle="modal" to="#changeStatus">
                                        <button
                                          className="btn btn-primary sub-btn"
                                        >Change Status</button>
                                      </Link>
                                    </td>
                                  </tr>
                                )
                              })
                            }
                          </tbody>
                        </table>
                      </>
                      :
                      <p>No Applicants Found</p>
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* Modal */}

      {/* Change Status Modal */}
      <>
        <div className="modal fade" id="changeStatus">
          {showSuccessModal.status && (<SuccessModal message={showSuccessModal.message} errorStatus={showSuccessModal.errorStatus} />)}
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Change Status</h4>
                <span className="modal-close">
                  <Link to="#" data-bs-dismiss="modal" aria-label="Close"
                    onClick={() => { setProjectUserData([]) }}>
                    <i className="fa fa-times orange-text" />
                  </Link>
                </span>
              </div>
              <div className="modal-body" style={{ padding: "15px" }}>
                <div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Select
                      // value={profileDetails.companyCountry ? options.find((item) => item.label === profileDetails.companyCountry) : ''}
                      className="select"
                      options={options}
                      placeholder="Select"
                      onChange={handleChangeStatus}
                    />
                    <div className="card text-end border-0">
                      <div className="pro-body">
                        <button
                          // type="button"
                          className="btn btn-primary click-btn btn-plan"
                          onClick={updateStatus}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* Change Status Modal */}

    </>
  );
};
export default CompanyPostedJob;
