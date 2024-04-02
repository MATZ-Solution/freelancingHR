import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ErrorModal from "../../../../admin/component/pages/CustomModal/ErrorsModal.jsx";
// import SuccessModal from "../../../admin/component/pages/CustomModal/index";
import SuccessModal from '../../../../admin/component/pages/CustomModal/index.jsx'
const PostJob = () => {

  // #########################  VARIABLES START #########################################

  const [jobDetails, setjobDetails] = useState({
    jobTitle: "",
    jobCategory: "",
    pay: "",
    shift: "",
    location: "",
    qualification: "",
    skills: "",
    jobType: "",
    jobDescription: "",
    lastDate: "",
    status: "pending",
    image: null
  })

  const jobCategoryOption = ['A', 'B', 'C']
  const categoryOption = ['Apps Development', 'UI Development', 'Java']
  const priceTypeOption = ['Fixed Budget Price', 'Hourly Pricing', 'Biding Price']
  let token = localStorage.getItem('token')

  let [showSuccessModal, setSuccessModal] = useState({
    status: false,
    message: "",
    errorStatus: false
  })
  let [error, setError] = useState(false)

  const date = new Date(jobDetails.lastDate);
  const formatDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;

  // #########################  VARIABLES END #########################################


  // #########################  HANDLE ONCHANGE START #########################################

  const handleLastDate = date => {
 
    setjobDetails({ ...jobDetails, lastDate: date })

  }

  const handleDocument = (event) => {
    const selectedFile = event.target.files[0];
    setjobDetails({ ...jobDetails, image: selectedFile })
  }

  // #########################  HANDLE ONCHANGE END #########################################



  // #########################  SUBMIT PROJECT FUNCTION START #########################################



  const submitJob = async () => {
    let formData = new FormData()
    formData.append('jobTitle', jobDetails.jobTitle)
    formData.append('jobCategory', jobDetails.jobCategory)
    formData.append('pay', jobDetails.pay)
    formData.append('shift', jobDetails.shift)
    formData.append('location', jobDetails.location)
    formData.append('qualification', jobDetails.qualification)
    formData.append('skills', jobDetails.skills)
    formData.append('jobType', jobDetails.jobType)
    formData.append('jobDescription', jobDetails.jobDescription)
    formData.append('lastDate', formatDate)
    formData.append('status', jobDetails.status)
    formData.append('image', jobDetails.image)
    try {
      console.log("formData");
      console.log(formData);
      const postProjectReq = await fetch('http://localhost:4500/job/job', {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData
      })
      const response = await postProjectReq.json()
      if (!response.ok) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: true });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: false })
        }, 2000)
      }
      if (response.message === "Job Created successfully") {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: false });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: true })
        }, 2000)
        // setjobDetails({
        //   jobTitle: "",
        //   jobCategory: "",
        //   pay: "",
        //   shift: "",
        //   location: "",
        //   qualification: "",
        //   skills: "",
        //   jobType: "",
        //   jobDescription: "",
        //   lastDate: "",
        //   status: "pending",
        //   image: null
        // })
      }
    } catch (err) {
      setError(true)
    }
  }

  // #########################  SUBMIT PROJECT FUNCTION END #########################################


  console.log("this is data: ", jobDetails)
  // console.log("this is date: ", formatDate)

  return (
    <div>
      {
        error ?
          <ErrorModal message={'Something Went Wrong'} />
          :
          <>
            {/* Breadcrumb */}
            {showSuccessModal.status && (<SuccessModal message={showSuccessModal.message} errorStatus={showSuccessModal.errorStatus} />)}
            <div className="bread-crumb-bar">
              <div className="container">
                <div className="row align-items-center inner-banner">
                  <div className="col-md-12 col-12 text-center">
                    <div className="breadcrumb-list">
                      <h3>Post a Job</h3>
                      <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="/index">Home</Link>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">
                            Post a Job
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
            <div className="content">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="select-project mb-4">
                      {/* <form > */}
                      <div className="title-box widget-box">
                        {/* Project Title */}
                        <div className="title-content">
                          <div className="title-detail">
                            <h3>Job Title</h3>
                            <div className="form-group mb-0">
                              <input
                              value= {jobDetails.jobTitle}
                                onChange={(e) => setjobDetails({ ...jobDetails, jobTitle: e.target.value })}
                                type="text"
                                className="form-control"
                                placeholder="Enter Project title"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="title-content">
                          <div className="title-detail">
                            <h3>Job Category</h3>
                            <div className="form-group mb-0">
                              <select name="price" className="form-control select" onChange={(e) => setjobDetails({ ...jobDetails, jobCategory: e.target.value })}
                              value= {jobDetails.jobCategory}
                              >
                                <option value="" >Select</option>
                                {jobCategoryOption.map((option, index) => (
                                  <option key={index} value={option}>{option}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="title-content">
                          <div className="title-detail">
                            <h3>Pay</h3>
                            <div className="form-group mb-0">
                              <input
                              value= {jobDetails.pay}
                                onChange={(e) => setjobDetails({ ...jobDetails, pay: e.target.value })}
                                type="text"
                                className="form-control"
                                placeholder="Enter Project title"
                              />
                            </div>
                          </div>
                        </div>
                        {/* /Project Title */}
                        {/* Category Content */}
                        <div className="title-content">
                          <div className="title-detail">
                            <h3>Shift</h3>
                            <div className="form-group mb-0">
                              <select className="form-control select" 
                              onChange={(e) => setjobDetails({ ...jobDetails, shift: e.target.value })}
                              value= {jobDetails.shift}
                              
                              >
                                <option value="">Select</option>
                                {categoryOption.map((option, index) => (
                                  <option key={index} value={option}>{option}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* /Category Content */}
                        {/* Price Content */}
                        {/* <div className="title-content">
                          <div className="title-detail">
                            <h3>Pricing Type</h3>
                            <div className="form-group price-cont mb-0" id="price_type">
                              <select name="price" className="form-control select" onChange={(e) => setjobDetails({ ...jobDetails, amount: e.target.value })}>
                                <option value="">Select</option>
                                {priceTypeOption.map((option, index) => (
                                  <option key={index} value={option}>{option}</option>
                                ))}
                              </select>
                            </div>
                            <div
                              className="form-group mt-3"
                              id="price_id"
                              style={{ display: "none" }}
                            >
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <button
                                    type="button"
                                    className="btn btn-white dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    $
                                  </button>
                                  <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">
                                      Dollars
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                      Euro
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                      Bitcoin
                                    </Link>
                                  </div>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={20.0}
                                />
                              </div>
                            </div>
                            <div
                              className="form-group mt-3"
                              id="hour_id"
                              style={{ display: "none" }}
                            >
                              <div className="row">
                                <div className="col-md-6 mb-2">
                                  <div className="input-group form-inline">
                                    <div className="input-group-prepend">
                                      <button
                                        type="button"
                                        className="btn btn-white dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        $
                                      </button>
                                      <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="#">
                                          Dollars
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                          Euro
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                          Bitcoin
                                        </Link>
                                      </div>
                                    </div>
                                    <input
                                      type="text"
                                      className="form-control mr-2"
                                      placeholder={20.0}
                                    />{" "}
                                    <label> / hr</label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="input-group form-inline">
                                    <label>For </label>{" "}
                                    <input
                                      type="text"
                                      className="form-control ml-2"
                                      placeholder=" ( eg: 2 Weeks)"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <div className="title-content">
                          <div className="title-detail">
                            <h3>Location</h3>
                            <div className="form-group mb-0">
                              <input
                              value= {jobDetails.location}
                                onChange={(e) => setjobDetails({ ...jobDetails, location: e.target.value })}
                                type="text"
                                className="form-control"
                                placeholder="Enter Project title"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="title-content">
                          <div className="title-detail">
                            <h3>Qualification</h3>
                            <div className="form-group mb-0">
                              <input
                              value= {jobDetails.qualification}
                                onChange={(e) => setjobDetails({ ...jobDetails, qualification: e.target.value })}
                                type="text"
                                className="form-control"
                                placeholder="Enter Project title"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="title-content">
                          <div className="title-detail">
                            <h3>Skills</h3>
                            <div className="form-group mb-0">
                              <input
                              value= {jobDetails.skills}
                                onChange={(e) => setjobDetails({ ...jobDetails, skills: e.target.value })}
                                type="text"
                                className="form-control"
                                placeholder="Enter Project title"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="title-content">
                          <div className="title-detail">
                            <h3>Job type</h3>
                            <div className="form-group mb-0">
                              <input
                              value= {jobDetails.jobType}
                                onChange={(e) => setjobDetails({ ...jobDetails, jobType: e.target.value })}
                                type="text"
                                className="form-control"
                                placeholder="Enter Project title"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="title-content">
                          <div className="title-detail">
                            <h3>Job Description</h3>
                            <div className="form-group mb-0">
                              <input
                              value= {jobDetails.jobDescription}
                                onChange={(e) => setjobDetails({ ...jobDetails, jobDescription: e.target.value })}
                                type="text"
                                className="form-control"
                                placeholder="Enter Project title"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="title-content">
                          <div className="title-detail">
                            <h3>Last Date</h3>
                            <div className="form-group mb-0">
                              <DatePicker
                                className="custom-date-picker"
                                // style={{position:"relative", zIndex:"3"}}
                                placeholderText="Select a date"
                                selected={jobDetails.lastDate}
                                onChange={handleLastDate}
                                dateFormat="MM/dd/yyyy"

                              />
                            </div>
                          </div>
                        </div>

                        <div className="title-content">
                          <div className="title-detail">
                            <h3>Status</h3>
                            <div className="form-group mb-0">
                              <input
                              value= {jobDetails.status}
                                onChange={(e) => setjobDetails({ ...jobDetails, status: e.target.value })}
                                type="text"
                                className="form-control"
                                placeholder="Enter Project title"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="title-content">
                          <div className="title-detail">
                            <h3>Image</h3>
                            <div className="custom-file">
                              <input type="file" className="custom-file-input"
                              // value= {jobDetails.image}
                                onChange={handleDocument}
                              />
                              <label className="custom-file-label" />
                            </div>
                            {/* <p className="mb-0"> */}
                            {/* {jobDetails.image && (
                              <p className="mb-0">{jobDetails.image.name}</p>
                            )} */}
                            {/* </p> */}
                          </div>
                        </div>
                        {/* /Price Content */}
                        {/* Skills Content */}
                        {/* <div className="title-content">
                      <div className="title-detail">
                        <h3>Desired areas of expertise </h3>
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            data-role="tagsinput"
                            className="input-tags form-control"
                            name="services"
                            defaultValue="Web Design"
                            id="services"
                            placeholder="UX, UI, App Design, Wireframing, Branding"
                          />
                          <p className="text-muted mb-0">
                            Enter skills for needed for project
                          </p>
                        </div>
                      </div>
                    </div> */}
                        {/* /Skills Content */}
                        {/* Project Period Content */}

                        {/* /Project Title */}
                        <div className="row">
                          <div className="col-md-12 text-end">
                            <div className="btn-item">
                              <button onClick={submitJob} className="btn next-btn">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Project Title */}
                      {/* </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Content */}
          </>
      }
    </div>
  )
}
export default PostJob;