/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import StickyBox from "react-sticky-box";
import { Sidebar } from '../sidebar';
import { Avatar_10, Avatar_11, Avatar_12, Avatar_2, Avatar_4 } from "../../imagepath";
const Review = () => {
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  return (
    <>
      {/* Page Content */}
      <div className="content content-page ">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="dashboard-sec freelance-favourites">
                <div className="page-title">
                  <h3>Reviews</h3>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="review-card">
                      <h5>Fast and clear.</h5>
                      <p>
                        Fast and clear. European visual concepts. Easy to
                        communicate TOP
                      </p>
                      <div className="reviewer-details-block">
                        <div className="reviewer-img">
                          <img
                            src={Avatar_10}
                            className="img-fluid"
                            alt="Img"
                          />
                        </div>
                        <div className="reviewer-details">
                          <h6>Theresa Phillips</h6>
                          <div className="d-flex">
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span className="average-rating">4</span>
                            </div>
                            <div className="reviewer-log">
                              <i className="feather-calendar" />
                              <span>Just now</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-card">
                      <h5>This seller was great overall.</h5>
                      <p>
                        This seller was great overall. One thing I noticed was that
                        there was one logo out of the 4 I got that stood out amongst
                        the others. Now I loved that one logo but the other ones did
                        not look like much thought were put into them and they were
                        a little disappointing. It is understandable for the price
                        for them to only put effort into one logo, which like I said
                        I loved. I think it would be better to tell this seller to
                        make one good logo and to provide 3 other logos that work
                        off the one good logo. Maybe make that one good logo and
                        then change colors and fonts for the other 3. But overall
                        this seller was great!
                      </p>
                      <div className="reviewer-details-block">
                        <div className="reviewer-img">
                          <img
                            src={Avatar_11}
                            className="img-fluid"
                            alt="Img"
                          />
                        </div>
                        <div className="reviewer-details">
                          <h6>Amy Stratton</h6>
                          <div className="d-flex">
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <span className="average-rating">5</span>
                            </div>
                            <div className="reviewer-log">
                              <i className="feather-calendar" />
                              <span>1 min ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-card">
                      <h5>Great help given and work</h5>
                      <p>Great help given and work was done as asked on time! :)</p>
                      <div className="reviewer-details-block">
                        <div className="reviewer-img">
                          <img
                            src={Avatar_2}
                            className="img-fluid"
                            alt="Img"
                          />
                        </div>
                        <div className="reviewer-details">
                          <h6>Henry Munford</h6>
                          <div className="d-flex">
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <span className="average-rating">5</span>
                            </div>
                            <div className="reviewer-log">
                              <i className="feather-calendar" />
                              <span>25 mins ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-card">
                      <h5>very quick &amp; smart.</h5>
                      <p>
                        very quick &amp; smart. Recommend him for any web related
                        work
                      </p>
                      <div className="reviewer-details-block">
                        <div className="reviewer-img">
                          <img
                            src={Avatar_12}
                            className="img-fluid"
                            alt="Img"
                          />
                        </div>
                        <div className="reviewer-details">
                          <h6>Barbara McDonald</h6>
                          <div className="d-flex">
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <span className="average-rating">5</span>
                            </div>
                            <div className="reviewer-log">
                              <i className="feather-calendar" />
                              <span>1 hour ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-card">
                      <h5>
                        They delivered great work! The delivery was prompt and the
                        communication was excellent.
                      </h5>
                      <p>
                        They delivered great work! The delivery was prompt and the
                        communication was excellent. I will be using them in the
                        future and recommend them to anyone who needs their
                        services!
                      </p>
                      <div className="reviewer-details-block">
                        <div className="reviewer-img">
                          <img
                            src={Avatar_4}
                            className="img-fluid"
                            alt="Img"
                          />
                        </div>
                        <div className="reviewer-details">
                          <h6>Tyler Lewis</h6>
                          <div className="d-flex">
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <span className="average-rating">5</span>
                            </div>
                            <div className="reviewer-log">
                              <i className="feather-calendar" />
                              <span>5 hours ago</span>
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
    </>


  )
}
export default Review;