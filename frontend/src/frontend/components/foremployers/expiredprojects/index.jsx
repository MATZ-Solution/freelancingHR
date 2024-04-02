import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from "../sidebar";
import { flag_icon } from "../../imagepath";
const ExpiredProjects = () => {
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
        <div className="container-fluid">
          <div className="row">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-lg-8">
              <div className="page-title">
                <h3>Expired Projects</h3>
              </div>
              {/* project list */}
              <div className="my-projects-list ongoing-projects">
                <div className="row">
                  <div className="col-xl-12 flex-wrap">
                    <div className="freelancer-proposals proposal-ongoing mb-0">
                      <div className="project-proposals align-items-center freelancer">
                        <div className="proposal-info">
                          <div className="proposals-details">
                            <span className="tech-name-badge">
                              Dreamguystech
                            </span>
                            <div className="d-flex justify-content-between align-items-start">
                              <div className="employee-project-card">
                                <h3 className="proposals-title">
                                  Website Designer Required For Directory Theme
                                </h3>
                                <ul>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">
                                        Project type
                                      </h4>
                                      <h3>Fixed Price</h3>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">Location</h4>
                                      <h3 className="flag-icon">
                                        <img
                                          src={flag_icon}
                                          height={13}
                                          alt="Lang"
                                        />{" "}
                                        UK
                                      </h3>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">Price</h4>
                                      <h3>$500</h3>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <ul className="employee-project">
                                <li>
                                  <div className="project-action text-center">
                                    <Link
                                      to="/view-project-detail"
                                      className="projects-btn"
                                    >
                                      View Details
                                    </Link>
                                    <span>Expired on 23 Sep 2023</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /project list */}
              {/* project list */}
              <div className="my-projects-list ongoing-projects">
                <div className="row">
                  <div className="col-xl-12 flex-wrap">
                    <div className="freelancer-proposals proposal-ongoing mb-0">
                      <div className="project-proposals align-items-center freelancer">
                        <div className="proposal-info">
                          <div className="proposals-details">
                            <span className="tech-name-badge">
                              Dreamguystech
                            </span>
                            <div className="d-flex justify-content-between align-items-start">
                              <div className="employee-project-card">
                                <h3 className="proposals-title">
                                  Landing Page Redesign / Sales Page Redesign
                                </h3>
                                <ul>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">
                                        Project type
                                      </h4>
                                      <h3>Fixed Price</h3>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">Location</h4>
                                      <h3 className="flag-icon">
                                        <img
                                          src={flag_icon}
                                          height={13}
                                          alt="Lang"
                                        />{" "}
                                        UK
                                      </h3>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">Price</h4>
                                      <h3>$280</h3>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <ul className="employee-project">
                                <li>
                                  <div className="project-action text-center">
                                    <Link
                                      to="/view-project-detail"
                                      className="projects-btn"
                                    >
                                      View Details
                                    </Link>
                                    <span>Expired on 27 Sep 2023</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /project list */}
              {/* project list */}
              <div className="my-projects-list ongoing-projects">
                <div className="row">
                  <div className="col-xl-12 flex-wrap">
                    <div className="freelancer-proposals proposal-ongoing mb-0">
                      <div className="project-proposals align-items-center freelancer">
                        <div className="proposal-info">
                          <div className="proposals-details">
                            <span className="tech-name-badge">
                              Dreamguystech
                            </span>
                            <div className="d-flex justify-content-between align-items-start">
                              <div className="employee-project-card">
                                <h3 className="proposals-title">
                                  WooCommerce Product Page Back Up Restoration
                                </h3>
                                <ul>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">
                                        Project type
                                      </h4>
                                      <h3>Fixed Price</h3>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">Location</h4>
                                      <h3 className="flag-icon">
                                        <img
                                          src={flag_icon}
                                          height={13}
                                          alt="Lang"
                                        />{" "}
                                        UK
                                      </h3>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">Price</h4>
                                      <h3>$700</h3>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <ul className="employee-project">
                                <li>
                                  <div className="project-action text-center">
                                    <Link
                                      to="/view-project-detail"
                                      className="projects-btn"
                                    >
                                      View Details
                                    </Link>
                                    <span>Expired on 07 Oct 2023</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /project list */}
              {/* project list */}
              <div className="my-projects-list ongoing-projects">
                <div className="row">
                  <div className="col-xl-12 flex-wrap">
                    <div className="freelancer-proposals proposal-ongoing mb-0">
                      <div className="project-proposals align-items-center freelancer">
                        <div className="proposal-info">
                          <div className="proposals-details">
                            <span className="tech-name-badge">
                              Dreamguystech
                            </span>
                            <div className="d-flex justify-content-between align-items-start">
                              <div className="employee-project-card">
                                <h3 className="proposals-title">
                                  Laravel Backend Developer to finish ongoing
                                  project
                                </h3>
                                <ul>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">
                                        Project type
                                      </h4>
                                      <h3>Fixed Price </h3>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">Location</h4>
                                      <h3 className="flag-icon">
                                        <img
                                          src={flag_icon}
                                          height={13}
                                          alt="Lang"
                                        />{" "}
                                        UK
                                      </h3>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">Price</h4>
                                      <h3>$300</h3>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <ul className="employee-project">
                                <li>
                                  <div className="project-action text-center">
                                    <Link
                                      to="/view-project-detail"
                                      className="projects-btn"
                                    >
                                      View Details
                                    </Link>
                                    <span>Expired on 12 Oct 2023</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /project list */}
              {/* project list */}
              <div className="my-projects-list ongoing-projects">
                <div className="row">
                  <div className="col-xl-12 flex-wrap">
                    <div className="freelancer-proposals proposal-ongoing mb-0">
                      <div className="project-proposals align-items-center freelancer">
                        <div className="proposal-info">
                          <div className="proposals-details">
                            <span className="tech-name-badge">
                              Dreamguystech
                            </span>
                            <div className="d-flex justify-content-between align-items-start">
                              <div className="employee-project-card">
                                <h3 className="proposals-title">
                                  3D Renders and Amazon Product Store
                                  images/Video
                                </h3>
                                <ul>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">
                                        Project type
                                      </h4>
                                      <h3>Fixed Price</h3>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">Location</h4>
                                      <h3 className="flag-icon">
                                        <img
                                          src={flag_icon}
                                          height={13}
                                          alt="Lang"
                                        />{" "}
                                        UK
                                      </h3>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">Price</h4>
                                      <h3>$300</h3>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <ul className="employee-project">
                                <li>
                                  <div className="project-action text-center">
                                    <Link
                                      to="/view-project-detail"
                                      className="projects-btn"
                                    >
                                      View Details
                                    </Link>
                                    <span>Expired on 17 Oct 2023</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /project list */}
              {/* project list */}
              <div className="my-projects-list ongoing-projects">
                <div className="row">
                  <div className="col-xl-12 flex-wrap">
                    <div className="freelancer-proposals proposal-ongoing mb-0">
                      <div className="project-proposals align-items-center freelancer">
                        <div className="proposal-info">
                          <div className="proposals-details">
                            <span className="tech-name-badge">
                              Dreamguystech
                            </span>
                            <div className="d-flex justify-content-between align-items-start">
                              <div className="employee-project-card">
                                <h3 className="proposals-title">
                                  Website Designer Required For Directory Theme
                                </h3>
                                <ul>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">
                                        Project type
                                      </h4>
                                      <h3>Fixed Price</h3>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">Location</h4>
                                      <h3 className="flag-icon">
                                        <img
                                          src={flag_icon}
                                          height={13}
                                          alt="Lang"
                                        />{" "}
                                        UK
                                      </h3>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="proposal-job-type">
                                      <h4 className="title-info">Price</h4>
                                      <h3>$500</h3>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <ul className="employee-project">
                                <li>
                                  <div className="project-action text-center">
                                    <Link
                                      to="/view-project-detail"
                                      className="projects-btn"
                                    >
                                      View Details
                                    </Link>
                                    <span>Expired on 19 Sep 2023</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /project list */}
              <div className="row">
                <div className="col-md-12">
                  <ul className="paginations list-pagination">
                    <li className="page-item">
                      <Link to="javascript:void(0);">
                        <i className="feather-chevron-left" />
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to="javascript:void(0);" className="active">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to="javascript:void(0);">2</Link>
                    </li>
                    <li className="page-item">
                      <Link to="javascript:void(0);">3</Link>
                    </li>
                    <li className="page-item">
                      <Link to="javascript:void(0);">...</Link>
                    </li>
                    <li className="page-item">
                      <Link to="javascript:void(0);">10</Link>
                    </li>
                    <li className="page-item">
                      <Link to="javascript:void(0);">
                        <i className="feather-chevron-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ExpiredProjects;
