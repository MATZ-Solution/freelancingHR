import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ErrorModal from "../../../admin/component/pages/CustomModal/ErrorsModal";
import SuccessModal from "../../../admin/component/pages/CustomModal/index";
import { useForm, Controller } from 'react-hook-form'

const PostProject = () => {


  // #########################  VARIABLES START #########################################

  const { register, handleSubmit, formState: { errors }, watch, control, setValue } = useForm()
  const getImage = watch("image");
  console.log("Image ", getImage)

  const categoryOption = ['Apps Development', 'UI Development', 'Java']
  const priceTypeOption = ['Fixed Budget Price', 'Hourly Pricing', 'Biding Price']
  let token = localStorage.getItem('token')
  let [error, setError] = useState(false)
  const [date, setDate] = useState(new Date(Date.now()));

  const [projectDetails, setProjectDetails] = useState({
    projectTitle: "",
    Location: "",
    companyType: "",
    projectType: "",
    amount: "",
    description: "",
    deliveryDate: "",
    status: "pending",
    image: null
  })
  // const date = new Date(projectDetails.deliveryDate);

  let [showSuccessModal, setSuccessModal] = useState({
    status: false,
    message: "",
    errorStatus: true
  })

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

  const handleProjectStartDate = date => {
    setProjectDetails({ ...projectDetails, deliveryDate: date })
  }

  const handleDocument = (event) => {
    const selectedFile = event.target.files[0];
    setProjectDetails({ ...projectDetails, image: selectedFile })
  }

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setProjectDetails({ ...projectDetails, description: data })
  };

  const submitForm = (data) => {
    console.log("this is form data", data)
    submitProject(data)
  }

  const handleChange = (dateChange) => {
    setValue("deliveryDate", dateChange, {
      shouldDirty: true
    });
    setDate(dateChange);
  };


  // #########################  HANDLE ONCHANGE END #########################################



  // #########################  SUBMIT PROJECT FUNCTION START #########################################

  const submitProject = async (data) => {
    let formData = new FormData()
    formData.append('projectTitle', projectDetails.projectTitle)
    formData.append('Location', projectDetails.Location)
    formData.append('projectType', projectDetails.projectType)
    formData.append('companyType', projectDetails.companyType)
    formData.append('amount', projectDetails.amount)
    formData.append('description', projectDetails.description)
    formData.append('deliveryDate', formatDate)
    formData.append('status', projectDetails.status)
    formData.append('image', projectDetails.image)
    try {
      const postProjectReq = await fetch('http://localhost:4500/project/project', {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        // body: JSON.stringify(data)
        body: formData
      })
      const response = await postProjectReq.json()
      if (!response.ok) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: true });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: false })
        }, 2000)
      }
      if (response.message === "Project Created successfully") {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: false });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: true })
        }, 2000)
        setProjectDetails({
          ...projectDetails,
          projectTitle: "",
          Location: "",
          companyType: "",
          projectType: "",
          amount: "",
          description: "",
          deliveryDate: "",
          status: "pending",
          image: null
        })
      }
    } catch (err) {
      setError(true)
    }
  }

  // #########################  SUBMIT PROJECT FUNCTION END #########################################


  console.log("this is data: ", projectDetails)
  console.log("this is date: ", formatDate)



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
                      <h3>Post a Project</h3>
                      <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="/index">Home</Link>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">
                            Post a Project
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
                              <h3>Project Name</h3>
                              <div className="form-group mb-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Project Name"
                                  {...register("projectName", {
                                    required: "Please fill Project Name",
                                  })}
                                  onChange={(e) => setProjectDetails({ ...projectDetails, projectTitle: e.target.value })}
                                />
                                <p style={{ color: "red" }}>{errors?.projectName?.message}</p>
                              </div>
                            </div>
                          </div>

                          <div className="title-content">
                            <div className="title-detail">
                              <h3>Company Type</h3>
                              <div className="form-group mb-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Company Type"
                                  {...register("companyType", {
                                    required: "Please fill Company Type",
                                  })}
                                  onChange={(e) => setProjectDetails({ ...projectDetails, companyType: e.target.value })}
                                />
                                <p style={{ color: "red" }}>{errors?.companyType?.message}</p>
                              </div>
                            </div>
                          </div>

                          <div className="title-content">
                            <div className="title-detail">
                              <h3>Location</h3>
                              <div className="form-group mb-0">
                                <input
                                  // value={projectDetails.Location}
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Location"
                                  {...register("location", {
                                    required: "Please fill Location",
                                  })}
                                  onChange={(e) => setProjectDetails({ ...projectDetails, Location: e.target.value })}
                                />
                                <p style={{ color: "red" }}>{errors?.location?.message}</p>
                              </div>
                            </div>
                          </div>
                          {/* /Project Title */}
                          {/* Category Content */}
                          <div className="title-content">
                            <div className="title-detail">
                              <h3>Project Type</h3>
                              <div className="form-group mb-0">

                                <select
                                  // value={projectDetails.projectType} 
                                  className="form-control select"
                                  {...register("projectType", {
                                    required: "Please fill Project Type",
                                  })}
                                  onChange={(e) => setProjectDetails({ ...projectDetails, projectType: e.target.value })}
                                >
                                  <option value="">Select</option>
                                  {categoryOption.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                  ))}
                                </select>
                                <p style={{ color: "red" }}>{errors?.projectType?.message}</p>


                                {/* <p style={{ color: "red" }}>{errors?.projectType?.message}</p> */}
                              </div>
                            </div>
                          </div>
                          {/* /Category Content */}
                          {/* Price Content */}
                          <div className="title-content">
                            <div className="title-detail">
                              <h3>Pricing Type</h3>
                              <div className="form-group price-cont mb-0" id="price_type">
                                <select
                                  // value={projectDetails.amount} 
                                  name="price" className="form-control select"
                                  {...register("pricingType", {
                                    required: "Please fill Pricing Type",
                                  })}
                                  onChange={(e) => setProjectDetails({ ...projectDetails, amount: e.target.value })}
                                  >
                                  <option value="">Select</option>
                                  {priceTypeOption.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                  ))}
                                </select>
                                <p style={{ color: "red" }}>{errors?.pricingType?.message}</p>

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

                          <div className="title-content">
                            <div className="title-detail">
                              <h3>Add Documents</h3>
                              <div className="custom-file">
                                {/* <input
                                  name="image"
                                  type="file"
                                  className="custom-file-input"
                                  onChange={handleDocument}
                                // {...register("image", {
                                //   required: "Please Add Document",
                                // })}
                                // ref={register}
                                /> */}

                                <input type="file" className="custom-file-input" 
                                  {...register("image", {
                                    required: "Please Add Document",
                                  })}
                                  onChange={handleDocument}
                                />
                                {errors.image && <p style={{color:"red"}}>{errors.image.message}</p>}

                                <label className="custom-file-label" />
                              </div>
                              {/* <p className="mb-0"> */}
                              {projectDetails.image && (
                                <p className="mb-0">{projectDetails.image.name}</p>
                              )}
                              {/* {getImage && <p>{getImage[0]?.name}</p>}
                              <p style={{ color: "red" }}>{errors?.image?.message}</p> */}

                              {/* </p> */}
                            </div>
                          </div>

                          <div className="title-content">
                            <div className="title-detail">
                              <h3>Project Start Date</h3>
                              <div className="form-group mb-0" id="pro_period">
                                <div className="radio">
                                  {/* <label className="custom_radio">
                              <input
                                type="radio"
                                defaultValue="period"
                                name="period"
                              />
                              <span className="checkmark" /> Start immediately after
                              the candidate is selected
                            </label> */}
                                </div>
                                {/* <div className="radio">
                            <label className="custom_radio">
                              <input
                                type="radio"
                                defaultValue="job"
                                name="period"
                                defaultChecked
                              />
                              <span className="checkmark" /> Job will Start On
                            </label>
                          </div> */}
                              </div>
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="filter-widget mb-0" id="period_date">
                                    <div className="cal-icon">
                                      {/* <input
                                  type="text"
                                  className="form-control datetimepicker"
                                  placeholder="Select Date"
                                /> */}
                                      {/* <DatePicker
                                        className="custom-date-picker"
                                        // style={{position:"relative", zIndex:"3"}}
                                        placeholderText="Select a date"
                                        dateFormat="MM/dd/yyyy"
                                        {...register("deliveryDate", {
                                          required: "Please select a date",
                                        })}
                                        selected={deliveryDate.value}
                                      /> */}
                                      <Controller
                                        name="dateOfBirth"
                                        control={control}
                                        defaultValue={date}
                                        render={() => (
                                          <DatePicker
                                            className="custom-date-picker"
                                            selected={date}
                                            placeholderText="Select date"
                                            onChange={handleChange}
                                          />
                                        )}
                                      />
                                      <p style={{ color: "red" }}>{errors?.deliveryDate?.message}</p>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Project Period Content */}
                          {/* /Add Document */}

                          {/* /Add Document */}
                          {/* Add Links */}
                          {/* <div className="title-content">
                      <div className="title-detail">
                        <h3>Add Links</h3>
                        <div className="links-info">
                          <div className="row form-row links-cont">
                            <div className="col-12 col-md-11">
                              <div className="form-group mb-0">
                                <input type="text" className="form-control" />
                                <p className="mb-0">Add Reference links if any</p>
                              </div>
                            </div>
                            <div className="col-12 col-md-1">
                              <Link
                                to=""
                                className="btn add-links"
                              >
                                <i className="fas fa-plus" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                          {/* /Add Links */}
                          {/* Project Title */}
                          <div className="title-content pb-0">
                            <div className="title-detail">
                              <h3>Write Description of Projects </h3>
                              <div className="form-group mb-0">
                                <Editor
                                initialValue={projectDetails.description}
                                onChange={(content) => {
                                  const plainText = content.blocks.map(block => block.text).join('\n');
                                  setProjectDetails({ ...projectDetails, description: plainText });
                                }}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                              />

                                {/* <CKEditor
                                  editor={ClassicEditor}
                                  onChange={handleEditorChange}
                                /> */}
                                {errors?.description && <p>{errors?.description?.message}</p>}

                                {/* <textarea className="form-control summernote" rows={5} defaultValue={""} /> */}
                              </div>
                            </div>
                          </div>
                          {/* /Project Title */}
                          <div className="row">
                            <div className="col-md-12 text-end">
                              <div className="btn-item">
                                <button
                                  type="submit"
                                  // onClick={submitProject} 
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
export default PostProject;