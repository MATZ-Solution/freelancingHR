/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Logo_01,
  logo,
  wizard_icon_01,
  wizard_icon_02,
  wizard_icon_03,
  wizard_icon_04,
  wizard_icon_05,
} from "../../imagepath";
import Account from "./account";
import Completeing from "./completeing";
import Other from "./other";
import { PersonalInfo } from "./personalInfo";
import ProfessionalInfo from "./professionalInfo";
const OnboardScreen = () => {
  const [TabChange, setTabChange] = useState({ status: false, value: "25%" });
  const [TabChange1, setTabChange1] = useState({ status: false });
  const [TabChange2, setTabChange2] = useState({ status: false });
  const [TabChange3, setTabChange3] = useState({ status: false });
  const [TabChange4, setTabChange4] = useState({ status: false });
  const [TabChange5, setTabChange5] = useState({ status: false });

  const [PageChange, setPageChange] = useState("account");
  const nextTab = () => {
    setTabChange({ status: true });
    setPageChange("personal");
  };
  const prevTab = () => {
    setTabChange({ status: false });
    setPageChange("account");
  };
  const nextTab1 = () => {
    setTabChange1({ status: true });
    setTabChange({ status: true });
    setPageChange("professional");
  };
  const prevTab2 = () => {
    setTabChange({ status: true });
    setTabChange1({ status: false });
    setPageChange("personal");
  };
  const prevTab4 = () => {
    setTabChange({ status: true });
    setTabChange3({ status: false });
    setTabChange4({ status: false });
    setPageChange("professional");
  };

  const prevTab5 = () => {
    setTabChange({ status: true });
    setTabChange1({ status: true });
    setTabChange2({ status: true });
    setTabChange3({ status: true });
    setTabChange4({ status: false });
    setTabChange5({ status: true });
    setPageChange("other");
  };

  const nextTab2 = () => {
    setTabChange2({ status: true });
    setTabChange3({ status: true });
    setTabChange5({ status: false });
    setTabChange({ status: true });
    setPageChange("other");
  };
  const nextTab3 = () => {
    setPageChange("complete");
    setTabChange4({ status: true });
  };
  const prevTab3 = () => {
    setTabChange({ status: false });
    setTabChange1({ status: false });
    setTabChange2({ status: false });
    setTabChange3({ status: false });
    setTabChange4({ status: false });
    setPageChange("account");
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
                                {TabChange.status ? (
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
                                  TabChange.status ? "progress-active" : ""
                                }
                              >
                                {TabChange1.status ? (
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
                                  TabChange1.status ? "progress-active" : ""
                                }
                              >
                                {TabChange3.status ? (
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
                                  TabChange3.status ? "progress-active" : ""
                                }
                              >
                                {TabChange4.status ? (
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
                                  TabChange4.status ? "progress-active" : ""
                                }
                              >
                                {TabChange5.status ? (
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
                  {PageChange === "personal" ? (
                    <PersonalInfo nextTab1={nextTab1} prevTab={prevTab} />
                  ) : (
                    ""
                  )}
                  {PageChange === "professional" ? (
                    <ProfessionalInfo nextTab2={nextTab2} prevTab2={prevTab2} />
                  ) : (
                    ""
                  )}
                  {PageChange === "account" ? (
                    <Account nextTab={nextTab} />
                  ) : (
                    ""
                  )}
                  {PageChange === "other" ? (
                    <Other nextTab3={nextTab3} prevTab4={prevTab4} />
                  ) : (
                    ""
                  )}
                  {PageChange === "complete" ? (
                    <Completeing prevTab5={prevTab5} />
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
export default OnboardScreen;
