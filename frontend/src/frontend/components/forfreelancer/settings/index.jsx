import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { Sidebar } from "../sidebar";
import { userimg } from "../../imagepath";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
const FreelancerSettings = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isShow, setIsShow] = useState(false);

  const handleHide = () => {
    setIsVisible(false);
  };
  const [isVisible1, setIsVisible1] = useState(true);
  const handleHide1 = () => {
    setIsVisible1(false);
  };

  const [date2, setDate2] = useState(new Date());
  const handleChange2 = (date2) => {
    setDate2(date2);
  };
  const [date3, setDate3] = useState(new Date());
  const handleChange3 = (date3) => {
    setDate3(date3);
  };
  const options = [
    { value: 0, label: "Basic" },
    { value: 1, label: "Intermediate" },
    { value: 2, label: "Expert" },
  ];

  const uidesignoption = [
    { value: 0, label: "Basic" },
    { value: 1, label: "Intermediate" },
    { value: 2, label: "Expert" },
  ];
  const reactdeveloperoption = [
    { value: 0, label: "Basic" },
    { value: 1, label: "Intermediate" },
    { value: 2, label: "Expert" },
  ];

  const country = [
    { value: 0, label: "Select" },
    { value: 1, label: "US" },
    { value: 2, label: "UK" },
  ];
  const language = [
    { value: 0, label: "Select" },
    { value: 1, label: "Intermediare" },
    { value: 2, label: "Expert" },
  ];
  const language1 = [
    { value: 0, label: "Select" },
    { value: 1, label: "Intermediare" },
    { value: 2, label: "Expert" },
  ];
  const language2 = [
    { value: 0, label: "Select" },
    { value: 1, label: "Intermediare" },
    { value: 2, label: "Expert" },
  ];
  const language3 = [
    { value: 0, label: "Select" },
    { value: 1, label: "Intermediare" },
    { value: 2, label: "Expert" },
  ];
  const [skillEntries, setSkillEntries] = useState([
    {
      defaultValue: "React Developer",
      selectOptions: [
        { value: "Beginner", label: "Beginner" },
        { value: "Intermediate", label: "Intermediate" },
        { value: "Advanced", label: "Advanced" },
      ],
    },
  ]);

  const addSkillEntry = () => {
    setSkillEntries((prevEntries) => [
      ...prevEntries,
      {
        defaultValue: "React Developer",
        selectOptions: [
          { value: "Beginner", label: "Beginner" },
          { value: "Intermediate", label: "Intermediate" },
          { value: "Advanced", label: "Advanced" },
        ],
      },
    ]);
  };

  const removeSkillEntry = (index) => {
    setSkillEntries((prevEntries) => {
      const updatedEntries = [...prevEntries];
      updatedEntries.splice(index, 1);
      return updatedEntries;
    });
  };
  const [educationEntries, setEducationEntries] = useState([
    {
      date: new Date(),
      date1: new Date(),
    },
  ]);

  const addEducationEntry = () => {
    setEducationEntries((prevEntries) => [
      ...prevEntries,
      {
        date: new Date(),
        date1: new Date(),
      },
    ]);
  };

  const removeEducationEntry = (index) => {
    setEducationEntries((prevEntries) => {
      const updatedEntries = [...prevEntries];
      updatedEntries.splice(index, 1);
      return updatedEntries;
    });
  };

  const handleDateChange = (date, index) => {
    setEducationEntries((prevEntries) => {
      const updatedEntries = [...prevEntries];
      updatedEntries[index].date = date;
      return updatedEntries;
    });
  };

  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <div className="content content-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="pro-pos">
                <div className="setting-content">
                  <form>
                    <div className="card">
                      <div className="pro-head">
                        <h3>Profile Setting</h3>
                      </div>
                      <div className="pro-body">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-row pro-pad pt-0 ps-0">
                              <div className="input-block col-md-6 pro-pic">
                                <label className="form-label">
                                  Profile Picture
                                </label>
                                <div className="d-flex align-items-center">
                                  <div className="upload-images freelancer-pic-box">
                                    <img src={userimg} alt="" id="blah" />
                                  </div>
                                  <div className="ms-3 freelancer-pic-upload">
                                    <label className="file-upload image-upbtn">
                                      Upload Image{" "}
                                      <input type="file" id="imgInp" />
                                    </label>
                                    <p>Max Image size 300*300</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">First Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Last Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Phone Number</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Email Address
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Date of Birth
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Your Job Title
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Type of Job</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="pro-head">
                        <h4 className="pro-titles mb-0">Overview</h4>
                      </div>
                      <div className="pro-body">
                        <div className="row">
                          <div className="input-block col-md-12">
                            <label className="form-label">Description</label>
                            <textarea
                              className="form-control"
                              rows={5}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-lg-12 w-100">
                        <div className="card flex-fill mb-3">
                          <div className="pro-head">
                            <h4 className="pro-titles mb-0">Skills</h4>
                          </div>
                          <div className="pro-body  skill-info">
                            <div className="form-row align-items-center skill-cont">
                              <div className="input-block col-md-6">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Front End Developer"
                                />
                              </div>
                              <div className="input-block col-md-5">
                                <Select
                                  options={options}
                                  defaultValue="Basic"
                                />
                              </div>
                              <div className="input-block col-md-1">
                                <Link
                                  to="#"
                                  onClick={handleHide}
                                  className="btn trash-icon"
                                >
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </div>
                            <div
                              className={`form-row align-items-center skill-cont ${
                                isVisible1 ? "" : "d-none"
                              }`}
                            >
                              <div className="input-block col-md-6">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="UI UX Designer"
                                />
                              </div>
                              <div className="input-block col-md-5">
                                <Select
                                  options={uidesignoption}
                                  defaultValue="Intremediate"
                                />
                              </div>
                              <div className="input-block col-md-1">
                                <Link
                                  to="#"
                                  onClick={handleHide1}
                                  className="btn trash-icon"
                                >
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </div>
                            <div
                              className={`form-row align-items-center skill-cont ${
                                isVisible ? "" : "d-none"
                              }`}
                            >
                              <div className="input-block col-md-6">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="React Developer"
                                />
                              </div>
                              <div className="input-block col-md-5">
                                <Select
                                  options={reactdeveloperoption}
                                  defaultValue="Intremediate"
                                />
                              </div>
                              <div className="input-block col-md-1">
                                <Link
                                  to="#"
                                  onClick={handleHide}
                                  className="btn trash-icon"
                                >
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </div>
                            {skillEntries.map((entry, index) => (
                              <div
                                className="form-row align-items-center skill-cont"
                                key={index}
                              >
                                <div className="input-block col-md-6">
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={entry.defaultValue}
                                  />
                                </div>
                                <div className="input-block col-md-5">
                                  <Select
                                    options={entry.selectOptions}
                                    defaultValue={entry.selectOptions[0]}
                                  />
                                </div>
                                <div className="input-block col-md-1">
                                  <Link
                                    to="#"
                                    className="btn trash-icon"
                                    onClick={() => removeSkillEntry(index)}
                                  >
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </div>
                              </div>
                            ))}
                            <div className="text-center mt-3">
                              <Link
                                to="#"
                                className="add-btn-form add-edu w-100 d-block text-end"
                                onClick={addSkillEntry}
                              >
                                <i className="feather-plus-circle me-2" /> Add
                                Skill
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 w-100">
                        <div className="card flex-fill mb-3">
                          <div className="pro-head">
                            <h4 className="pro-titles without-border mb-0">
                              Education
                            </h4>
                          </div>
                          <div className="pro-body  ">
                            {educationEntries.map((entry, index) => (
                              <div
                                className="form-row align-items-center skill-cont"
                                key={index}
                              >
                                <div className="input-block col-lg-3">
                                  <label className="form-label">
                                    Degree Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="BE CSE"
                                  />
                                </div>
                                <div className="input-block col-lg-3">
                                  <label className="form-label">
                                    University Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Brington"
                                  />
                                </div>
                                <div className="col-md-3 input-block floating-icon">
                                  <label className="form-label">
                                    Start Date
                                  </label>
                                  <DatePicker
                                    selected={entry.date}
                                    onChange={(date) =>
                                      handleDateChange(date, index)
                                    }
                                    className="form-control datetimepicker"
                                  />
                                  <span>
                                    <i className="feather-calendar" />
                                  </span>
                                </div>
                                <div className="col-md-2 input-block floating-icon">
                                  <label className="form-label">End Date</label>
                                  <DatePicker
                                    selected={entry.date1}
                                    onChange={(date) =>
                                      handleDateChange(date, index)
                                    }
                                    className="form-control datetimepicker"
                                  />
                                  <span>
                                    <i className="feather-calendar" />
                                  </span>
                                </div>
                                <div className="input-block col-lg-1 mb-0">
                                  <Link
                                    to="#"
                                    className="btn trash-icon"
                                    onClick={() => removeEducationEntry(index)}
                                  >
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </div>
                              </div>
                            ))}
                            <div className="text-center mt-3">
                              <Link
                                to="#"
                                className="add-btn-form add-edu w-100 d-block text-end"
                                onClick={addEducationEntry}
                              >
                                <i className="feather-plus-circle me-2" /> Add
                                New
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 w-100">
                        <div className="card flex-fill mb-3">
                          <div className="pro-head">
                            <h4 className="pro-titles without-border mb-0">
                              Certification
                            </h4>
                          </div>
                          <div className="pro-body  ">
                            <div className="form-row align-items-center skill-cont">
                              <div className="input-block col-lg-4">
                                <label className="form-label">
                                  Certification or Award
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Feast of UI"
                                />
                              </div>
                              <div className="input-block col-lg-4">
                                <label className="form-label">
                                  Certified from
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="PSD Technologies"
                                />
                              </div>
                              <div className="col-lg-3 input-block floating-icon">
                                <label className="form-label">Year</label>
                                <input
                                  type="text"
                                  className="form-control datetimepicker"
                                  placeholder="Choose"
                                />
                                <span>
                                  <i className="feather-calendar" />
                                </span>
                              </div>
                              <div className="input-block col-lg-1 mb-0">
                                <Link to="#" className="btn trash-icon">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                              <div id="certi_add_row" className=" w-100" />
                              <Link
                                to="#"
                                className="add-btn-form add-certi w-100 d-block text-end"
                              >
                                <i className="feather-plus-circle me-2" />
                                Add New
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 w-100">
                        <div className="card flex-fill mb-3">
                          <div className="pro-head">
                            <h4 className="pro-titles without-border mb-0">
                              Experience
                            </h4>
                          </div>
                          <div className="pro-body  ">
                            <div className="form-row align-items-center skill-cont">
                              <div className="input-block col-lg-3">
                                <label className="form-label">
                                  Company Name
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="input-block col-lg-3">
                                <label className="form-label">Position</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="col-md-3 input-block floating-icon">
                                <label className="form-label">Start Date</label>
                                <DatePicker
                                  selected={date2}
                                  onChange={handleChange2}
                                  className="form-control datetimepicker"
                                />
                                <span>
                                  <i className="feather-calendar" />
                                </span>
                              </div>
                              <div className="col-md-2 input-block floating-icon">
                                <label className="form-label">End Date</label>
                                <DatePicker
                                  selected={date3}
                                  onChange={handleChange3}
                                  className="form-control datetimepicker"
                                />
                                <span>
                                  <i className="feather-calendar" />
                                </span>
                              </div>
                              <div className="input-block col-lg-1 mb-0">
                                <Link to="#" className="btn trash-icon">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                              <div id="exp_add_row" className=" w-100" />
                              <Link
                                to="#"
                                className="add-btn-form add-exp w-100 d-block text-end"
                              >
                                <i className="feather-plus-circle me-2" />
                                Add New
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 w-100">
                        <div className="card flex-fill mb-3">
                          <div className="pro-head">
                            <h4 className="pro-titles mb-0">Language</h4>
                          </div>
                          <div className="pro-body  ">
                            <div className="form-row align-items-center skill-cont">
                              <div className="input-block col-md-6">
                                <label className="form-label">Language</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="input-block col-md-5">
                                <label className="form-label">
                                  Language Fluency
                                </label>
                                <Select
                                  options={language}
                                  defaultValue="Select"
                                />
                              </div>
                              <div className="input-block col-md-1 mb-0">
                                <Link to="#" className="btn trash-icon">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </div>
                            <div className="form-row align-items-center skill-cont">
                              <div className="input-block col-md-6">
                                <label className="form-label">Language</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="input-block col-md-5">
                                <label className="form-label">
                                  Language Fluency
                                </label>
                                <Select
                                  options={language1}
                                  defaultValue="Select"
                                />
                              </div>
                              <div className="input-block col-md-1 mb-0">
                                <Link to="#" className="btn trash-icon">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </div>
                            <div className="form-row align-items-center skill-cont">
                              <div className="input-block col-md-6">
                                <label className="form-label">Language</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="input-block col-md-5">
                                <label className="form-label">
                                  Language Fluency
                                </label>
                                <Select
                                  options={language2}
                                  defaultValue="Select"
                                />
                              </div>
                              <div className="input-block col-md-1 mb-0">
                                <Link to="#" className="btn trash-icon">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </div>
                            <div className="form-row align-items-center skill-cont">
                              <div className="input-block col-md-6">
                                <label className="form-label">Language</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="input-block col-md-5">
                                <label className="form-label">
                                  Language Fluency
                                </label>
                                <Select
                                  options={language3}
                                  defaultValue="Select"
                                />
                              </div>
                              <div className="input-block col-md-1 mb-0">
                                <Link
                                  to="#"
                                  className="btn fund-btn lang-add add-btn-profile mb-0"
                                >
                                  <i className="feather-plus" />
                                </Link>
                              </div>
                              <div id="lang_add_row" className=" w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 w-100">
                        <div className="card flex-fill mb-3">
                          <div className="pro-head">
                            <h4 className="pro-titles mb-0">Social Media</h4>
                          </div>
                          <div className="pro-body  ">
                            <div className="form-row align-items-center skill-cont">
                              <div className="input-block col-lg-4">
                                <label className="form-label">Facebook</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="input-block col-lg-4">
                                <label className="form-label">Instagram </label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="input-block col-lg-4">
                                <label className="form-label">LinkedIn</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="input-block col-lg-4">
                                <label className="form-label">Behance</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="input-block col-lg-4">
                                <label className="form-label">Pinterest </label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="input-block col-lg-4">
                                <label className="form-label">Twitter</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card flex-fill mb-3">
                          <div className="pro-head">
                            <h4 className="pro-titles mb-0">
                              Personal Website
                            </h4>
                          </div>
                          <div className="pro-body  ">
                            <div className="form-row align-items-center skill-cont">
                              <div className="input-block col-lg-12">
                                <label className="form-label">
                                  Website Url
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="input-block col-lg-3">
                                <label className="form-label">City</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="input-block col-lg-3">
                                <label className="form-label">
                                  State / Province
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="input-block col-lg-3">
                                <label className="form-label">
                                  ZIP / Post Code
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="input-block col-md-3">
                                <label className="form-label">Country</label>
                                <Select
                                  options={country}
                                  defaultValue="Select"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <h4 className="mb-3">Working Hours</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block d-flex">
                        <div className="form-check form-switch d-inline-block work-check position-relative">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check_hour"
                            defaultChecked="true"
                            onClick={() => setIsShow(!isShow)}
                          />
                        </div>
                        <label className="form-label ms-2">
                          Same Every Day
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div
                        className="checkout-hour"
                        style={{ display: isShow ? "none" : "block" }}
                      >
                        <div className="other-info-list">
                          <ul>
                            <li className="active-hour">Mon</li>
                            <li className="active-hour">Tue</li>
                            <li className="active-hour">Wed</li>
                            <li className="active-hour">Thr</li>
                            <li className="active-hour">Fri</li>
                            <li>Sat</li>
                            <li>Sun</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="check-hour"
                        style={{ display: isShow ? "block" : "none" }}
                      >
                        <div className="col-md-12">
                          <h4>Select Days</h4>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="row align-items-center">
                              <div className="col-md-1">
                                <div className="other-info-list">
                                  <ul>
                                    <li className="active-hour m-0">Mon</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="input-block">
                                  <label className="form-label">
                                    Start Time
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="8:00"
                                  />
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="input-block">
                                  <label className="form-label">End Time</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="20:00"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="row align-items-center">
                              <div className="col-md-1">
                                <div className="other-info-list">
                                  <ul>
                                    <li className="active-hour m-0">Tue</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="input-block">
                                  <label className="form-label">
                                    Start Time
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="8:00"
                                  />
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="input-block">
                                  <label className="form-label">End Time</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="20:00"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="row align-items-center">
                              <div className="col-md-1">
                                <div className="other-info-list">
                                  <ul>
                                    <li className="active-hour m-0">Wed</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="input-block">
                                  <label className="form-label">
                                    Start Time
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="8:00"
                                  />
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="input-block">
                                  <label className="form-label">End Time</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="20:00"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="row align-items-center">
                              <div className="col-md-1">
                                <div className="other-info-list">
                                  <ul>
                                    <li className="active-hour m-0">Thur</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="input-block">
                                  <label className="form-label">
                                    Start Time
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="8:00"
                                  />
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="input-block">
                                  <label className="form-label">End Time</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="20:00"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="row align-items-center">
                              <div className="col-md-1">
                                <div className="other-info-list">
                                  <ul>
                                    <li className="active-hour m-0">Fri</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="input-block">
                                  <label className="form-label">
                                    Start Time
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="8:00"
                                  />
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="input-block">
                                  <label className="form-label">End Time</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="20:00"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="row align-items-center">
                              <div className="col-md-1">
                                <div className="other-info-list">
                                  <ul>
                                    <li className="m-0">Fri</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="input-block">
                                  <label className="form-label">
                                    Start Time
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="8:00"
                                  />
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="input-block">
                                  <label className="form-label">End Time</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="20:00"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="row align-items-center">
                              <div className="col-md-1">
                                <div className="other-info-list">
                                  <ul>
                                    <li className="m-0">Sun</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="input-block">
                                  <label className="form-label">
                                    Start Time
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="8:00"
                                  />
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="input-block">
                                  <label className="form-label">End Time</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="20:00"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card text-end border-0">
                      <div className="pro-body">
                        <button className="btn btn-secondary click-btn btn-plan">
                          Cancel
                        </button>
                        <Link
                          to="/freelancer-profile"
                          className="btn btn-primary click-btn btn-plan"
                          type="submit"
                        >
                          Update
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default FreelancerSettings;
