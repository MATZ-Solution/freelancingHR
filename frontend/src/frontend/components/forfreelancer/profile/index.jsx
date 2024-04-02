/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import {
  Flags_pl,
  Tab_icon_01,
  Tab_icon_02,
  Tab_icon_03,
  Tab_icon_04,
  Tab_icon_05,
  Tab_icon_06,
  Avatar_1,
} from "../../imagepath";
import EmployerBreadcrumb from "../../foremployers/common/employerBreadcrumb";
const FreelancerProfile = () => {
  return (
    <>
      {/* Breadcrumb */}
      <EmployerBreadcrumb
        title="Freelancer Profiles"
        subtitle="Freelancer Profile"
      />

      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="profile profile-freelance">
                <div className="profile-box">
                  <div className="provider-widget">
                    <div className="pro-info-left">
                      <div className="provider-img ">
                        <img src={Avatar_1} className="img-fluid" alt="User" />
                      </div>
                      <div className="profile-info">
                        <h2 className="profile-title">George Well</h2>
                        <p className="profile-position">iOS Expert</p>
                        <div>
                          <Link to="#" className="btn full-btn">
                            Full time
                          </Link>
                        </div>
                        <ul className="profile-preword">
                          <li>
                            <img src={Flags_pl} alt="Img" height={16} /> Poland
                          </li>
                          <li>
                            <div className="rating">
                              <span className="average-rating">4.6</span>
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pro-info-right profile-inf">
                      <Link
                        className="btn profile-edit-btn"
                        to="/freelancer-profile-settings"
                      >
                        Edit Profile
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="profile-list">
                  <ul>
                    <li>
                      <span className="cont bg-blue">22</span>
                      <strong className="proj-title">
                        {" "}
                        Completed Projects
                      </strong>
                    </li>
                    <li>
                      <span className="cont bg-red">5</span>
                      <strong className="proj-title"> Ongoing Projects</strong>
                    </li>
                    <li>
                      <span className="cont bg-violet">89%</span>
                      <strong className="proj-title"> Recommended</strong>
                    </li>
                    <li>
                      <span className="cont bg-yellow">12</span>
                      <strong className="proj-title"> Rehired</strong>
                    </li>
                    <li>
                      <span className="cont bg-pink">48</span>
                      <strong className="proj-title"> Clients</strong>
                    </li>
                    <li>
                      <span className="cont bg-navy">5</span>
                      <strong className="proj-title"> Feedbacks</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="pro-view">
                {/* Tab Detail */}
                <nav className="provider-tabs mb-4">
                  <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                    <li className="nav-item">
                      <Link className="nav-link" to="#overview">
                        <img src={Tab_icon_01} height={25} alt="User Image" />
                        <p className="bg-red">Overview</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#project">
                        <img src={Tab_icon_02} height={25} alt="User Image" />
                        <p className="bg-blue">Projects</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#experience">
                        <img src={Tab_icon_03} height={25} alt="User Image" />
                        <p className="bg-violet">Experience</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#education">
                        <img src={Tab_icon_04} height={25} alt="User Image" />
                        <p className="bg-yellow">Education</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#skill">
                        <img src={Tab_icon_05} height={25} alt="User Image" />
                        <p className="bg-pink">Skills</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#feedback">
                        <img src={Tab_icon_06} height={25} alt="User Image" />
                        <p className="bg-green">Feedbacks</p>
                      </Link>
                    </li>
                  </ul>
                </nav>
                {/* /Tab Detail */}
                {/* Overview Tab Content */}
                <div className="pro-post widget-box" id="overview">
                  <h3 className="pro-title">Overview</h3>
                  <div className="pro-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec eget vestibulum lorem. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque tempor aliquam felis,
                      nec condimentum ipsum commodo id. Vivamus sit amet augue
                      nec urna efficitur tincidunt. Vivamus consectetur aliquam
                      lectus commodo viverra. Nunc eu augue nec arcu efficitur
                      faucibus.
                    </p>
                    <div className="mt-4">
                      <h4 className="widget-title">My services include:</h4>
                      <ul className="pro-list">
                        <li>Cross-platform games</li>
                        <li>Game concept and level designing</li>
                        <li>Multiplayer integration</li>
                        <li>Re-skin</li>
                        <li>Ads and in-app purchase (Maximize your Revenue)</li>
                        <li>Game Optimisations</li>
                        <li>2D/3D Animation</li>
                      </ul>
                    </div>
                    <p>
                      Graphic DesigningSocial Network IntegrationVirtual Reality
                      (VR)Augmented Reality (AR)Game con promotional graphics
                      and video app store and Playstore publishing{" "}
                    </p>
                  </div>
                </div>
                {/* /Overview Tab Content */}
                {/* Experience Tab Content */}
                <div
                  className="pro-post project-widget widget-box"
                  id="experience"
                >
                  <h3 className="pro-title">Experience</h3>
                  <div className="pro-content">
                    <div className="widget-list mb-0">
                      <ul className="clearfix">
                        <li>
                          <h4>Logo Designer</h4>
                          <h5>Techline July 9, 2018 - March 18, 2021</h5>
                          <p>
                            I am a professional graphic designer. I have more
                            than 10-years of experience in graphics design. If
                            you are looking for any graphic related work,
                            contact me, I'll glad to help you.
                          </p>
                        </li>
                        <li>
                          <h4>Logo Designer</h4>
                          <h5>Techline July 9, 2018 - March 18, 2021</h5>
                          <p>
                            I am a professional graphic designer. I have more
                            than 10-years of experience in graphics design. If
                            you are looking for any graphic related work,
                            contact me, I'll glad to help you.
                          </p>
                        </li>
                        <li>
                          <h4>Logo Designer</h4>
                          <h5>Techline July 9, 2018 - March 18, 2021</h5>
                          <p>
                            I am a professional graphic designer. I have more
                            than 10-years of experience in graphics design. If
                            you are looking for any graphic related work,
                            contact me, I'll glad to help you.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Experience Tab Content */}
                {/* Educational Tab Content */}
                <div
                  className="pro-post project-widget widget-box"
                  id="education"
                >
                  <h3 className="pro-title">Educational Details</h3>
                  <div className="pro-content">
                    <div className="widget-list mb-0">
                      <ul className="clearfix">
                        <li>
                          <h4>
                            Bachelor of Science in Game Programming &amp;
                            Development
                          </h4>
                          <h5>
                            Hampshire University January 12, 2015 - January 19,
                            2019
                          </h5>
                          <p>
                            Graphic Designing artworks through making plans and
                            utilizing the helpful analysis of companions,
                            educators, and bosses to improve those plans.
                            Careful discipline brings about promising results,
                            and the capacity to acknowledge and gain from
                            analysis from peers and even the purchaser
                            everywhere is pivotal for accomplishment in this
                            field.
                          </p>
                        </li>
                        <li>
                          <h4>Master in Gaming STudi Design</h4>
                          <h5>Techline July 9, 2018 - March 18, 2021</h5>
                          <p>
                            I am a professional graphic designer. I have more
                            than 10-years of experience in graphics design. If
                            you are looking for any graphic related work,
                            contact me, I'll glad to help you.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Educational Tab Content */}
                {/* Technical Tab Content */}
                <div className="pro-post project-widget widget-box" id="skill">
                  <h3 className="pro-title">Technical Skills</h3>
                  <div className="pro-content">
                    <div className="tags">
                      <span className="badge badge-pill badge-skills">
                        + Web Design
                      </span>
                      <span className="badge badge-pill badge-skills">
                        + UI Design
                      </span>
                      <span className="badge badge-pill badge-skills">
                        + Node Js
                      </span>
                      <span className="badge badge-pill badge-skills">
                        + Javascript
                      </span>
                    </div>
                  </div>
                </div>
                {/* /Technical Tab Content */}
              </div>
            </div>
            {/* Blog Sidebar */}
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
              <div className="pro-post widget-box follow-widget">
                <Link to="#" className="btn follow-btn">
                  + Follow
                </Link>
                <ul className="follow-posts pro-post">
                  <li>
                    <p>Following</p>
                    <h6>49</h6>
                  </li>
                  <li>
                    <p>Followers</p>
                    <h6>422</h6>
                  </li>
                </ul>
              </div>
              <div className="pro-post widget-box language-widget">
                <h4 className="pro-title">LANGUAGE SKILLS</h4>
                <ul className="latest-posts pro-content pt-0">
                  <li>
                    <p>English</p>
                    <div className="progress progress-md mb-0">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </li>
                  <li>
                    <p>Russian</p>
                    <div className="progress progress-md mb-0">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </li>
                  <li>
                    <p>German</p>
                    <div className="progress progress-md mb-0">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pro-post widget-box about-widget">
                <h4 className="pro-title mb-0">ABOUT ME</h4>
                <ul className="latest-posts pro-content">
                  <li>
                    <p>Gender</p>
                    <h6>Male</h6>
                  </li>
                  <li>
                    <p>Experience</p>
                    <h6>5 Years</h6>
                  </li>
                  <li>
                    <p>Location</p>
                    <h6>Istanbul/Turkey</h6>
                  </li>
                </ul>
              </div>
              {/* Categories */}
              <div className="pro-post category-widget">
                <div className="widget-title-box">
                  <h4 className="pro-title">SOCIAL LINKS</h4>
                </div>
                <ul className="latest-posts pro-content">
                  <li>
                    <Link to="#">http://www.facebook.com/john...</Link>
                  </li>
                  <li>
                    <Link to="#">http://www.Twitter.com/john...</Link>
                  </li>
                  <li>
                    <Link to="#">Http://www.googleplus.com/john... </Link>
                  </li>
                  <li>
                    <Link to="#"> Http://www.behance.com/john...</Link>
                  </li>
                  <li>
                    <Link to="#"> Http://www.pinterest.com/john...</Link>
                  </li>
                </ul>
              </div>
              {/* /Categories */}
              {/* Link Widget */}
              <div className="pro-post widget-box post-widget">
                <h3 className="pro-title">Profile Link</h3>
                <div className="pro-content">
                  <div className="input-block profile-group mb-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="https://www.XGEN Freelancing Platform.com/developer/daren/12454687"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-success sub-btn"
                          type="submit"
                        >
                          <i className="fa fa-clone" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Link Widget */}
            </div>
            {/* /Blog Sidebar */}
          </div>
        </div>
      </div>

      {/* /Page Content */}
    </>
  );
};
export default FreelancerProfile;
