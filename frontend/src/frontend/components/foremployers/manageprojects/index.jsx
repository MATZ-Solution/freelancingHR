import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from '../sidebar';
import { flag_icon, table_avatar, table_avatar_02, user_04 } from "../../imagepath";
const Manageprojects = () => {
    useEffect(() => {
        document.body.className = 'dashboard-page';
        return () => { document.body.className = ''; }
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
    <h3>Ongoing Projects</h3>
  </div>
  {/* project list */}
  <div className="my-projects-list ongoing-projects">
    <div className="row">
      <div className="col-xl-9 flex-wrap">
        <div className="freelancer-proposals proposal-ongoing mb-0">
          <div className="project-proposals align-items-center freelancer">
            <div className="proposal-info">
              <div className="proposals-details">
                <span className="tech-name-badge">Dreamguystech</span>
                <div className="d-flex justify-content-between align-items-start">
                  <div className="employee-project-card">
                    <h3 className="proposals-title">Website Designer Required For Directory Theme</h3>
                    <ul>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Project type</h4>
                          <h3>Hourly</h3>
                        </div>
                      </li>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Location</h4>
                          <h3 className="flag-icon"><img src={flag_icon} height={13} alt="Lang" /> UK</h3>
                        </div>
                      </li>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Expiry</h4>
                          <h3>4 Days Left</h3>
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
                        <Link to="/view-project-detail" className="projects-btn">View Details</Link>
                        <span>Hired on 19 Sep 2023</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 d-flex flex-wrap">
        <div className="projects-card flex-fill">
          <div className="card-body p-2">
            <div className="prj-proposal-count text-center hired">
              <h3>Hired</h3>
              <img src={user_04} alt="Img" className="img-fluid" />
              <p className="mb-0">Hannah Finn</p>
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
                <span className="tech-name-badge">Dreamguystech</span>
                <div className="d-flex justify-content-between align-items-start">
                  <div className="employee-project-card">
                    <h3 className="proposals-title">Landing Page Redesign / Sales Page Redesign</h3>
                    <ul>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Project type</h4>
                          <h3>Fixed</h3>
                        </div>
                      </li>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Location</h4>
                          <h3 className="flag-icon"><img src={flag_icon} height={13} alt="Lang" /> UK</h3>
                        </div>
                      </li>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Expiry</h4>
                          <h3>5 Days Left</h3>
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
                        <Link to="#" className="projects-btn">Repost</Link>
                        <Link to="#" className="mb-0">Delete</Link>
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
      <div className="col-xl-9 flex-wrap">
        <div className="freelancer-proposals proposal-ongoing mb-0">
          <div className="project-proposals align-items-center freelancer">
            <div className="proposal-info">
              <div className="proposals-details">
                <span className="tech-name-badge">Dreamguystech</span>
                <div className="d-flex justify-content-between align-items-start">
                  <div className="employee-project-card">
                    <h3 className="proposals-title">PHP Laravel Developer Required</h3>
                    <ul>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Project type</h4>
                          <h3>Hourly</h3>
                        </div>
                      </li>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Location</h4>
                          <h3 className="flag-icon"><img src={flag_icon} height={13} alt="Lang" /> UK</h3>
                        </div>
                      </li>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Expiry</h4>
                          <h3>3 Days Left</h3>
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
                        <Link to="/view-project-detail" className="projects-btn">View Details</Link>
                        <Link to="#" className="projects-btn completed-btn"><i className="fa fa-award me-2" />Completed</Link>
                        <span>
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          4.5
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 d-flex flex-wrap">
        <div className="projects-card flex-fill">
          <div className="card-body p-2">
            <div className="prj-proposal-count text-center hired">
              <h3>Hired</h3>
              <img src={table_avatar} alt="Img" className="img-fluid" />
              <p className="mb-0">Gerth Enoksen</p>
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
      <div className="col-xl-9 flex-wrap">
        <div className="freelancer-proposals proposal-ongoing mb-0">
          <div className="project-proposals align-items-center freelancer">
            <div className="proposal-info">
              <div className="proposals-details">
                <span className="tech-name-badge">Dreamguystech</span>
                <div className="d-flex justify-content-between align-items-start">
                  <div className="employee-project-card">
                    <h3 className="proposals-title">WooCommerce Product Page Back Up Restoration</h3>
                    <ul>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Project type</h4>
                          <h3>Hourly</h3>
                        </div>
                      </li>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Location</h4>
                          <h3 className="flag-icon"><img src={flag_icon} height={13} alt="Lang" /> UK</h3>
                        </div>
                      </li>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Expiry</h4>
                          <h3>3 Days Left</h3>
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
                        <Link to="/view-project-detail" className="projects-btn">View Proposal</Link>
                        <Link to="#" className="mb-0">Edit Project</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 d-flex flex-wrap">
        <div className="projects-card flex-fill">
          <div className="card-body p-2">
            <div className="prj-proposal-count text-center hired">
              <h2>27</h2>
              <h3 className="mb-0">Proposal</h3>
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
                <span className="tech-name-badge">Dreamguystech</span>
                <div className="d-flex justify-content-between align-items-start">
                  <div className="employee-project-card">
                    <h3 className="proposals-title">Website Designer Required For Directory Theme</h3>
                    <ul>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Project type</h4>
                          <h3>Fixed Price</h3>
                        </div>
                      </li>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Location</h4>
                          <h3 className="flag-icon"><img src={flag_icon} height={13} alt="Lang" /> UK</h3>
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
                        <Link to="/view-project-detail" className="projects-btn">View Details</Link>
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
  {/* project list */}
  <div className="my-projects-list ongoing-projects">
    <div className="row">
      <div className="col-xl-9 flex-wrap">
        <div className="freelancer-proposals proposal-ongoing mb-0">
          <div className="project-proposals align-items-center freelancer">
            <div className="proposal-info">
              <div className="proposals-details">
                <span className="tech-name-badge">Dreamguystech</span>
                <div className="d-flex justify-content-between align-items-start">
                  <div className="employee-project-card">
                    <h3 className="proposals-title">Landing Page Redesign / Sales Page Redesign</h3>
                    <ul>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Project type</h4>
                          <h3>Fixed</h3>
                        </div>
                      </li>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Location</h4>
                          <h3 className="flag-icon"><img src={flag_icon} height={13} alt="Lang" /> UK</h3>
                        </div>
                      </li>
                      <li>
                        <div className="proposal-job-type">
                          <h4 className="title-info">Expiry</h4>
                          <h3>5 Days Left</h3>
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
                        <Link to="/view-project-detail" className="projects-btn">View Details</Link>
                        <Link to="#" className="projects-btn completed-btn"><i className="fa fa-award me-2" />Completed</Link>
                        <Link to="#write-review" data-bs-toggle="modal" className="btn-write-review mb-0">Write Review</Link>
                      </div>
                    </li>
                  </ul>
                </div>														
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 d-flex flex-wrap">
        <div className="projects-card flex-fill">
          <div className="card-body p-2">
            <div className="prj-proposal-count text-center hired">
              <h3>Hired</h3>
              <img src={table_avatar_02} alt="Img" className="img-fluid" />
              <p className="mb-0">Bolethe Fleischer</p>
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
            </div>
        </>
    )
}
export default Manageprojects;