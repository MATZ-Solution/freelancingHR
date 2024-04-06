import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { Img_02 } from "../../imagepath";
import { Sidebar } from "../sidebar";
import Select from "react-select";
import ErrorModal from "../../../../admin/component/pages/CustomModal/ErrorsModal";
import SuccessModal from "../../../../admin/component/pages/CustomModal/index";
import InfoModal from "../../../../admin/component/pages/CustomModal/InfoModal";

const Settings = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  // #########################  VARIABLES START #########################################

  let [file, setFile] = useState(null)
  let [error, setError] = useState(false)
  let [messageInfo, setMessageInfo] = useState('')
  let [getProfileData, setProfileData] = useState([])
  let [workHourtype, setWorkHourType] = useState('')
  let token = localStorage.getItem('token')

  const options = [
    { value: 1, label: "Select" },
    { value: 2, label: "UK" },
    { value: 3, label: "USA" },
  ];

  let [showSuccessModal, setSuccessModal] = useState({
    status: false,
    message: "",
    errorStatus: false
  })

  const [profileDetails, setProfileDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    country: "",
    city: "",
    state: "",
    zipcode: "",
    companyName: "",
    tagline: "",
    establishedOn: "",
    companyOwnerName: "",
    industry: "",
    website: "",
    teamSize: "",
    about: "",
    workingHours: "",
    companyAddress: "",
    companyCountry: "",
    companyCity: "",
    companyState: "",
    companyZipCode: "",
    facebook: "",
    instagram: "",
    linkedIn: "",
    behance: "",
    pinterest: "",
    twitter: "",
  })

  let [days, setDays] = useState({
    monday: false,
    tuesday: false,
    wednessday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  })



  // #########################  VARIABLES END #########################################




  // #########################  ONCHANGE FUNCTION START #########################################

  const handleCity = (selectedOption) => {
    setProfileDetails({ ...profileDetails, city: selectedOption.label });
  }

  const handleCountry = (selectedOption) => {
    setProfileDetails({ ...profileDetails, country: selectedOption.label });
  }

  const handleState = (selectedOption) => {
    setProfileDetails({ ...profileDetails, state: selectedOption.label });
  }

  const handleIndustry = (selectedOption) => {
    setProfileDetails({ ...profileDetails, industry: selectedOption.label });
  }

  const handleCompanyCountry = (selectedOption) => {
    setProfileDetails({ ...profileDetails, companyCountry: selectedOption.label });
  }

  const handleDays = (e) => {
    const value = e.target.getAttribute('value');
    let updatedWorkingHours;

    if (value === '1') {
      setDays({ ...days, monday: !days.monday })
    }
    else if (value === '2') {
      setDays({ ...days, tuesday: !days.tuesday })
    }
    else if (value === '3') {
      setDays({ ...days, wednessday: !days.wednessday })
    }
    else if (value === '4') {
      setDays({ ...days, thursday: !days.thursday })
    }
    else if (value === '5') {
      setDays({ ...days, friday: !days.friday })
    }
    else if (value === '6') {
      setDays({ ...days, saturday: !days.saturday })
    }
    else {
      setDays({ ...days, sunday: !days.sunday })
    }
    if (Array.isArray(profileDetails.workingHours)) {
      updatedWorkingHours = profileDetails.workingHours.includes(value)
        ? profileDetails.workingHours.filter(hour => hour !== value)
        : [...profileDetails.workingHours, value];
    } else {
      updatedWorkingHours = [value];
    }
    setProfileDetails({ ...profileDetails, workingHours: updatedWorkingHours });
  }

  const handleChangeProfileImg = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && (!selectedFile.type.startsWith('image/') || selectedFile.type === 'image/svg+xml')) {
      setMessageInfo('Please select a image file.');
      event.target.value = null;
    } else {
      setFile(selectedFile);
      updateProfileImage(selectedFile)
    }
  }


  // #########################  ONCHANGE FUNCTION END #########################################



  // #########################  API START #########################################

  const updateProfileImage = async (selectedFile) => {
    let formData = new FormData()
    formData.append('image', selectedFile)
    formData.append('type', 'profile')
    try {
      let updateProfileImgReq = await fetch('https://freelanceserver.xgentechnologies.com/profile', {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData
      })
      if (!updateProfileImgReq.ok) {
        setError(true)
      }
      let response = await updateProfileImgReq.json()
      if (response.message === 'User Profile Image updated successfully') {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '' })
        }, 2000)
        setFile(null)
      }
      else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    }
  }

  const updateProfile = async () => {
    try {
      let updateProfileReq = await fetch('https://freelanceserver.xgentechnologies.com/CompanyProfile', {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(profileDetails)
      })
      let response = await updateProfileReq.json()
      if (!response.ok) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: true });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: false })
        }, 2000)
      }
      if (response.message === 'Company Profile updated successfully') {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '' })
        }, 2000)
      }
    } catch (err) {
      setError(true)
    }
  }

  const getProfileDetails = async () => {
    try {
      let profileDetailsReq = await fetch('https://freelanceserver.xgentechnologies.com/getCompanyProfile', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
      if (!profileDetailsReq.ok) {
        setError(true)
      }
      let response = await profileDetailsReq.json()
      console.log(response)
      if (response.message === 'Success') {
        setProfileData(response.data)

        setWorkHourType(response?.data[0]?.Company[0]?.workingHours)
        setProfileDetails({
          ...profileDetails,
          firstName: response?.data[0]?.firstName || '',
          lastName: response?.data[0]?.lastName || '',
          email: response?.data[0]?.email || '',
          phoneNumber: response?.data[0]?.phoneNumber || '',
          address: response?.data[0]?.address || '',
          country: response?.data[0]?.country || '',
          city: response?.data[0]?.city || '',
          state: response?.data[0]?.state || '',
          zipcode: response?.data[0]?.zipcode || '',

          companyName: response?.data[0]?.Company[0]?.companyName || '',
          tagline: response?.data[0]?.Company[0]?.tagline || '',
          establishedOn: response?.data[0]?.Company[0]?.establishedOn || '',
          companyOwnerName: response?.data[0]?.Company[0]?.companyOwnerName || '',
          industry: response?.data[0]?.Company[0]?.industry || '',
          website: response?.data[0]?.Company[0]?.website || '',
          teamSize: response?.data[0]?.Company[0]?.teamSize || '',
          about: response?.data[0]?.Company[0]?.about || '',
          workingHours: response?.data[0]?.Company[0]?.workingHours || '',
          companyAddress: response?.data[0]?.Company[0]?.companyAddress || '',
          companyCountry: response?.data[0]?.Company[0]?.companyCountry || '',
          companyCity: response?.data[0]?.Company[0]?.companyCity || '',
          companyState: response?.data[0]?.Company[0]?.companyState || '',
          companyZipCode: response?.data[0]?.Company[0]?.companyZipCode || '',
          facebook: response?.data[0]?.Company[0]?.facebook || '',
          instagram: response?.data[0]?.Company[0]?.instagram || '',
          linkedIn: response?.data[0].Company[0]?.linkedIn || '',
          behance: response?.data[0]?.Company[0]?.behance || '',
          pinterest: response?.data[0]?.Company[0]?.pinterest || '',
          twitter: response?.data[0]?.Company[0]?.twitter || '',
        })
      }
      else {
        setError(true)
      }
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }


  // #########################  USE EFFECT START #########################################

  useEffect(() => {
    getProfileDetails()
  }, [])

  // #########################  CONSOLE START #########################################


  // #########################  CONSOLE START #########################################

  console.log("this is user details", profileDetails)
  console.log("this is user info from backend", getProfileData)

  // console.log("this is set show", setIsShow)
  // console.log("this is file", file)
  // console.log("this is message info", messageInfo)
  // console.log("this is days", days)

  // #########################  CONSOLE END #########################################

  return (
    <>
      {
        error ?
          <ErrorModal message={'Something Went Wrong'} />
          :
          <>
            {showSuccessModal.status && (<SuccessModal message={showSuccessModal.message} errorStatus={showSuccessModal.errorStatus} />)}
            {messageInfo === 'Please select a image file.' && (<InfoModal setMessageInfo={setMessageInfo} message={'Please select an image file.'} />)}

            {/* Page Content */}
            <div className="content content-page">
              <div className="container-fluid">
                <div className="row">
                  {/* sidebar */}
                  <div className="col-xl-3 col-md-4 theiaStickySidebar">
                    <StickyBox offsetTop={20} offsetBottom={20}>
                      <Sidebar />
                    </StickyBox>
                  </div>
                  {/* /sidebar */}
                  <div className="col-xl-9 col-lg-8">
                    <div className="pro-pos">
                      <div className="setting-content employee-profile-new">

                        <div className="card">
                          <div className="pro-head">
                            <h3>Profile Setting</h3>
                          </div>
                          <div className="pro-body">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-row pro-pad pt-0 ps-0">
                                  <div className="input-block col-md-6 pro-pic">
                                    <h4 className="mb-3">Personal Information</h4>
                                    <label className="form-label">
                                      Profile Picture
                                    </label>
                                    <div className="d-flex align-items-center">
                                      <div className="upload-images">
                                        <img src={Img_02} alt="Image" id="blah" />
                                      </div>
                                      <div className="ms-3">
                                        <label className="file-upload image-upbtn ms-0">
                                          Upload Image{" "}
                                          <input accept="image/*" id="imgInp" type='file' onChange={handleChangeProfileImg} />

                                          {/* <input type="file" id="imgInp" /> */}
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
                                  <input
                                    value={profileDetails.firstName}
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, firstName: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">Last Name</label>
                                  <input
                                    value={profileDetails.lastName}
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, lastName: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">Phone Number</label>
                                  <input
                                    value={profileDetails.phoneNumber}
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, phoneNumber: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Email Address
                                  </label>
                                  <input
                                    value={profileDetails.email}
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, email: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="pro-body">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-row pro-pad pt-0 ps-0">
                                  <div className="input-block col-md-6 pro-pic">
                                    <h4 className="mb-3">Address</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label className="form-label">Address</label>
                                  <input
                                    value={profileDetails.address}
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, address: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">Country</label>
                                  <Select
                                    value={profileDetails.country ? options.find((item) => item.label === profileDetails.country) : ''}
                                    className="select"
                                    options={options}
                                    placeholder="Select"
                                    onChange={handleCountry}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">State</label>
                                  <Select
                                    value={profileDetails.state ? options.find((item) => item.label === profileDetails.state) : ''}
                                    className="select"
                                    options={options}
                                    placeholder="Select"
                                    onChange={handleState}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">City</label>
                                  <Select
                                    value={profileDetails.city ? options.find((item) => item.label === profileDetails.city) : ''}
                                    className="select"
                                    options={options}
                                    placeholder="Select"
                                    onChange={handleCity}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">Zipcode</label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, zipcode: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="pro-body">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-row pro-pad pt-0 ps-0">
                                  <div className="input-block col-md-6 pro-pic">
                                    <h4 className="mb-3">Details</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label className="form-label">Company Name</label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, companyName: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label className="form-label">Tagline</label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, tagline: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Established On
                                  </label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, establishedOn: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Company Owner Name
                                  </label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, companyOwnerName: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">Industry</label>
                                  <Select
                                    value={profileDetails.industry ? options.find((item) => item.label === profileDetails.industry) : ''}
                                    className="select"
                                    options={options}
                                    placeholder="Select"
                                    onChange={handleIndustry}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">Website</label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, website: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="input-block">
                                  <label className="form-label">Team Size</label>
                                  <div className="check-radio">
                                    <ul className="d-flex flex-wrap">
                                      <li>
                                        <label className="custom_radio me-4">
                                          <input
                                            type="radio"
                                            name="budget"
                                            value="It's just me"
                                            checked={profileDetails.teamSize === "It's just me"}
                                            onChange={(e) => { setProfileDetails({ ...profileDetails, teamSize: e.target.value }) }}
                                          />
                                          <span className="checkmark" /> It&apos;s
                                          just me
                                        </label>
                                      </li>
                                      <li>
                                        <label className="custom_radio me-4">
                                          <input
                                            onChange={(e) => { setProfileDetails({ ...profileDetails, teamSize: e.target.value }) }}
                                            type="radio" value='2-9 employees' name="budget"
                                            checked={profileDetails.teamSize === "2-9 employees"}

                                          />
                                          <span className="checkmark" />
                                          2-9 employees
                                        </label>
                                      </li>
                                      <li>
                                        <label className="custom_radio me-4">
                                          <input
                                            onChange={(e) => { setProfileDetails({ ...profileDetails, teamSize: e.target.value }) }}
                                            type="radio" value='10-99 employees' name="budget"
                                            checked={profileDetails.teamSize === "10-99 employees"}

                                          />
                                          <span className="checkmark" />
                                          10-99 employees
                                        </label>
                                      </li>
                                      <li>
                                        <label className="custom_radio me-4">
                                          <input type="radio"
                                            onChange={(e) => { setProfileDetails({ ...profileDetails, teamSize: e.target.value }) }}
                                            value='100-1000 employees'
                                            name="budget"
                                            checked={profileDetails.teamSize === "100-1000 employees"}

                                          />
                                          <span className="checkmark" />
                                          100-1000 employees
                                        </label>
                                      </li>
                                      <li>
                                        <label className="custom_radio me-4">
                                          <input type="radio"
                                            value='More than 1000 employees'
                                            onChange={(e) => { setProfileDetails({ ...profileDetails, teamSize: e.target.value }) }}
                                            name="budget"
                                            checked={profileDetails.teamSize === "More than 1000 employees"}

                                          />
                                          <span className="checkmark" />
                                          More than 1000 employees
                                        </label>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <label className="form-label">About</label>
                                <textarea
                                  onChange={(e) => { setProfileDetails({ ...profileDetails, about: e.target.value }) }}
                                  rows={4}
                                  className="form-control"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <h4 className="mb-3">Working Hours</h4>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block d-flex">
                              <div className="form-check form-switch d-inline-block work-check position-relative">
                                {/* <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="check_hour"
                                  defaultChecked="true"
                                  onClick={() => setIsShow(!isShow)}
                                /> */}
                              </div>
                              {/* <label className="form-label ms-2">
                                Same Every Day
                              </label> */}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div
                              className="checkout-hour"
                              style={{ display: isShow ? "none" : "block" }}
                            >
                              <div className="other-info-list">
                                <ul>
                                  <li value='1' id='monday' onClick={handleDays} className={`${workHourtype?.split(',')?.includes('1') && 'active-hour'}`} >Mon</li>
                                  <li value='2' id='tuesday' onClick={handleDays} className={`${workHourtype?.split(',')?.includes('2') && 'active-hour'}`}>Tue</li>
                                  <li value='3' id='wednessday' onClick={handleDays} className={`${workHourtype?.split(',')?.includes('3') && 'active-hour'}`}>Wed</li>
                                  <li value='4' id='thursday' onClick={handleDays} className={`${workHourtype?.split(',')?.includes('4') || days.thursday && 'active-hour'}`}>Thr</li>
                                  <li value='5' id='firday' onClick={handleDays} className={`${workHourtype?.split(',')?.includes('5') && 'active-hour'}`}>Fri</li>
                                  <li value='6' id='saturday' onClick={handleDays} className={`${workHourtype?.split(',')?.includes('6') && 'active-hour'}`}>Sat</li>
                                  <li value='7' id='sunday' onClick={handleDays} className={`${workHourtype?.split(',')?.includes('7') && 'active-hour'}`}>Sun</li>
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
                                        <label className="form-label">
                                          End Time
                                        </label>
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
                                        <label className="form-label">
                                          End Time
                                        </label>
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
                                        <label className="form-label">
                                          End Time
                                        </label>
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
                                        <label className="form-label">
                                          End Time
                                        </label>
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
                                        <label className="form-label">
                                          End Time
                                        </label>
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
                                        <label className="form-label">
                                          End Time
                                        </label>
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
                                        <label className="form-label">
                                          End Time
                                        </label>
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
                        <div className="card">
                          <div className="pro-body">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-row pro-pad pt-0 ps-0">
                                  <div className="input-block col-md-6 pro-pic">
                                    <h4 className="mb-3">Social Media</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">Facebook</label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, facebook: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">Instagram </label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, instagram: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">LinkedIn</label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, linkedIn: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">Behance</label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, behance: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">Pinterest </label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, pinterest: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">Twitter</label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, twitter: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="pro-body">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-row pro-pad pt-0 ps-0">
                                  <div className="input-block col-md-6 pro-pic">
                                    <h4 className="mb-3">Location</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label className="form-label">Address</label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, companyAddress: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">City </label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, companyCity: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    State / Province
                                  </label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, companyState: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    ZIP / Post Code{" "}
                                  </label>
                                  <input
                                    onChange={(e) => { setProfileDetails({ ...profileDetails, companyZipCode: e.target.value }) }}
                                    type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Country</label>
                                  <Select
                                    value={profileDetails.companyCountry ? options.find((item) => item.label === profileDetails.companyCountry) : ''}
                                    className="select"
                                    options={options}
                                    placeholder="Select"
                                    onChange={handleCompanyCountry}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="card  border-0">
                          <div className="pro-body">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-row pro-pad pt-0 ps-0">
                                  <div className="input-block col-md-6 pro-pic">
                                    <h4 className="mb-3">Language</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label className="form-label">Language</label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label className="form-label">Fluency</label>
                                  <Select
                                    className="select"
                                    options={options}
                                    placeholder="Select"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <div className="card text-end border-0">
                          <div className="pro-body">
                            <button className="btn btn-secondary click-btn btn-plan">
                              Cancel
                            </button>
                            <button
                              className="btn btn-primary click-btn btn-plan"
                              onClick={updateProfile}
                            >
                              Update
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Content */}
          </>
      }
    </>
  );
};
export default Settings;
