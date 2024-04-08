import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ErrorModal from "../../../../admin/component/pages/CustomModal/ErrorsModal.jsx";
// import SuccessModal from "../../../admin/component/pages/CustomModal/index";
import SuccessModal from '../../../../admin/component/pages/CustomModal/index.jsx'
import { useForm, Controller } from 'react-hook-form'
import getCurrentDate from "../../../../CustomFunction/reactDatepickerVal.jsx";
// import Dates from "../../../../CustomFunction/formatDate.jsx";

const PostJob = () => {

  // #########################  VARIABLES START #########################################
  const { register, handleSubmit, formState: { errors }, watch, control, setValue } = useForm()
  const history = useHistory();
  let [skills, setSkills] = useState('')
  const [date, setDate] = useState(new Date(Date.now()));
  const [jobDetails, setjobDetails] = useState({
    jobTitle: "",
    jobCategory: "",
    pay: "",
    shift: "",
    location: "",
    qualification: "",
    skills: [],
    jobType: "",
    jobDescription: "",
    lastDate: date,
    status: "pending",
    // image: null
  })

  const jobCategoryOption = ['A', 'B', 'C']
  const categoryOption = ['Onsite', 'Remote', 'Hybrid']
  const priceTypeOption = ['Onsite', 'Remote', 'Hybrid']
  let token = localStorage.getItem('token')

  let [showSuccessModal, setSuccessModal] = useState({
    status: false,
    message: "",
    errorStatus: false
  })
  let [error, setError] = useState(false)

  function DateFormat(date) {
    const dates = new Date(date);
    const formatDate = `${dates.getFullYear()}-${(dates.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${dates.getDate().toString().padStart(2, "0")} ${dates
        .getHours()
        .toString()
        .padStart(2, "0")}:${dates.getMinutes().toString().padStart(2, "0")}:${dates
          .getSeconds()
          .toString()
          .padStart(2, "0")}`;

    return formatDate
  }



  // #########################  VARIABLES END #########################################


  // #########################  HANDLE ONCHANGE START #########################################

  const handleLastDate = (date) => {
    // const dates = new Date(date);
    // setjobDetails({ ...jobDetails, lastDate: date }) 
    setValue("lastDate", date, {
      shouldDirty: true
    });
    setDate(date);
    setjobDetails({ ...jobDetails, lastDate: date }) 

  }

  const handleDocument = (event) => {
    const selectedFile = event.target.files[0];
    setjobDetails({ ...jobDetails, image: selectedFile })
  }

  // #########################  HANDLE ONCHANGE END #########################################



  // #########################  SUBMIT PROJECT FUNCTION START #########################################

  const submitForm = (data) => {
    console.log("this is form data", data)
    submitJob(data)
  }

  const submitJob = async (data) => {
    setjobDetails({ ...jobDetails, lastDate: date }) 
    // setjobDetails(prevJobDetails => ({ ...prevJobDetails, lastDate: date }))
    // const skills = JSON.stringify(jobDetails.skills);
    // let formData = new FormData()
    // formData.append('jobTitle', jobDetails.jobTitle)
    // formData.append('jobCategory', jobDetails.jobCategory)
    // formData.append('pay', jobDetails.pay)
    // formData.append('shift', jobDetails.shift)
    // formData.append('location', jobDetails.location)
    // formData.append('qualification', jobDetails.qualification)
    // formData.append('skills', skills)
    // formData.append('jobType', jobDetails.jobType)
    // formData.append('jobDescription', jobDetails.jobDescription)
    // formData.append('lastDate', formatDate)
    // formData.append('status', jobDetails.status)
    // formData.append('image', jobDetails?.image || '')
    try {
      const postProjectReq = await fetch('https://freelanceserver.xgentechnologies.com/job/job', {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        // body: formData
        body: JSON.stringify(jobDetails)
      })
      // console.log(jobDetails);
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
          history.push('/company-postedJob')
        }, 2000)
        setjobDetails({
          jobTitle: "",
          jobCategory: "",
          pay: "",
          shift: "",
          location: "",
          qualification: "",
          skills: [],
          jobType: "",
          jobDescription: "",
          lastDate: "",
          status: "pending",
          image: null
        })
        // history.push('/company-postedJob')
      }
    } catch (err) {
      setError(true)
    }
  }

  const addSkills = () => {
    setjobDetails({ ...jobDetails, skills: [...jobDetails.skills, skills] })
    setSkills('')
  }

  function deleteSkills(indexValue) {
    let NewSkillsArray = [...jobDetails.skills]
    NewSkillsArray.splice(indexValue, 1)
    setjobDetails({ ...jobDetails, skills: NewSkillsArray })
    setSkills('')
  }

  if (error) {
    return <ErrorModal message={'Something Went Wrong'} />
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
                            <Link to="/">Home</Link>
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
                      <form onSubmit={handleSubmit(submitForm)}>
                        <div className="title-box widget-box">
                          {/* Project Title */}
                          <div className="title-content">
                            <div className="title-detail">
                              <h3>Job Title</h3>
                              <div className="form-group mb-0">
                                <input
                                  value={jobDetails.jobTitle}
                                  {...register("jobTitle", {
                                    required: "Please fill Job title",
                                  })}
                                  onChange={(e) => setjobDetails({ ...jobDetails, jobTitle: e.target.value })}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Project title"
                                />
                                <p style={{ color: "red" }}>{errors?.jobTitle?.message}</p>

                              </div>
                            </div>
                          </div>

                          <div className="title-content">
                            <div className="title-detail">
                              <h3>Job Category</h3>
                              <div className="form-group mb-0">
                                <select name="price" className="form-control select"
                                  {...register("jobCategory", {
                                    required: "Please fill Job Category",
                                  })}
                                  onChange={(e) => setjobDetails({ ...jobDetails, jobCategory: e.target.value })}
                                  value={jobDetails.jobCategory}
                                >
                                  <option value="" >Select</option>
                                  {jobCategoryOption.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                  ))}
                                </select>
                                <p style={{ color: "red" }}>{errors?.jobCategory?.message}</p>
                              </div>
                            </div>
                          </div>

                          <div className="title-content">
                            <div className="title-detail">
                              <h3>Pay</h3>
                              <div className="form-group mb-0">
                                <input
                                  value={jobDetails.pay}
                                  {...register("pay", {
                                    required: "Please fill Pay",
                                  })}
                                  onChange={(e) => setjobDetails({ ...jobDetails, pay: e.target.value })}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Pay"
                                />
                                <p style={{ color: "red" }}>{errors?.pay?.message}</p>

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
                                  {...register("shift", {
                                    required: "Please fill shift",
                                  })}
                                  onChange={(e) => setjobDetails({ ...jobDetails, shift: e.target.value })}
                                  value={jobDetails.shift}

                                >
                                  <option value="">Select</option>
                                  {categoryOption.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                  ))}
                                </select>
                                <p style={{ color: "red" }}>{errors?.shift?.message}</p>

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
                                  value={jobDetails.location}
                                  {...register("location", {
                                    required: "Please fill location",
                                  })}
                                  onChange={(e) => setjobDetails({ ...jobDetails, location: e.target.value })}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Location"
                                />
                                <p style={{ color: "red" }}>{errors?.location?.message}</p>

                              </div>
                            </div>
                          </div>

                          <div className="title-content">
                            <div className="title-detail">
                              <h3>Qualification</h3>
                              <div className="form-group mb-0">
                                <input
                                  value={jobDetails.qualification}
                                  {...register("qualification", {
                                    required: "Please fill Qualification",
                                  })}
                                  onChange={(e) => setjobDetails({ ...jobDetails, qualification: e.target.value })}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Qualification"
                                />
                                <p style={{ color: "red" }}>{errors?.qualification?.message}</p>
                              </div>
                            </div>
                          </div>
                          <div className="form-group profile-group mb-2">
                            <div className="title-content">
                              <div className="title-detail">

                                <h3>Skills</h3>
                                <div className="input-group">
                                  <input
                                    value={skills}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Skills"
                                    {...register("skill", {
                                      validate: {
                                        // nonEmpty: value => value.trim() !== '' || 'Please fill skills', // Validate input field
                                        nonEmptyArray: () => jobDetails.skills.length > 0 || 'Please add skills', // Validate skills array
                                      },
                                    })}
                                    onChange={(e) => { setSkills(e.target.value) }}
                                  />

                                  <div className="input-group-append">
                                    <button
                                      type="button"
                                      onClick={addSkills}
                                      className="bg-none">
                                      {/* Add */}
                                      {/* <i className="bi bi-plus-circle-fill orange-text me-2"  ></i>
                                  <i className="fa fa-search orange-text me-2" /> */}
                                      <i className="fas fa-plus orange-text me-2"></i>
                                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                  </svg> */}
                                    </button>

                                  </div>

                                </div>
                                {/* <p style={{ color: "red" }}>{errors?.skill?.message}</p> */}

                                <div style={{ marginTop: '0.75rem', width: '100%', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                  {
                                    jobDetails.skills.map((skills, index) => {
                                      return (
                                        <div key={index} style={{ display: 'flex', gap: "9px", background: '#14416B', borderRadius: '0.375rem', fontSize: '1.125rem' }}>
                                          <p style={{ color: 'white', fontSize: '0.875rem', marginLeft: '11px', paddingTop: '14px', paddingBottom: '0px', borderBottomLeftRadius: '0.375rem', borderBottomRightRadius: '0.375rem' }}>{skills}</p>
                                          <i className="fas fa-times white-text me-2" style={{ marginTop: "3px" }} onClick={() => deleteSkills(index)}></i>

                                        </div>
                                      )
                                    })
                                  }
                                </div>
                                <p style={{ color: "red" }}>{errors?.skill?.message}</p>

                              </div>
                            </div>

                          </div>

                          <div className="title-content">
                            <div className="title-detail">
                              <h3>Job type</h3>
                              <div className="form-group mb-0">
                                <input
                                  value={jobDetails.jobType}
                                  {...register("jobType", {
                                    required: "Please fill Job Type",
                                  })}
                                  onChange={(e) => setjobDetails({ ...jobDetails, jobType: e.target.value })}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Job Type"
                                />
                                <p style={{ color: "red" }}>{errors?.jobType?.message}</p>

                              </div>
                            </div>
                          </div>

                          <div className="title-content">
                            <div className="title-detail">
                              <h3>Job Description</h3>
                              <div className="form-group mb-0">
                                <input
                                  value={jobDetails.jobDescription}
                                  {...register("jobDescription", {
                                    required: "Please fill Job Description",
                                  })}
                                  onChange={(e) => setjobDetails({ ...jobDetails, jobDescription: e.target.value })}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Job Description"
                                />
                                <p style={{ color: "red" }}>{errors?.jobDescription?.message}</p>
                              </div>
                            </div>
                          </div>

                          {/* <div className="title-content">
                            <div className="title-detail">
                              <h3>Status</h3>
                              <div className="form-group mb-0">
                                <input
                                  value={jobDetails.status}
                                  onChange={(e) => setjobDetails({ ...jobDetails, status: e.target.value })}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Project title"
                                />
                              </div>
                            </div>
                          </div> */}

                          {/* <div className="title-content">
                            <div className="title-detail">
                              <h3>Image</h3>
                              <div className="custom-file">
                                <input type="file" className="custom-file-input"
                                  {...register("Image", {
                                    required: "Please add document",
                                  })}
                                  onChange={handleDocument}
                                />
                                <label className="custom-file-label" />
                              </div>
                              {jobDetails.image && (
                                <p className="mb-0">{jobDetails.image.name}</p>
                              )}
                              <p style={{ color: "red" }}>{errors?.Image?.message}</p>

                            </div>
                          </div> */}

                          <div className="title-content">
                            <div className="title-detail">
                              <h3>Last Date</h3>
                              <div className="form-group mb-0">
                                {/* <DatePicker
                                  minDate={getCurrentDate()}
                                  className="custom-date-picker"
                                  placeholderText="Select a date"
                                  selected={jobDetails.lastDate}
                                  onChange={handleLastDate}
                                  {...register("lastDate", {
                                    required: "Please select a date",
                                  })}
                                /> */}
                                <Controller
                                  name="lastDate"
                                  control={control}
                                  // defaultValue={date}
                                  render={() => (
                                    <DatePicker
                                      minDate={getCurrentDate()}
                                      className="custom-date-picker"
                                      selected={date}
                                      placeholderText="Select date"
                                      onChange={handleLastDate}
                                    />
                                  )}
                                />
                                <p style={{ color: "red" }}>{errors?.lastDate?.message}</p>
                              </div>
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
                                <button
                                  type="submit"
                                  //  onClick={submitJob}
                                  className="btn next-btn">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Project Title */}
                      </form>
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