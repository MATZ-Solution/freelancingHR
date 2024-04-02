import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { useState } from "react";
import InfoModal from "../../../admin/component/pages/CustomModal/InfoModal";
import {
  Img_01, Img_02, Img_03, Img_04, Flags_pl, Tab_icon_01, Logo_01, Tab_icon_02, Tab_icon_05, Tab_icon_06, Tab_icon_07,
  Tab_icon_08, Project_img, Project_1, Project_2, Project_3, Project_4, Project_5, Project_6, Project_7,
  Redeem_icon, Pay_icon_01, Pay_icon_02, Pay_icon_03, company_img1, company_img2, company_img3,
  company_img4, company_img5
} from "../imagepath";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../../../admin/assets/css/CustomDatePicker.css'
import ErrorModal from "../../../admin/component/pages/CustomModal/ErrorsModal";
import SuccessModal from "../../../admin/component/pages/CustomModal/index";
import { get } from "react-hook-form";

// Img_04,

const UserDetails = () => {

  // #########################  VARIABLES START #########################################

  let [file, setFile] = useState(null)
  let [messageInfo, setMessageInfo] = useState('')
  let [error, setError] = useState(false)
  let [flag, setFlag] = useState(false)

  let [showSuccessModal, setSuccessModal] = useState({
    status: false,
    message: "",
    errorStatus: false
  })

  // let [showImgBtn, setShowImgBtn] = useState(false)
  // const [profileImgPreview, setProfileImgPreview] = useState(null);
  // const [coverImgPreview, setCoverImgPreview] = useState(null);
  const [coverImg, setCoverImg] = useState(null);
  let token = localStorage.getItem('token')

  const [profileDetails, setProfileDetails] = useState({
    professionalHeadline: '',
    worktype: '',
    hourlyRate: '',
    country: '',
    state: '',
    city: '',
    zipcode: '',
    address: ''
  })

  let [overview, setOverview] = useState('')

  const [experienceDetails, setExperienceDetails] = useState({
    title: "",
    employmentType: "",
    companyName: "",
    Location: "",
    locationType: "",
    startDate: "",
    endDate: "",
    Description: ""
  })

  const [educationDetails, setEducationDetails] = useState({
    school: "",
    degree: "",
    fieldStudy: "",
    startDate: "",
    endDate: "",
    grade: "",
    Description: "",
  })

  let [skills, setSkills] = useState('')
  let [skillsArray, setSkillsArray] = useState([])


  const workTypes = ['Full Time', 'Part Time']
  const countryOption = ['Pakistan', 'Austrailia', 'Srilanka', 'Turkey']
  const employmentTypes = ['Full Time', 'Part Time']
  const gradeOption = ['Grade A', 'Grade B', 'Grade C']
  const locationTypeOption = ['Onsite', 'Hybrid', 'Remote']

  let [getUserData, setGetUserData] = useState([])



  // #########################  VARIABLES END #########################################


  // #########################  API START #########################################

  const updateUserProfile = async () => {
    try {
      const updateProfileRequest = await fetch('http://localhost:4500/profileHeader', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(profileDetails)
      })
      const response = await updateProfileRequest.json()
      if (!response.ok) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: true });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: false })
        }, 2000)
      }
      if (response.message === 'User Profile Header updated successfully') {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '' })
        }, 2000)
        cancelEditProfileSection('pro-text3', 'pro-new3')
        setFlag(true)
      }
    } catch (err) {
      setError(true)
    }
  }

  const updateExperience = async () => {
    try {
      const updateExperienceRequest = await fetch('http://localhost:4500/experience', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(experienceDetails)
      })
      if (!updateExperienceRequest.ok) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: true });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: false })
        }, 2000)
      }
      const response = await updateExperienceRequest.json()
      if (response.message === 'User Experience added successfully') {
        cancelEditSection('clearfix pro-text', 'pro-overview pro-new')
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '' })
        }, 2000)
        setExperienceDetails({
          title: "",
          employmentType: "",
          companyName: "",
          Location: "",
          locationType: "",
          startDate: "",
          endDate: "",
          Description: ""
        });
        setFlag(true)
      }
    } catch (err) {
      setError(true)
    }
  }

  const updateCoverImage = async (selectedFile) => {
    let formData = new FormData()
    formData.append('image', selectedFile)
    formData.append('type', 'cover')
    try {
      let updateCoverImgReq = await fetch('http://localhost:4500/cover', {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData
      })
      if (!updateCoverImgReq.ok) {
        setError(true)
      }
      let response = await updateCoverImgReq.json()
      if (response.message === 'User Cover Image updated successfully') {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '' })
        }, 2000)
        setFlag(true)
        setFile(null)
      }
      else if (response.message === 'Some thing wents wrong') {
        setError(true)
      }
      else {
        // 
      }
    } catch (err) {
      setError(true)
    }
  }

  const updateProfileImage = async (selectedFile) => {
    setSuccessModal({ ...showSuccessModal, status: false, message: "", errorStatus: false });
    let formData = new FormData()
    formData.append('image', selectedFile)
    formData.append('type', 'profile')
    try {
      let updateProfileImgReq = await fetch('http://localhost:4500/profile', {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData
      })
      let response = await updateProfileImgReq.json()
      if (!response.ok) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: true });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: false })
        }, 2000)
      }
      if (response.message === 'User Profile Image updated successfully') {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '' })
        }, 2000)
        setFile(null)
        setFlag(true)
      }
    } catch (err) {
      setError(true)
    }
  }

  const updateOverView = async () => {
    try {
      const updateOverViewRequest = await fetch('http://localhost:4500/profileOverview', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ overview: overview })
      })
      const response = await updateOverViewRequest.json()
      if (!response.ok) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: true });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: false })
        }, 2000)
      }
      if (response.message === 'User Profile Header updated successfully') {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '' })
        }, 2000)
        setFlag(true)
        // cancelEditSection('pro-text1', 'pro-new1')
      }

    } catch (err) {
      setError(true)
    }
  }

  const updateEducation = async () => {
    try {
      const updateEducationReq = await fetch('http://localhost:4500/education', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(educationDetails)
      })
      const response = await updateEducationReq.json()
      if (!response.ok) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: true });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: false })
        }, 2000)
      }
      if (response.message === "User Education added successfully") {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '' })
        }, 2000)
        cancelEditSection('pro-text2', 'pro-new2')
        setFlag(true)
      }
    } catch (err) {
      setError(true)
    }
  }

  const updateSkills = async () => {
    try {
      const updateSkillsReq = await fetch('http://localhost:4500/skill', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ skills: skillsArray })
      })
      const response = await updateSkillsReq.json()
      if (!response.ok) {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message, errorStatus: true });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '', errorStatus: false })
        }, 2000)
      }
      if (response.message === "User profile skills saved successfully.") {
        setSuccessModal({ ...showSuccessModal, status: true, message: response.message });
        setTimeout(() => {
          setSuccessModal({ ...showSuccessModal, status: false, message: '' })
        }, 2000)
        setFlag(true)
        // cancelEditSection('pro-text2', 'pro-new2')
      }
    } catch (err) {
      setError(true)
    }
  }

  const getProfileData = async () => {
    try {
      const getProfileReq = await fetch('http://localhost:4500/getUserProfile', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      if (!getProfileReq.ok) {
        setError(true)
      }
      const response = await getProfileReq.json()
      if (response.message === "Success") {
        console.log(response.data)
        setGetUserData(response.data)
        setProfileDetails(
          {
            ...profileDetails,
            professionalHeadline: response.data[0]?.professionalHeadline,
            worktype: response.data[0]?.Worktype || '',
            hourlyRate: response.data[0]?.HourlyRate || '',
            country: response.data[0]?.country || '',
            state: response.data[0]?.state || '',
            city: response.data[0]?.city || '',
            zipcode: response.data[0]?.zipcode || '',
            address: response.data[0]?.address || '',
          });
      }
      setFlag(false)

    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  // #########################  API END #########################################



  // #########################  FUNCTIONS START #########################################

  const handleStartDateChange = date => {
    setExperienceDetails({ ...experienceDetails, startDate: date })
  }

  const handleEndDateChange = date => {
    setExperienceDetails({ ...experienceDetails, endDate: date })
  }

  const handleEducationStartDateChange = date => {
    setEducationDetails({ ...educationDetails, startDate: date })
  }

  const handleEducationEndDateChange = date => {
    setEducationDetails({ ...educationDetails, endDate: date })
  }

  // const formatDate = (date) => {
  //   const dates = new Date(date);
  //   const formattedDate = dates.toLocaleDateString('en-US', {
  //     month: 'short',
  //     day: 'numeric',
  //     year: 'numeric'
  //   });
  //   return formattedDate
  // }

  const editProfileSection = (id1, id2) => {
    const modal1 = document.getElementById(id1)
    const modal2 = document.getElementById(id2)
    // setShowImgBtn(true)
    if (modal1) {
      modal1.style.display = 'none'
      modal2.style.display = 'block'
    }
  }

  const cancelEditProfileSection = (id1, id2) => {
    const modal1 = document.getElementById(id1)
    const modal2 = document.getElementById(id2)
    // setShowImgBtn(false)
    if (modal1) {
      modal1.style.display = 'block'
      modal2.style.display = 'none'
    }
    // setFile(null)
    // setCoverImg(null)
    // setProfileImgPreview(null)
    // setCoverImgPreview(null)
    // setProfileDetails({ ...profileDetails, coverImage: null })
    // setProfileDetails({ ...profileDetails, profileImage: null })
  }

  const editSection = (id1, id2) => {
    const modal1 = document.getElementById(id1)
    const modal2 = document.getElementById(id2)
    if (modal1) {
      modal1.style.display = 'none'
      modal2.style.display = 'block'
    }
  }

  const cancelEditSection = (id1, id2) => {
    const modal1 = document.getElementById(id1)
    const modal2 = document.getElementById(id2)
    if (modal1) {
      modal1.style.display = 'block'
      modal2.style.display = 'none'
    }
  }

  const handleChangeProfileImg = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && (!selectedFile.type.startsWith('image/') || selectedFile.type === 'image/svg+xml')) {
      setMessageInfo('Please select a image file.');
      event.target.value = null;
    } else {
      // setProfileDetails({ ...profileDetails, profileImage: selectedFile })
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   profileDetails.profileImage(reader.result);
      // };
      // reader.readAsDataURL(selectedFile);
      setFile(selectedFile);
      updateProfileImage(selectedFile)
    }
  }

  const handleChangeCoverImg = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && (!selectedFile.type.startsWith('image/') || selectedFile.type === 'image/svg+xml')) {
      setMessageInfo('Please select a image file.');
      event.target.value = null;
    } else {
      // setCoverImg(selectedFile);
      // setProfileDetails(prevProfileDetails => ({
      //   ...prevProfileDetails,
      //   profileImage: {
      //     ...prevProfileDetails.profileImage,
      //     file: selectedFile
      //   }
      // }));
      // setFile(selectedFile);
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   profileDetails.coverImage(reader.result);
      // };
      // reader.readAsDataURL(selectedFile);

      setFile(selectedFile);
      updateCoverImage(selectedFile)
    }
  }

  const addSkills = () => {
    setSkillsArray([...skillsArray, skills])
    setSkills('')

  }

  function deleteSkills(indexValue) {
    let NewSkillsArray = [...skillsArray]
    NewSkillsArray.splice(indexValue, 1)
    setSkillsArray(NewSkillsArray)
    setSkills('')
  }

  // #########################  FUNCTIONS END #########################################


  // #########################  USE EFFECT START #########################################
  useEffect(() => {
    getProfileData()
  }, [flag])

  // #########################  USE EFFECT  END #########################################




  // #########################  CONSOLE SECTION START #########################################

  // console.log("this is file", file)
  // console.log("this is cover image", coverImage)
  // console.log("this is cover image", coverImg)
  // console.log("this is experience details", experienceDetails)
  // console.log("this is education details", educationDetails)

  // console.log("this is get User data", getUserData)
  console.log("this is professional details", profileDetails)


  // #########################  CONSOLE SECTION END #########################################


  return (
    <div>
      {
        error ?
          <ErrorModal message={'Something Went Wrong'} />
          :
          <>
            {/* Breadcrumb */}
            <div style={{ paddingTop: "84px", minHeight: '304px', backgroundColor: "darkgray", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: `url(${getUserData[0]?.coverImage})` }}>
              {/* , backgroundImage: `url(${profileDetails.coverImage.file})`, */}
              {/* <div style={{ paddingTop: "84px", minHeight: '304px', backgroundColor: "darkgray", backgroundImage: `url(${coverImgPreview})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}> */}
              {/* <img src={coverImgPreview} style={{width:"100%", minHeight:"304px"}}></img> */}
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-end">
                    <div className="inner-content">
                      <label id='cover-image' className="file-upload image-btn"

                      >
                        Change Image <input type="file" onChange={handleChangeCoverImg} />
                      </label>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Breadcrumb */}
            {/* Page Content */}
            {messageInfo === 'Please select a image file.' && (<InfoModal setMessageInfo={setMessageInfo} message={'Please select an image file.'} />)}
            {showSuccessModal.status && (<SuccessModal message={showSuccessModal.message} errorStatus={showSuccessModal.errorStatus} />)}
            <div className="content">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    {/* User Profile Details */}
                    <div className="profile">
                      <div className="profile-box">
                        <div className="provider-widget">
                          <div className="pro-info-left" style={{ gap: "15px" }}>

                            <div style={{ position: "relative" }}>
                              <div style={{ position: "relative" }}>
                                {/* <img src={Img_04} alt="User" /> */}
                                {/* {
                       profileImgPreview === null && (
                         <img src={Img_04} alt="User" />
                       )
                     }  */}
                                <div style={{ width: "150px", height: "150px", objectFit: "contain" }}>
                                  <img
                                    // src={profileDetails.profileImage.file ? profileDetails.profileImage.file : Img_04}
                                    src={getUserData[0]?.profileImage}

                                    alt="User"
                                    style={{ width: '100%', height: '100%' }}
                                  />
                                </div>

                                <div id='profile-div' className="camera-bg" onClick={() => { document.getElementById('profile-image').click() }}>
                                  <input accept="image/*" id='profile-image' type='file' onChange={handleChangeProfileImg} style={{ display: "none", opacity: "0" }} />
                                  <i className="fa fa-camera"
                                    style={{ display: "absolute" }}
                                  />
                                </div>


                              </div>
                            </div>

                            {/* className: camera-bg */}

                            <div className="profile-info profile-edit-form">
                              <h2 className="profile-title">{getUserData[0]?.firstName} {getUserData[0]?.lastName}</h2>

                              <div className="pro-text3" id='pro-text3'>
                                <p className="profile-position">{getUserData[0]?.professionalHeadline}</p>
                                <div>
                                  <Link to="#" className="btn full-btn">
                                    {getUserData[0]?.Worktype}
                                  </Link>
                                </div>
                                <ul className="profile-preword">
                                  <li>
                                    {/* <img src={Flags_pl} alt="" height={16} />{" "} */}
                                    {getUserData[0]?.country}

                                  </li>
                                  <li>
                                    <div className="rating">
                                      <span className="average-rating">4.6</span>
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                    </div>
                                  </li>
                                </ul>
                              </div>

                              <div className="pro-new3" id='pro-new3'>
                                <div className="row">
                                  <div className="col-12">
                                    <form>
                                      <div className="form-row">
                                        <div className="form-group col-lg-4">
                                          <label>Professional Headline</label>
                                          <input
                                            value={profileDetails.professionalHeadline}
                                            type="text"
                                            className="form-control"
                                            placeholder="Professional Headline"
                                            onChange={(e) => { setProfileDetails({ ...profileDetails, professionalHeadline: e.target.value }) }}
                                          />
                                        </div>
                                        <div className="form-group col-lg-4">
                                          <label>State</label>
                                          <input
                                            value={profileDetails.state}
                                            type="text"
                                            className="form-control"
                                            placeholder="State"
                                            onChange={(e) => { setProfileDetails({ ...profileDetails, state: e.target.value }) }}
                                          />
                                        </div>
                                        <div className="form-group col-lg-4">
                                          <label>City</label>
                                          <input
                                            value={profileDetails.city}
                                            type="text"
                                            className="form-control"
                                            placeholder="City"
                                            onChange={(e) => { setProfileDetails({ ...profileDetails, city: e.target.value }) }}
                                          />
                                        </div>
                                        <div className="form-group col-lg-4">
                                          <label>Zipcode</label>
                                          <input
                                            value={profileDetails.zipcode}
                                            type="text"
                                            className="form-control"
                                            placeholder="Zipcode"
                                            onChange={(e) => { setProfileDetails({ ...profileDetails, zipcode: e.target.value }) }}
                                          />
                                        </div>
                                        <div className="form-group col-lg-4">
                                          <label>Address</label>
                                          <input
                                            value={profileDetails.address}
                                            type="text"
                                            className="form-control"
                                            placeholder="address"
                                            onChange={(e) => { setProfileDetails({ ...profileDetails, address: e.target.value }) }}
                                          />
                                        </div>
                                        <div className="form-group col-lg-4">
                                          <label>Select Work type</label>
                                          <select className="form-control select" value={profileDetails.worktype ? workTypes.find((opt) => opt === profileDetails.worktype) : ""} onChange={(e) => { setProfileDetails({ ...profileDetails, worktype: e.target.value }) }}>
                                            <option value="-">Select an option</option>
                                            {workTypes.map((workType, index) => (
                                              <option key={index} value={workType}>{workType}</option>
                                            ))}
                                          </select>
                                        </div>
                                        {/* <div className="form-group col-lg-4">
                               <label>Professional Headline</label>
                               <input
                                 type="text"
                                 className="form-control"
                                 placeholder="IOS Developer"
                               />
                             </div> */}
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-lg-4">
                                          <label>Hourly Rate</label>
                                          <div className="input-group">
                                            <div className="input-group-prepend">
                                              <span className="input-group-text">$</span>
                                            </div>
                                            <input
                                              value={profileDetails.hourlyRate}
                                              type="text"
                                              className="form-control"
                                              placeholder="Hourly Rate"
                                              onChange={(e) => { setProfileDetails({ ...profileDetails, hourlyRate: e.target.value }) }}

                                            />
                                            <div className="input-group-append">
                                              <span className="input-group-text">
                                                USD / HR
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="form-group col-lg-4">
                                          <label>Select Country</label>
                                          <select className="form-control select" value={profileDetails.country ? countryOption.find((opt) => opt === profileDetails.country) : ""} onChange={(e) => { setProfileDetails({ ...profileDetails, country: e.target.value }) }}>
                                            <option value="">Select an option</option>

                                            {
                                              countryOption.map((workType, index) => (
                                                <option key={index} value={workType}>{workType}</option>
                                              ))
                                            }

                                          </select>
                                        </div>
                                        <div className="form-group col-lg-4">
                                          <label />
                                          <div className=" submit-profile-sec">
                                            <Link
                                              onClick={updateUserProfile}
                                              to="#"
                                              className="btn btn-primary profile-update-btn"
                                            >
                                              Update
                                            </Link>
                                            <Link
                                              onClick={() => cancelEditProfileSection('pro-text3', 'pro-new3')}
                                              to="#"
                                              className="btn btn-light profile-cancel-btn"
                                            >
                                              Cancel
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className="pro-info-right profile-inf">
                            <Link to='#' id="edit_name" className="sub-title edit-sub-title" onClick={() => editProfileSection('pro-text3', 'pro-new3')}>
                              <i className="fa fa-pencil-alt me-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="profile-list">
                        <ul>
                          <li>
                            <span className="cont bg-blue">22</span>
                            <strong className="proj-title"> Completed Projects</strong>
                          </li>
                          <li>
                            <span className="cont bg-red">5</span>
                            <strong className="proj-title"> Ongoing Projects</strong>
                          </li>
                          <li>
                            <span className="cont bg-violet">89%</span>
                            <strong className="proj-title"> Recommended</strong>
                          </li>
                          <li>
                            <span className="cont bg-yellow">12</span>
                            <strong className="proj-title"> Rehired</strong>
                          </li>
                          <li>
                            <span className="cont bg-pink">48</span>
                            <strong className="proj-title"> Clients</strong>
                          </li>
                          <li>
                            <span className="cont bg-navy">5</span>
                            <strong className="proj-title"> Feedbacks</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /User Profile Details */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <div className="pro-view">
                      {/* Tab Heading */}
                      <nav className="provider-tabs mb-4">
                        <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              to="#overview"
                              data-bs-toggle="tab"
                            >
                              <img
                                className="img-fluid"
                                alt="User Image"
                                src={Tab_icon_01}
                              />
                              <p className="bg-red">Overview</p>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="#bids" data-bs-toggle="tab">
                              <img
                                className="img-fluid"
                                alt="User Image"
                                src={Tab_icon_02}
                              />
                              <p className="bg-blue">Bids</p>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="#jobs" data-bs-toggle="tab">
                              <img
                                className="img-fluid"
                                alt="User Image"
                                src={Tab_icon_05}
                              />
                              <p className="bg-pink">Jobs</p>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              to="#portfolio"
                              data-bs-toggle="tab"
                            >
                              <img
                                className="img-fluid"
                                alt="User Image"
                                src={Tab_icon_07}
                              />
                              <p className="bg-yellow">Portfolio</p>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              to="#feedbacks"
                              data-bs-toggle="tab"
                            >
                              <img
                                alt="User Image"
                                height={28}
                                src={Tab_icon_06}
                              />
                              <p className="bg-green">Feedbacks</p>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="#payments" data-bs-toggle="tab">
                              <img
                                className="img-fluid"
                                alt="User Image"
                                src={Tab_icon_08}
                              />
                              <p className="bg-violet">Payments</p>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                      {/* /Tab Heading */}
                      {/* Tab Details */}
                      <div className="tab-content pt-0">
                        {/* Overview Tab Content */}
                        <div
                          role="tabpanel"
                          id="overview"
                          className="tab-pane fade show active"
                        >
                          <div className="pro-post widget-box">
                            <div className="row">
                              <div className="col-10">
                                <h3 className="pro-title">Overview</h3>
                              </div>
                              <div className="col-2 text-end">
                                <Link
                                  to="#"
                                  onClick={() => editSection('pro-text1', 'pro-new1')}
                                  id="edit_overview"
                                  className="sub-title edit-sub-title"
                                >
                                  <i className="fa fa-pencil-alt me-1" />
                                </Link>
                              </div>
                            </div>
                            <div className="pro-overview">
                              <div className="pro-content">
                                <div className="pro-text1" id="pro-text1">
                                  <p>
                                    {getUserData[0]?.overview}
                                  </p>

                                </div>
                                <div className="pro-new1" id="pro-new1">
                                  <textarea defaultValue={getUserData[0]?.overview} onChange={(e) => { setOverview(e.target.value) }} style={{ width: "100%", height: "30vh", outline: "none" }} />

                                  <div className="row">
                                    <div className="col-lg-12 text-end">
                                      <Link
                                        to="#"
                                        className="btn btn-primary profile-update-btn"
                                        onClick={updateOverView}
                                      >
                                        Update
                                      </Link>
                                      <Link
                                        onClick={() => cancelEditSection('pro-text1', 'pro-new1')}

                                        to="#"
                                        className="btn btn-light profile-cancel-btn"
                                      >
                                        Cancel
                                      </Link>
                                    </div>
                                  </div>
                                  {/* </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Experience */}
                          <div className="pro-post project-widget widget-box">
                            <div className="row">
                              <div className="col-md-6">
                                <h3 className="pro-title">Experience</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <Link to="#" className="sub-title me-2"
                                  onClick={() => editSection('clearfix pro-text', 'pro-overview pro-new')}

                                >
                                  <i className="fa fa-plus me-1" /> Add Experience
                                </Link>
                                <Link
                                  to="#"
                                  id="edit_experiance"
                                  className="sub-title edit-sub-title"
                                >
                                  <i className="fa fa-pencil-alt me-1" />
                                </Link>
                              </div>
                            </div>
                            <div className="pro-content">
                              <div className="widget-list mb-0 profile-edit-form">
                                <ul className="clearfix pro-text" id='clearfix pro-text'>
                                  {
                                    getUserData[0]?.Experience?.map((data, index) => {
                                      return (
                                        <div key={index}>
                                          <li>
                                            <h4>{data.title}</h4>
                                            <h5>{data.companyName} {data.startDate} - {data.endDate}</h5>
                                            <p>
                                              {data.Description}
                                            </p>
                                          </li>
                                        </div>
                                      )
                                    })
                                  }


                                </ul>
                                <div className="pro-overview pro-new" id='pro-overview pro-new'>
                                  <form>
                                    <div className="form-row">
                                      <div className="form-group col-md-6">
                                        <label>Title</label>
                                        <input
                                          onChange={(e) => { setExperienceDetails({ ...experienceDetails, title: e.target.value }) }}
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter Position ot title"
                                        />
                                      </div>
                                      <div className="form-group col-md-6">
                                        <label>Company Name</label>
                                        <input
                                          onChange={(e) => { setExperienceDetails({ ...experienceDetails, companyName: e.target.value }) }}

                                          type="text"
                                          className="form-control"
                                          placeholder="Enter Company name"
                                        />
                                      </div>
                                    </div>
                                    <div className="form-row" >
                                      <div className="form-group col-md-6">
                                        <label>Start Date</label>
                                        <div className="form-row">

                                          <DatePicker
                                            className="custom-date-picker"
                                            placeholderText="Select a date"
                                            selected={experienceDetails.startDate}
                                            onChange={handleStartDateChange}
                                            dateFormat="MM/dd/yyyy"
                                          // showTimeSelect
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group col-md-6">
                                        <label>End Date</label>
                                        <div className="form-row">
                                          <DatePicker
                                            className="custom-date-picker"
                                            placeholderText="Select a date"
                                            selected={experienceDetails.endDate}
                                            onChange={handleEndDateChange}
                                            dateFormat="MM/dd/yyyy"
                                          // showTimeSelect
                                          />

                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-row">
                                      <div className="form-group col-md-6">
                                        <label>Location</label>
                                        <select className="form-control select" value={experienceDetails.Location} onChange={(e) => { setExperienceDetails({ ...experienceDetails, Location: e.target.value }) }}>
                                          <option value="">-</option>
                                          {countryOption.map((workType, index) => (
                                            <option key={index} value={workType}>{workType}</option>
                                          ))}
                                        </select>
                                      </div>

                                      <div className="form-group col-md-6">
                                        <label>Location Type</label>
                                        <select className="form-control select" value={experienceDetails.locationType} onChange={(e) => { setExperienceDetails({ ...experienceDetails, locationType: e.target.value }) }}>
                                          <option value="">-</option>
                                          {locationTypeOption.map((workType, index) => (
                                            <option key={index} value={workType}>{workType}</option>
                                          ))}
                                        </select>
                                      </div>
                                    </div>
                                    <div className="form-row">

                                      <div className="form-group col-md-6">
                                        <label>Employment Type</label>
                                        <select className="form-control select" value={experienceDetails.employmentType} onChange={(e) => { setExperienceDetails({ ...experienceDetails, employmentType: e.target.value }) }}>
                                          <option value="">-</option>
                                          {employmentTypes.map((workType, index) => (
                                            <option key={index} value={workType}>{workType}</option>
                                          ))}
                                        </select>
                                      </div>
                                    </div>

                                    {/* <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue
                                        id="defaultCheck1"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="defaultCheck1"
                                      >
                                        I'm currently working here
                                      </label>
                                    </div> */}
                                    <div className="form-group">
                                      <label>Description</label>
                                      <textarea
                                        onChange={(e) => { setExperienceDetails({ ...experienceDetails, Description: e.target.value }) }}
                                        rows={6}
                                        className="form-control"
                                        defaultValue={""}
                                      />
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-12 text-end">
                                        <Link
                                          onClick={updateExperience}
                                          to="#"
                                          className="btn btn-primary profile-update-btn"
                                        >
                                          Update
                                        </Link>
                                        <Link
                                          to="#"
                                          className="btn btn-light profile-cancel-btn"
                                          onClick={() => cancelEditSection('clearfix pro-text', 'pro-overview pro-new')}

                                        >
                                          Cancel
                                        </Link>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Experience */}
                          {/* Educational */}
                          <div className="pro-post project-widget widget-box">
                            <div className="row">
                              <div className="col-lg-6">
                                <h3 className="pro-title">Educational Details</h3>
                              </div>
                              <div className="col-lg-6 text-end">
                                <Link to="#" className="sub-title me-2"
                                  onClick={() => editSection('pro-text2', 'pro-new2')}
                                >
                                  <i className="fa fa-plus me-1" /> Add Education
                                </Link>
                                <Link
                                  to="#"
                                  id="edit_education"
                                  className="sub-title edit-sub-title"
                                >
                                  <i className="fa fa-pencil-alt me-1" />
                                </Link>
                              </div>
                            </div>
                            <div className="pro-content">
                              <div className="widget-list mb-0">
                                <div className="pro-text2" id='pro-text2'>
                                  <ul className="clearfix">
                                    {
                                      getUserData[0]?.Education?.map((data, index) => {
                                        return (
                                          // <div key={index} style={{width:""}}>
                                          <li key={index} style={{ width: "100%" }}>
                                            <div className="dropdown profile-action">
                                              <Link
                                                to="#"
                                                className="action-icon dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                              >
                                                <i className="fa fa-ellipsis-v" />
                                              </Link>
                                              <div className="dropdown-menu dropdown-menu-right">
                                                <Link
                                                  className="dropdown-item"
                                                  to="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#"
                                                >
                                                  <i className="fas fa-pencil-alt me-1" /> Edit
                                                </Link>
                                                <Link
                                                  className="dropdown-item"
                                                  to="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#"
                                                >
                                                  <i className="far fa-trash-alt me-1" /> Delete
                                                </Link>
                                              </div>
                                            </div>
                                            <h4>
                                              {data.degree}
                                            </h4>
                                            <h5>
                                              {data.school} {data.startDate} - {data.endDate}
                                            </h5>
                                            <p>
                                              {data.Description}

                                            </p>
                                          </li>
                                          // </div>
                                        )
                                      })
                                    }


                                  </ul>
                                </div>
                                <div className="pro-overview profile-edit-form pro-new2" id='pro-new2'>
                                  <form>
                                    <div className="form-row">
                                      <div className="form-group col-md-6">
                                        <label>Grade</label>
                                        <select className="form-control select" value={educationDetails.grade} onChange={(e) => { setEducationDetails({ ...educationDetails, grade: e.target.value }) }}>
                                          <option value="">-</option>
                                          {gradeOption.map((workType, index) => (
                                            <option key={index} value={workType}>{workType}</option>
                                          ))}
                                        </select>
                                      </div>
                                      <div className="form-group col-md-6">
                                        <label>University/College</label>
                                        <input
                                          onChange={(e) => { setEducationDetails({ ...educationDetails, school: e.target.value }) }}
                                          type="text"
                                          name="degree"
                                          className="form-control"
                                          placeholder="Enter Degree"
                                        />
                                      </div>
                                    </div>
                                    <div className="form-row">
                                      <div className="form-group col-md-6">
                                        <label>Start year</label>
                                        <DatePicker
                                          className="custom-date-picker"
                                          placeholderText="Select a date"
                                          selected={educationDetails.startDate}
                                          onChange={handleEducationStartDateChange}
                                          dateFormat="MM/dd/yyyy"
                                        />
                                      </div>
                                      <div className="form-group col-md-6">
                                        <label>End year</label>
                                        <DatePicker
                                          className="custom-date-picker"
                                          placeholderText="Select a date"
                                          selected={educationDetails.endDate}
                                          onChange={handleEducationEndDateChange}
                                          dateFormat="MM/dd/yyyy"
                                        />
                                      </div>
                                    </div>

                                    <div className="form-group">
                                      <label>Degree</label>
                                      <input
                                        onChange={(e) => { setEducationDetails({ ...educationDetails, degree: e.target.value }) }}
                                        type="text"
                                        name="degree"
                                        className="form-control"
                                        placeholder="Enter Degree"
                                      />
                                    </div>

                                    <div className="form-group">
                                      <label>Field Study</label>
                                      <select className="form-control select" value={profileDetails.workType} onChange={(e) => { setEducationDetails({ ...educationDetails, fieldStudy: e.target.value }) }}>
                                        <option value="">-</option>
                                        {workTypes.map((workType, index) => (
                                          <option key={index} value={workType}>{workType}</option>
                                        ))}
                                      </select>
                                    </div>
                                    <div className="form-group">
                                      <label>Description</label>
                                      <textarea
                                        onChange={(e) => { setEducationDetails({ ...educationDetails, Description: e.target.value }) }}
                                        rows={6}
                                        className="form-control"
                                        defaultValue={""}
                                      />
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-12 text-end">
                                        <Link
                                          onClick={updateEducation}
                                          to="#"
                                          className="btn btn-primary profile-update-btn"
                                        >
                                          Update
                                        </Link>
                                        <Link
                                          onClick={() => cancelEditSection('pro-text2', 'pro-new2')}
                                          to="#"
                                          className="btn btn-light profile-cancel-btn"
                                        >
                                          Cancel
                                        </Link>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Educational */}
                          {/* Skills */}
                          <div className="pro-post project-widget widget-box">
                            <div className="row">
                              <div className="col-lg-6">
                                <h3 className="pro-title">Technical Skills</h3>
                              </div>
                              <div className="col-lg-6 text-end">
                                {" "}
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#add-skills"
                                  className="sub-title me-2"
                                >
                                  <i className="fa fa-plus me-1" /> Add Skills
                                </Link>
                                <Link to="#" className="sub-title">
                                  <i className="fa fa-pencil-alt me-1" />
                                </Link>
                              </div>
                            </div>
                            <div className="pro-content">
                              <div className="tags">
                                {
                                  getUserData[0]?.Skill?.map((data, index) => {
                                    return (
                                      <span key={index} className="badge badge-pill badge-skills">
                                        {data.skill}
                                      </span>
                                    )
                                  })
                                }

                              </div>
                            </div>
                          </div>
                          {/* /Skills */}
                        </div>
                        {/* /Overview Tab Content */}
                        {/* Bids Tab Content */}
                        <div role="tabpanel" id="bids" className="tab-pane fade">
                          <div className="pro-post project-widget widget-box">
                            <nav className="user-tabs mb-4">
                              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                <li className="nav-item">
                                  <Link
                                    className="nav-link active"
                                    to="#manage_bids"
                                    data-bs-toggle="tab"
                                  >
                                    Manage Bids
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    className="nav-link"
                                    to="#manage_bidders"
                                    data-bs-toggle="tab"
                                  >
                                    Manage Bidders
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    className="nav-link"
                                    to="#active_bids"
                                    data-bs-toggle="tab"
                                  >
                                    My Active Bids
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                            {/* Bids Tab Details */}
                            <div className="tab-content pt-0">
                              {/* Manage Bids Tab Content */}
                              <div
                                role="tabpanel"
                                id="manage_bids"
                                className="tab-pane fade show active"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img1}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Amaze Tech{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">UI/UX Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted Just
                                              Now
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Georgia, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $40-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                4 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">15</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img2}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Park INC{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">PHP Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 min
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              California, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $30-$300
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                5 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">22</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img3}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Tech Zone{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">Graphic Designer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 30
                                              mins ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              New York, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $15-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                8 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">30</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img4}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              ABC Software{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">iOS Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 day
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Florida, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $25-$250
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                1 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">16</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img5}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Host Technologies{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">SEO Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 3 days
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Texas, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $50-$700
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                10 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">25</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Manage Bids Tab Content */}
                              {/* Manage Bidders Tab Content */}
                              <div
                                role="tabpanel"
                                id="manage_bidders"
                                className="tab-pane fade"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img1}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Amaze Tech{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">UI/UX Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted Just
                                              Now
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Georgia, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $40-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                4 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">15</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img2}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Park INC{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">PHP Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 min
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              California, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $30-$300
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                5 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">22</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img3}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Tech Zone{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">Graphic Designer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 30
                                              mins ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              New York, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $15-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                8 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">30</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img4}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              ABC Software{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">iOS Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 day
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Florida, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $25-$250
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                1 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">16</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img5}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Host Technologies{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">SEO Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 3 days
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Texas, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $50-$700
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                10 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">25</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Manage Bidders Tab Content */}
                              {/* Active Bids Tab Content */}
                              <div
                                role="tabpanel"
                                id="active_bids"
                                className="tab-pane fade"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img1}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Amaze Tech{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">UI/UX Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted Just
                                              Now
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Georgia, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $40-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                4 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">15</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img2}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Park INC{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">PHP Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 min
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              California, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $30-$300
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                5 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">22</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img3}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Tech Zone{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">Graphic Designer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 30
                                              mins ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              New York, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $15-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                8 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">30</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img4}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              ABC Software{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">iOS Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 day
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Florida, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $25-$250
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                1 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">16</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img5}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Host Technologies{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">SEO Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 3 days
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Texas, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $50-$700
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                10 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">25</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Active Bids Tab Content */}
                            </div>
                          </div>
                        </div>
                        {/* Jobs Tab Content */}
                        <div role="tabpanel" id="jobs" className="tab-pane fade">
                          <div className="pro-post project-widget widget-box">
                            <nav className="user-tabs mb-4">
                              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                <li className="nav-item">
                                  <Link
                                    className="nav-link active"
                                    to="#manage_jobs"
                                    data-bs-toggle="tab"
                                  >
                                    Manage Jobs
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    className="nav-link"
                                    to="#saved_jobs"
                                    data-bs-toggle="tab"
                                  >
                                    Saved Jobs
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    className="nav-link"
                                    to="#applied_jobs"
                                    data-bs-toggle="tab"
                                  >
                                    Applied Jobs
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    className="nav-link"
                                    to="#applied_candidates"
                                    data-bs-toggle="tab"
                                  >
                                    Applied Candidates
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                            <div className="tab-content pt-0">
                              {/* Manage Jobs Tab Content */}
                              <div
                                role="tabpanel"
                                id="manage_jobs"
                                className="tab-pane fade show active"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img1}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Amaze Tech{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">UI/UX Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted Just
                                              Now
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Georgia, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $40-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                4 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">15</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img2}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Park INC{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">PHP Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 min
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              California, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $30-$300
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                5 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">22</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img3}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Tech Zone{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">Graphic Designer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 30
                                              mins ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              New York, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $15-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                8 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">30</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img4}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              ABC Software{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">iOS Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 day
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Florida, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $25-$250
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                1 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">16</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img5}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Host Technologies{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">SEO Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 3 days
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Texas, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $50-$700
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                10 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">25</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Manage Jobs Tab Content */}
                              {/* Saved Jobs Tab Content */}
                              <div
                                role="tabpanel"
                                id="saved_jobs"
                                className="tab-pane fade"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img1}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Amaze Tech{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">UI/UX Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted Just
                                              Now
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Georgia, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $40-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                4 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">15</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img2}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Park INC{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">PHP Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 min
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              California, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $30-$300
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                5 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">22</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img3}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Tech Zone{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">Graphic Designer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 30
                                              mins ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              New York, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $15-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                8 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">30</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img4}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              ABC Software{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">iOS Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 day
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Florida, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $25-$250
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                1 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">16</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img5}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Host Technologies{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">SEO Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 3 days
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Texas, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $50-$700
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                10 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">25</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Saved Jobs Tab Content */}
                              {/* Applied Jobs Tab Content */}
                              <div
                                role="tabpanel"
                                id="applied_jobs"
                                className="tab-pane fade"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img1}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Amaze Tech{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">UI/UX Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted Just
                                              Now
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Georgia, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $40-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                4 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">15</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img2}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Park INC{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">PHP Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 min
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              California, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $30-$300
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                5 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">22</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img3}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Tech Zone{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">Graphic Designer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 30
                                              mins ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              New York, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $15-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                8 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">30</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img4}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              ABC Software{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">iOS Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 day
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Florida, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $25-$250
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                1 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">16</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img5}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Host Technologies{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">SEO Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 3 days
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Texas, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $50-$700
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                10 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">25</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Applied Jobs Tab Content */}
                              {/* Applied Candidates Tab Content */}
                              <div
                                role="tabpanel"
                                id="applied_candidates"
                                className="tab-pane fade"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img1}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Amaze Tech{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">UI/UX Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted Just
                                              Now
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Georgia, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $40-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                4 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">15</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img2}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Park INC{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">PHP Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 min
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              California, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $30-$300
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                5 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">22</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img3}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Tech Zone{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">Graphic Designer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 30
                                              mins ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              New York, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $15-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                8 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">30</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img4}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              ABC Software{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">iOS Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 day
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Florida, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $25-$250
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                1 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">16</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <Link
                                          data-bs-toggle="modal"
                                          to="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </Link>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <Link to="#">
                                              <img
                                                src={company_img5}
                                                alt="author"
                                              />
                                            </Link>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Host Technologies{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <Link to="#">SEO Developer</Link>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 3 days
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Texas, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </Link>
                                            <Link to="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="freelancers-price">
                                            $50-$700
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                10 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">25</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Applied Candidates Tab Content */}
                            </div>
                          </div>
                        </div>
                        {/* /Job Tab Content */}
                        {/* Portfolio Tab Content */}
                        <div role="tabpanel" id="portfolio" className="tab-pane fade">
                          <div className="pro-post project-widget widget-box">
                            <h3 className="pro-title">Portfolio</h3>
                            <div className="pro-content">
                              <div className="row">
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_img}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_1}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_2}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/roject-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_3}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_4}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_5}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_6}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_7}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_2}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_3}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_5}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_6}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Portfolio Tab Content */}
                        {/* Feedback Tab Content */}
                        <div role="tabpanel" id="feedbacks" className="tab-pane fade">
                          <div className="pro-post project-widget widget-box">
                            <h3 className="pro-title mb-3">Feedbacks</h3>
                            <div className="pro-post mt-4">
                              <div className="about-author">
                                <div className="about-author-img">
                                  <div className="author-img-wrap">
                                    <Link to="/review">
                                      <img
                                        className="img-fluid"
                                        alt=""
                                        src={Img_01}
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <div className="author-details">
                                  <Link to="/review" className="blog-author-name">
                                    Logo Designer
                                  </Link>
                                  <h5>Techline Oct 25, 2021 - Nov 18, 2021</h5>
                                  <p className="mb-0">
                                    I am a professional graphic designer. I have more than
                                    10-years of experience in graphics design. If you are
                                    looking for any graphic related work, contact me, I'll
                                    glad to help you.
                                  </p>
                                </div>
                              </div>
                              <div className="about-author">
                                <div className="about-author-img">
                                  <div className="author-img-wrap">
                                    <Link to="/review">
                                      <img
                                        className="img-fluid"
                                        alt=""
                                        src={Img_02}
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <div className="author-details">
                                  <Link to="/review" className="blog-author-name">
                                    Logo Designer
                                  </Link>
                                  <h5>Techline Oct 12, 2021 - Nov 18, 2021</h5>
                                  <p className="mb-0">
                                    I am a professional graphic designer. I have more than
                                    10-years of experience in graphics design. If you are
                                    looking for any graphic related work, contact me, I'll
                                    glad to help you.
                                  </p>
                                </div>
                              </div>
                              <div className="about-author">
                                <div className="about-author-img">
                                  <div className="author-img-wrap">
                                    <Link to="/review">
                                      <img
                                        className="img-fluid"
                                        alt=""
                                        src={Img_03}
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <div className="author-details">
                                  <Link to="#" className="blog-author-name">
                                    Logo Designer
                                  </Link>
                                  <h5>Techline Oct 18, 2021 - Nov 22, 2021</h5>
                                </div>
                                <div className="form-group reply-group mt-5 mb-0">
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Reply"
                                    />
                                    <div className="input-group-append">
                                      <button
                                        className="btn btn-success sub-btn"
                                        type="submit"
                                      >
                                        SEND
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Feedback Tab Content */}
                        {/* Payment Tab Content */}
                        <div role="tabpanel" id="payments" className="tab-pane fade">
                          <div className="pro-post project-widget">
                            <div className="widget-title-box ">
                              <h3 className="pro-title mb-3">PAYMENTS</h3>
                            </div>
                            <div className="widget-box">
                              <div className="pro-post billing-method">
                                <p className="mb-0">
                                  Add Billing Method{" "}
                                  <Link
                                    to="#"
                                    className="add-bill float-end"
                                  >
                                    <i className="fa fa-plus-circle orange-text" />
                                  </Link>
                                </p>
                              </div>
                              <h4 className="pb-2">PAYMENT ACTIVITY</h4>
                              <div className="row">
                                <div className="col-12 col-sm-4">
                                  <div className="pro-post payment-detail">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Pay_icon_01}
                                    />
                                    <h2 className="bg-blue">$4,745</h2>
                                    <p>Total Income</p>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                  <div className="pro-post payment-detail">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Pay_icon_02}
                                    />
                                    <h2 className="bg-pink">$4,450</h2>
                                    <p>Withdrawn</p>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                  <div className="pro-post payment-detail">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Pay_icon_03}
                                    />
                                    <h2 className="bg-yellow">$1,145</h2>
                                    <p>Sent</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="transaction">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Redeem_icon}
                              />
                              <h5>All your transactions are saved here.</h5>
                              <Link to="#" className="btn-primary click-btn">
                                Click Here{" "}
                              </Link>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header">
                              <p className="mb-0">
                                With workwise payment protection , only pay for work
                                delivered
                              </p>
                            </div>
                            <div className="card-body">
                              <div className="payment-list">
                                <h3>Add Billing Method</h3>
                                <label className="payment-radio credit-card-option mb-3">
                                  <input type="radio" name="radio" defaultChecked />
                                  <span className="checkmark" />
                                  Credit or Debit Cards
                                </label>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <label htmlFor="card_number">Card Number</label>
                                      <input
                                        className="form-control"
                                        id="card_number"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>First Name</label>
                                      <input
                                        className="form-control"
                                        id="first_name"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>Last Name</label>
                                      <input
                                        className="form-control"
                                        id="last_name"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label>Expires on</label>
                                      <input
                                        className="form-control"
                                        id="expiry_on"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="form-group">
                                      <label htmlFor="cvv">CVV (Security Code) </label>
                                      <input
                                        className="form-control"
                                        id="cvv"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8 btn-pad">
                                    <Link to="#" className="btn-primary click-btn">
                                      Continue
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <label className="payment-radio credit-card-option">
                                <input type="radio" name="paypal" defaultChecked />
                                <span className="checkmark" />
                                Add Paypal Account
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* Payment Tab Content */}
                      </div>
                    </div>
                  </div>
                  {/* Blog Sidebar */}
                  <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                    <StickyBox offsetTop={20} offsetBottom={20}>
                      {/* Verifications */}
                      <div className="pro-post widget-box about-widget">
                        <div className="row">
                          <div className="col-12">
                            <h4 className="pro-title">Verifications</h4>
                          </div>
                        </div>
                        <ul className="latest-posts pro-content">
                          <li className="border-bottom-0">
                            <span>
                              <i className="fas fa-check-circle text-success me-4 f-20" />
                            </span>
                            <span>
                              <b>Identity Verified</b>
                            </span>
                            <span className="float-end text-success">Verified</span>
                          </li>
                          <li className="border-bottom-0">
                            <span>
                              <i className="fas fa-check-circle text-success me-4 f-20" />
                            </span>
                            <span>
                              <b> Payment Verified</b>
                            </span>
                            <span className="float-end text-success">Verified</span>
                          </li>
                          <li className="border-bottom-0">
                            <span>
                              <i className="fas fa-check-circle text-success me-4 f-20" />
                            </span>
                            <span>
                              <b> Phone Verified</b>
                            </span>
                            <span className="float-end text-success">Verified</span>
                          </li>
                          <li className="border-bottom-0">
                            <span>
                              <i className="fas fa-times-circle text-danger me-4 f-20" />
                            </span>
                            <span>
                              <b>Email Verified</b>
                            </span>
                            <span className="float-end text-danger">Verify Now</span>
                          </li>
                        </ul>
                      </div>
                      {/* /Verifications */}
                      {/* Follow Widget */}
                      <div className="pro-post">
                        <div className="follow-widget">
                          <div className="text-end custom-edit-btn">
                            <Link
                              to="/freelancer-profile-settings"
                              className="sub-title"
                            >
                              <i className="fa fa-pencil-alt me-1" />
                            </Link>
                          </div>
                          <Link to="#" className="btn follow-btn">
                            + Follow
                          </Link>
                          <ul className="follow-posts pro-post">
                            <li>
                              <p>Following</p>
                              <h6>49</h6>
                            </li>
                            <li>
                              <p>Followers</p>
                              <h6>422</h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /Follow Widget */}
                      {/* Language Widget */}
                      <div className="pro-post widget-box language-widget">
                        <div className="row">
                          <div className="col-10">
                            <h4 className="pro-title mb-0">Language Skills</h4>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              to="/freelancer-profile-settings"
                              className="sub-title"
                            >
                              <i className="fa fa-pencil-alt me-1" />
                            </Link>
                          </div>
                        </div>
                        <ul className="latest-posts pro-content">
                          <li>
                            <p>English</p>
                            <div className="progress progress-md mb-0">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </li>
                          <li>
                            <p>Russian</p>
                            <div className="progress progress-md mb-0">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "65%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </li>
                          <li>
                            <p>German</p>
                            <div className="progress progress-md mb-0">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* /Language Widget */}
                      {/* About Widget */}
                      <div className="pro-post widget-box about-widget">
                        <div className="row">
                          <div className="col-10">
                            <h4 className="pro-title mb-0">ABOUT ME</h4>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              to="/freelancer-profile-settings"
                              className="sub-title"
                            >
                              <i className="fa fa-pencil-alt me-1" />
                            </Link>
                          </div>
                        </div>
                        <ul className="latest-posts pro-content pt-0">
                          <li>
                            <p>Gender</p>
                            <h6>Male</h6>
                          </li>
                          <li>
                            <p>Experience</p>
                            <h6>5 Years</h6>
                          </li>
                          <li>
                            <p>Location</p>
                            <h6>Istanbul/Turkey</h6>
                          </li>
                        </ul>
                      </div>
                      {/* /About Widget */}
                      {/* Categories */}
                      <div className="pro-post category-widget">
                        <div className="widget-title-box">
                          <div className="row">
                            <div className="col-10">
                              <h3 className="pro-title">SOCIAL LINKS</h3>
                            </div>
                            <div className="col-2 text-end">
                              <Link
                                to="/freelancer-profile-settings"
                                className="sub-title"
                              >
                                <i className="fa fa-pencil-alt me-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <ul className="latest-posts pro-content">
                          <li>
                            <Link to="#">http://www.facebook.com/john...</Link>
                          </li>
                          <li>
                            <Link to="#">http://www.Twitter.com/john...</Link>
                          </li>
                          <li>
                            <Link to="#">Http://www.googleplus.com/john... </Link>
                          </li>
                          <li>
                            <Link to="#"> Http://www.behance.com/john...</Link>
                          </li>
                          <li>
                            <Link to="#"> Http://www.pinterest.com/john...</Link>
                          </li>
                        </ul>
                      </div>
                      {/* /Categories */}
                      {/* LInk Widget */}
                      <div className="pro-post widget-box post-widget">
                        <div className="row">
                          <div className="col-10">
                            <h3 className="pro-title">Profile Link</h3>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              to="/freelancer-profile-settings"
                              className="sub-title"
                            >
                              <i className="fa fa-pencil-alt me-1" />
                            </Link>
                          </div>
                        </div>
                        <div className="pro-content">
                          <div className="form-group profile-group mb-0">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                              // defaultValue="https://www.XGEN Freelancing Platform.com/developer/daren/12454687"
                              />
                              <div className="input-group-append">
                                <button
                                  className="btn btn-success sub-btn" >
                                  <i className="fa fa-clone" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Link Widget */}
                      {/* Share Widget */}
                      <div className="pro-post widget-box post-widget">
                        <h3 className="pro-title">Share</h3>
                        <div className="pro-content">
                          <Link to="#" className="share-icon">
                            <i className="fas fa-share-alt" /> Share
                          </Link>
                        </div>
                      </div>
                      {/* /Share Widget */}
                    </StickyBox>
                  </div>
                  {/* /Blog Sidebar */}
                </div>
              </div>
            </div>
            {/* /Page Content */}
            <>
              {/* add skills Modal */}
              <div
                className="modal fade add-skills"
                id="add-skills"
                data-backdrop="static"
                tabIndex={-1}
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                      <img src={Logo_01} alt="" className="img-fluid mb-3" style={{ width: "72px", height: "8vh" }} />
                      <h3 className="modal-title text-center">
                        Select your skills and expertise
                      </h3>
                    </div>
                    <div className="modal-body profile-edit-form">
                      {/* <form> */}
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group profile-group mb-2">
                            <label>Select your skills and expertise</label>
                            <div className="input-group">
                              <input
                                value={skills}
                                type="text"
                                className="form-control"
                                placeholder="Search project"
                                onChange={(e) => { setSkills(e.target.value) }}
                              />
                              <div className="input-group-append">
                                <button
                                  onClick={addSkills}
                                  className="bg-none">
                                  {/* Add */}
                                  {/* <i className="bi bi-plus-circle-fill orange-text me-2"  ></i>
                                  <i className="fa fa-search orange-text me-2" /> */}
                                  <i className="fas fa-plus orange-text me-2"></i>
                                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                  </svg> */}
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* <hr className="hr-text" data-content="or" /> */}
                          {/* <div className="row">
                              <div className="col-md-4">
                                <div className="card">
                                  <div className="card-header bg-primary">
                                    <h4 className="card-title text-white">
                                      Select A Category
                                    </h4>
                                  </div>
                                  <div className="card-body p-0">
                                    <div
                                      className="nav flex-column nav-pills list-group scrollable"
                                      id="v-pills-tab"
                                      role="tablist"
                                      aria-orientation="vertical"
                                    >
                                      <Link
                                        className="nav-link list-group-item list-group-item-action active"
                                        id="v-pills-home-tab"
                                        data-bs-toggle="pill"
                                        to="#v-pills-home"
                                        role="tab"
                                        aria-controls="v-pills-home"
                                        aria-selected="true"
                                      >
                                        <i className="fa fa-circle f-7 me-2 text-primary" />
                                        <span>Writing &amp; Content</span>{" "}
                                        <span className="float-end">
                                          <i
                                            className="fa fa-caret-right"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </Link>
                                      <Link
                                        className="nav-link list-group-item list-group-item-action"
                                        id="v-pills-profile-tab"
                                        data-bs-toggle="pill"
                                        to="#v-pills-profile"
                                        role="tab"
                                        aria-controls="v-pills-profile"
                                        aria-selected="false"
                                      >
                                        <i className="fa fa-circle f-7 me-2 text-primary" />{" "}
                                        Design, Media &amp; Architecture
                                        <span className="float-end">
                                          <i
                                            className="fa fa-caret-right"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </Link>
                                      <Link
                                        className="nav-link list-group-item list-group-item-action"
                                        id="v-pills-messages-tab"
                                        data-bs-toggle="pill"
                                        to="#v-pills-messages"
                                        role="tab"
                                        aria-controls="v-pills-messages"
                                        aria-selected="false"
                                      >
                                        <i className="fa fa-circle f-7 me-2 text-primary" />{" "}
                                        Data Entry &amp; Admin
                                        <span className="float-end">
                                          <i
                                            className="fa fa-caret-right"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </Link>
                                      <Link
                                        className="nav-link list-group-item list-group-item-action"
                                        id="v-pills-settings-tab"
                                        data-bs-toggle="pill"
                                        to="#v-pills-settings"
                                        role="tab"
                                        aria-controls="v-pills-settings"
                                        aria-selected="false"
                                      >
                                        <i className="fa fa-circle f-7 me-2 text-primary" />{" "}
                                        Engineering &amp; Science
                                        <span className="float-end">
                                          <i
                                            className="fa fa-caret-right"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="card">
                                  <div className="card-header bg-primary">
                                    <h4 className="card-title text-white">
                                      Select Sub Category
                                    </h4>
                                  </div>
                                  <div className="card-body p-0 scrollable">
                                    <div
                                      className="tab-content p-0"
                                      id="v-pills-tabContent"
                                    >
                                      <div
                                        className="tab-pane fade show active  list-group"
                                        id="v-pills-home"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab"
                                      >
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />{" "}
                                          PHP
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          HTML
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          Software Architecture
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          JavaScript
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        className="tab-pane fade list-group"
                                        id="v-pills-profile"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-profile-tab"
                                      >
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />{" "}
                                          PHP
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          HTML
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          Software Architecture
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          JavaScript
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        className="tab-pane fade list-group"
                                        id="v-pills-messages"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-messages-tab"
                                      >
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />{" "}
                                          PHP
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          HTML
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          Software Architecture
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          JavaScript
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        className="tab-pane fade list-group"
                                        id="v-pills-settings"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-settings-tab"
                                      >
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />{" "}
                                          PHP
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          HTML
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          Software Architecture
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          JavaScript
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="card">
                                  <div className="card-header">
                                    <h4 className="card-title">
                                      1 out of 20 skills selected
                                    </h4>
                                  </div>
                                  <div className="card-body scrollable">
                                    <Link
                                      to="#"
                                      className="btn btn-outline-primary rounded-pill"
                                    >
                                      Primary
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          <div style={{ marginTop: '0.75rem', width: '100%', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {
                              skillsArray.map((skills, index) => {
                                return (
                                  <div key={index} style={{ display: 'flex', gap: "9px", background: '#14416B', borderRadius: '0.375rem', fontSize: '1.125rem' }}>
                                    <p style={{ color: 'white', fontSize: '0.875rem', marginLeft: '11px', paddingTop: '14px', paddingBottom: '0px', borderBottomLeftRadius: '0.375rem', borderBottomRightRadius: '0.375rem' }}>{skills}</p>
                                    <i className="fas fa-times white-text me-2" style={{ marginTop: "3px" }} onClick={() => deleteSkills(index)}></i>

                                  </div>
                                )
                              })
                            }
                          </div>

                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 text-end">
                          <Link
                            to="#"
                            className="btn btn-primary profile-update-btn"
                            data-bs-dismiss="modal"
                            onClick={updateSkills}
                          >
                            Update
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light profile-cancel-btn"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </Link>
                        </div>
                      </div>
                      {/* </form> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* /add skills Modal */}
            </>
          </>
      }

    </div>

  )
}
export default UserDetails;