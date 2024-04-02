import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { table_avatar } from "../../imagepath";
import { Sidebar } from "../sidebar";

const ViewProjectdetails = () => {
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
              <h3>Manage Projects</h3>
            </div>
            <nav className="user-tabs mb-4">
              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                <li className="nav-item">
                  <Link className="nav-link active" to="/view-project-detail">
                    Overview &amp; Discussions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/milestones">
                    Milestones
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tasks">
                    Tasks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/files">
                    Files
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/project-payment">
                    Payments
                  </Link>
                </li>
              </ul>
            </nav>
            {/* project list */}
            <div className="my-projects">
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
                              $599.00 <span className="price-type">( Fixed )</span>
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
                                src={table_avatar}
                                alt="Img"
                                className="img-fluid me-2"
                              />
                              <div>
                                <h4>Hannah Finn</h4>
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
                          <div className="project-action text-center overview-action">
                            <Link to="javascript:void(0);" className="projects-btn ">
                              Is job completed?
                            </Link>
                            <Link to="/chats" className="btn-text mb-0">
                              Chat Now
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
            {/* /project list */}
            {/* Overview */}
            <div className="overview-description">
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
            {/* /Overview */}
            {/* Skills Required */}
            <div className="skill-required">
              <h4>Skills Required</h4>
              <div className="pro-content">
                <div className="tags">
                  <span className="badge badge-pill badge-design">Web design</span>
                  <span className="badge badge-pill badge-design">UI Design</span>
                  <span className="badge badge-pill badge-design">React</span>
                  <span className="badge badge-pill badge-design">Design Writing</span>
                  <span className="badge badge-pill badge-design">Software Design</span>
                  <span className="badge badge-pill badge-design">HTML5</span>
                  <span className="badge badge-pill badge-design">Sketch</span>
                </div>
              </div>
            </div>
            {/* /Skills Required */}
          </div>
          
            {/* project list */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default ViewProjectdetails;
