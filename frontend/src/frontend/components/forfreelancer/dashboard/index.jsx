import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import ApexCharts from 'apexcharts';
import { Avatar_1, Avatar_2, Avatar_3, Avatar_5, flag_icon, freelancer_dash_icon_01, freelancer_dash_icon_02, freelancer_dash_icon_03, freelancer_dash_icon_04, table_avatar_04 } from "../../imagepath";
import { Sidebar } from '../sidebar';
import ErrorModal from "../../../../admin/component/pages/CustomModal/ErrorsModal";
import { useState } from "react";

const FreelancerDashboard = () => {
  var chartprofileoptions = {
    series: [{
      name: "profile view",
      data: [100, 150, 200, 250, 200, 250, 200, 200, 200, 200, 300, 350]
    }],
    chart: {
      height: 360,
      type: 'line',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#14416B"],
    stroke: {
      curve: 'straight',
      width: [1]
    },
    markers: {
      size: 4,
      colors: ["#14416B"],
      strokeColors: "#14416B",
      strokeWidth: 1,
      hover: {
        size: 7,
      }
    },
    grid: {
      position: 'front',
      borderColor: '#ddd',
      strokeDashArray: 7,
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      lines: {
        show: false,
      }
    },
    yaxis: {
      lines: {
        show: true,
      }
    }
  };

  var chartradialOptions = {
    series: [85, 75, 60, 40],
    chart: {
      toolbar: {
        show: false
      },
      height: 250,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '50%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#7B46BE', '#FA6CA4', '#FACD3A', '#24C0DC'],
    labels: ['Applied Jobs', 'Messenger', 'Facebook', 'LinkedIn'],
    legend: {
      show: false,
      floating: true,
      fontSize: '16px',
      position: 'bottom',
      offsetX: 160,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }]
  };

  let [error, setError] = useState(false)
  let [dashboardData, setDashboardData] = useState([])
  let token = localStorage.getItem('token')
  console.log("this is data", dashboardData)

  // #########################  API START #########################################

  const getDashboardDetails = async () => {
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

  // #########################  API END  #########################################


  // #########################  USE EFFECT START  #########################################

  // useEffect(() => {
  //   let chartprofileoptionsColumn = document.getElementById("chartprofile");
  //   let chartprofileoptionsChart = new ApexCharts(chartprofileoptionsColumn, chartprofileoptions);
  //   chartprofileoptionsChart.render();

  //   let invoiceColumn = document.getElementById("chartradial");
  //   let invoiceChart = new ApexCharts(invoiceColumn, chartradialOptions);
  //   invoiceChart.render();
  //   document.body.className = 'dashboard-page';
  //   return () => { document.body.className = 's'; }
  // });

  useEffect(() => {
    document.body.className = "dashboard-page";
  }, [])

  useEffect(() => {
    getDashboardDetails()
  }, [])

  // #########################  USE EFFECT END #########################################

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
                <Sidebar values='dashboard' />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="dashboard-sec">
                <div className="row">
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="dash-widget">
                      <div className="dash-info">
                        <div className="dashboard-icon">
                          <img src={freelancer_dash_icon_01} alt="Img" />
                        </div>
                        <div className="dash-widget-info">Applied Job</div>
                      </div>
                      <div className="dash-widget-more d-flex align-items-center justify-content-between">
                        <div className="dash-widget-count">{dashboardData[0]?.appliedJob}</div>
                        {/* <Link to="/freelancer-completed-projects" className="d-flex">View Details</Link> */}
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="dash-widget">
                      <div className="dash-info">
                        <div className="dashboard-icon dashboard-icon-two">
                          <img src={freelancer_dash_icon_02} alt="Img" />
                        </div>
                        <div className="dash-widget-info">Total Project</div>
                      </div>
                      <div className="dash-widget-more d-flex align-items-center justify-content-between">                        
                      <div className="dash-widget-count">{dashboardData[0]?.totalProject}</div>
                        <Link to="/freelancer-completed-projects" className="d-flex">View Details</Link>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="dash-widget">
                      <div className="dash-info">
                        <div className="dashboard-icon dashboard-icon-three">
                          <img src={freelancer_dash_icon_03} alt="Img" />
                        </div>
                        <div className="dash-widget-info">Applied Project</div>
                      </div>
                      <div className="dash-widget-more d-flex align-items-center justify-content-between">
                      <div className="dash-widget-count">{dashboardData[0]?.appliedProject}</div>
                        {/* <Link to="/freelancer-completed-projects" className="d-flex">View Details</Link> */}
                      </div>
                    </div>
                  </div>
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
                        <Link to="/freelancer-completed-projects" className="d-flex">View Details</Link>
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* Chart Content */}
                {/* <div className="row">
                  <div className="col-xl-8 d-flex">
                    <div className="card flex-fill ongoing-project-card">
                      <div className="pro-head">
                        <h5 className="card-title mb-0">Overview</h5>
                        <div className="month-detail">
                          <select className="form-control">
                            <option value={0}>Last 6 months</option>
                            <option value={1}>Last 2 months</option>
                          </select>
                        </div>
                      </div>
                      <div className="pro-body">
                        <div id="chartprofile" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex">
                    <div className="flex-fill card ongoing-project-card">
                      <div className="pro-head b-0">
                        <h5 className="card-title mb-0">Static Analytics</h5>
                      </div>
                      <div className="pro-body">
                        <div id="chartradial" />
                        <ul className="static-list">
                          <li>
                            <span>
                              <i className="fas fa-circle text-violet me-1" />{" "}
                              Applied Jobs
                            </span>{" "}
                          </li>
                          <li>
                            <span>
                              <i className="fas fa-circle text-pink me-1" /> Active
                              Proposals
                            </span>{" "}
                          </li>
                          <li>
                            <span>
                              <i className="fas fa-circle text-yellow me-1" />{" "}
                              Applied Proposals
                            </span>{" "}
                          </li>
                          <li>
                            <span>
                              <i className="fas fa-circle text-blue me-1" />{" "}
                              Bookmarked Projects
                            </span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* /Chart Content */}
                {/* <div className="row">
                  <div className="col-xl-6 d-flex">
                    <div className="card flex-fill ongoing-project-card ongoing-project-card">
                      <div className="pro-head">
                        <h2>Ongoing Projects</h2>
                        <Link to="/freelancer-ongoing-projects" className="btn fund-btn">View All</Link>
                      </div>
                      <div className="pro-body">
                        <div className="on-project">
                          <span>A2Z Tech Information</span>
                          <h5>Landing Page Redesign / Sales Page Redesign</h5>
                          <div className="pro-info">
                            <ul className="list-details">
                              <li>
                                <div className="slot">
                                  <p>Project type</p>
                                  <h5>Hourly</h5>
                                </div>
                              </li>
                              <li>
                                <div className="slot">
                                  <p>Location</p>
                                  <h5 className="d-flex align-items-center"><img src={flag_icon} className="me-2" alt="Icon" />UK</h5>
                                </div>
                              </li>
                              <li>
                                <div className="slot">
                                  <p>Expiry</p>
                                  <h5>5 Days Left</h5>
                                </div>
                              </li>
                              <li>
                                <div className="slot">
                                  <p>Price</p>
                                  <h5>$280</h5>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="on-project">
                          <span>Amaze Tech</span>
                          <h5>Landing Page Redesign / Sales Page Redesign</h5>
                          <div className="pro-info">
                            <ul className="list-details">
                              <li>
                                <div className="slot">
                                  <p>Project type</p>
                                  <h5>Hourly</h5>
                                </div>
                              </li>
                              <li>
                                <div className="slot">
                                  <p>Location</p>
                                  <h5 className="d-flex align-items-center"><img src={flag_icon} className="me-2" alt="Icon" />UK</h5>
                                </div>
                              </li>
                              <li>
                                <div className="slot">
                                  <p>Expiry</p>
                                  <h5>5 Days Left</h5>
                                </div>
                              </li>
                              <li>
                                <div className="slot">
                                  <p>Price</p>
                                  <h5>$280</h5>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="card mb-4 ongoing-project-card">
                      <div className="pro-head">
                        <h2>Recent Earnings</h2>
                      </div>
                      <div className="table-responsive recent-earnings flex-fill">
                        <table className="table mb-0">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Client</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>29 Sep 2023</td>
                              <td><h2 className="table-avatar table-user">
                                <Link to="#" className="avatar avatar-m me-2"><img className="avatar-img" src={Avatar_1} alt="User Image" /></Link>
                                <Link to="#">
                                  Janet Paden
                                </Link>
                              </h2></td>
                              <td className="action-bg">$80.00</td>
                            </tr>
                            <tr>
                              <td>17 Sep 2023</td>
                              <td><h2 className="table-avatar table-user">
                                <Link to="#" className="avatar avatar-m me-2"><img className="avatar-img" src={Avatar_2} alt="User Image" /></Link>
                                <Link to="#">
                                  Mary Hawkins
                                </Link>
                              </h2></td>
                              <td className="action-bg">$20.50</td>
                            </tr>
                            <tr>
                              <td>13 Sep 2023</td>
                              <td><h2 className="table-avatar table-user">
                                <Link to="#" className="avatar avatar-m me-2"><img className="avatar-img" src={Avatar_3} alt="User Image" /></Link>
                                <Link to="#">
                                  Jerry Garica
                                </Link>
                              </h2></td>
                              <td className="action-bg">$35.70</td>
                            </tr>
                            <tr>
                              <td>07 Sep 2023</td>
                              <td><h2 className="table-avatar table-user">
                                <Link to="#" className="avatar avatar-m me-2"><img className="avatar-img" src={table_avatar_04} alt="User Image" /></Link>
                                <Link to="#">
                                  Barton Taylor
                                </Link>
                              </h2></td>
                              <td className="action-bg">$62.80</td>
                            </tr>
                            <tr>
                              <td>02 Sep 2023</td>
                              <td><h2 className="table-avatar table-user">
                                <Link to="#" className="avatar avatar-m me-2"><img className="avatar-img" src={Avatar_5} alt="User Image" /></Link>
                                <Link to="#">
                                  Jeffrey Bovee
                                </Link>
                              </h2></td>
                              <td className="action-bg">$73.30</td>
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
    </>
  )
}
export default FreelancerDashboard;