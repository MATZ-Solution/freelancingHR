import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Avatar_1,
  Avatar_2,
  Avatar_3,
  Avatar_4,
  Avatar_5,
  default_logo,
  computer_line,
  time_line,
  user_heart_line,
  translate_2,
  translate,
} from "../../imagepath";
import StickyBox from "react-sticky-box";
import EmployerBreadcrumb from "../../foremployers/common/employerBreadcrumb";
import TextEditor from "../../foremployers/dashboard/texteditor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SuccessModal from '../../../../admin/component/pages/CustomModal/index'
import { useParams } from 'react-router-dom';
import ErrorModal from "../../../../admin/component/pages/CustomModal/ErrorsModal";
import sampleCoverImage from '../../../assets/img/bg/breadcrumb-bg.png'

const JobDetails = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (date) => {
    setDate(date);
  };
  const [rows, setRows] = useState([
    // Initial rows
    {
      id: 1,
      milestoneName: "",
      amount: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const addNewRow = () => {
    const newRow = {
      id: rows.length + 1,
      milestoneName: "",
      amount: "",
      startDate: "",
      endDate: "",
    };

    setRows([...rows, newRow]);
  };

  const deleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  let token = localStorage.getItem('token')
  let { id } = useParams();
  let [error, setError] = useState(false)
  let coverImage;
  let [showSuccessModal, setSuccessModal] = useState({
    status: false,
    message: "",
    errorStatus: false
  })

  let [propsalDetails, setProposalDetails] = useState({
    projectId: id,
    notice_Period: "",
    coverLetter: "",
    status: "pending",
    image: null
  })

  // #########################  HANDLE CHANGE FUNCTION START #########################################

  const handleChangestartDate = (date) => {
    setProposalDetails({ ...propsalDetails, startDate: date });
  };

  const handleChangeEndDate = (date) => {
    setProposalDetails({ ...propsalDetails, endDate: date });
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setProposalDetails({ ...propsalDetails, coverLetter: data });
  };

  const handleDocument = (event) => {
    const selectedFile = event.target.files[0];
    setProposalDetails({ ...propsalDetails, image: selectedFile })
  }

  // #########################  HANDLE CHANGE FUNCTION END #########################################

  // #########################  API START #########################################

  // const getProjectDescription = async () => {
  //   try {
  //     const getProjectRequest = await fetch(`http://localhost:4500/project/projectById/${id}`, {
  //       method: "GET",
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }
  //     })
  //     if (!getProjectRequest.ok) {
  //       setError(true)
  //     }
  //     const response = await getProjectRequest.json()
  //     console.log(response)
  //     if (response.message === 'Success') {
  //       setProj_Details(response?.data)
  //       setCoverimage(response?.data[0]?.coverImage)
  //     }
  //   } catch (err) {
  //     console.log(err)
  //     setError(true)
  //   }
  // }

  const sendproposal = async () => {
    const formdata = new FormData()
    formdata.append('jobId',propsalDetails?.projectId || '')
    formdata.append('notice_Period',propsalDetails?.notice_Period || '')
    formdata.append('coverLetter',propsalDetails?.coverLetter || '')
    formdata.append('status',propsalDetails?.status || '')
    formdata.append('image',propsalDetails?.image || '')
    
    try {
      const getProposalRequest = await fetch(`http://localhost:4500/job/proposalSubmit`, {
        method: "POST",
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: formdata
      })
      const response = await getProposalRequest.json()
      console.log(response)

      if (!response.ok) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: true });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: false })
        }, 2000)
      }
      if (response.statusCode === 200) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: false });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: true })
        }, 2000)
      }
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  // #########################  API END #########################################

  if (error) {
    return <ErrorModal message={'Something Went Wrong'} />
  }


  return (
    <>
      {/* Breadcrumb */}
      <EmployerBreadcrumb title="Job Details" subtitle="Project Details" coverImage={coverImage ? coverImage : sampleCoverImage} />

      {/* <EmployerBreadcrumb title="Job Details" subtitle="Project Details" /> */}
      {/* /Breadcrumb */}

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="company-detail-block pt-0">
                <div className="company-detail">
                  <div className="company-detail-image">
                    <img src={default_logo} className="img-fluid" alt="logo" />
                  </div>
                  <div className="company-title">
                    <p>Soft Technologies</p>
                    <h4>Build a Coaching Website Product Store images</h4>
                  </div>
                </div>
                <div className="company-address">
                  <ul>
                    <li>
                      <i className="feather-map-pin" />
                      Los Angels
                    </li>
                    <li>
                      <i className="feather-calendar" />
                      22 September 2023
                    </li>
                    <li>
                      <i className="feather-eye" />
                      902 Views
                    </li>
                    <li>
                      <i className="feather-edit-2" />
                      15 Proposal
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
                        <span className=" d-block">Freelancer Type</span>
                        <p className="mb-0">Full Time</p>
                      </div>
                    </li>
                    <li>
                      <div className="proposal-detail-img">
                        <img src={time_line} alt="icons" />
                      </div>
                      <div className="proposal-detail text-capitalize">
                        <span className=" d-block">Project Type</span>
                        <p className="mb-0">Hourly</p>
                      </div>
                    </li>
                    <li>
                      <div className="proposal-detail-img">
                        <img src={time_line} alt="icons" />
                      </div>
                      <div className="proposal-detail text-capitalize">
                        <span className=" d-block">Project Duration</span>
                        <p className="mb-0">10-15 Hours</p>
                      </div>
                    </li>
                    <li>
                      <div className="proposal-detail-img">
                        <img src={user_heart_line} alt="icons" />
                      </div>
                      <div className="proposal-detail text-capitalize">
                        <span className=" d-block">Experience</span>
                        <p className="mb-0">Basic</p>
                      </div>
                    </li>
                    <li>
                      <div className="proposal-detail-img">
                        <img src={translate_2} alt="icons" />
                      </div>
                      <div className="proposal-detail text-capitalize">
                        <span className=" d-block">Languages</span>
                        <p className="mb-0">English, Arabic</p>
                      </div>
                    </li>
                    <li>
                      <div className="proposal-detail-img">
                        <img src={translate} alt="icons" />
                      </div>
                      <div className="proposal-detail text-capitalize">
                        <span className=" d-block">Language Fluency</span>
                        <p className="mb-0">Conversational</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="company-detail-block company-description">
                <h4 className="company-detail-title">Description</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
              </div>
              <div className="company-detail-block company-description">
                <h4 className="company-detail-title">Skills Required</h4>
                <div className="tags">
                  <Link to="#">
                    <span className="badge badge-pill badge-design">
                      After Effects
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="badge badge-pill badge-design">
                      Illustrator
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="badge badge-pill badge-design">HTML</span>
                  </Link>
                  <Link to="#">
                    <span className="badge badge-pill badge-design">
                      Whiteboard
                    </span>
                  </Link>
                </div>
              </div>
              <div className="company-detail-block">
                <h4 className="company-detail-title">Attachments</h4>
                <div className="row row-gap">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="attachment-file">
                      <div className="attachment-files-details">
                        <h6>sample.pdf</h6>
                        <span>file size 139 KB</span>
                      </div>
                      <Link to="#" className="file-download-btn">
                        <i className="feather-download" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="attachment-file">
                      <div className="attachment-files-details">
                        <h6>Website logo.jpg</h6>
                        <span>file size 139 KB</span>
                      </div>
                      <Link to="#" className="file-download-btn">
                        <i className="feather-download" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="attachment-file">
                      <div className="attachment-files-details">
                        <h6>Banner image.jpg</h6>
                        <span>file size 139 KB</span>
                      </div>
                      <Link to="#" className="file-download-btn">
                        <i className="feather-download" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="attachment-file">
                      <div className="attachment-files-details">
                        <h6>Services image.jpg</h6>
                        <span>file size 139 KB</span>
                      </div>
                      <Link to="#" className="file-download-btn">
                        <i className="feather-download" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="attachment-file">
                      <div className="attachment-files-details">
                        <h6>About us.jpg</h6>
                        <span>file size 139 KB</span>
                      </div>
                      <Link to="#" className="file-download-btn">
                        <i className="feather-download" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="attachment-file">
                      <div className="attachment-files-details">
                        <h6>Website Content.dcs</h6>
                        <span>file size 139 KB</span>
                      </div>
                      <Link to="#" className="file-download-btn">
                        <i className="feather-download" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="company-detail-block company-description">
                <h4 className="company-detail-title">Tags</h4>
                <div className="tags">
                  <Link to="#">
                    <span className="badge badge-pill badge-design">
                      Machine Learning
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="badge badge-pill badge-design">
                      AI Chatbot
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="badge badge-pill badge-design">
                      Virtual Assistant
                    </span>
                  </Link>
                </div>
              </div>
              <div className="company-detail-block pb-0">
                <h4 className="company-detail-title">Project Proposals (5)</h4>
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
                              <span>
                                <i className="fa fa-star" />
                                5.0 (346 Reviews)
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="proposals-user-review">
                              <span>
                                <i className="feather-calendar" />1 min ago
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="proposals-pricing">
                          <h4>$40-$500</h4>
                          <span>notice_Period : Fixed </span>
                        </div>
                      </div>
                    </div>
                    <p className="mb-0">
                      I&apos;ve been buying and selling on XGEN Freelancing Platform Marketplace
                      for the past two years&lsquo; and it&apos;s been a
                      game-changer for me. The platform is user-friendly&lsquo;
                      and I&apos;ve had great success selling my handmade
                      crafts. Plus&lsquo; the customer support team is always
                      there to help if I have any questions or issues.
                    </p>
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
                              <span>
                                <i className="fa fa-star" />
                                5.0 (346 Reviews)
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="proposals-user-review">
                              <span>
                                <i className="feather-calendar" />1 min ago
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="proposals-pricing">
                          <h4>$20-$350</h4>
                          <span>notice_Period : Fixed </span>
                        </div>
                      </div>
                    </div>
                    <p className="mb-0">
                      I&apos;ve been buying and selling on XGEN Freelancing Platform Marketplace
                      for the past two years&lsquo; and it&apos;s been a
                      game-changer for me. The platform is user-friendly&lsquo;
                      and I&apos;ve had great success selling my handmade
                      crafts. Plus&lsquo; the customer support team is always
                      there to help if I have any questions or issues.
                    </p>
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
                              <span>
                                <i className="fa fa-star" />
                                5.0 (346 Reviews)
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="proposals-user-review">
                              <span>
                                <i className="feather-calendar" />1 min ago
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="proposals-pricing">
                          <h4>$50-$200</h4>
                          <span>notice_Period : Fixed </span>
                        </div>
                      </div>
                    </div>
                    <p className="mb-0">
                      I&apos;ve been buying and selling on XGEN Freelancing Platform Marketplace
                      for the past two years&lsquo; and it&apos;s been a
                      game-changer for me. The platform is user-friendly&lsquo;
                      and I&apos;ve had great success selling my handmade
                      crafts. Plus&lsquo; the customer support team is always
                      there to help if I have any questions or issues.
                    </p>
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
                              <span>
                                <i className="fa fa-star" />
                                5.0 (346 Reviews)
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="proposals-user-review">
                              <span>
                                <i className="feather-calendar" />1 min ago
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="proposals-pricing">
                          <h4>$10-$450</h4>
                          <span>notice_Period : Fixed </span>
                        </div>
                      </div>
                    </div>
                    <p className="mb-0">
                      I&apos;ve been buying and selling on XGEN Freelancing Platform Marketplace
                      for the past two years&lsquo; and it&apos;s been a
                      game-changer for me. The platform is user-friendly&lsquo;
                      and I&apos;ve had great success selling my handmade
                      crafts. Plus&lsquo; the customer support team is always
                      there to help if I have any questions or issues.
                    </p>
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
                              <span>
                                <i className="fa fa-star" />
                                5.0 (346 Reviews)
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="proposals-user-review">
                              <span>
                                <i className="feather-calendar" />5 min ago
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="proposals-pricing">
                          <h4>$300-$350</h4>
                          <span>notice_Period : Fixed </span>
                        </div>
                      </div>
                    </div>
                    <p className="mb-0">
                      I&apos;ve been buying and selling on XGEN Freelancing Platform Marketplace
                      for the past two years&lsquo; and it&apos;s been a
                      game-changer for me. The platform is user-friendly&lsquo;
                      and I&apos;ve had great success selling my handmade
                      crafts. Plus&lsquo; the customer support team is always
                      there to help if I have any questions or issues.
                    </p>
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
                  </div>
                  <div>
                    <Link
                      data-bs-toggle="modal"
                      to="#file"
                      className="btn proposal-btn btn-primary"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
                <div className="card budget-widget">
                  <div className="budget-widget-details">
                    <h6>About Client</h6>
                    <div className="company-detail-image">
                      <img
                        src={default_logo}
                        className="img-fluid"
                        alt="logo"
                      />
                    </div>
                    <h5>KIND SOFTWARES</h5>
                    <span>Member Since December 31, 2020</span>
                    <div className="rating mb-3">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">5.0</span>
                    </div>
                    <ul className="d-flex list-style mb-0 social-list">
                      <li>
                        <Link to="#" className="social-link-block">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="social-link-block">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="social-link-block">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="social-link-block">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                    <ul className="d-flex list-style mb-0 client-detail-list">
                      <li>
                        <span>Departments</span>
                        <p className="mb-0">Designer</p>
                      </li>
                      <li>
                        <span>Employees</span>
                        <p className="mb-0">30-50</p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link
                      to="#"
                      className="btn  btn-primary notice_Period-btn btn-block"
                    >
                      Contact Me{" "}
                    </Link>
                  </div>
                </div>
                <div className="card budget-widget">
                  <ul className="d-flex mb-0 list-style job-list-block">
                    <li>
                      <span>Jobs Posted</span>
                      <p className="mb-0">48</p>
                    </li>
                    <li>
                      <span>Hire Rate</span>
                      <p className="mb-0">22</p>
                    </li>
                    <li>
                      <span>Open Jobs</span>
                      <p className="mb-0">75</p>
                    </li>
                    <li>
                      <span>Total Spent</span>
                      <p className="mb-0">22</p>
                    </li>
                    <li>
                      <span>Hired</span>
                      <p className="mb-0">64</p>
                    </li>
                    <li>
                      <span>Active</span>
                      <p className="mb-0">29</p>
                    </li>
                  </ul>
                </div>
              </StickyBox>
            </div>
            {/* /Blog Sidebar */}
          </div>
        </div>
      </div>

      {/* The Modal */}

      <>
        <div className="modal fade" id="file">
          {showSuccessModal.status && (<SuccessModal message={showSuccessModal.message} errorStatus={showSuccessModal.errorStatus} />)}

          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Send Your Proposal</h4>
                <span className="modal-close">
                  <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                    <i className="fa fa-times orange-text" />
                  </Link>
                </span>
              </div>
              <div className="modal-body">
                <div className="modal-info proposal-modal-info">
                  <div action="/freelancer-project-proposals">
                    <div className="feedback-form proposal-form ">
                      <div className="row">
                        <div className="col-md-6 input-block">
                          <label className="form-label">Notice Period</label>
                          <input
                            value={propsalDetails.notice_Period}
                            onChange={(e) => { setProposalDetails({ ...propsalDetails, notice_Period: e.target.value }) }}
                            type="text"
                            className="form-control"
                            placeholder="Notice Period"
                          />
                        </div>
                        {/* <div className="col-md-6 mb-3">
                          <label className="form-label">Estimated Delivery</label>
                          <div className="input-group ">
                            <input
                              value={propsalDetails.EstHours}
                              onChange={(e) => { setProposalDetails({ ...propsalDetails, EstHours: e.target.value }) }}
                              type="text"
                              className="form-control"
                              placeholder="Estimated Hours"
                              aria-label="Recipient's username"
                              aria-describedby="basic-addon2"
                            />
                            <span className="input-group-text" id="basic-addon2">
                              Days
                            </span>
                          </div>
                        </div> */}
                        <div className="col-md-12 input-block">
                          <label className="form-label">Cover Letter</label>
                          {/* <TextEditor/> */}
                          {/* <CKEditor style={{height:"20px"}}
                            editor={ClassicEditor}
                            data={propsalDetails} 
                            onChange={handleEditorChange}
                          /> */}
                          <CKEditor
                            editor={ClassicEditor}
                            data={propsalDetails.coverLetter}
                            onChange={handleEditorChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="suggested-milestones-form">
                      {/* {rows.map((row, index) => ( */}
                      <div className="row"
                        style={{ width: "100%" }}
                      // key={row.id}
                      >
                        {/* <div className="col-md-4 input-block">
                        <label className="form-label">Milestone name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Milestone name"
                        />
                      </div> */}
                        {/* <div className="col-md-2 input-block floating-icon">
                        <label className="form-label">Amount</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Amount"
                        />
                        <span>
                          <i className="feather-dollar-sign" />
                        </span>
                      </div> */}
                        <div className="col-md-3 input-block floating-icon"
                          style={{ width: "100%" }}

                        >
                          <label className="form-label">Add Resume</label>
                          <div className="custom-file">
                              <input type="file" className="custom-file-input" onChange={handleDocument} />
                              <label className="custom-file-label" />
                            </div>
                            {/* <p className="mb-0"> */}
                            {propsalDetails?.image && (
                              <p className="mt-3">{propsalDetails.image.name}</p>
                            )}
                          {/* <DatePicker
                            selected={propsalDetails.startDate}
                            onChange={handleChangestartDate}
                            className="form-control datetimepicker"
                          />
                          <span>
                            <i className="feather-calendar" />
                          </span> */}
                        </div>
                        {/* <div className="col-md-3 input-block floating-icon"
                          style={{ width: "100%" }}
                        >
                          <label className="form-label">End Date</label>
                          <DatePicker
                            selected={propsalDetails.endDate}
                            onChange={handleChangeEndDate}
                            className="form-control datetimepicker"
                          />
                          <span>
                            <i className="feather-calendar" />
                          </span>
                        </div> */}
                        {/* <div className="col-md-12">
                          <div className="new-addd">
                            <Link
                              to="#"
                              className={`add-new ${index > 0 ? "d-none" : "d-block"
                                }`}
                              onClick={addNewRow}
                            >
                              <i className="feather-plus-circle " /> Add New
                            </Link>
                            <Link
                              to="#"
                              className={`add-new ${index > 0 ? "d-block" : "d-none"
                                }`}
                              onClick={() => deleteRow(row.id)}
                            >
                              <i className="feather-minus-circle " /> Remove
                            </Link>
                          </div>
                        </div> */}
                      </div>
                      {/* ))} */}
                      <div id="add_row1" />
                    </div>
                    {/* <div className="proposal-features">
                    <div className="proposal-widget proposal-warning">
                      <label className="custom_check">
                        <input
                          type="checkbox"
                          name="select_time"
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <span className="proposal-text">
                          Stick this Proposal to the Top
                        </span>
                        <span className="proposal-text float-end">$12.00</span>
                      </label>
                      <p>
                        The sticky proposal will always be displayed on top of
                        all the proposals.
                      </p>
                    </div>
                    <div className="proposal-widget proposal-blue">
                      <label className="custom_check">
                        <input type="checkbox" name="select_time" />
                        <span className="checkmark" />
                        <span className="proposal-text">
                          Stick this Proposal to the Top
                        </span>
                        <span className="proposal-text float-end">$12.00</span>
                      </label>
                      <p>
                        The sticky proposal will always be displayed on top of
                        all the proposals.
                      </p>
                    </div>
                  </div> */}
                    <div className="row">
                      <div className="col-md-12 submit-section">
                        {/* <label className="custom_check">
                        <input type="checkbox" name="select_time" />
                        <span className="checkmark" /> I agree to the Terms And
                        Conditions
                      </label> */}
                      </div>
                      <div className="col-md-12 submit-section text-end">
                        <Link
                          to="#"
                          data-bs-dismiss="modal"
                          className="btn btn-cancel submit-btn"
                        >
                          Cancel
                        </Link>
                        <div
                          onClick={sendproposal}
                          // data-bs-toggle="modal"
                          // data-bs-dismiss="modal"
                          // to="#success"
                          className="btn btn-primary submit-btn"
                        >
                          Send Proposal
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* <div className="modal fade" id="file">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Send Your Proposal</h4>
              <span className="modal-close">
                <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="fa fa-times orange-text" />
                </Link>
              </span>
            </div>
            <div className="modal-body">
              <div className="modal-info proposal-modal-info">
                <form action="/freelancer-project-proposals">
                  <div className="feedback-form proposal-form ">
                    <div className="row">
                      <div className="col-md-6 input-block">
                        <label className="form-label">Your notice_Period</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your notice_Period"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Estimated Delivery</label>
                        <div className="input-group ">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Estimated Hours"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <span className="input-group-text" id="basic-addon2">
                            Days
                          </span>
                        </div>
                      </div>
                      <div className="col-md-12 input-block">
                        <label className="form-label">Cover Letter</label>
                        <TextEditor />
                      </div>
                    </div>
                  </div>
                  <div className="suggested-milestones-form">
                    {rows.map((row, index) => (
                      <div className="row" key={row.id}>
                        <div className="col-md-4 input-block">
                          <label className="form-label">Milestone name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Milestone name"
                          />
                        </div>
                        <div className="col-md-2 input-block floating-icon">
                          <label className="form-label">Amount</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Amount"
                          />
                          <span>
                            <i className="feather-dollar-sign" />
                          </span>
                        </div>
                        <div className="col-md-3 input-block floating-icon">
                          <label className="form-label">Start Date</label>
                          <DatePicker
                            selected={date}
                            onChange={handleChange}
                            className="form-control datetimepicker"
                          />
                          <span>
                            <i className="feather-calendar" />
                          </span>
                        </div>
                        <div className="col-md-3 input-block floating-icon">
                          <label className="form-label">End Date</label>
                          <DatePicker
                            selected={date}
                            onChange={handleChange}
                            className="form-control datetimepicker"
                          />
                          <span>
                            <i className="feather-calendar" />
                          </span>
                        </div>
                        <div className="col-md-12">
                          <div className="new-addd">
                            <Link
                              to="#"
                              className={`add-new ${
                                index > 0 ? "d-none" : "d-block"
                              }`}
                              onClick={addNewRow}
                            >
                              <i className="feather-plus-circle " /> Add New
                            </Link>
                            <Link
                              to="#"
                              className={`add-new ${
                                index > 0 ? "d-block" : "d-none"
                              }`}
                              onClick={() => deleteRow(row.id)}
                            >
                              <i className="feather-minus-circle " /> Remove
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div id="add_row1" />
                  </div>
                  <div className="proposal-features">
                    <div className="proposal-widget proposal-warning">
                      <label className="custom_check">
                        <input
                          type="checkbox"
                          name="select_time"
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <span className="proposal-text">
                          Stick this Proposal to the Top
                        </span>
                        <span className="proposal-text float-end">$12.00</span>
                      </label>
                      <p>
                        The sticky proposal will always be displayed on top of
                        all the proposals.
                      </p>
                    </div>
                    <div className="proposal-widget proposal-blue">
                      <label className="custom_check">
                        <input type="checkbox" name="select_time" />
                        <span className="checkmark" />
                        <span className="proposal-text">
                          Stick this Proposal to the Top
                        </span>
                        <span className="proposal-text float-end">$12.00</span>
                      </label>
                      <p>
                        The sticky proposal will always be displayed on top of
                        all the proposals.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 submit-section">
                      <label className="custom_check">
                        <input type="checkbox" name="select_time" />
                        <span className="checkmark" /> I agree to the Terms And
                        Conditions
                      </label>
                    </div>
                    <div className="col-md-12 submit-section text-end">
                      <Link
                        data-bs-dismiss="modal"
                        className="btn btn-cancel submit-btn"
                      >
                        Cancel
                      </Link>
                      <Link
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                        to="#success"
                        className="btn btn-primary submit-btn"
                      >
                        Send Proposal
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* /The Modal */}
    </>
  );
};
export default JobDetails;
