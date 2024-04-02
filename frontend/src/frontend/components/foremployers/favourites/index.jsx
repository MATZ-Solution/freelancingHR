import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from '../sidebar';
import { Avatar_8, Avatar_9, proposal_user_02, table_avatar, table_avatar_02, table_avatar_04, tableavatar05, user02, user03 } from "../../imagepath";

const Favourites = () => {
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  const handleItemClick = (index) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };
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
                                 onClick={() => handleItemClick(1)}  className={`favourite ${selectedItems[1] ? 'color-active' : ''}`}
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
                              <Link to="#" className="btn-invite-fav">
                                Invite
                              </Link>
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
                                 onClick={() => handleItemClick(2)}  className={`favourite ${selectedItems[2] ? 'color-active' : ''}`}
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
                              <Link to="#" className="btn-invite-fav">
                                Invite
                              </Link>
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
                                 onClick={() => handleItemClick(3)}  className={`favourite ${selectedItems[3] ? 'color-active' : ''}`}
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
                              <Link to="#" className="btn-invite-fav">
                                Invite
                              </Link>
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
                                 onClick={() => handleItemClick(4)}  className={`favourite ${selectedItems[4] ? 'color-active' : ''}`}
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
                              <Link to="#" className="btn-invite-fav">
                                Invite
                              </Link>
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
                                 onClick={() => handleItemClick(5)}  className={`favourite ${selectedItems[5] ? 'color-active' : ''}`}
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
                              <Link to="#" className="btn-invite-fav">
                                Invite
                              </Link>
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
                                 onClick={() => handleItemClick(6)}  className={`favourite ${selectedItems[6] ? 'color-active' : ''}`}
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
                              <Link to="#" className="btn-invite-fav">
                                Invite
                              </Link>
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
                                 onClick={() => handleItemClick(7)}  className={`favourite ${selectedItems[7] ? 'color-active' : ''}`}
                              >
                                <i className="feather-heart" />
                              </Link>
                              <div className="freelance-img">
                                <Link to="/developer-details">
                                  <img
                                    src={table_avatar_04}
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
                              <Link to="#" className="btn-invite-fav">
                                Invite
                              </Link>
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
                                 onClick={() => handleItemClick(8)}  className={`favourite ${selectedItems[8] ? 'color-active' : ''}`}
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
                              <Link to="#" className="btn-invite-fav">
                                Invite
                              </Link>
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
                                 onClick={() => handleItemClick(1)}  className={`favourite ${selectedItems[1] ? 'color-active' : ''}`}
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
                              <Link to="#" className="btn-invite-fav">
                                Invite
                              </Link>
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
      {/* /Page Content */}
      {/* /Main Wrapper */}
      {/* The Modal */}
      <div className="modal fade" id="bookmark">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">INVITE FREELANCER</h4>
              <span className="modal-close">
                <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle orange-text" />
                </Link>
              </span>
            </div>
            <div className="modal-body">
              <form action="invited-freelancer">
                <div className="modal-info">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="average-bids mb-4">
                        <p>
                          Contact <span className="text-highlight">John Doe </span>{" "}
                          about your Project
                        </p>
                      </div>
                      <div className="form-group">
                        <label>Invite title</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Send a private message</label>
                        <textarea
                          className="form-control"
                          rows={5}
                          defaultValue={
                            "Hi  John Doe, I noticed your profile and would like to offer you my project. We can discuss any details over chat."
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Hire for</label>
                        <div className="radio">
                          <label className="custom_radio me-2">
                            <input
                              type="radio"
                              defaultValue="fix"
                              defaultChecked=""
                            />
                            <span className="checkmark" /> Fixed Price
                          </label>
                          <label className="custom_radio">
                            <input type="radio" defaultValue="fix" />
                            <span className="checkmark" /> Hourly Rate
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Hire for</label>
                        <div className="radio">
                          <label className="custom_radio me-2">
                            <input
                              type="radio"
                              defaultValue="rate"
                              defaultChecked=""
                            />
                            <span className="checkmark" /> Fixed Price
                          </label>
                          <label className="custom_radio">
                            <input type="radio" defaultValue="rate" />
                            <span className="checkmark" /> Hourly Rate
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Budget</label>
                        <div className="form-row">
                          <div className="col-7">
                            <div className="input-group">
                              <div className="input-group-prepend bg-pink d-flex">
                                <span
                                  className="input-group-text"
                                  id="basic-addon1"
                                >
                                  $
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={20.0}
                              />
                            </div>
                          </div>
                          <div className="col-5">
                            <select className="form-control select">
                              <option value={0}>USD</option>
                              <option value={0}>USD</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Budget</label>
                        <div className="form-row">
                          <div className="col-sm-7">
                            <div className="input-group form-inline mb-2">
                              <div className="input-group-prepend bg-pink d-flex">
                                <span className="input-group-text" id="basic-add">
                                  $
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control me-1"
                                placeholder={20.0}
                              />
                              <label className="invited-freelancer-label">
                                / hr
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <select className="form-control select form-select">
                              <option value={0}>USD</option>
                              <option value={0}>USD</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Project</label>
                        <select className="form-control select form-select">
                          <option value={0}>
                            3D Renders and Amazon Product Store images/Video
                          </option>
                          <option value={0}>
                            3D Renders and Amazon Product Store Video
                          </option>
                          <option value={0}>
                            3D Renders and Amazon Product Store images
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-end">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Invite
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /The Modal */}
      {/* The Modal */}
      <div className="modal fade" id="rating">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header d-block b-0 pb-0">
              <span className="modal-close float-end">
                <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle orange-text" />
                </Link>
              </span>
            </div>
            <div className="modal-body">
              <form action="project">
                <div className="modal-info">
                  <div className="text-center pt-0 mb-5">
                    <h3>Please login to Favourite Freelancers</h3>
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
  )
}
export default Favourites;