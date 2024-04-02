import React, { useEffect } from "react";
import StickyBox from "react-sticky-box";
import { Sidebar } from '../sidebar';
import { Avatar_8, Avatar_9, proposal_user_02, table_avatar, table_avatar_02, tableavatar05, user02, user03 } from "../../imagepath";
import {Link} from 'react-router-dom'

const InvitedFreelancer = () => {
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  return (
    <>
      {/* Page Content */}
      <div className="content bookmark content-page">
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
              {/* project list */}
              <div className="my-projects-view favourite-group">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="page-title">
                      <h3>Bookmarked Freelancers</h3>
                    </div>
                    <div className="freelance-box book-mark favour-book">
                      <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-4">
                          <div className="freelance-widget">
                            <div className="freelance-content">
                              <Link
                                to="#"
                                className="favourite color-active"
                              >
                                <i className="feather-heart" />
                              </Link>
                              <div className="freelance-img">
                                <Link to="/developer-details">
                                  <img
                                    src={table_avatar}
                                    alt="User Image"
                                  />
                                  <span className="verified">
                                    <i className="fas fa-check-circle" />
                                  </span>
                                </Link>
                              </div>
                              <div className="freelance-info">
                                <h3>
                                  <Link to="/developer-details">George Wells</Link>
                                </h3>
                                <div className="freelance-specific">UI/UX Designer</div>
                                <div className="freelance-location">
                                  {" "}
                                  <i className="feather-map-pin me-1" />
                                  Alabama, USA
                                </div>
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star " />
                                  <i className="fas fa-star" />
                                  <span className="average-rating">4.7 (32)</span>
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
                                <div className="freelancers-price">$25 Hourly</div>
                              </div>
                            </div>
                            <div className="cart-hover">
                              <Link
                                to="/developer-details"
                                className="btn-cart"
                                tabIndex={-1}
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                          <div className="freelance-widget">
                            <div className="freelance-content">
                              <Link
                                to="#"
                                className="favourite color-active"
                              >
                                <i className="feather-heart" />
                              </Link>
                              <div className="freelance-img">
                                <Link to="/developer-details">
                                  <img src={user02} alt="User Image" />
                                  <span className="verified">
                                    <i className="fas fa-check-circle" />
                                  </span>
                                </Link>
                              </div>
                              <div className="freelance-info">
                                <h3>
                                  <Link to="/developer-details">Timothy Smith</Link>
                                </h3>
                                <div className="freelance-specific">PHP Developer</div>
                                <div className="freelance-location">
                                  {" "}
                                  <i className="feather-map-pin me-1" />
                                  Illinois, USA
                                </div>
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star " />
                                  <i className="fas fa-star" />
                                  <span className="average-rating">4.8 (55)</span>
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
                                <div className="freelancers-price">$21 Hourly</div>
                              </div>
                            </div>
                            <div className="cart-hover">
                              <Link
                                to="/developer-details"
                                className="btn-cart"
                                tabIndex={-1}
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                          <div className="freelance-widget">
                            <div className="freelance-content">
                              <Link
                                to="#"
                                className="favourite color-active"
                              >
                                <i className="feather-heart" />
                              </Link>
                              <div className="freelance-img">
                                <Link to="/developer-details">
                                  <img
                                    src={proposal_user_02}
                                    alt="User Image"
                                  />
                                  <span className="verified">
                                    <i className="fas fa-check-circle" />
                                  </span>
                                </Link>
                              </div>
                              <div className="freelance-info">
                                <h3>
                                  <Link to="/developer-details">Janet Paden</Link>
                                </h3>
                                <div className="freelance-specific">Graphic Designer</div>
                                <div className="freelance-location">
                                  {" "}
                                  <i className="feather-map-pin me-1" />
                                  New York, USA
                                </div>
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star " />
                                  <i className="fas fa-star" />
                                  <span className="average-rating">4.1 (30)</span>
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
                                <div className="freelancers-price">Free</div>
                              </div>
                            </div>
                            <div className="cart-hover">
                              <Link
                                to="/developer-details"
                                className="btn-cart"
                                tabIndex={-1}
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                          <div className="freelance-widget">
                            <div className="freelance-content">
                              <Link
                                to="#"
                                className="favourite color-active"
                              >
                                <i className="feather-heart" />
                              </Link>
                              <div className="freelance-img">
                                <Link to="/developer-details">
                                  <img
                                    src={table_avatar_02}
                                    alt="User Image"
                                  />
                                  <span className="verified">
                                    <i className="fas fa-check-circle" />
                                  </span>
                                </Link>
                              </div>
                              <div className="freelance-info">
                                <h3>
                                  <Link to="/developer-details">James Douglas</Link>
                                </h3>
                                <div className="freelance-specific">iOS Developer</div>
                                <div className="freelance-location">
                                  {" "}
                                  <i className="feather-map-pin me-1" />
                                  Florida, USA
                                </div>
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <span className="average-rating">3.2 (22)</span>
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
                                <div className="freelancers-price">Free</div>
                              </div>
                            </div>
                            <div className="cart-hover">
                              <Link
                                to="/developer-details"
                                className="btn-cart"
                                tabIndex={-1}
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                          <div className="freelance-widget">
                            <div className="freelance-content">
                              <Link
                                to="#"
                                className="favourite color-active"
                              >
                                <i className="feather-heart" />
                              </Link>
                              <div className="freelance-img">
                                <Link to="/developer-details">
                                  <img
                                    src={tableavatar05}
                                    alt="User Image"
                                  />
                                  <span className="verified">
                                    <i className="fas fa-check-circle" />
                                  </span>
                                </Link>
                              </div>
                              <div className="freelance-info">
                                <h3>
                                  <Link to="/developer-details">Floyd Lewis</Link>
                                </h3>
                                <div className="freelance-specific">SEO Developer</div>
                                <div className="freelance-location">
                                  {" "}
                                  <i className="feather-map-pin me-1" />
                                  Texas, USA
                                </div>
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star " />
                                  <i className="fas fa-star" />
                                  <span className="average-rating">4.9 (40)</span>
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
                                <div className="freelancers-price">$30 Hourly</div>
                              </div>
                            </div>
                            <div className="cart-hover">
                              <Link
                                to="/developer-details"
                                className="btn-cart"
                                tabIndex={-1}
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                          <div className="freelance-widget">
                            <div className="freelance-content">
                              <Link
                                to="#"
                                className="favourite color-active"
                              >
                                <i className="feather-heart" />
                              </Link>
                              <div className="freelance-img">
                                <Link to="/developer-details">
                                  <img src={user03} alt="User Image" />
                                  <span className="verified">
                                    <i className="fas fa-check-circle" />
                                  </span>
                                </Link>
                              </div>
                              <div className="freelance-info">
                                <h3>
                                  <Link to="/developer-details">Jacqueline Daye</Link>
                                </h3>
                                <div className="freelance-specific">SM Developer</div>
                                <div className="freelance-location">
                                  {" "}
                                  <i className="feather-map-pin me-1" />
                                  California, USA
                                </div>
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star " />
                                  <i className="fas fa-star" />
                                  <span className="average-rating">4.3 (35)</span>
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
                                <div className="freelancers-price">$12 Hourly</div>
                              </div>
                            </div>
                            <div className="cart-hover">
                              <Link
                                to="/developer-details"
                                className="btn-cart"
                                tabIndex={-1}
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                          <div className="freelance-widget">
                            <div className="freelance-content">
                              <Link
                                to="#"
                                className="favourite color-active"
                              >
                                <i className="feather-heart" />
                              </Link>
                              <div className="freelance-img">
                                <Link to="/developer-details">
                                  <img
                                    src={tableavatar05}
                                    alt="User Image"
                                  />
                                  <span className="verified">
                                    <i className="fas fa-check-circle" />
                                  </span>
                                </Link>
                              </div>
                              <div className="freelance-info">
                                <h3>
                                  <Link to="/developer-details">Crystal Kemper</Link>
                                </h3>
                                <div className="freelance-specific">Network Engineer</div>
                                <div className="freelance-location">
                                  {" "}
                                  <i className="feather-map-pin me-1" />
                                  Maryland, USA
                                </div>
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <span className="average-rating">3.5 (28)</span>
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
                                <div className="freelancers-price">$20 Hourly</div>
                              </div>
                            </div>
                            <div className="cart-hover">
                              <Link
                                to="/developer-details"
                                className="btn-cart"
                                tabIndex={-1}
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                          <div className="freelance-widget">
                            <div className="freelance-content">
                              <Link
                                to="#"
                                className="favourite color-active"
                              >
                                <i className="feather-heart" />
                              </Link>
                              <div className="freelance-img">
                                <Link to="/developer-details">
                                  <img
                                    src={Avatar_8}
                                    alt="User Image"
                                  />
                                  <span className="verified">
                                    <i className="fas fa-check-circle" />
                                  </span>
                                </Link>
                              </div>
                              <div className="freelance-info">
                                <h3>
                                  <Link to="/developer-details">Tony Ingle</Link>
                                </h3>
                                <div className="freelance-specific">Business Analyst</div>
                                <div className="freelance-location">
                                  {" "}
                                  <i className="feather-map-pin me-1" />
                                  Missouri, USA
                                </div>
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <span className="average-rating">2.1 (15)</span>
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
                                <div className="freelancers-price">$42 Hourly</div>
                              </div>
                            </div>
                            <div className="cart-hover">
                              <Link
                                to="/developer-details"
                                className="btn-cart"
                                tabIndex={-1}
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                          <div className="freelance-widget">
                            <div className="freelance-content">
                              <Link
                                to="#"
                                className="favourite color-active"
                              >
                                <i className="feather-heart" />
                              </Link>
                              <div className="freelance-img">
                                <Link to="/developer-details">
                                  <img
                                    src={Avatar_9}
                                    alt="User Image"
                                  />
                                  <span className="verified">
                                    <i className="fas fa-check-circle" />
                                  </span>
                                </Link>
                              </div>
                              <div className="freelance-info">
                                <h3>
                                  <Link to="/developer-details">Kathleen Kaiser</Link>
                                </h3>
                                <div className="freelance-specific">IT Project Manager</div>
                                <div className="freelance-location">
                                  {" "}
                                  <i className="feather-map-pin me-1" />
                                  Kansas, USA
                                </div>
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                  <span className="average-rating">4.5 (36)</span>
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
                                <div className="freelancers-price">$25 Hourly</div>
                              </div>
                            </div>
                            <div className="cart-hover">
                              <Link
                                to="/developer-details"
                                className="btn-cart"
                                tabIndex={-1}
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* project list */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default InvitedFreelancer;