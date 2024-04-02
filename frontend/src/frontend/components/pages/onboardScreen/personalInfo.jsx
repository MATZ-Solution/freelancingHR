/* eslint-disable react/prop-types */
import { DatePicker } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import Select from "react-select";

export const PersonalInfo = ({ nextTab1, prevTab }) => {
  const [date, setDate] = useState();
  const handleChange = (date) => {
    setDate(date);
  };

  const options = [
    { value: 1, label: "Select" },
    { value: 2, label: "Full Time" },
    { value: 3, label: "Half Time" },
    { value: 4, label: "Hourly" },
  ];
  return (
    <>
      <div className=" field-card select-account select-btn">
        <div>
          <div className="text-center onboard-head">
            <h2>Personal Info</h2>
            <p>
              Tell a bit about yourself. This information will appear on your
              public profile, so that potential buyers can get to know you
              better.
            </p>
          </div>
          <div className="field-item personal-info space-info">
            <form>
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="pro-form-img">
                    <div className="profile-pic">Profile Photo</div>
                    <div className="upload-files">
                      <label className="file-upload image-upbtn ">
                        <i className="feather-upload me-2" />
                        Upload Photo <input type="file" />
                      </label>
                      <span>
                        For better preview recommended size is 450px x 450px.
                        Max size 5mb.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="input-block">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="input-block">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="input-block">
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="input-block">
                    <label className="form-label">Email Address</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="input-block">
                    <label className="form-label">Date of Birth</label>

                    <DatePicker
                      selected={date}
                      onChange={handleChange}
                      className="form-control datetimepicker"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="input-block">
                    <label className="form-label">Your Job Title</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="input-block">
                    <label className="form-label">Type of Job</label>
                    {/* <select className="form-control select">
                      <option>Select</option>
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Hourly</option>
                    </select> */}
                    <Select
                      className="select"
                      options={options}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-block min-characters">
                    <label className="form-label">Describe Yourself</label>
                    <textarea
                      className="form-control"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center">
          <input
            className="btn btn-prev prev_btn btn-back"
            name="next"
            type="button"
            defaultValue="Back"
            onClick={prevTab}
          />
          <input
            className="btn next_btn btn-primary btn-get btn-next"
            name="next"
            type="button"
            defaultValue="Next"
            onClick={nextTab1}
          />
        </div>
      </div>
    </>
  );
};
export default PersonalInfo;
