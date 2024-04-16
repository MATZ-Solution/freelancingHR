/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import StickyBox from "react-sticky-box";
import ApexCharts from "apexcharts";
import {
  freelancer_dash_icon_01,
  freelancer_dash_icon_02,
  freelancer_dash_icon_03,
  freelancer_dash_icon_04,
} from "../../imagepath";
import { Sidebar } from "../sidebar";
import { useState } from "react";
import ErrorModal from "../../../../admin/component/pages/CustomModal/ErrorsModal";
import SuccessModal from '../../../../admin/component/pages/CustomModal/index'
import Select from "react-select";
import Loader from "../../loader";

const Dashboard = () => {
  const history = useHistory();
  let [error, setError] = useState(false)
  let [dashboardData, setDashboardData] = useState([])
  let token = localStorage.getItem('token')
  let [allJobs, setAllJobs] = useState([])
  let [projectUserData, setProjectUserData] = useState([])
  let [flag, setFlag] = useState(false)
  const [blobUrl, setBlobUrl] = useState(null)
  let [loader, setLoader] = useState(true)

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

  var chartprofileoptions = {
    series: [
      {
        name: "profile view",
        data: [100, 150, 200, 250, 200, 250, 200, 200, 200, 200, 300, 350],
      },
    ],
    chart: {
      height: 360,
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#14416B"],
    stroke: {
      curve: "straight",
      width: [1],
    },
    markers: {
      size: 4,
      colors: ["#14416B"],
      strokeColors: "#14416B",
      strokeWidth: 1,
      hover: {
        size: 7,
      },
    },
    grid: {
      position: "front",
      borderColor: "#ddd",
      strokeDashArray: 7,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  };

  var chartradialOptions = {
    series: [85, 75, 60, 40],
    chart: {
      toolbar: {
        show: false,
      },
      height: 250,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "50%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ["#7B46BE", "#FA6CA4", "#FACD3A", "#24C0DC"],
    labels: ["Applied Jobs", "Messenger", "Facebook", "LinkedIn"],
    legend: {
      show: false,
      floating: true,
      fontSize: "16px",
      position: "bottom",
      offsetX: 160,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };


  // #########################  API START #########################################

  const getDashboardDate = async () => {
    try {
      const request = await fetch(`https://freelanceserver.xgentechnologies.com/freelancingDashboard`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
      if (!request.ok) {
        setError(true)
      }
      const response = await request.json()
      console.log(response)
      if (response.message === 'Success') {
        setDashboardData(response?.data)
      }
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  const getAllJob = async () => {
    try {
      const getAllJobRequest = await fetch(`https://freelanceserver.xgentechnologies.com/job/allPostJobs`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
      if (!getAllJobRequest.ok) {
        setError(true)
        setLoader(false)
      }
      const response = await getAllJobRequest.json()
      console.log(response)
      if (response.message === 'Success' || response.message === 'Jobs Not Found') {
        setAllJobs(response?.data)
        setFlag(false)
        setLoader(false)
      }
    } catch (err) {
      console.log(err)
      setLoader(false)
      setError(true)
    }
  }

  const getAllJobUser = async (singleJobID) => {
    setStatusDetails({ ...statusDetails, getSingleJob: singleJobID })
    try {
      const getAllprojectRequest = await fetch(`https://freelanceserver.xgentechnologies.com/job/userAppliedJobs/${singleJobID}`, {
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

  function dates(date) {
    const dates = new Date(date);
    const formattedDate = dates.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    return formattedDate
  }

  const deleteJob = async (id) => {
    try {
      const request = await fetch(`https://freelanceserver.xgentechnologies.com/job/deleteJob`, {
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

  const updateStatus = async () => {
    try {
      const request = await fetch(`https://freelanceserver.xgentechnologies.com/job/updateStatus`, {
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
        // history.push('/company-postedJob')
        // cancelModal()
      }
    } catch (err) {
      console.log(err)
      setError(true)
    }
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



  // #########################  API END #########################################


  // #########################  HANDLE CHANGE START  #########################################

  const handleChangeStatus = (selectedOption) => {
    setStatusDetails({ ...statusDetails, status: selectedOption.label });
  }
  // #########################  HANDLE CHANGE END  #########################################



  // #########################  USE EFFECT START  #########################################

  // useEffect(() => {
  //   let chartprofileoptionsColumn = document.getElementById("chartprofile");
  //   let chartprofileoptionsChart = new ApexCharts(
  //     chartprofileoptionsColumn,
  //     chartprofileoptions
  //   );
  //   chartprofileoptionsChart.render();

  //   let invoiceColumn = document.getElementById("chartradial");
  //   let invoiceChart = new ApexCharts(invoiceColumn, chartradialOptions);
  //   invoiceChart.render();
  //   document.body.className = "dashboard-page";
  //   return () => {
  //     document.body.className = "s";
  //   };
  // });

  useEffect(() => {
    getDashboardDate()
  }, [])

  useEffect(() => {
    getAllJob()
  }, [flag])

  useEffect(() => {
    document.body.className = "dashboard-page";
  }, [])

  // #########################  USE EFFECT END #########################################
  if (loader) {
    return <Loader />
  }

  if (error) {
    return <ErrorModal message={'Something Went Wrong'} />
  }
  return (
    <>
      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar values='dashboard' />
                {/* dashboard */}
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <div className="dashboard-sec">
                <div>
                  <div className="page-title">
                    <h3>Dashboard</h3>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="dash-widget">
                        <div className="dash-info">
                          <div className="dashboard-icon">
                            <img src={freelancer_dash_icon_01} alt="Img" />
                          </div>
                          <div className="dash-widget-info">Completed Jobs</div>
                        </div>
                        <div className="dash-widget-more d-flex align-items-center justify-content-between">
                          <div className="dash-widget-count">30</div>
                          {/* <Link
                            to="/freelancer-completed-projects"
                            className="d-flex"
                          >
                            View Details
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="dash-widget">
                        <div className="dash-info">
                          <div className="dashboard-icon dashboard-icon-two">
                            <img src={freelancer_dash_icon_02} alt="Img" />
                          </div>
                          <div className="dash-widget-info">Task Completed</div>
                        </div>
                        <div className="dash-widget-more d-flex align-items-center justify-content-between">
                          <div className="dash-widget-count">5</div>
                          {/* <Link
                            to="/freelancer-completed-projects"
                            className="d-flex"
                          >
                            View Details
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="dash-widget">
                        <div className="dash-info">
                          <div className="dashboard-icon dashboard-icon-three">
                            <img src={freelancer_dash_icon_03} alt="Img" />
                          </div>
                          <div className="dash-widget-info">Reviews</div>
                        </div>
                        <div className="dash-widget-more d-flex align-items-center justify-content-between">
                          <div className="dash-widget-count">25</div>
                          <Link
                            to="/freelancer-completed-projects"
                            className="d-flex"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="dash-widget">
                        <div className="dash-info">
                          <div className="dashboard-icon dashboard-icon-four">
                            <img src={freelancer_dash_icon_04} alt="Img" />
                          </div>
                          <div className="dash-widget-info">Earning</div>
                        </div>
                        <div className="dash-widget-more d-flex align-items-center justify-content-between">
                          <div className="dash-widget-count">5962</div>
                          <Link
                            to="/freelancer-completed-projects"
                            className="d-flex"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* <div className="col-xl-9 col-lg-8"> */}
                <div className="">
                  <div className="dashboard-sec payout-section">
                    <div className="page-title portfolio-title" style={{ marginBottom: "0px" }}>
                      <h3 className="mb-0">Recent Posted Jobs</h3>
                    </div>

                    {/* Table */}
                    <div className="table-top-section">
                    </div>
                    {
                      !allJobs ?
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

                {/* Chart Content */}
                {/* <div className="row">
                  <div className="col-xl-8 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title">Profile Views</h5>
                          <div className="dropdown">
                            <button
                              className="btn btn-white btn-sm dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Monthly
                            </button>
                            <div className="dropdown-menu dropdown-menu-start">
                              <Link to="#" className="dropdown-item">
                                Last 2 Month
                              </Link>
                              <Link to="#" className="dropdown-item">
                                Last 6 Month
                              </Link>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div id="chartprofile" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title">Static Analytics</h5>

                        </div>
                      </div>
                      <div className="card-body">
                        <div id="chartradial" />
                        <ul className="static-list">
                          <li>
                            <span>
                              <i className="fas fa-circle text-violet me-1" />
                              Jobs
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fas fa-circle text-pink me-1" />
                              Proposals
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fas fa-circle text-yellow me-1" />
                              Applied Proposals
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fas fa-circle text-blue me-1" />
                              Bookmarked Projects
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="row">
                  <div className="col-xl-12">
                    <div className="card mb-4 ongoing-project-card">
                      <div className="pro-head">
                        <h2>Recent Earnings</h2>
                        <Link
                          to="/view-project-detail"
                          className="btn fund-btn"
                        >
                          View All
                        </Link>
                      </div>
                      <div className="table-responsive recent-earnings flex-fill">
                        <table className="table mb-0">
                          <thead>
                            <tr>
                              <th>Details</th>
                              <th>Job Type</th>
                              <th>Budget</th>
                              <th>Create On</th>
                              <th>Expiring On</th>
                              <th>Proposals</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Website Designer Required </td>
                              <td>Hourly</td>
                              <td>$2222</td>
                              <td>29 Sep 2023</td>
                              <td>10 Oct 2023</td>
                              <td>47</td>
                              <td>
                                <Link to="javascript:void(0);">
                                  <i className="feather-eye" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>Create desktop applications </td>
                              <td>Full time</td>
                              <td>$5762</td>
                              <td>25 Sep 2023</td>
                              <td>05 Oct 2023</td>
                              <td>15</td>
                              <td>
                                <Link to="javascript:void(0);">
                                  <i className="feather-eye" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>PHP, Javascript Projects</td>
                              <td>Part time</td>
                              <td>$4879</td>
                              <td>17 Sep 2023</td>
                              <td>29 Sep 2023</td>
                              <td>26</td>
                              <td>
                                <Link to="javascript:void(0);">
                                  <i className="feather-eye" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>Website Designer Required </td>
                              <td>Hourly</td>
                              <td>$2222</td>
                              <td>29 Sep 2023</td>
                              <td>10 Oct 2023</td>
                              <td>47</td>
                              <td>
                                <Link to="javascript:void(0);">
                                  <i className="feather-eye" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>Swift / SwiftUI Developer</td>
                              <td>Hourly</td>
                              <td>$2789</td>
                              <td>05 Sep 2023</td>
                              <td>17 Sep 2023</td>
                              <td>19</td>
                              <td>
                                <Link to="javascript:void(0);">
                                  <i className="feather-eye" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>Full-stack Developer</td>
                              <td>Part time</td>
                              <td>$7853</td>
                              <td>01 Sep 2023</td>
                              <td>13 Sep 2023</td>
                              <td>38</td>
                              <td>
                                <Link to="javascript:void(0);">
                                  <i className="feather-eye" />
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* /Main Wrapper */}

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

    </>
  );
};
export default Dashboard;
