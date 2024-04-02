/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import {  home_icon, Icon_10, Icon_11, Img_003, Img_004, Img_005, Logo_01, pl, Profile_Bg, Profile_bg, profile_pic, Project_010, Project_011, Project_8, Project_9, Tab_icon_16, Tab_icon_17, Tab_icon_18, Tab_icon_19, Tab_icon_20, Tab_icon_21 } from "../imagepath";
import StickyBox from "react-sticky-box";
import MyComponent from "./myComponets";
// import SimpleReactLightbox from 'simple-react-lightbox'
const FreelancerDetails =()=>{
    return(
        <>
            <div>
                <div className="bread-crumb-bar">
                    <div className="container">
                        <div className="row align-items-center inner-banner">
                            <div className="col-md-12 col-12 text-center">
                                <div className="breadcrumb-list">
                                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to ="#"><img src={home_icon} alt="" /> Home</Link></li>
                                            <li className="breadcrumb-item" aria-current="page">Developer details</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container">	
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="developer-box head-develop">
                                    <div className="developer-profile-img">
                                      <img src={Profile_Bg} alt="" className="img-fluid" />
                                        <div className="img-profile">
                                            <img src={profile_pic} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <h2>John Danie S <i className="fas fa-check-circle" /></h2>
                                    <p>iOS Expert + Node Dev <span>Full time</span></p>
                                    <ul className="develope-list-rate">
                                        <li>
                                            <div className="rating">	
                                            <span className="average-rating">4.6 </span>
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            </div>
                                        </li>
                                        <li>Member Since,Aug 5, 2018</li>
                                        <li className="bl-0"><img src={pl} alt="" height={16} /> Poland</li>
                                    </ul>
                                    <div className="proposal-box">
                                        <div className="proposal-value">
                                            <h4>$20.00</h4>
                                            <span>( Per Hour )</span>
                                        </div>
                                        <Link data-bs-toggle="modal" to="#hire" className="btn favourites-btn btn-primary favour-border">Favourite <i className="fas fa-heart" /></Link>
                                        <Link data-bs-toggle="modal" to="#file" className="btn proposal-btn btn-primary" >Send Invite </Link>
                                    </div>
                                    <ul className="feed-back-detail">
                                        <li>Recommended<span>89%</span></li>
                                        <li>Completed Projects<span>22</span></li>
                                        <li>Clients<span>48</span></li>
                                        <li>Ongoing Projects<span>2</span></li>
                                        <li>Feedbacks<span>5</span></li>
                                        <li>Rehired<span>12</span></li>
                                    </ul>
                                </div>
                                <div className="pro-view develop-view">
                                    {/* Tab Detail */}
                                    <nav className="provider-tabs mb-4 abouts-view">
                                        <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                                            <li className="nav-item">
                                            <Link className="nav-link active-about" to ="#overview">
                                                <img src={Tab_icon_21} alt="User Image" />
                                                <p className="bg-red">Overview</p>
                                            </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link className="nav-link" to ="#project">
                                                <img src={Tab_icon_16} alt="User Image" />
                                                <p className="bg-blue">Projects</p>
                                            </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link className="nav-link" to ="#experience">
                                                <img src={Tab_icon_17} alt="User Image" />
                                                <p className="bg-violet">Experience</p>
                                            </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link className="nav-link" to ="#education">
                                                <img src={Tab_icon_18} alt="User Image" />
                                                <p className="bg-yellow">Education</p>
                                            </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link className="nav-link" to ="#skill">
                                                <img src={Tab_icon_19} alt="User Image" />
                                                <p className="bg-pink">Skills</p>
                                            </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link className="nav-link" to ="#feedback">
                                                <img src={Tab_icon_20} alt="User Image" />
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
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus.</p>
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
                                            <p>Graphic DesigningSocial Network IntegrationVirtual Reality (VR)Augmented Reality (AR)Game con promotional graphics and video app store and Playstore publishing </p>
                                        </div>
                                    </div>
                                    {/* /Overview Tab Content */}
                                    {/* Project Tab Content */}								
                                    <div className="pro-post project-widget widget-box project-gallery" id="project">
                                        <h3 className="pro-title">PROJECTS</h3>
                                        <div className="pro-content">
                                           {/* <SimpleReactLightbox>
                                                <MyComponent/>
                                            </SimpleReactLightbox> */}
                                            <MyComponent/>
                                        </div>
                                    </div>
                                    {/* /Project Tab Content */}
                                    {/* Experience Tab Content */}
                                    <div className="pro-post project-widget widget-box develop-experiance" id="experience">
                                        <h3 className="pro-title">Experience</h3>
                                        <div className="pro-content">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6 d-flex">
                                                    <div className="experiance-list">
                                                        <div className="experiance-logo d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid" alt="" src={Icon_10} />
                                                        </div>
                                                        <h4>Logo Designer</h4>
                                                        <h5>Techline <br /> July 9, 2018 - March 18, 2021</h5>
                                                        <p>I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 d-flex">
                                                    <div className="experiance-list">
                                                        <div className="experiance-logo d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid" alt="" src={Icon_10} />
                                                        </div>
                                                        <h4>UI Designer</h4>
                                                        <h5>Techline <br /> May 10, 2020 - March 10, 2022</h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 d-flex">
                                                    <div className="experiance-list">
                                                        <div className="experiance-logo d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid" alt="" src={Icon_10} />
                                                        </div>
                                                        <h4>UX Designer</h4>
                                                        <h5>Techline <br /> Sep 10, 2018 - Jan 18, 2020</h5>
                                                        <p>Lorem ipsum dolor sit amet ,nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Experience Tab Content */}
                                    {/* Educational Tab Content */}
                                    <div className="pro-post project-widget widget-box" id="education">
                                        <h3 className="pro-title">Educational Details</h3>
                                        <div className="pro-content">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 d-flex">
                                                    <div className="experiance-list">
                                                        <div className="experiance-logo logo-bg d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid" alt="" src={Icon_11} />
                                                        </div>
                                                        <h4>Bachelor of Science in Game Programming &amp; Development</h4>
                                                        <h5>Hampshire University January 12, 2015 - January 19, 2019</h5>
                                                        <p>Graphic Designing artworks through making plans and utilizing the helpful analysis of companions, educators, and bosses to improve those plans. Careful discipline brings about promising results, and the capacity to acknowledge and gain from analysis from peers and even the purchaser everywhere is pivotal for accomplishment in this field.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 d-flex">
                                                    <div className="experiance-list">
                                                        <div className="experiance-logo logo-bg d-flex align-items-center justify-content-center">
                                                            <img className="img-fluid" alt="" src={Icon_11} />
                                                        </div>
                                                        <h4>Master in Gaming STudi Design</h4>
                                                        <h5>Techline  July 9, 2018 - March 18, 2021</h5>
                                                        <p>I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Educational Tab Content */}
                                    {/* Technical Tab Content */}
                                    <div className="pro-post project-widget widget-box technical-skill" id="skill">
                                        <h3 className="pro-title">Technical Skills</h3>
                                        <div className="pro-content">
                                            <div className="tags">
                                                <span className="badge badge-pill badge-skills">+ Web Design</span>
                                                <span className="badge badge-pill badge-skills">+ UI Design</span>
                                                <span className="badge badge-pill badge-skills">+ Node Js</span>
                                                <span className="badge badge-pill badge-skills">+ Javascript</span>
                                            </div>
                                        </div>
                                    </div>								
                                    {/* /Technical Tab Content */}
                                    {/* Feedback Tab Content */}
                                    <div className="pro-post author-widget clearfix develop-feedback" id="feedback">
                                        <div className="widget-title-box clearfix d-flex">
                                            <h3 className="pro-title mb-0">Feedbacks</h3>
                                            <Link to ="#" className="feedback-view">View All</Link>
                                        </div>
                                        <div className="about-author">
                                            <div className="about-author-img">
                                                <div className="author-img-wrap">
                                                    <Link to ="#"><img className="img-fluid" alt="" src={Img_003} /></Link>
                                                </div>
                                            </div>
                                            <div className="author-details">
                                                <Link to ="#" className="blog-author-name">Logo Designer</Link>
                                                <h6>Techline  July 9, 2018 - March 18, 2021</h6>
                                                <p className="mb-0">I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
                                            </div>
                                        </div>
                                        <div className="about-author">
                                            <div className="about-author-img">
                                                <div className="author-img-wrap">
                                                    <Link to ="#"><img className="img-fluid" alt="" src={Img_004} /></Link>
                                                </div>
                                            </div>
                                            <div className="author-details">
                                                <Link to ="#" className="blog-author-name">Web Designer</Link>
                                                <h6>Techline  July 9, 2018 - March 18, 2021</h6>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis</p>
                                            </div>
                                        </div>
                                        <div className="about-author">
                                            <div className="about-author-img">
                                                <div className="author-img-wrap">
                                                    <Link to ="#"><img className="img-fluid" alt="" src={Img_003} /></Link>
                                                </div>
                                            </div>
                                            <div className="author-details">
                                                <Link to ="#" className="blog-author-name">UX Designer</Link>
                                                <h6>Techline  July 9, 2018 - March 18, 2021</h6>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis</p>
                                            </div>
                                        </div>
                                        <div className="about-author">
                                            <div className="about-author-img">
                                                <div className="author-img-wrap">
                                                    <Link to ="#"><img className="img-fluid" alt="" src={Img_005} /></Link>
                                                </div>
                                            </div>
                                            <div className="author-details">
                                                <Link to ="#" className="blog-author-name">Php Developer</Link>
                                                <h6>Techline  July 9, 2018 - March 18, 2021</h6>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis</p>
                                            </div>
                                        </div>
                                    </div>								
                                    {/* /Feedback Tab Content */}
                                </div>
                            </div>
                            {/* Blog Sidebar */}
                            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar developer-view">
                                <StickyBox>
                                    {/* About Widget */}	
                                    <div className="pro-post widget-box about-widget about-field">
                                        <h4 className="pro-title ">About Me</h4>
                                        <table className="table">
                                        <tbody>
                                            <tr>
                                            <td>Gender</td>
                                            <td>Male</td>
                                            </tr>
                                            <tr>
                                            <td>Experience</td>
                                            <td>5 Years</td>
                                            </tr>
                                            <tr>
                                            <td>Location</td>
                                            <td>Istanbul/Turkey</td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                 {/* /About Widget */}
                                 {/* Language Widget */}
                                    <div className="pro-post widget-box language-widget">
                                        <h4 className="pro-title mb-0">Language Skills</h4>
                                        <ul className="latest-posts pro-content">
                                            <li><p>English</p>
                                                <div className="progress progress-md mb-0">
                                                <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </li>
                                            <li><p>Russian</p>
                                                <div className="progress progress-md mb-0">
                                                <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                </div></li>
                                            <li><p>German</p>
                                                <div className="progress progress-md mb-0">
                                                <div className="progress-bar bg-warning" role="progressbar" style={{width: '85%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                 {/* /Language Widget */}
                                 {/* Follow Widget */}
                                    <div className="pro-post widget-box follow-widget">
                                        <ul className="follow-posts pro-post">
                                            <li><p>Following</p><h6>49</h6></li>	
                                            <li><p>Followers</p><h6>422</h6></li>	
                                        </ul>
                                        <div className="text-center">
                                        <Link to ="#" className="btn follow-btn">+ Follow</Link>
                                        </div>
                                    </div>
                                 {/* /Follow Widget */}
                                 {/* Categories */}
                                    <div className="pro-post category-widget link-box">
                                        <div className="widget-title-box">
                                        <h4 className="pro-title">Social Links</h4>
                                        </div>
                                        <ul className="latest-posts pro-content mb-3">
                                            <li><Link to ="#">http://www.facebook.com/john...</Link></li>
                                            <li><Link to ="#">http://www.Twitter.com/john...</Link></li>
                                            <li><Link to ="#">Http://www.googleplus.com/john... </Link></li>
                                            <li><Link to ="#"> Http://www.behance.com/john...</Link></li>
                                            <li><Link to ="#"> Http://www.pinterest.com/john...</Link></li>
                                        </ul>
                                    </div>
                                 {/* /Categories */}
                                 {/* LInk Widget */}	
                                    <div className="pro-post widget-box post-widget profile-link">
                                        <h3 className="pro-title">Profile Link</h3>
                                        <div className="pro-content">
                                            <div className="form-group profile-group mb-0">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" defaultValue="https://www.XGEN Freelancing Platform.com/developer/daren/12454687" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-success sub-btn" type="submit"><i className="fa fa-clone" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 {/* /Link Widget */}		
                                 {/* Social Widget */}	
                                    <div className="pro-post widget-box social-widget develop-social-link">
                                        <div className="profile-head">
                                        <h4 className="pro-title">SOCIAL LINKS</h4>
                                        </div>
                                        <ul className="social-link-profile">
                                            <li><Link to ="#"><i className="fas fa-share-alt" /></Link></li>
                                            <li><Link to ="#"><i className="fab fa-facebook" /></Link></li>
                                            <li><Link to ="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link to ="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link to ="#"><i className="fab fa-linkedin" /></Link></li>
                                            <li><Link to ="#"><i className="fab fa-telegram" /></Link></li>
                                        </ul>
                                    </div>
                                    {/* /Social Widget */}
                                </StickyBox>		
                            
                            
                            </div>
                            {/* /Blog Sidebar */}
                        </div>
                    </div>
                </div>
            </div>
            {/* The Modal */}
            <div className="modal fade custom-modal" id="hire">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-modal">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="text-center pt-0 mb-4">
                                <img src={Logo_01} alt="logo" className="img-fluid mb-1" />
                                <h5 className="modal-title">Discuss your project with David</h5>
                            </div>
                            <form action="#">
                                <div className="modal-info">
                                    <div className="row">
                                        <div className="col-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" placeholder="First name & Lastname" />
                                            </div> 
                                            <div className="form-group">
                                                <input type="email" name="name" className="form-control" placeholder="Email Address" />
                                            </div> 
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" placeholder="Phone Number" />
                                            </div> 
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                                            </div> 
                                            <div className="form-group row">
                                                <div className="col-12 col-md-4 pr-0">
                                                    <label className="file-upload">
                                                        Add Attachment <input type="file" />
                                                    </label>
                                                </div>											
                                                <div className="col-12 col-md-8">
                                                    <p className="mb-1">Allowed file types: zip, pdf, png, jpg</p>
                                                    <p>Max file size: 50 MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-section text-center">
                                    <button type="submit" className="btn btn-primary btn-block submit-btn">Hire Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /The Modal */}
            {/* The Modal */}
            <div className="modal fade" id="file">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">SEND PROPOSALS</h4>
                            <span className="modal-close"><Link to ="#" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times-circle orange-text" /></Link> </span>
                        </div>
                        <div className="modal-body">	
                            <div className="modal-info">
                                <form action="#">
                                    <div className="feedback-form">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" className="form-control" placeholder="Your Price" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="email" className="form-control" placeholder="Estimated Hours" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <textarea rows={5} className="form-control" placeholder="Cover Letter" defaultValue={""} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="proposal-features">
                                        <div className="proposal-widget proposal-success">
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_time" /><span className="checkmark" />
                                                <span className="proposal-text">Stick this Proposal to the Top</span>
                                                <span className="proposal-text float-end">$12.00</span>
                                            </label>
                                            <p>The sticky proposal will always be displayed on top of all the proposals.</p>
                                        </div>
                                        <div className="proposal-widget proposal-light">
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_time" /><span className="checkmark" />
                                                <span className="proposal-text">$ Make Sealed Proposal</span>
                                                <span className="proposal-text float-end">$7.00</span>
                                            </label>
                                            <p>The sealed proposal will be sent to the project author only it will not be visible publically.</p>
                                        </div>
                                        <div className="proposal-widget proposal-danger">
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_time" /><span className="checkmark" />
                                                <span className="proposal-text">$ Make Sealed Proposal</span>
                                                <span className="proposal-text float-end">$15.00</span>								
                                            </label>
                                            <p>The featured proposal will have a distinctive color and popped up between other proposals to get the author's attention.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 submit-section">
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_time" />
                                                <span className="checkmark" /> I agree to the Terms And Conditions
                                            </label>
                                        </div>
                                        <div className="col-md-12 submit-section text-end">
                                            <button className="btn btn-primary submit-btn" type="submit">SUBMIT PROPOSAL</button>
                                        </div>
                                    </div>											
                                </form>		
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /The Modal */}
        </>
    );
}
export default FreelancerDetails;