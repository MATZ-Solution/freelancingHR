import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import {
  company_img1,
  company_img2,
  company_img3,
  company_img4,
  company_img5,
  company_img6,
  company_img7,
  company_img8,
  company_img9,
} from "../../imagepath";

import { Sidebar } from "../sidebar";
const FreelancerInvitations = () => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <div className="content bookmark">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="dashboard-sec freelance-favourites">
                <div className="page-title">
                  <h3>Invitations</h3>
                </div>
                <div className="row row-gap">
                  <div className="col-md-6 col-lg-12 col-xl-4">
                    <div className="freelance-widget widget-author">
                      <div className="freelance-content">
                        <div className="freelance-top-content d-flex">
                          <span>
                            {" "}
                            <i className="feather-clock me-1" />
                            Posted Just Now
                          </span>
                          <Link to="#" className="favourite color-active">
                            <i className="feather-heart" />
                          </Link>
                        </div>
                        <div className="author-heading">
                          <div className="profile-img">
                            <span className="project-verified">
                              <i className="fas fa-check-circle" />
                            </span>
                            <Link to="/project-details">
                              <img src={company_img1} alt="author" />
                            </Link>
                          </div>
                          <div className="profile-name">
                            <div className="author-location">
                              <Link to="/project-details">Amaze Tech </Link>
                            </div>
                          </div>
                          <div className="freelance-info">
                            <h3>
                              <Link to="#">UI/UX Developer</Link>
                            </h3>
                            <div className="freelance-location">
                              <i className="feather-map-pin me-1" />
                              Alabama, USA
                            </div>
                          </div>
                          <div className="freelance-tags">
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Web Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                UI Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Node Js
                              </span>
                            </Link>
                          </div>
                          <div className="freelancers-price">$40-$500</div>
                        </div>
                        <div className="counter-stats">
                          <ul>
                            <li>
                              <h5>Expiry</h5>
                              <h3 className="counter-value">4 Days Left</h3>
                            </li>
                            <li>
                              <h5>Proposals</h5>
                              <h3 className="counter-value">15</h3>
                            </li>
                            <li>
                              <h5>Job Type</h5>
                              <h3 className="counter-value">
                                <span className="jobtype">Full Time</span>
                              </h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cart-hover">
                        <Link
                          to="/project-details"
                          className="btn-cart"
                          tabIndex={-1}
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-4">
                    <div className="freelance-widget widget-author">
                      <div className="freelance-content">
                        <div className="freelance-top-content d-flex">
                          <span>
                            {" "}
                            <i className="feather-clock me-1" />1 min ago
                          </span>
                          <Link to="#" className="favourite color-active">
                            <i className="feather-heart" />
                          </Link>
                        </div>
                        <div className="author-heading">
                          <div className="profile-img">
                            <span className="project-verified">
                              <i className="fas fa-check-circle" />
                            </span>
                            <Link to="/project-details">
                              <img src={company_img2} alt="author" />
                            </Link>
                          </div>
                          <div className="profile-name">
                            <div className="author-location">
                              <Link to="/project-details">Park INC </Link>
                            </div>
                          </div>
                          <div className="freelance-info">
                            <h3>
                              <Link to="#">PHP Developer</Link>
                            </h3>
                            <div className="freelance-location">
                              <i className="feather-map-pin me-1" />
                              California, USA
                            </div>
                          </div>
                          <div className="freelance-tags">
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Web Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                UI Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Node Js
                              </span>
                            </Link>
                          </div>
                          <div className="freelancers-price">$30-$300</div>
                        </div>
                        <div className="counter-stats">
                          <ul>
                            <li>
                              <h5>Expiry</h5>
                              <h3 className="counter-value">5 Days Left</h3>
                            </li>
                            <li>
                              <h5>Proposals</h5>
                              <h3 className="counter-value">15</h3>
                            </li>
                            <li>
                              <h5>Job Type</h5>
                              <h3 className="counter-value">
                                <span className="jobtype">Full Time</span>
                              </h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cart-hover">
                        <Link
                          to="/project-details"
                          className="btn-cart"
                          tabIndex={-1}
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-4">
                    <div className="freelance-widget widget-author">
                      <div className="freelance-content">
                        <div className="freelance-top-content d-flex">
                          <span>
                            {" "}
                            <i className="feather-clock me-1" />
                            30 mins ago
                          </span>
                          <Link to="#" className="favourite color-active">
                            <i className="feather-heart" />
                          </Link>
                        </div>
                        <div className="author-heading">
                          <div className="profile-img">
                            <span className="project-verified">
                              <i className="fas fa-check-circle" />
                            </span>
                            <Link to="/project-details">
                              <img src={company_img3} alt="author" />
                            </Link>
                          </div>
                          <div className="profile-name">
                            <div className="author-location">
                              <Link to="/project-details">Tech Zone</Link>{" "}
                            </div>
                          </div>
                          <div className="freelance-info">
                            <h3>
                              <Link to="#">Graphic Designer</Link>
                            </h3>
                            <div className="freelance-location">
                              <i className="feather-map-pin me-1" />
                              New York, USA
                            </div>
                          </div>
                          <div className="freelance-tags">
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Web Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                UI Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Node Js
                              </span>
                            </Link>
                          </div>
                          <div className="freelancers-price">$15-$500</div>
                        </div>
                        <div className="counter-stats">
                          <ul>
                            <li>
                              <h5>Expiry</h5>
                              <h3 className="counter-value">4 Days Left</h3>
                            </li>
                            <li>
                              <h5>Proposals</h5>
                              <h3 className="counter-value">15</h3>
                            </li>
                            <li>
                              <h5>Job Type</h5>
                              <h3 className="counter-value">
                                <span className="jobtype">Full Time</span>
                              </h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cart-hover">
                        <Link
                          to="/project-details"
                          className="btn-cart"
                          tabIndex={-1}
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-4">
                    <div className="freelance-widget widget-author">
                      <div className="freelance-content">
                        <div className="freelance-top-content d-flex">
                          <span>
                            {" "}
                            <i className="feather-clock me-1" />1 day ago
                          </span>
                          <Link to="#" className="favourite color-active">
                            <i className="feather-heart" />
                          </Link>
                        </div>
                        <div className="author-heading">
                          <div className="profile-img">
                            <span className="project-verified">
                              <i className="fas fa-check-circle" />
                            </span>
                            <Link to="/project-details">
                              <img src={company_img4} alt="author" />
                            </Link>
                          </div>
                          <div className="profile-name">
                            <div className="author-location">
                              <Link to="/project-details">ABC Software</Link>{" "}
                            </div>
                          </div>
                          <div className="freelance-info">
                            <h3>
                              <Link to="#">iOS Developer</Link>
                            </h3>
                            <div className="freelance-location">
                              <i className="feather-map-pin me-1" />
                              Florida, USA
                            </div>
                          </div>
                          <div className="freelance-tags">
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Web Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                UI Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Node Js
                              </span>
                            </Link>
                          </div>
                          <div className="freelancers-price">$25-$250</div>
                        </div>
                        <div className="counter-stats">
                          <ul>
                            <li>
                              <h5>Expiry</h5>
                              <h3 className="counter-value">1 Days Left</h3>
                            </li>
                            <li>
                              <h5>Proposals</h5>
                              <h3 className="counter-value">13</h3>
                            </li>
                            <li>
                              <h5>Job Type</h5>
                              <h3 className="counter-value">
                                <span className="jobtype">Full Time</span>
                              </h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cart-hover">
                        <Link
                          to="/project-details"
                          className="btn-cart"
                          tabIndex={-1}
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-4">
                    <div className="freelance-widget widget-author">
                      <div className="freelance-content">
                        <div className="freelance-top-content d-flex">
                          <span>
                            {" "}
                            <i className="feather-clock me-1" />3 days ago
                          </span>
                          <Link to="#" className="favourite color-active">
                            <i className="feather-heart" />
                          </Link>
                        </div>
                        <div className="author-heading">
                          <div className="profile-img">
                            <span className="project-verified">
                              <i className="fas fa-check-circle" />
                            </span>
                            <Link to="/project-details">
                              <img src={company_img5} alt="author" />
                            </Link>
                          </div>
                          <div className="profile-name">
                            <div className="author-location">
                              <Link to="/project-details">
                                Host Technologies
                              </Link>
                            </div>
                          </div>
                          <div className="freelance-info">
                            <h3>
                              <Link to="#">SEO Developer</Link>
                            </h3>
                            <div className="freelance-location">
                              <i className="feather-map-pin me-1" />
                              Texas, USA
                            </div>
                          </div>
                          <div className="freelance-tags">
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Web Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                UI Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Node Js
                              </span>
                            </Link>
                          </div>
                          <div className="freelancers-price">$50-$700</div>
                        </div>
                        <div className="counter-stats">
                          <ul>
                            <li>
                              <h5>Expiry</h5>
                              <h3 className="counter-value">6 Days Left</h3>
                            </li>
                            <li>
                              <h5>Proposals</h5>
                              <h3 className="counter-value">18</h3>
                            </li>
                            <li>
                              <h5>Job Type</h5>
                              <h3 className="counter-value">
                                <span className="jobtype">Full Time</span>
                              </h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cart-hover">
                        <Link
                          to="/project-details"
                          className="btn-cart"
                          tabIndex={-1}
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-4">
                    <div className="freelance-widget widget-author">
                      <div className="freelance-content">
                        <div className="freelance-top-content d-flex">
                          <span>
                            {" "}
                            <i className="feather-clock me-1" />1 week ago
                          </span>
                          <Link to="#" className="favourite color-active">
                            <i className="feather-heart" />
                          </Link>
                        </div>
                        <div className="author-heading">
                          <div className="profile-img">
                            <span className="project-verified">
                              <i className="fas fa-check-circle" />
                            </span>
                            <Link to="/project-details">
                              <img src={company_img6} alt="author" />
                            </Link>
                          </div>
                          <div className="profile-name">
                            <div className="author-location">
                              <Link to="/project-details">Alfred Tech</Link>{" "}
                            </div>
                          </div>
                          <div className="freelance-info">
                            <h3>
                              <Link to="#">SM Developer</Link>
                            </h3>
                            <div className="freelance-location">
                              <i className="feather-map-pin me-1" />
                              Virginia, USA
                            </div>
                          </div>
                          <div className="freelance-tags">
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Web Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                UI Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Node Js
                              </span>
                            </Link>
                          </div>
                          <div className="freelancers-price">$42-$100</div>
                        </div>
                        <div className="counter-stats">
                          <ul>
                            <li>
                              <h5>Expiry</h5>
                              <h3 className="counter-value">2 Days Left</h3>
                            </li>
                            <li>
                              <h5>Proposals</h5>
                              <h3 className="counter-value">15</h3>
                            </li>
                            <li>
                              <h5>Job Type</h5>
                              <h3 className="counter-value">
                                <span className="jobtype">Full Time</span>
                              </h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cart-hover">
                        <Link
                          to="/project-details"
                          className="btn-cart"
                          tabIndex={-1}
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-4">
                    <div className="freelance-widget widget-author">
                      <div className="freelance-content">
                        <div className="freelance-top-content d-flex">
                          <span>
                            {" "}
                            <i className="feather-clock me-1" />3 week ago
                          </span>
                          <Link to="#" className="favourite color-active">
                            <i className="feather-heart" />
                          </Link>
                        </div>
                        <div className="author-heading">
                          <div className="profile-img">
                            <span className="project-verified">
                              <i className="fas fa-check-circle" />
                            </span>
                            <Link to="/project-details">
                              <img src={company_img7} alt="author" />
                            </Link>
                          </div>
                          <div className="profile-name">
                            <div className="author-location">
                              <Link to="/project-details">Kind Softwares</Link>{" "}
                            </div>
                          </div>
                          <div className="freelance-info">
                            <h3>
                              <Link to="#">Network Engineer</Link>
                            </h3>
                            <div className="freelance-location">
                              <i className="feather-map-pin me-1" />
                              Delaware, USA
                            </div>
                          </div>
                          <div className="freelance-tags">
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Web Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                UI Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Node Js
                              </span>
                            </Link>
                          </div>
                          <div className="freelancers-price">$12-$320</div>
                        </div>
                        <div className="counter-stats">
                          <ul>
                            <li>
                              <h5>Expiry</h5>
                              <h3 className="counter-value">5 Days Left</h3>
                            </li>
                            <li>
                              <h5>Proposals</h5>
                              <h3 className="counter-value">24</h3>
                            </li>
                            <li>
                              <h5>Job Type</h5>
                              <h3 className="counter-value">
                                <span className="jobtype">Full Time</span>
                              </h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cart-hover">
                        <Link
                          to="/project-details"
                          className="btn-cart"
                          tabIndex={-1}
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-4">
                    <div className="freelance-widget widget-author">
                      <div className="freelance-content">
                        <div className="freelance-top-content d-flex">
                          <span>
                            {" "}
                            <i className="feather-clock me-1" />1 month ago
                          </span>
                          <Link to="#" className="favourite color-active">
                            <i className="feather-heart" />
                          </Link>
                        </div>
                        <div className="author-heading">
                          <div className="profile-img">
                            <span className="project-verified">
                              <i className="fas fa-check-circle" />
                            </span>
                            <Link to="/project-details">
                              <img src={company_img8} alt="author" />
                            </Link>
                          </div>
                          <div className="profile-name">
                            <div className="author-location">
                              <Link to="/project-details">Particles INC </Link>
                            </div>
                          </div>
                          <div className="freelance-info">
                            <h3>
                              <Link to="#">Business Analyst</Link>
                            </h3>
                            <div className="freelance-location">
                              <i className="feather-map-pin me-1" />
                              Kentucky, USA
                            </div>
                          </div>
                          <div className="freelance-tags">
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Web Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                UI Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Node Js
                              </span>
                            </Link>
                          </div>
                          <div className="freelancers-price">$35-$520</div>
                        </div>
                        <div className="counter-stats">
                          <ul>
                            <li>
                              <h5>Expiry</h5>
                              <h3 className="counter-value">4 Days Left</h3>
                            </li>
                            <li>
                              <h5>Proposals</h5>
                              <h3 className="counter-value">15</h3>
                            </li>
                            <li>
                              <h5>Job Type</h5>
                              <h3 className="counter-value">
                                <span className="jobtype">Full Time</span>
                              </h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cart-hover">
                        <Link
                          to="/project-details"
                          className="btn-cart"
                          tabIndex={-1}
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-4">
                    <div className="freelance-widget widget-author">
                      <div className="freelance-content">
                        <div className="freelance-top-content d-flex">
                          <span>
                            {" "}
                            <i className="feather-clock me-1" />2 month ago
                          </span>
                          <Link to="#" className="favourite color-active">
                            <i className="feather-heart" />
                          </Link>
                        </div>
                        <div className="author-heading">
                          <div className="profile-img">
                            <span className="project-verified">
                              <i className="fas fa-check-circle" />
                            </span>
                            <Link to="/project-details">
                              <img src={company_img9} alt="author" />
                            </Link>
                          </div>
                          <div className="profile-name">
                            <div className="author-location">
                              <Link to="/project-details">
                                Soft Technologies
                              </Link>{" "}
                            </div>
                          </div>
                          <div className="freelance-info">
                            <h3>
                              <Link to="/project-details">
                                IT Project Manager
                              </Link>
                            </h3>
                            <div className="freelance-location">
                              <i className="feather-map-pin me-1" />
                              Kansas, USA
                            </div>
                          </div>
                          <div className="freelance-tags">
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Web Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                UI Design
                              </span>
                            </Link>
                            <Link to="#">
                              <span className="badge badge-pill badge-design">
                                Node Js
                              </span>
                            </Link>
                          </div>
                          <div className="freelancers-price">$10-$300</div>
                        </div>
                        <div className="counter-stats">
                          <ul>
                            <li>
                              <h5>Expiry</h5>
                              <h3 className="counter-value">1 Days Left</h3>
                            </li>
                            <li>
                              <h5>Proposals</h5>
                              <h3 className="counter-value">12</h3>
                            </li>
                            <li>
                              <h5>Job Type</h5>
                              <h3 className="counter-value">
                                <span className="jobtype">Full Time</span>
                              </h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cart-hover">
                        <Link
                          to="/project-details"
                          className="btn-cart"
                          tabIndex={-1}
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <ul className="paginations list-pagination">
                      <li className="page-item">
                        <Link to="#">
                          <i className="feather-chevron-left" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="#" className="active">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="#">2</Link>
                      </li>
                      <li className="page-item">
                        <Link to="#">3</Link>
                      </li>
                      <li className="page-item">
                        <Link to="#">...</Link>
                      </li>
                      <li className="page-item">
                        <Link to="#">10</Link>
                      </li>
                      <li className="page-item">
                        <Link to="#">
                          <i className="feather-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* project list */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FreelancerInvitations;
