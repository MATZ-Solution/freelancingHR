import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import {  Img_02, Img_03, Img_04, Img_05, home_icon} from "../../imagepath";
import { Sidebar } from '../sidebar';
const Favouritelist = () => {
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  return (
<>
  {/* Breadcrumb */}
  <div className="bread-crumb-bar">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <div className="breadcrumb-list">
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="index">
                    <img src={home_icon} alt="Post Author" />{" "}
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Employee
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Favourites
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  {/* Page Content */}
  <div className="content content-page bookmark">
    <div className="container-fluid">
      <div className="row">
        {/* sidebar */}
        <div className="col-xl-3 col-md-4 theiaStickySidebar">
            <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
          </div>
        {/* /sidebar */}
        <div className="col-xl-9 col-md-8">
          <nav className="user-tabs mb-4">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li className="nav-item">
                <Link className="nav-link active" to="favourites">
                  Bookmarked Freelancers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="invaited-favourites">
                  Invited Freelancers
                </Link>
              </li>
            </ul>
          </nav>
          {/* project list */}
          <div className="my-projects-view favourite-group">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header d-flex">
                    <h5 className="card-title">Bookmarked Freelancers</h5>
                    <ul className="list-grid d-flex align-items-center">
                      <li>
                        <Link
                          to="favourites-list"
                          className="favour-active"
                        >
                          <i className="fas fa-list" />
                        </Link>
                      </li>
                      <li>
                        <Link to="favourites">
                          <i className="fas fa-th-large" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="freelance-box list-book-mark book-mark favour-book">
                    <div className="row">
                      <div className="col-md-12 col-lg-12 col-xl-12">
                        <div className="relavance-result d-flex align-items-center">
                          <h4>Found 455 Results</h4>
                          <div className="relavance-rate d-flex justify-content-sm-end">
                            <div className="sort-by">
                              <label>Sort By: </label>
                              <select className="custom-select form-select">
                                <option>Relevance</option>
                                <option>Rating</option>
                                <option>Popular</option>
                                <option>Latest</option>
                                <option>Free</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card list-develop-group">
                          <div className="about-author d-flex align-items-center">
                            <div className="about-list-author d-flex align-items-center">
                              <div className="about-author-img">
                                <div className="author-img-wrap">
                                  <Link to="developer-details">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Img_02}
                                    />
                                    <span className="verified">
                                      <i className="fas fa-check-circle" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="author-details">
                                <div className="freelance-info">
                                  <h3>
                                    <Link to="developer-details">
                                      Akshay Handge
                                    </Link>
                                  </h3>
                                  <div className="freelance-specific">
                                    UI/UX Designer
                                  </div>
                                  <div className="freelance-location">
                                    <i className="fas fa-map-marker-alt me-1" />
                                    Alabama, USA
                                  </div>
                                  <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star " />
                                    <i className="fas fa-star" />
                                    <span className="average-rating">
                                      4.7 (32)
                                    </span>
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
                                </div>
                              </div>
                            </div>
                            <div className="develop-list-pro">
                              <Link
                                data-bs-toggle="modal"
                                to="#rating"
                                className="favourite favourited"
                              >
                                <i className="fas fa-star" />
                              </Link>
                              <div className="freelancers-price">
                                $25 Hourly
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="developer-details"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card list-develop-group">
                          <div className="about-author d-flex align-items-center">
                            <div className="about-list-author d-flex align-items-center">
                              <div className="about-author-img">
                                <div className="author-img-wrap">
                                  <Link to="developer-details">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Img_03}
                                    />
                                    <span className="verified">
                                      <i className="fas fa-check-circle" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="author-details">
                                <div className="freelance-info">
                                  <h3>
                                    <Link to="developer-details">
                                      George Wells
                                    </Link>
                                  </h3>
                                  <div className="freelance-specific">
                                    UI/UX Designer
                                  </div>
                                  <div className="freelance-location">
                                    <i className="fas fa-map-marker-alt me-1" />
                                    Alabama, USA
                                  </div>
                                  <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star " />
                                    <i className="fas fa-star" />
                                    <span className="average-rating">
                                      4.7 (32)
                                    </span>
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
                                </div>
                              </div>
                            </div>
                            <div className="develop-list-pro">
                              <Link
                                data-bs-toggle="modal"
                                to="#rating"
                                className="favourite "
                              >
                                <i className="fas fa-star" />
                              </Link>
                              <div className="freelancers-price">
                                $25 Hourly
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="developer-details"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card list-develop-group">
                          <div className="about-author d-flex align-items-center">
                            <div className="about-list-author d-flex align-items-center">
                              <div className="about-author-img">
                                <div className="author-img-wrap">
                                  <Link to="developer-details">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Img_04}
                                    />
                                    <span className="verified">
                                      <i className="fas fa-check-circle" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="author-details">
                                <div className="freelance-info">
                                  <h3>
                                    <Link to="developer-details">
                                      Richard Wilson
                                    </Link>
                                  </h3>
                                  <div className="freelance-specific">
                                    UI/UX Designer
                                  </div>
                                  <div className="freelance-location">
                                    <i className="fas fa-map-marker-alt me-1" />
                                    Alabama, USA
                                  </div>
                                  <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star " />
                                    <i className="fas fa-star" />
                                    <span className="average-rating">
                                      4.7 (32)
                                    </span>
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
                                </div>
                              </div>
                            </div>
                            <div className="develop-list-pro">
                              <Link
                                data-bs-toggle="modal"
                                to="#rating"
                                className="favourite favourited"
                              >
                                <i className="fas fa-star" />
                              </Link>
                              <div className="freelancers-price">
                                $25 Hourly
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="developer-details"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card list-develop-group">
                          <div className="about-author d-flex align-items-center">
                            <div className="about-list-author d-flex align-items-center">
                              <div className="about-author-img">
                                <div className="author-img-wrap">
                                  <Link to="developer-details">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Img_05}
                                    />
                                    <span className="verified">
                                      <i className="fas fa-check-circle" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="author-details">
                                <div className="freelance-info">
                                  <h3>
                                    <Link to="developer-details">
                                      Timothy Smith
                                    </Link>
                                  </h3>
                                  <div className="freelance-specific">
                                    UI/UX Designer
                                  </div>
                                  <div className="freelance-location">
                                    <i className="fas fa-map-marker-alt me-1" />
                                    Alabama, USA
                                  </div>
                                  <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star " />
                                    <i className="fas fa-star" />
                                    <span className="average-rating">
                                      4.7 (32)
                                    </span>
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
                                </div>
                              </div>
                            </div>
                            <div className="develop-list-pro">
                              <Link
                                data-bs-toggle="modal"
                                to="#rating"
                                className="favourite "
                              >
                                <i className="fas fa-star" />
                              </Link>
                              <div className="freelancers-price">
                                $25 Hourly
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="developer-details"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card list-develop-group">
                          <div className="about-author d-flex align-items-center">
                            <div className="about-list-author d-flex align-items-center">
                              <div className="about-author-img">
                                <div className="author-img-wrap">
                                  <Link to="developer-details">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Img_03}
                                    />
                                    <span className="verified">
                                      <i className="fas fa-check-circle" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="author-details">
                                <div className="freelance-info">
                                  <h3>
                                    <Link to="developer-details">
                                      Akshay Handge
                                    </Link>
                                  </h3>
                                  <div className="freelance-specific">
                                    UI/UX Designer
                                  </div>
                                  <div className="freelance-location">
                                    <i className="fas fa-map-marker-alt me-1" />
                                    Alabama, USA
                                  </div>
                                  <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star " />
                                    <i className="fas fa-star" />
                                    <span className="average-rating">
                                      4.7 (32)
                                    </span>
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
                                </div>
                              </div>
                            </div>
                            <div className="develop-list-pro">
                              <Link
                                data-bs-toggle="modal"
                                to="#rating"
                                className="favourite favourited"
                              >
                                <i className="fas fa-star" />
                              </Link>
                              <div className="freelancers-price">
                                $25 Hourly
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="developer-details"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card list-develop-group">
                          <div className="about-author d-flex align-items-center">
                            <div className="about-list-author d-flex align-items-center">
                              <div className="about-author-img">
                                <div className="author-img-wrap">
                                  <Link to="developer-details">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Img_02}
                                    />
                                    <span className="verified">
                                      <i className="fas fa-check-circle" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="author-details">
                                <div className="freelance-info">
                                  <h3>
                                    <Link to="developer-details">
                                      Richard Wilson
                                    </Link>
                                  </h3>
                                  <div className="freelance-specific">
                                    UI/UX Designer
                                  </div>
                                  <div className="freelance-location">
                                    <i className="fas fa-map-marker-alt me-1" />
                                    Alabama, USA
                                  </div>
                                  <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star " />
                                    <i className="fas fa-star" />
                                    <span className="average-rating">
                                      4.7 (32)
                                    </span>
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
                                </div>
                              </div>
                            </div>
                            <div className="develop-list-pro">
                              <Link
                                data-bs-toggle="modal"
                                to="#rating"
                                className="favourite "
                              >
                                <i className="fas fa-star" />
                              </Link>
                              <div className="freelancers-price">
                                $25 Hourly
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="developer-details"
                                  className="btn-cart"
                                  tabIndex={-1}
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card list-develop-group">
                          <div className="about-author d-flex align-items-center">
                            <div className="about-list-author d-flex align-items-center">
                              <div className="about-author-img">
                                <div className="author-img-wrap">
                                  <Link to="developer-details">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Img_04}
                                    />
                                    <span className="verified">
                                      <i className="fas fa-check-circle" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="author-details">
                                <div className="freelance-info">
                                  <h3>
                                    <Link to="developer-details">
                                      Timothy Smith
                                    </Link>
                                  </h3>
                                  <div className="freelance-specific">
                                    UI/UX Designer
                                  </div>
                                  <div className="freelance-location">
                                    <i className="fas fa-map-marker-alt me-1" />
                                    Alabama, USA
                                  </div>
                                  <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star " />
                                    <i className="fas fa-star" />
                                    <span className="average-rating">
                                      4.7 (32)
                                    </span>
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
                                </div>
                              </div>
                            </div>
                            <div className="develop-list-pro">
                              <Link
                                data-bs-toggle="modal"
                                to="#rating"
                                className="favourite favourited"
                              >
                                <i className="fas fa-star" />
                              </Link>
                              <div className="freelancers-price">
                                $25 Hourly
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to="developer-details"
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
              </div>
            </div>
          </div>
          {/* project list */}
        </div>
      </div>
    </div>
  </div>
  {/* /Page Content */}

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
export default  Favouritelist;