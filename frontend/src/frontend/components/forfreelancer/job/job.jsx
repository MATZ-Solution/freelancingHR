import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import {
  company_img1,
  locations,
  company_img2,
  company_img3,
  company_img4,
  company_img5,
  company_img6,
  company_img7,
  company_img8,
  company_img9,
} from "../../imagepath";
import Select from "react-select";
import EmployerBreadcrumb from "../../foremployers/common/employerBreadcrumb";
import FreelancerSidebar from "../../foremployers/common/freelancerSidebar";

const Jobs = () => {
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  const handleItemClick = (index) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };
  const optionsSelect = [
    { value: 1, label: "Relevance" },
    { value: 2, label: "Rating" },
    { value: 3, label: "Latest" },
    { value: 4, label: "Free" },
  ];

  const [getjob, setjob] = useState([])
  const [error, setError] = useState(false)
  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const hasKeywords = searchParams.has("keywords");
  const keywords = searchParams.get("keywords");

  // ###################### API START ####################################################

  const getJob = async () => {
    try {
      const getJobRequest = await fetch('http://localhost:4500/job/getAllJobs', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const response = await getJobRequest.json()
      console.log(response)
      if (response.message === 'Success') {
        setjob(response?.data)
      }
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  const getJobAccKeywords = async () => {
    try {
      const jobKeywordRequest = await fetch(`http://localhost:4500/searchJob/${keywords}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const response = await jobKeywordRequest.json()
      console.log(response)
      if (!jobKeywordRequest.ok) {
        setError(true)
      }
      if (response.message === 'Success') {
        setjob(response?.data)
      }
      else {
        setError(true)
      }
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  console.log(getjob)
  // ###################### API START ####################################################


  // ###################### USE EFFECT START ####################################################

  useEffect(() => {
    if (hasKeywords) {
      getJobAccKeywords()
    }
    else {
      getJob()
    }
  }, [])

  // ###################### USE EFFECT START ####################################################

  function dates(date) {
    const dates = new Date(date);
    const formattedDate = dates.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    return formattedDate
  }

  return (
    <>
      {/* Breadcrumb */}
      <EmployerBreadcrumb title="Job Grid" subtitle="jobs" />
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                {/* Search Filter */}
                <FreelancerSidebar />
                {/* /Search Filter */}
              </StickyBox>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">

              <div className="sort-tab develop-list-select">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="freelance-view">
                        <h4> {
                          getjob?.length ?
                            <h4>Found {getjob?.length} Results</h4>
                            :
                            <h4>No Job Found</h4>
                        } </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-sm-end">
                    <div className="sort-by">
                      <Select
                        className="select "
                        options={optionsSelect}
                        placeholder="Sort by (Default)"
                      />
                    </div>
                    <ul className="list-grid d-flex align-items-center">
                      <li><Link to="/job" className="favour-active"><i className="fas fa-th-large" /></Link></li>
                      <li><Link to="/job-list"><i className="fas fa-list" /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>


              <div>
                <div className="bootstrap-tags text-start pl-0 d-none">
                  <span className="badge badge-pill badge-skills">UI/UX Developer <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span>
                  <span className="badge badge-pill badge-skills">USA <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span>
                  <span className="badge badge-pill badge-skills">Hourly <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span>
                  <span className="badge badge-pill badge-skills">0-1 years <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span>
                  <span className="badge badge-pill badge-skills">USD <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span>
                </div>
                <div className="row" >
                  {
                    getjob?.length !== 0 ?
                      <>
                        {
                          getjob?.map((job, index) => {
                            return (

                              < div className="col-xl-4 col-md-6" key={index} >
                                <div className="freelance-widget widget-author position-relative">
                                  <div className="freelance-content">
                                    <div className="freelance-location freelance-time"><i className="feather-clock me-1" /> {dates(job?.createdAt)}</div>
                                    {/* <Link data-bs-toggle="modal" to="#rating" onClick={() => handleItemClick(1)} className={`favourite ${selectedItems[1] ? 'color-active' : ''}`}><i className="feather-heart" /></Link> */}
                                    <div className="author-heading ">
                                      <div className=" freelance-img">
                                        <Link to="#">
                                          <img src={company_img1} alt="author" />
                                          <span className="verified"><i className="fas fa-check-circle" /></span>
                                        </Link>
                                      </div>
                                      <div className="profile-name">
                                        <div className="author-location">{job?.jobTitle}</div>
                                      </div>
                                      <div className="freelance-info">
                                        <h3><Link to="#">{job?.jobType}</Link></h3>
                                        <div className="freelance-location"><img src={locations} className="me-2" alt="img" />{job?.location}</div>
                                      </div>
                                      {/* <div className="freelance-tags">
                  <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">React</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">PHP</span></Link>
                </div> */}
                                      <div className="freelancers-price">{job?.amount}</div>
                                    </div>
                                    <div className="counter-stats">
                                      <ul style={{ justifyContent: 'space-between' }}>
                                        <li>
                                          <h5>{dates(job?.lastDate)}</h5>
                                          <h3 className="counter-value">4 Days Left</h3>
                                        </li>
                                        {/* <li>
                                    <h5>Proposals</h5>
                                    <h3 className="counter-value">15</h3>
                                  </li> */}
                                        <li>
                                          <h5>Job Type</h5>
                                          <h3 className="counter-value"><span className="jobtype">{job?.jobType}</span></h3>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="cart-hover">
                                    <Link to={`/job-details/${job?.id}`} className="btn-cart" tabIndex={-1}>View Job</Link>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </>
                      : <p>No Project Found</p>
                  }
                </div>

              </div>




              <div className="row">
                <div className="col-md-12">
                  <ul className="paginations list-pagination">
                    <li className="page-item"><Link to="#"><i className="feather-chevron-left" /></Link>
                    </li>
                    <li className="page-item"><Link to="#" className="active">1</Link></li>
                    <li className="page-item"><Link to="#">2</Link></li>
                    <li className="page-item"><Link to="#">3</Link></li>
                    <li className="page-item"><Link to="#">...</Link></li>
                    <li className="page-item"><Link to="#">10</Link></li>
                    <li className="page-item"><Link to="#"><i className="feather-chevron-right" /></Link></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div >
      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade" id="rating">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header d-block b-0 pb-0">
              <span className="modal-close float-end">
                <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="fa fa-times orange-text" />
                </Link>
              </span>
            </div>
            <div className="modal-body">
              <form action="job">
                <div className="modal-info">
                  <div className="text-center pt-0 mb-5">
                    <h3>Please login to Favourite Freelancer</h3>
                  </div>
                  <div className="submit-section text-center">
                    <button
                      data-bs-dismiss="modal"
                      className="btn btn-primary black-btn click-btn"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary click-btn">
                      Submit
                    </button>
                  </div>
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
export default Jobs;
