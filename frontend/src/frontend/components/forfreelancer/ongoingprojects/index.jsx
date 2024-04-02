import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import {
  table_avatar_02,
  table_avatar_04,
  tableavatar05,
  user02,
  user03,
  user_01,
} from "../../imagepath";
import { Sidebar } from "../sidebar";
const FreelacerOngoingProjects = () => {
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
              <div className="page-title">
                <h3>Ongoing Projects</h3>
              </div>
              {/* Proposals list */}
              <div className="proposals-section ongoing-projects">
                {/* Proposals */}
                <div className="freelancer-proposals proposal-ongoing">
                  <div className="project-proposals align-items-center freelancer">
                    <div className="proposal-info">
                      <div className="proposals-details">
                        <h3 className="proposals-title">
                          3D Renders and Amazon Product Store images/Video
                        </h3>
                        <ul>
                          <li>
                            <div className="proposal-client-price">
                              <h4 className="title-info">Client Price</h4>
                              <h3 className="client-price">
                                $599.00{" "}
                                <span className="price-type">( Fixed )</span>
                              </h3>
                            </div>
                          </li>
                          <li>
                            <div className="proposal-job-type">
                              <h4 className="title-info">Project Deadline</h4>
                              <h3>28 Oct 2023</h3>
                            </div>
                          </li>
                          <li>
                            <div className="proposal-img">
                              <div className="proposal-client d-flex align-items-center">
                                <img
                                  src={table_avatar_02}
                                  alt="Img"
                                  className="img-fluid me-2"
                                />
                                <div>
                                  <h4>Hayley Melba</h4>
                                  <span>
                                    10 Oct 2023
                                    <i className="fa-solid fa-star" />
                                    5.0
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="project-action text-center">
                              <Link
                                to="/freelancer-view-project-detail"
                                className="projects-btn mb-0"
                              >
                                View Details
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Proposals */}
                {/* Proposals */}
                <div className="freelancer-proposals proposal-ongoing">
                  <div className="project-proposals align-items-center freelancer">
                    <div className="proposal-info">
                      <div className="proposals-details">
                        <h3 className="proposals-title">
                          Landing Page Redesign / Sales Page Redesign (Not
                          Entire Web)
                        </h3>
                        <ul>
                          <li>
                            <div className="proposal-client-price">
                              <h4 className="title-info">Client Price</h4>
                              <h3 className="client-price">
                                $280.00{" "}
                                <span className="price-type">( Fixed )</span>
                              </h3>
                            </div>
                          </li>
                          <li>
                            <div className="proposal-job-type">
                              <h4 className="title-info">Project Deadline</h4>
                              <h3>25 Oct 2023</h3>
                            </div>
                          </li>
                          <li>
                            <div className="proposal-img">
                              <div className="proposal-client d-flex align-items-center">
                                <img
                                  src={user_01}
                                  alt="Img"
                                  className="img-fluid me-2"
                                />
                                <div>
                                  <h4>James Douglas</h4>
                                  <span>
                                    12 Oct 2023
                                    <i className="fa-solid fa-star" />
                                    5.0
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="project-action text-center">
                              <Link
                                to="/freelancer-view-project-detail"
                                className="projects-btn mb-0"
                              >
                                View Details
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Proposals */}
                {/* Proposals */}
                <div className="freelancer-proposals proposal-ongoing">
                  <div className="project-proposals align-items-center freelancer">
                    <div className="proposal-info">
                      <div className="proposals-details">
                        <h3 className="proposals-title">
                          WooCommerce Product Page Back Up Restoration
                        </h3>
                        <ul>
                          <li>
                            <div className="proposal-client-price">
                              <h4 className="title-info">Client Price</h4>
                              <h3 className="client-price">
                                $140.00{" "}
                                <span className="price-type">( Fixed )</span>
                              </h3>
                            </div>
                          </li>
                          <li>
                            <div className="proposal-job-type">
                              <h4 className="title-info">Project Deadline</h4>
                              <h3>17 Oct 2023</h3>
                            </div>
                          </li>
                          <li>
                            <div className="proposal-img">
                              <div className="proposal-client d-flex align-items-center">
                                <img
                                  src={user02}
                                  alt="Img"
                                  className="img-fluid me-2"
                                />
                                <div>
                                  <h4>Tony Ingle</h4>
                                  <span>
                                    26 Oct 2023
                                    <i className="fa-solid fa-star" />
                                    5.0
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="project-action text-center">
                              <Link
                                to="/freelancer-view-project-detail"
                                className="projects-btn mb-0"
                              >
                                View Details
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Proposals */}
                {/* Proposals */}
                <div className="freelancer-proposals proposal-ongoing">
                  <div className="project-proposals align-items-center freelancer">
                    <div className="proposal-info">
                      <div className="proposals-details">
                        <h3 className="proposals-title">
                          Full-stack Developer to help us to build our
                        </h3>
                        <ul>
                          <li>
                            <div className="proposal-client-price">
                              <h4 className="title-info">Client Price</h4>
                              <h3 className="client-price">
                                $350.00{" "}
                                <span className="price-type">( Fixed )</span>
                              </h3>
                            </div>
                          </li>
                          <li>
                            <div className="proposal-job-type">
                              <h4 className="title-info">Project Deadline</h4>
                              <h3>28 Oct 2023</h3>
                            </div>
                          </li>
                          <li>
                            <div className="proposal-img">
                              <div className="proposal-client d-flex align-items-center">
                                <img
                                  src={tableavatar05}
                                  alt="Img"
                                  className="img-fluid me-2"
                                />
                                <div>
                                  <h4>Sam Prendiville</h4>
                                  <span>
                                    03 Nov 2023
                                    <i className="fa-solid fa-star" />
                                    5.0
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="project-action text-center">
                              <Link
                                to="/freelancer-view-project-detail"
                                className="projects-btn mb-0"
                              >
                                View Details
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Proposals */}
                {/* Proposals */}
                <div className="freelancer-proposals proposal-ongoing">
                  <div className="project-proposals align-items-center freelancer">
                    <div className="proposal-info">
                      <div className="proposals-details">
                        <h3 className="proposals-title">
                          Video animator to bring some illustrations to life
                        </h3>
                        <ul>
                          <li>
                            <div className="proposal-client-price">
                              <h4 className="title-info">Client Price</h4>
                              <h3 className="client-price">
                                $620.00
                                <span className="price-type">( Fixed )</span>
                              </h3>
                            </div>
                          </li>
                          <li>
                            <div className="proposal-job-type">
                              <h4 className="title-info">Project Deadline</h4>
                              <h3>11 Oct 2023</h3>
                            </div>
                          </li>
                          <li>
                            <div className="proposal-img">
                              <div className="proposal-client d-flex align-items-center">
                                <img
                                  src={user03}
                                  alt="Img"
                                  className="img-fluid me-2"
                                />
                                <div>
                                  <h4>Samantha Ogden</h4>
                                  <span>
                                    14 Nov 2023
                                    <i className="fa-solid fa-star" />
                                    5.0
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="project-action text-center">
                              <Link
                                to="/freelancer-view-project-detail"
                                className="projects-btn mb-0"
                              >
                                View Details
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Proposals */}
                {/* Proposals */}
                <div className="freelancer-proposals proposal-ongoing">
                  <div className="project-proposals align-items-center freelancer">
                    <div className="proposal-info">
                      <div className="proposals-details">
                        <h3 className="proposals-title">
                          Food Delivery Mobile App
                        </h3>
                        <ul>
                          <li>
                            <div className="proposal-client-price">
                              <h4 className="title-info">Client Price</h4>
                              <h3 className="client-price">
                                $260.00{" "}
                                <span className="price-type">( Fixed )</span>
                              </h3>
                            </div>
                          </li>
                          <li>
                            <div className="proposal-job-type">
                              <h4 className="title-info">Project Deadline</h4>
                              <h3>03 Oct 2023</h3>
                            </div>
                          </li>
                          <li>
                            <div className="proposal-img">
                              <div className="proposal-client d-flex align-items-center">
                                <img
                                  src={table_avatar_04}
                                  alt="Img"
                                  className="img-fluid me-2"
                                />
                                <div>
                                  <h4>Sam Facy</h4>
                                  <span>
                                    18 Nov 2023
                                    <i className="fa-solid fa-star" />
                                    5.0
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="project-action text-center">
                              <Link
                                to="/freelancer-view-project-detail"
                                className="projects-btn mb-0"
                              >
                                View Details
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Proposals */}
              </div>
              {/* /Proposals list */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default FreelacerOngoingProjects;
