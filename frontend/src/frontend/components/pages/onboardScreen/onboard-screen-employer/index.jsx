/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountEmp from "./employer-account";
import CompleteingEmp from "./completedEmp";
import OtherEmp from "./otherEmp";
import { EmployerInfo } from "./Employer-Info";
import ProfessionalInfoEmp from "./professionalinfoEmp";
import {
  Logo_01,
  logo,
  wizard_icon_01,
  wizard_icon_02,
  wizard_icon_03,
  wizard_icon_04,
  wizard_icon_05,
} from "../../../imagepath";
const OnboardScreenEmployer = (props) => {
  const [TabChangeEmp, setTabChangeEmp] = useState({
    status: false,
    value: "25%",
  });
  const [TabChangeEmp1, setTabChangeEmp1] = useState({ status: false });
  const [TabChangeEmp2, setTabChangeEmp2] = useState({ status: false });
  const [TabChangeEmp3, setTabChangeEmp3] = useState({ status: false });
  const [TabChangeEmp4, setTabChangeEmp4] = useState({ status: false });
  const [TabChangeEmp5, setTabChangeEmp5] = useState({ status: false });

  const [PageChangeEmp, setPageChangeEmp] = useState("employer-account");
  const nextTabEmp = () => {
    setTabChangeEmp({ status: true, value: "50%" });
    setPageChangeEmp("Employer-Info");
  };
  const prevTabEmp = () => {
    setTabChangeEmp({ status: false, value: "25%" });
    setPageChangeEmp("employer-account");
  };
  const nextTabEmp1 = () => {
    setTabChangeEmp1({ status: true });
    setTabChangeEmp({ status: true, value: "75%" });
    setPageChangeEmp("professionalinfoEmp");
  };
  const prevTabEmp2 = () => {
    setTabChangeEmp({ status: true, value: "50%" });
    setTabChangeEmp1({ status: false });
    setPageChangeEmp("Employer-Info");
  };
  const prevTabEmp4 = () => {
    setTabChangeEmp({ status: true, value: "75%" });
    setTabChangeEmp3({ status: false });
    setTabChangeEmp4({ status: false });
    setPageChangeEmp("professionalinfoEmp");
  };
  const nextTabEmp2 = () => {
    setTabChangeEmp2({ status: true });
    setTabChangeEmp3({ status: true });
    setTabChangeEmp({ status: true, value: "100%" });
    setPageChangeEmp("otherEmp");
  };
  const nextTabEmp3 = () => {
    setPageChangeEmp("completedEmp");
    setTabChangeEmp4({ status: true });
  };
  const prevTabEmp3 = () => {
    setTabChangeEmp({ status: false, value: "25%" });
    setTabChangeEmp1({ status: false });
    setTabChangeEmp2({ status: false });
    setTabChangeEmp3({ status: false });
    setTabChangeEmp4({ status: false });
    setPageChangeEmp("employer-account");
  };

  const prevTabEmp5 = () => {
    setTabChangeEmp({ status: true });
    setTabChangeEmp1({ status: true });
    setTabChangeEmp2({ status: true });
    setTabChangeEmp3({ status: true });
    setTabChangeEmp4({ status: false });
    setTabChangeEmp5({ status: true });
    setPageChangeEmp("otherEmp");
  };

  return (
    <>
      {/* <div className="main-wrapper"> */}
      {/* Page Wrapper */}
      <div className="page-wrapper board-screen ms-0 pt-0">
        <div className="content container-fluid">
          <div className="acc-content">
            <div className="row">
              <div className="col-sm-12">
                <div className="multistep-form">
                  {/* Freelancer Multistep */}
                  <div className="multistep-progress" id="freelance_step">
                    <div className="container">
                      <div className="first-progress">
                        <div className="row align-items-center">
                          <div className="col-md-3">
                            <div className="board-logo">
                              <Link to="/">
                                <img
                                  src={logo}
                                  alt="Img"
                                  className="img-fluid"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <ul id="progressbar" className="progressbar">
                              <li className="progress-active">
                                {TabChangeEmp.status ? (
                                  <div className="multi-step">
                                    <img src={wizard_icon_01} alt="Img" />
                                  </div>
                                ) : (
                                  <>
                                    <div className="multi-step">
                                      <img src={wizard_icon_01} alt="Img" />
                                    </div>
                                    <div className="steps-count">
                                      <span>Step 1/5</span>
                                      <h5>Account Type</h5>
                                    </div>
                                  </>
                                )}
                              </li>
                              <li
                                className={
                                  TabChangeEmp.status ? "progress-active" : ""
                                }
                              >
                                {TabChangeEmp1.status ? (
                                  <div className="multi-step">
                                    <img src={wizard_icon_02} alt="Img" />
                                  </div>
                                ) : (
                                  <>
                                    <div className="multi-step">
                                      <img src={wizard_icon_02} alt="Img" />
                                    </div>
                                    <div className="steps-count">
                                      <span>Step 2/5</span>
                                      <h5>Personal info</h5>
                                    </div>
                                  </>
                                )}
                              </li>
                              <li
                                className={
                                  TabChangeEmp1.status ? "progress-active" : ""
                                }
                              >
                                {TabChangeEmp3.status ? (
                                  <div className="multi-step">
                                    <img src={wizard_icon_03} alt="Img" />
                                  </div>
                                ) : (
                                  <>
                                    <div className="multi-step">
                                      <img src={wizard_icon_03} alt="Img" />
                                    </div>
                                    <div className="steps-count">
                                      <span>Step 3/5</span>
                                      <h5>Skills &amp; Experience</h5>
                                    </div>
                                  </>
                                )}
                              </li>
                              <li
                                className={
                                  TabChangeEmp3.status ? "progress-active" : ""
                                }
                              >
                                {TabChangeEmp4.status ? (
                                  <div className="multi-step">
                                    <img src={wizard_icon_04} alt="Img" />
                                  </div>
                                ) : (
                                  <>
                                    <div className="multi-step">
                                      <img src={wizard_icon_04} alt="Img" />
                                    </div>
                                    <div className="steps-count">
                                      <span>Step 4/5</span>
                                      <h5>Other Information</h5>
                                    </div>
                                  </>
                                )}
                              </li>

                              <li
                                className={
                                  TabChangeEmp4.status ? "progress-active" : ""
                                }
                              >
                                {TabChangeEmp5.status ? (
                                  <div className="multi-step">
                                    <img src={wizard_icon_05} alt="Img" />
                                  </div>
                                ) : (
                                  <>
                                    <div className="multi-step">
                                      <img src={wizard_icon_05} alt="Img" />
                                    </div>
                                    <div className="steps-count">
                                      <span>Step 5/5</span>
                                      <h5>Email Verification</h5>
                                    </div>
                                  </>
                                )}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {PageChangeEmp === "Employer-Info" ? (
                    <EmployerInfo
                      nextTabEmp1={nextTabEmp1}
                      prevTabEmp={prevTabEmp}
                    />
                  ) : (
                    ""
                  )}
                  {PageChangeEmp === "professionalinfoEmp" ? (
                    <ProfessionalInfoEmp
                      nextTabEmp2={nextTabEmp2}
                      prevTabEmp2={prevTabEmp2}
                    />
                  ) : (
                    ""
                  )}
                  {PageChangeEmp === "employer-account" ? (
                    <AccountEmp nextTabEmp={nextTabEmp} />
                  ) : (
                    ""
                  )}
                  {PageChangeEmp === "otherEmp" ? (
                    <OtherEmp
                      nextTabEmp3={nextTabEmp3}
                      prevTabEmp4={prevTabEmp4}
                    />
                  ) : (
                    ""
                  )}
                  {PageChangeEmp === "completedEmp" ? (
                    <CompleteingEmp prevTabEmp5={prevTabEmp5} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* </div> */}
    </>
  );
};

export default OnboardScreenEmployer;
