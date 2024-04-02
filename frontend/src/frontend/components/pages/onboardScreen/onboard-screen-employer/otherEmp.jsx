/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Select from "react-select";

const OtherEmp = ({ nextTabEmp3, prevTabEmp4 }) => {
  const [isShow, setIsShow] = useState(false);

  const optionsOne = [
    { value: 1, label: "Select" },
    { value: 2, label: "US" },
    { value: 3, label: "UK" },
    { value: 4, label: "India" },
  ];
  return (
    <>
      <div className="field-card select-account select-btn">
        <div className="text-center onboard-head">
          <h2>Other info</h2>
          <p>Don’t worry, this can be changed later.</p>
        </div>
        <div className="field-item personal-info">
          <div className="media-set">
            <div className="row">
              <div className="col-md-12">
                <h4>Social Media</h4>
              </div>
              <div className="col-md-4">
                <div className="input-block">
                  <label className="form-label">Facebook</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-block">
                  <label className="form-label">Instagram </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-block">
                  <label className="form-label">LinkedIn </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-block">
                  <label className="form-label">Behance </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-block">
                  <label className="form-label">Pinterest</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-block">
                  <label className="form-label">Twitter</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="media-set">
              <div className="row">
                <div className="col-md-12">
                  <h4>Personal Website</h4>
                </div>
                <div className="col-md-12">
                  <div className="input-block">
                    <label className="form-label">Website Url</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="media-set">
              <div className="row">
                <div className="col-md-12">
                  <h4>Location</h4>
                </div>
                <div className="col-md-12">
                  <div className="input-block">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="input-block">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="input-block">
                    <label className="form-label">State / Province</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="input-block">
                    <label className="form-label">ZIP / Post Code</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="input-block">
                    <label className="form-label">ZIP / Post Code</label>

                    <Select
                      className="select"
                      options={optionsOne}
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="media-set">
              <div className="row">
                <div className="col-md-12">
                  <h4>KYC Upload</h4>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label className="form-label">Document Type</label>
                    <Select
                      className="select"
                      options={optionsOne}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block">
                    <label className="form-label">Document Number</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-block">
                    <label className="form-label">Document Number</label>
                    <div className="upload-sets">
                      <label className="upload-filesview">
                        Browse File
                        <input type="file" />
                      </label>
                      <h6>Or Drag &amp; Drop here</h6>
                    </div>
                    <span className="text-success">
                      <i
                        className="fa fa-check-circle me-2"
                        aria-hidden="true"
                      />
                      Passport.jpg Uploaded Successfully
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="media-set border-0">
              <div className="row">
                <div className="col-md-12">
                  <h4>Working Hours</h4>
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
                    <label className="form-label ms-2">Same Every Day</label>
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
                              <label className="form-label">Start Time</label>
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
                              <label className="form-label">Start Time</label>
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
                              <label className="form-label">Start Time</label>
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
                              <label className="form-label">Start Time</label>
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
                              <label className="form-label">Start Time</label>
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
                              <label className="form-label">Start Time</label>
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
                              <label className="form-label">Start Time</label>
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
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <input
            className="btn btn-prev prev_btn btn-back"
            name="next"
            type="button"
            defaultValue="Back"
            onClick={prevTabEmp4}
          />
          <input
            className="btn next_btn btn-primary btn-get btn-next"
            name="next"
            type="button"
            defaultValue="Submit"
            onClick={nextTabEmp3}
          />
        </div>
      </div>
    </>
  );
};
export default OtherEmp;
