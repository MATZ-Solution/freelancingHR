/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import DefaultEditor from "react-simple-wysiwyg";
import EmployerBreadcrumb from "../../foremployers/common/employerBreadcrumb";
import {
  Avatar_1,
  Avatar_2,
  Avatar_3,
  Avatar_4,
  Avatar_5,
  Img_04,
  Logo_01,
  computer_line,
  experience,
  report,
  time_line,
  translate,
  translate_2,
  user_heart_line
} from "../../imagepath";
const DeveloperProfile = () => {

  const [rows, setRows] = useState([
    // Initial rows
    {
      id: 1,
      milestoneName: '',
      amount: '',
      startDate: '',
      endDate: ''
    }
  ]);

  const addNewRow = () => {
    const newRow = {
      id: rows.length + 1,
      milestoneName: '',
      amount: '',
      startDate: '',
      endDate: ''
    };

    setRows([...rows, newRow]);
  };

  const deleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

return (
 
    <>
        {/* Breadcrumb */}
        <EmployerBreadcrumb title="Freelancer Details" subtitle="Freelancer Details"/>

        {/* /Breadcrumb */}
        {/* Page Content */}
       <div className="content">
<div className="container">	
<div className="row">
  <div className="col-lg-8 col-md-12">
    <div className="company-detail-block pt-0">
      <div className="company-detail">
        <div className="company-detail-image">
          <img src={Img_04} className="img-fluid" alt="logo" />
        </div>
        <div className="company-title">
          <h4>Michael Stewart</h4>
          <p>UI UX Designer</p>
        </div>
      </div>
      <div className="company-address">
        <ul>
          <li>
            <i className="feather-map-pin" />Los Angels
          </li>
          <li>
            <i className="feather-calendar" />22 September 2023
          </li>
          <li>
            <i className="feather-star" />5.0, 245 Reviews
          </li>
        </ul>
      </div>
      <div className="project-proposal-detail">
        <ul>
          <li>
            <div className="proposal-detail-img">
              <img src={computer_line} alt="icons" />
            </div>
            <div className="proposal-detail text-capitalize">
              <span className=" d-block">Recommended</span>
              <p className="mb-0">89%</p>
            </div>
          </li>
          <li>
            <div className="proposal-detail-img">
              <img src={time_line} alt="icons" />
            </div>
            <div className="proposal-detail text-capitalize">
              <span className=" d-block">Completed Projects</span>
              <p className="mb-0">220</p>
            </div>
          </li>
          <li>
            <div className="proposal-detail-img">
              <img src={time_line} alt="icons" />
            </div>
            <div className="proposal-detail text-capitalize">
              <span className=" d-block">Ongoing Projects</span>
              <p className="mb-0">10</p>
            </div>
          </li>
          <li>
            <div className="proposal-detail-img">
              <img src={user_heart_line} alt="icons" />
            </div>
            <div className="proposal-detail text-capitalize">
              <span className=" d-block">Feedbacks</span>
              <p className="mb-0">78</p>
            </div>
          </li>
          <li>
            <div className="proposal-detail-img">
              <img src={translate_2} alt="icons" />
            </div>
            <div className="proposal-detail text-capitalize">
              <span className=" d-block">Rehired</span>
              <p className="mb-0">Rehired</p>
            </div>
          </li>
          <li>
            <div className="proposal-detail-img">
              <img src={translate} alt="icons" />
            </div>
            <div className="proposal-detail text-capitalize">
              <span className=" d-block">Response Times</span>
              <p className="mb-0">1 Hour</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="company-detail-block company-description">
      <h4 className="company-detail-title">Description</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    </div>
    <div className="company-detail-block company-description">
      <h4 className="company-detail-title">Experience</h4>
      <div className="experience-set">
        <div className="experience-set-img">
          <img src={experience} alt="img" />
        </div>
        <div className="experience-set-content">
          <h5>Team Leader<span>2017 - 2023</span></h5>
          <span>UI UX Designer</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
      </div>
      <div className="experience-set">
        <div className="experience-set-img">
          <img src={experience} alt="img" />
        </div>
        <div className="experience-set-content">
          <h5>Senior UI UX Designer<span>2019 - 2021</span></h5>
          <span>UI UX Designer</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
      </div>
      <div className="experience-set">
        <div className="experience-set-img">
          <img src={experience} alt="img" />
        </div>
        <div className="experience-set-content">
          <h5>junior UI UX Designer<span>2016 - 2019</span></h5>
          <span>UI UX Designer</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
      </div>
    </div>
    <div className="company-detail-block company-description">
      <h4 className="company-detail-title">Education</h4>
      <div className="experience-set">
        <div className="experience-set-img">
          <img src={report} alt="img" />
        </div>
        <div className="experience-set-content">
          <h5>Master Degree<span>2013 - 2016</span></h5>
          <span>Arizona State University</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
      </div>
      <div className="experience-set">
        <div className="experience-set-img">
          <img src={report} alt="img" />
        </div>
        <div className="experience-set-content">
          <h5>Bachelor Degree<span>2010 - 2013</span></h5>
          <span>Arizona State University</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
      </div>
    </div>
    <div className="company-detail-block pb-0">
      <h4 className="company-detail-title">Review  (5)</h4>
      <div className="project-proposals-block ">
        <div className="project-proposals-img">
          <img src={Avatar_1} className="img-fluid" alt="user" />
        </div>
        <div className="project-proposals-description">
          <div className="proposals-user-detail">
            <div>
              <h5>Theresa Phillips</h5>
              <ul className="d-flex">
                <li>
                  <div className="proposals-user-review">
                    <span><i className="fa fa-star" />5.0 (346 Reviews)</span>
                  </div>
                </li>
                <li>
                  <div className="proposals-user-review">
                    <span><i className="feather-calendar" />1 min ago</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="proposals-pricing">
                <h4>$40-$500</h4>
                <span>Price : Fixed </span>
              </div>
            </div>
          </div>
          <p className="mb-0">I've been buying and selling on XGEN Freelancing Platform Marketplace for the past two years, and it's been a game-changer for me. The platform is user-friendly, and I've had great success selling my handmade crafts. Plus, the customer support team is always there to help if I have any questions or issues.</p>
        </div>
      </div>
      <div className="project-proposals-block ">
        <div className="project-proposals-img">
          <img src={Avatar_2} className="img-fluid" alt="user" />
        </div>
        <div className="project-proposals-description">
          <div className="proposals-user-detail">
            <div>
              <h5>Aaron Storey</h5>
              <ul className="d-flex">
                <li>
                  <div className="proposals-user-review">
                    <span><i className="fa fa-star" />5.0 (346 Reviews)</span>
                  </div>
                </li>
                <li>
                  <div className="proposals-user-review">
                    <span><i className="feather-calendar" />1 min ago</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="proposals-pricing">
                <h4>$20-$350</h4>
                <span>Price : Fixed </span>
              </div>
            </div>
          </div>
          <p className="mb-0">I've been buying and selling on XGEN Freelancing Platform Marketplace for the past two years, and it's been a game-changer for me. The platform is user-friendly, and I've had great success selling my handmade crafts. Plus, the customer support team is always there to help if I have any questions or issues.</p>
        </div>
      </div>
      <div className="project-proposals-block ">
        <div className="project-proposals-img">
          <img src={Avatar_3} className="img-fluid" alt="user" />
        </div>
        <div className="project-proposals-description">
          <div className="proposals-user-detail">
            <div>
              <h5>Aaron Storey</h5>
              <ul className="d-flex">
                <li>
                  <div className="proposals-user-review">
                    <span><i className="fa fa-star" />5.0 (346 Reviews)</span>
                  </div>
                </li>
                <li>
                  <div className="proposals-user-review">
                    <span><i className="feather-calendar" />1 min ago</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="proposals-pricing">
                <h4>$50-$200</h4>
                <span>Price : Fixed </span>
              </div>
            </div>
          </div>
          <p className="mb-0">I've been buying and selling on XGEN Freelancing Platform Marketplace for the past two years, and it's been a game-changer for me. The platform is user-friendly, and I've had great success selling my handmade crafts. Plus, the customer support team is always there to help if I have any questions or issues.</p>
        </div>
      </div>
      <div className="project-proposals-block ">
        <div className="project-proposals-img">
          <img src={Avatar_4} className="img-fluid" alt="user" />
        </div>
        <div className="project-proposals-description">
          <div className="proposals-user-detail">
            <div>
              <h5>Archer Crossley</h5>
              <ul className="d-flex">
                <li>
                  <div className="proposals-user-review">
                    <span><i className="fa fa-star" />5.0 (346 Reviews)</span>
                  </div>
                </li>
                <li>
                  <div className="proposals-user-review">
                    <span><i className="feather-calendar" />1 min ago</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="proposals-pricing">
                <h4>$10-$450</h4>
                <span>Price : Fixed </span>
              </div>
            </div>
          </div>
          <p className="mb-0">I've been buying and selling on XGEN Freelancing Platform Marketplace for the past two years, and it's been a game-changer for me. The platform is user-friendly, and I've had great success selling my handmade crafts. Plus, the customer support team is always there to help if I have any questions or issues.</p>
        </div>
      </div>
      <div className="project-proposals-block ">
        <div className="project-proposals-img">
          <img src={Avatar_5} className="img-fluid" alt="user" />
        </div>
        <div className="project-proposals-description">
          <div className="proposals-user-detail">
            <div>
              <h5>Amy Stockdill</h5>
              <ul className="d-flex">
                <li>
                  <div className="proposals-user-review">
                    <span><i className="fa fa-star" />5.0 (346 Reviews)</span>
                  </div>
                </li>
                <li>
                  <div className="proposals-user-review">
                    <span><i className="feather-calendar" />5 min ago</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="proposals-pricing">
                <h4>$300-$350</h4>
                <span>Price : Fixed </span>
              </div>
            </div>
          </div>
          <p className="mb-0">I've been buying and selling on XGEN Freelancing Platform Marketplace for the past two years, and it's been a game-changer for me. The platform is user-friendly, and I've had great success selling my handmade crafts. Plus, the customer support team is always there to help if I have any questions or issues.</p>
        </div>
      </div>
    </div>
  </div>
  {/* Blog Sidebar */}
  <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar project-client-view">	
  <StickyBox offsetTop={20} offsetBottom={20}>

    <div className="card budget-widget">
      <div className="budget-widget-details">
        <h6>Budget</h6>
        <h4>$125 - $180</h4>
        <p className="mb-0">Hourly Rate</p>
        <ul className="buget-profiles">
          <li>
            <h6><i className="feather-map-pin me-2" />Location</h6>
            <h5>London, UK</h5>
          </li>
          <li>
            <h6><i className="feather-airplay me-2" />Years of Experience</h6>
            <h5>5 Years</h5>
          </li>
          <li>
            <h6><i className="feather-calendar me-2" />Delivery Time</h6>
            <h5>3-5 Days</h5>
          </li>
          <li>
            <h6><i className="feather-globe me-2" />Language Level</h6>
            <h5>Basic</h5>
          </li>
          <li>
            <h6><i className="feather-phone me-2" />Phone</h6>
            <h5>+91 9988776655</h5>
          </li>
          <li>
            <h6><i className="feather-mail me-2" />Mail</h6>
            <h5>info@example.com</h5>
          </li>
        </ul>
      </div>
      <div>
        <Link data-bs-toggle="modal" to="#file" className="btn proposal-btn btn-primary">Send Invite</Link>
      </div>
    </div>
    <div className="card budget-widget">
      <h6>Skills</h6>
      <div className="tags">
        <Link to="#"><span className="badge badge-pill badge-design">After Effects</span></Link>
        <Link to="#"><span className="badge badge-pill badge-design">Illustrator</span></Link>
        <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
        <Link to="#"><span className="badge badge-pill badge-design">Whiteboard</span></Link>
        <Link to="#"><span className="badge badge-pill badge-design">Software Design</span></Link>
        <Link to="#"><span className="badge badge-pill badge-design">HTML5</span></Link>
        <Link to="#"><span className="badge badge-pill badge-design">Design Writing</span></Link>
        <Link to="#"><span className="badge badge-pill badge-design">Whiteboard</span></Link>
        <Link to="#"><span className="badge badge-pill badge-design">Web design</span></Link>
      </div>
    </div>
    <div className="card budget-widget">
      <h6>Location</h6>
      <div className="map-location p-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" />
      </div>
    </div>
    </StickyBox>
  </div>
  {/* /Blog Sidebar */}

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
    <h4 className="modal-title">Send Your Proposal</h4>
    <span className="modal-close"><Link to="#" data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-times orange-text" /></Link></span>
  </div>
  <div className="modal-body">	
    <div className="modal-info proposal-modal-info">
      <form>
        <div className="feedback-form proposal-form ">
          <div className="row">
            <div className="col-md-6 input-block">
              <label className="form-label">Your Price</label>
              <input type="text" className="form-control" placeholder="Your Price" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Estimated Delivery</label>
              <div className="input-group ">
                <input type="text" className="form-control" placeholder="Estimated Hours" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">Days</span>
              </div>
            </div>
            <div className="col-md-12 input-block">
              <label className="form-label">Cover Letter</label>
              <DefaultEditor/>
            </div>
          </div>
        </div>
        <div className="suggested-milestones-form">
        {rows.map((row,index) => (
        <div className="row" key={row.id}>
            <div className="col-md-4 input-block">
              <label className="form-label">Milestone name</label>
              <input type="text" className="form-control" placeholder="Milestone name" />
            </div>
            <div className="col-md-2 input-block floating-icon">
              <label className="form-label">Amount</label>
              <input type="text" className="form-control" placeholder="Amount" />
              <span><i className="feather-dollar-sign" /></span>
            </div>
            <div className="col-md-3 input-block floating-icon">
              <label className="form-label">Start Date</label>
              <input type="text" className="form-control datetimepicker" placeholder="Choose" />
              <span><i className="feather-calendar" /></span>
            </div>
            <div className="col-md-3 input-block floating-icon">
              <label className="form-label">End Date</label>
              <input type="text" className="form-control datetimepicker" placeholder="Choose" />
              <span><i className="feather-calendar" /></span>
            </div>
            <div className="col-md-12">
              <div className="new-addd">
                <Link to="#" className={`add-new ${index > 0 ? 'd-none' : 'd-block'}`} onClick={addNewRow}><i className="feather-plus-circle " /> Add New</Link>
                <Link to="#" className={`add-new ${index > 0 ? 'd-block' : 'd-none'}`}  onClick={() => deleteRow(row.id)}><i className="feather-minus-circle " /> Remove</Link>
              </div>
            </div>
          </div>
        ))}
          <div id="add_row1" />
        </div>
        <div className="proposal-features">
          <div className="proposal-widget proposal-warning">
            <label className="custom_check">
              <input type="checkbox" name="select_time" defaultChecked /><span className="checkmark" />
              <span className="proposal-text">Stick this Proposal to the Top</span>
              <span className="proposal-text float-end">$12.00</span>
            </label>
            <p>The sticky proposal will always be displayed on top of all the proposals.</p>
          </div>
          <div className="proposal-widget proposal-blue">
            <label className="custom_check">
              <input type="checkbox" name="select_time" /><span className="checkmark" />
              <span className="proposal-text">Stick this Proposal to the Top</span>
              <span className="proposal-text float-end">$12.00</span>
            </label>
            <p>The sticky proposal will always be displayed on top of all the proposals.</p>
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
            <Link data-bs-dismiss="modal" className="btn btn-cancel submit-btn">Cancel</Link>
            <Link data-bs-toggle="modal" data-bs-dismiss="modal" to="#success" className="btn btn-primary submit-btn">Send Proposal</Link>
          </div>
        </div>											
      </form>		
    </div>
  </div>
</div>
</div>
</div>
       
        {/* /The Modal */}
        {/* /Page Content */}

    </>


  )
}
export default DeveloperProfile;