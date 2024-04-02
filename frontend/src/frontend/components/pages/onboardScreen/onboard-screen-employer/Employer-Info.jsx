/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar_3 } from "../../../imagepath";
export const EmployerInfo = ({ nextTabEmp1, prevTabEmp }) => {
  const [addListEmp, setAddListEmp] = useState([""]);
  const handelAddEmp = () => {
    setAddListEmp([...addListEmp, " "]);
  };
  const handelRemoveEmp = (index) => {
    const listEmp = [...addListEmp];
    listEmp.splice(index, 1);
    setAddListEmp(listEmp);
  };
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
            onClick={prevTabEmp}
          />
          <input
            className="btn next_btn btn-primary btn-get btn-next"
            name="next"
            type="button"
            defaultValue="Next"
            onClick={nextTabEmp1}
          />
        </div>
      </div>
    </>
  );
};
