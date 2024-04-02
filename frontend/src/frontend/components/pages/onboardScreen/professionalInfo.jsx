/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ProfessionalInfo = ({ nextTab2, prevTab2 }) => {
  const [addList1, setAddList1] = useState([""]);
  const [addList2, setAddList2] = useState([""]);
  const [addList3, setAddList3] = useState([""]);
  const [addList4, setAddList4] = useState([""]);
  const [addList5, setAddList5] = useState([""]);

  const [date, setDate] = useState();
  const [expDate, setExpDate] = useState();
  const [expEndDate, setExpendDate] = useState();
  const [eduStartDate, setEduStartDate] = useState();
  const [eduEndDate, setEduEndDate] = useState();

  const handleChange = (date) => {
    setDate(date);
  };
  const handleDateChange = (expDate) => {
    setExpDate(expDate);
  };

  const handleEndateChange = (expEndDate) => {
    setExpendDate(expEndDate);
  };
  const handleChangeEduStart = (eduStartDate) => {
    setEduStartDate(eduStartDate);
  };

  const handleChangeEduEnd = (eduEndDate) => {
    setEduEndDate(eduEndDate);
  };

  const handelAddOne = () => {
    setAddList1([...addList1, " "]);
  };
  const handelRemoveOne = (index) => {
    const list1 = [...addList1];
    list1.splice(index, 1);
    setAddList1(list1);
  };
  const handelAddTwo = () => {
    setAddList2([...addList2, " "]);
  };
  const handelRemoveTwo = (award) => {
    const list2 = [...addList2];
    list2.splice(award, 1);
    setAddList2(list2);
  };
  const handelAddThree = () => {
    setAddList3([...addList3, " "]);
  };
  const handelRemoveThree = (edu) => {
    const list3 = [...addList3];
    list3.splice(edu, 1);
    setAddList3(list3);
  };
  const handelAddFour = () => {
    setAddList4([...addList4, " "]);
  };

  const handelRemoveFour = (design) => {
    const list4 = [...addList4];
    list4.splice(design, 1);
    setAddList4(list4);
  };

  const handelAddFive = () => {
    setAddList5([...addList5, " "]);
  };

  const handelRemoveFive = (lang) => {
    const list5 = [...addList5];
    list5.splice(lang, 1);
    setAddList5(list5);
  };
  const options = [
    { value: 1, label: "Level" },
    { value: 2, label: "Basic" },
    { value: 3, label: "Intermediate" },
    { value: 4, label: "Proficient" },
  ];

  const optionsCertify = [
    { value: 1, label: "Select" },
    { value: 2, label: "Certification" },
    { value: 3, label: "Award" },
  ];

  const optionsExp = [
    { value: 1, label: "Level" },
    { value: 2, label: "Basic" },
    { value: 3, label: "Intermediate" },
    { value: 4, label: "Proficient" },
  ];

  const optionsLanguage = [
    { value: 1, label: "Level" },
    { value: 2, label: "Basic" },
    { value: 3, label: "Intermediate" },
    { value: 4, label: "Proficient" },
  ];

  const optionsEdu = [
    { value: 1, label: "Select" },
    { value: 2, label: "Bachelor's Degree" },
    { value: 3, label: "Master's Degree" },
  ];

  return (
    <>
      {/* Professional Info */}
      <div className="field-card select-account select-btn">
        {" "}
        {/* style={{ display: setShow3 ? "block" : "none" }} */}
        <div className="text-center onboard-head">
          <h2>Skills &amp; Experience</h2>
          <p>
            This is your time to shine. Let potential buyers know what you do
            best and how you gained your skills, certifications and experience
          </p>
        </div>
        <div className="field-item personal-info space-info">
          <div id="individual">
            <div className="row">
              <div className="col-md-12">
                <h4>Skill</h4>
              </div>
              <div className="col-md-6">
                <div className="input-block">
                  <label className="form-label">Skills</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block">
                  <label className="focus-label">Level</label>
                  <Select
                    className="select"
                    options={options}
                    placeholder="Choose Level"
                  />
                  <div className="new-addd">
                    <Link
                      className="add-new"
                      id="skill_add"
                      to="#"
                      onClick={handelAddFour}
                    >
                      <i className="feather-plus-circle me-1" /> Add New
                    </Link>
                  </div>
                </div>
              </div>
              <div id="skill_add_row" />
            </div>

            {addList4.map((value, design) => (
              <div key={design} className="row">
                <div className="col-md-6">
                  <div className="input-block">
                    <label className="form-label">Skills</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label className="focus-label">Level</label>

                    <Select
                      className="select"
                      options={options}
                      placeholder="Choose Level"
                    />
                    <div className="new-addd">
                      <Link
                        className="add-new"
                        id="skill_add"
                        to="#"
                        style={{ color: "red" }}
                        onClick={() => handelRemoveFour(design)}
                      >
                        Remove
                      </Link>
                    </div>
                  </div>
                </div>

                <div id="skill_add_row" />
              </div>
            ))}

            {/* Second-Add */}
            <div className="row">
              <div className="col-md-12">
                <h4>Education</h4>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="input-block">
                  <label className="focus-label">Degree Name</label>
                  {/* <select
                    name="education['degree_name'][]"
                    className="form-control select-level select-edu select"
                  >
                    <option value={0}>Select</option>
                    <option value={1}>Bachelor's degree</option>
                    <option value={1}>Master's Degree</option>
                  </select> */}

                  <Select
                    className="select"
                    options={optionsEdu}
                    placeholder="Select"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="input-block">
                  <label className="focus-label">University Name</label>
                  <input
                    type="text"
                    name="education['university_name'][]"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="input-block">
                  <label className="focus-label">Start Date</label>
                  <div className="cal-icon">
                    {/* <input
                      type="text"
                      name="education['start_date'][]"
                      className="form-control datetimepicker"
                      placeholder="Choose"
                    /> */}
                    <DatePicker
                      selected={eduStartDate}
                      onChange={handleChangeEduStart}
                      className="form-control datetimepicker"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="input-block">
                  <label className="focus-label">End Date</label>
                  <div className="cal-icon">
                    <DatePicker
                      selected={eduEndDate}
                      onChange={handleChangeEduEnd}
                      className="form-control datetimepicker"
                    />
                  </div>
                  <div className="new-addd">
                    <Link
                      className="add-new"
                      id="edu_add"
                      onClick={handelAddThree}
                      to="#"
                    >
                      <i className="feather-plus-circle me-1" /> Add New
                    </Link>
                  </div>
                </div>
              </div>
              <div id="education_add_row" />
            </div>

            {addList3.map((value, edu) => (
              <div key={edu} className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="input-block">
                    <label className="focus-label">Degree Name</label>
                    <Select
                      className="select"
                      options={optionsEdu}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="input-block">
                    <label className="focus-label">University Name</label>
                    <input
                      type="text"
                      name="education['university_name'][]"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="input-block">
                    <label className="focus-label">Start Date</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={eduStartDate}
                        onChange={handleChangeEduStart}
                        className="form-control datetimepicker"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="input-block">
                    <label className="focus-label">End Date</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={eduEndDate}
                        onChange={handleChangeEduEnd}
                        className="form-control datetimepicker"
                      />
                    </div>
                    <div className="new-addd">
                      <Link
                        className="add-new"
                        id="edu_add"
                        style={{ color: "red" }}
                        onClick={() => handelRemoveThree(edu)}
                        to="#"
                      >
                        Remove
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="education_add_row" />
              </div>
            ))}
            {/* /Second-Add */}

            {/* Third-Add */}
            <div className="row">
              <div className="col-md-12">
                <h5>Certification</h5>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="input-block">
                  <label className="focus-label">Certification or Award</label>
                  <Select
                    className="select"
                    options={optionsCertify}
                    placeholder="Choose Level"
                  />
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="input-block">
                  <label className="focus-label">Certified from</label>
                  <input
                    type="text"
                    name="certification['certified_from'][]"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="input-block">
                  <label className="focus-label">Year</label>
                  <div className="cal-icon">
                    <DatePicker
                      selected={date}
                      onChange={handleChange}
                      className="form-control datetimepicker"
                    />
                  </div>
                  <div className="new-addd">
                    <Link
                      className="add-new"
                      id="certify_add"
                      onClick={handelAddTwo}
                      to="#"
                    >
                      <i className="feather-plus-circle me-1" /> Add New
                    </Link>
                  </div>
                </div>
              </div>
              <div id="certify_add_row" />
            </div>

            {addList2.map((value, award) => (
              <div key={award} className="row">
                <div className="col-md-4 col-lg-4">
                  <div className="input-block">
                    <label className="focus-label">
                      Certification or Award
                    </label>
                    <Select
                      className="select"
                      options={optionsCertify}
                      placeholder="Choose Level"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="input-block">
                    <label className="focus-label">Certified from</label>
                    <input
                      type="text"
                      name="certification['certified_from'][]"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="input-block">
                    <label className="focus-label">Year</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={date}
                        onChange={handleChange}
                        className="form-control datetimepicker"
                      />
                    </div>
                    <div className="new-addd">
                      <Link
                        className="add-new"
                        id="certify_add"
                        to="#"
                        style={{ color: "red" }}
                        onClick={() => handelRemoveTwo(award)}
                      >
                        Remove
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="certify_add_row" />
              </div>
            ))}
            {/* /Third-Add */}

            {/* forth-add */}
            <div className="row">
              <div className="col-md-12">
                <h4>Experience</h4>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="input-block">
                  <label className="focus-label">Company Name</label>
                  <input
                    type="text"
                    name="experience['company_name'][]"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="input-block">
                  <label className="focus-label">Position</label>

                  <Select
                    className="select"
                    options={optionsExp}
                    placeholder="Select"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="input-block">
                  <label className="focus-label">Start Date</label>
                  <div className="cal-icon">
                    <DatePicker
                      selected={expDate}
                      onChange={handleDateChange}
                      className="form-control datetimepicker"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="input-block">
                  <label className="focus-label">End Date</label>
                  <div className="cal-icon">
                    <DatePicker
                      selected={expEndDate}
                      onChange={handleEndateChange}
                      className="form-control datetimepicker"
                    />
                  </div>
                  <div className="new-addd">
                    <Link
                      className="add-new"
                      id="experience_add"
                      onClick={handelAddOne}
                      to="#"
                    >
                      <i className="feather-plus-circle me-1" /> Add New
                    </Link>
                  </div>
                </div>
              </div>
              <div id="experience_add_row" />
            </div>

            {addList1.map((add, index) => (
              <div key={index} className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="input-block">
                    <label className="focus-label">Company Name</label>
                    <input
                      type="text"
                      name="experience['company_name'][]"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="input-block">
                    <label className="focus-label">Position</label>

                    <Select
                      className="select"
                      options={optionsExp}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="input-block">
                    <label className="focus-label">Start Date</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={expDate}
                        onChange={handleDateChange}
                        className="form-control datetimepicker"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="input-block">
                    <label className="focus-label">End Date</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={expEndDate}
                        onChange={handleEndateChange}
                        className="form-control datetimepicker"
                      />
                    </div>
                    <div className="new-addd">
                      <Link
                        className="add-new"
                        id="experience_add"
                        style={{ color: "red" }}
                        onClick={() => handelRemoveOne(index)}
                        to="#"
                      >
                        Remove
                      </Link>
                    </div>
                  </div>
                </div>

                <div id="experience_add_row" />
              </div>
            ))}
            {/* /forth-add */}

            {/* /fifth-add */}

            <div className="row">
              <div className="col-md-12">
                <h4>Language</h4>
              </div>
              <div className="col-md-6">
                <div className="input-block">
                  <label className="form-label">Language</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block">
                  <label className="focus-label">Level</label>

                  <Select
                    className="select"
                    options={optionsLanguage}
                    placeholder="Choose Level"
                  />
                  <div className="new-addd">
                    <Link
                      className="add-new"
                      id="lang_add"
                      onClick={handelAddFive}
                      to="#"
                    >
                      <i className="feather-plus-circle me-1" /> Add New
                    </Link>
                  </div>
                </div>
              </div>
              <div id="language_add_row" />
            </div>

            {addList5.map((value, lang) => (
              <div key={lang} className="row">
                <div className="col-md-6">
                  <div className="input-block">
                    <label className="form-label">Language</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label className="focus-label">Level</label>

                    <Select
                      className="select"
                      options={optionsLanguage}
                      placeholder="Choose Level"
                    />
                    <div className="new-addd">
                      <Link
                        className="add-new"
                        id="lang_add"
                        style={{ color: "red" }}
                        onClick={() => handelRemoveFive(lang)}
                        to="#"
                      >
                        Remove
                      </Link>
                    </div>
                  </div>
                </div>

                <div id="skill_add_row" />
              </div>
            ))}

            {/* /fifth-add */}
          </div>
        </div>
        <div className="text-center">
          <input
            className="btn btn-prev prev_btn btn-back"
            name="next"
            type="button"
            defaultValue="Back"
            onClick={prevTab2}
          />
          <input
            className="btn next_btn btn-primary btn-get btn-next"
            name="next"
            type="button"
            defaultValue="Next"
            onClick={nextTab2}
          />
        </div>
      </div>
      {/* /Professional info */}
    </>
  );
};

export default ProfessionalInfo;
