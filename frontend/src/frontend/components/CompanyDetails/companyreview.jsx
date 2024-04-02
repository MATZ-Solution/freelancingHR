import React from "react";
import { Link } from "react-router-dom";
import { about_details, home_icon, loader_icon, logo_details, profile_img, Review_01, Review_02, Review_03, Tab_icon_09, Tab_icon_10, Tab_icon_11 } from "../imagepath";
const CompanyReview = () => {
  return (
    <>
      {/* Bread-crumbs */}
      <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">
                        <img src={home_icon} alt="" /> Home
                     </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Employers
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      COMPANY PROFILE
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Bread-crumbs */}
      {/* banner-section */}
      <section className="profile-baner">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="profile-img">
                <img src={profile_img} alt="" />
              </div>
            </div>
            <div className="col">
              <div className="profile-main">
                <h2>
                  Amaze Tech PVT LTD. <i className="fas fa-check-circle" />
                </h2>
                <p>Since July 2017</p>
                <div className="about-list">
                  <ul>
                    <li>
                      <img src={logo_details} alt="Lang" /> UK
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" /> Alabama, USA
                    </li>
                    <li>
                      <i className="far fa-clock" /> Poster 1 hour ago
                    </li>
                  </ul>
                </div>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star " />
                  <i className="fas fa-star" />
                  <span className="average-rating ml-2">4.6 (25)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /banner-section */}

      {/* page-content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="pro-view">
                {/* Tab Detail */}
                <nav className="provider-tabs mb-4 abouts-view">
                  <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                    <li className="nav-item">
                      <Link className="nav-link " to="/company-details">
                        <img src={about_details} alt="User Image" />
                        <p className="bg-red">About Us</p>
                     </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/company-project">
                        <img src={Tab_icon_09} alt="User Image" />
                        <p>Projects</p>
                     </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/company-gallery">
                        <img src={Tab_icon_10} alt="User Image" />
                        <p>Gallery</p>
                     </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link active-about"
                        to="#"
                      >
                        <img src={Tab_icon_11} alt="User Image" />
                        <p>Reviews</p>
                     </Link>
                    </li>
                  </ul>
                </nav>
                {/* /Tab Detail */}
                {/* Reviews Tab Content */}
                <div className="pro-post widget-box company-post">
                  <h3 className="pro-title">Reviews</h3>
                  <div className="reviews company-review">
                    <div className="review-content no-padding">
                      <h4>This seller was great overall. </h4>
                      <p className="mb-0">
                        Fast and clear. European visual concepts. Easy to
                        communicate TOP
                      </p>
                      <div className="review-top tab-reviews d-flex align-items-center">
                        <div className="review-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              src={Review_01}
                              alt="Post Image"
                            />
                         </Link>
                        </div>
                        <div className="review-info">
                          <h3>
                            <Link to="#">javiervalino</Link>
                          </h3>
                          <h5>Today • 09:35 PM</h5>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7</span>
                        </div>
                      </div>
                    </div>
                    <div className="review-content no-padding">
                      <h4>This seller was great overall. </h4>
                      <p className="mb-0">
                        This seller was great overall. One thing I noticed was
                        that there was one logo out of the 4 I got that stood
                        out amongst the others. Now I loved that one logo but
                        the other ones did not look like much thought were put
                        into them and they were a little disappointing. It is
                        understandable for the price for them to only put effort
                        into one logo, which like I said I loved. I think it
                        would be better to tell this seller to make one good
                        logo and to provide 3 other logos that work off the one
                        good logo. Maybe make that one good logo and then change
                        colors and fonts for the other 3. But overall this
                        seller was great!
                      </p>
                      <div className="review-top tab-reviews d-flex align-items-center">
                        <div className="review-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              src={Review_02}
                              alt="Post Image"
                            />
                         </Link>
                        </div>
                        <div className="review-info">
                          <h3>
                            <Link to="#">trentburns</Link>
                          </h3>
                          <h5>Yesterday • 09:35 PM</h5>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7</span>
                        </div>
                      </div>
                    </div>
                    <div className="review-content no-padding">
                      <h4>Great help given and work</h4>
                      <p className="mb-0">
                        Great help given and work was done as asked on time! :)
                      </p>
                      <div className="review-top tab-reviews d-flex align-items-center">
                        <div className="review-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              src={Review_03}
                              alt="Post Image"
                            />
                         </Link>
                        </div>
                        <div className="review-info">
                          <h3>
                            <Link to="#">mabdz</Link>
                          </h3>
                          <h5>Sep 3 • 6:57 AM</h5>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7</span>
                        </div>
                      </div>
                    </div>
                    <div className="review-content no-padding">
                      <h4>very quick &amp; smart.</h4>
                      <p className="mb-0">
                        very quick &amp; smart. Recommend him for any web
                        related work
                      </p>
                      <div className="review-top tab-reviews d-flex align-items-center">
                        <div className="review-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              src={logo_details}
                              alt="Post Image"
                            />
                         </Link>
                        </div>
                        <div className="review-info">
                          <h3>
                            <Link to="#">creativerr</Link>
                          </h3>
                          <h5>Aug 12 • 9:37 AM</h5>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7</span>
                        </div>
                      </div>
                    </div>
                    <div className="review-content no-padding">
                      <h4>always amaze me with his skills</h4>
                      <p className="mb-0">
                        always amaze me with his skills. Recommend this top
                        rated seller for anyone. Absolute best of best
                      </p>
                      <div className="review-top tab-reviews d-flex align-items-center">
                        <div className="review-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              src={Review_01}
                              alt="Post Image"
                            />
                         </Link>
                        </div>
                        <div className="review-info">
                          <h3>
                            <Link to="#">adirajulk</Link>
                          </h3>
                          <h5>Aug 3 • 6:57 AM</h5>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7</span>
                        </div>
                      </div>
                    </div>
                    <div className="review-content no-padding">
                      <h4>
                        They delivered great work! The delivery was prompt and
                        the communication was excellent.{" "}
                      </h4>
                      <p className="mb-0">
                        They delivered great work! The delivery was prompt and
                        the communication was excellent. I will be using them in
                        the future and recommend them to anyone who needs their
                        services!
                      </p>
                      <div className="review-top tab-reviews d-flex align-items-center">
                        <div className="review-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              src={Review_03}
                              alt="Post Image"
                            />
                         </Link>
                        </div>
                        <div className="review-info">
                          <h3>
                            <Link to="#">james</Link>
                          </h3>
                          <h5>Aug 2 • 7:57 AM</h5>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <Link to="#" className="btn more-btn">
                        <img src={loader_icon} height={24} alt="User Image" />
                        Load More{" "}
                     </Link>n
                    </div>
                  </div>
                </div>
                {/* /Reviews Tab Content */}
                {/* Post a comment */}
                <div className="pro-post widget-box company-post post-comment">
                  <h3 className="pro-title">Post a comment</h3>
                  <form action="#">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Your Rating</label>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="post-btn">
                      <button className="btn more-btn">Submit</button>
                    </div>
                  </form>
                </div>
                {/* /Post a comment */}
              </div>
            </div>
            {/* profile Sidebar */}
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar company-profile">
              {/* About Widget */}
              <div className="pro-post widget-box about-widget profile-overview">
                <div className="profile-head">
                  <h4 className="pro-title mb-0">Profile Overview</h4>
                </div>
                <ul className="latest-posts pro-content">
                  <li>
                    <p>Company Name</p>
                    <h6>Amaze Tech PVT LTD.</h6>
                  </li>
                  <li>
                    <p>Company Established</p>
                    <h6>02-12-2005</h6>
                  </li>
                  <li>
                    <p>No of Employees</p>
                    <h6>1500 - 1850</h6>
                  </li>
                  <li>
                    <p>Owner Name</p>
                    <h6>Charles Dickens</h6>
                  </li>
                  <li>
                    <p>Email</p>
                    <h6>amazetechpvt.ltd@gmail.com</h6>
                  </li>
                  <li>
                    <p>Website</p>
                    <h6>www.amazetechpvt.ltd.com</h6>
                  </li>
                </ul>
                <div className="contact-btn">
                  <Link to="#" className="btn btn-primary">
                    <i className="fas fa-phone-alt" /> Contact
                 </Link>
                </div>
              </div>
              {/* /About Widget */}
              {/* Company Location */}
              <div className="pro-post widget-box location-widget">
                <div className="profile-head">
                  <h4 className="pro-title">Company Location</h4>
                </div>
                <div className="map-location">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" />
                </div>
              </div>
              {/* /Company Location */}
              {/* Working Widget */}
              <div className="pro-post widget-box  working-days">
                <div className="profile-head">
                  <h4 className="pro-title mb-0">Working Days</h4>
                </div>
                <ul className="latest-posts pro-content">
                  <li>
                    <p>Monday</p>
                    <h6>9AM - 5PM</h6>
                  </li>
                  <li>
                    <p>Tuesday </p>
                    <h6>9AM - 5PM</h6>
                  </li>
                  <li>
                    <p>Wednesday </p>
                    <h6>9AM - 5PM</h6>
                  </li>
                  <li>
                    <p>Thursday </p>
                    <h6>9AM - 5PM</h6>
                  </li>
                  <li>
                    <p>Friday </p>
                    <h6>9AM - 5PM</h6>
                  </li>
                  <li>
                    <p>Saturday </p>
                    <h6>9AM - 5PM</h6>
                  </li>
                  <li>
                    <p>Sunday </p>
                    <h6>
                      <span>Close</span>
                    </h6>
                  </li>
                </ul>
              </div>
              {/* /Working Widget */}
              {/* Social Widget */}
              <div className="pro-post widget-box social-widget">
                <div className="profile-head">
                  <h4 className="pro-title">SOCIAL LINKS</h4>
                </div>
                <ul className="social-link-profile">
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook" />
                   </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                   </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-instagram" />
                   </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-linkedin" />
                   </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-telegram" />
                   </Link>
                  </li>
                </ul>
              </div>
              {/* /Social Widget */}
            </div>
            {/* /Profile Sidebar */}
          </div>
        </div>
      </div>
      {/* /page-content */}
      
      {/* /Main Wrapper */}
    </>
  );
};

export default CompanyReview;
