/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Select from "react-select";
const ProfessionalInfoEmp = ({ nextTabEmp2, prevTabEmp2 }) => {
  const options = [
    { value: 1, label: "Select" },
    { value: 2, label: "Bachelor's degree" },
    { value: 3, label: "Master's degree" },
  ];
  return (
    <>
      {/* Professional Info */}
      <div className=" field-card select-account select-btn">
        <div>
          <div className="text-center onboard-head">
            <h2>Employer Info</h2>
            <p>
              This is your time to shine. Let potential buyers know what you do
              best and how you gained your skills, certifications and experience
            </p>
          </div>
          <div className="field-item personal-info space-info">
            <form action="#">
              <div className="row">
                <div className="col-md-12">
                  <h4>Details</h4>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label className="form-label">Company Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label className="form-label">Tagline</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label className="form-label">Established On</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label className="form-label">Company Owner Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label className="focus-label">Industry</label>
                    <Select
                      className="select"
                      options={options}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label className="form-label">Website</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-block">
                    <label className="form-label">Team Size</label>
                  </div>
                  <div className="check-radio">
                    <ul>
                      <li>
                        <label className="custom_radio me-4">
                          <input
                            type="radio"
                            name="budget"
                            defaultValue="Yes"
                            defaultChecked
                          />
                          <span className="checkmark" /> It&apos;s just me
                        </label>
                      </li>
                      <li>
                        <label className="custom_radio me-4">
                          <input type="radio" name="budget" />
                          <span className="checkmark" />
                          2-9 employees
                        </label>
                      </li>
                      <li>
                        <label className="custom_radio me-4">
                          <input type="radio" name="budget" />
                          <span className="checkmark" />
                          10-99 employees
                        </label>
                      </li>
                      <li>
                        <label className="custom_radio me-4">
                          <input type="radio" name="budget" />
                          <span className="checkmark" />
                          100-1000 employees
                        </label>
                      </li>
                      <li>
                        <label className="custom_radio me-4">
                          <input type="radio" name="budget" />
                          <span className="checkmark" />
                          More than 1000 employees
                        </label>
                      </li>
                    </ul>
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
            onClick={prevTabEmp2}
          />
          <input
            className="btn next_btn btn-primary btn-get btn-next"
            name="next"
            type="button"
            defaultValue="Next"
            onClick={nextTabEmp2}
          />
        </div>
      </div>
      {/* /Professional info */}
    </>
  );
};
export default ProfessionalInfoEmp;
