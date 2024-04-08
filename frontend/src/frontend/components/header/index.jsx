import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Avatar_1,
  Logo_img,
  messagechat,
  notificationbell,
  avatar2,
  avatar3,
  avatar4,
  users,
  lock,
} from "../imagepath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faChevronDown,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import ErrorModal from "../../../admin/component/pages/CustomModal/ErrorsModal";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import { updateStatus } from '../../../redux/Slices/NavbarSlice';
import { updateFreelancerDetail } from "../../../redux/Slices/FreelancerDetailsSlice";
import { updateUserType } from "../../../redux/Slices/UserType";

const Header = (props) => {

  // get value from store
  const flag = useSelector(state => state.navbarState.status)
  const freelancerDetails = useSelector(state => state.freelancerDetails.data)
  const { name, profileImage } = freelancerDetails
  const dispatch = useDispatch()

  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenu1, setSideMenu1] = useState("");
  const [isSideMenu2, setSideMenu2] = useState("");

  const history = useHistory();

  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const toggleSidebar1 = (value) => {
    setSideMenu1(value);
  };
  const toggleSidebar2 = (value) => {
    setSideMenu2(value);
  };

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  // eslint-disable-next-line react/prop-types
  const pathname = props.location.pathname.split("/")[1];

  const location = useLocation();
  console.log(location.pathname, "location");

  // const exclusionArray = [
  //   "/onboard-screen",
  //   "/onboard-screen-employer"
  // ];

  // if (exclusionArray.indexOf(props.location.pathname) >= 0) {
  //   return "";
  // }
  // console.log(props.location, "location")

  //nav transparent

  // eslint-disable-next-line no-unused-vars
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  // const Reload = () => {
  //   window.location.reload(false);
  // };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  console.log(isSideMenu1)
  console.log(toggleSidebar1)
  console.log(isSideMenu2)
  console.log(toggleSidebar2)


  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);


  // ##############  API START ###########################
  const userType = useSelector(state => state.UserType.userType)
  // let [userType, setUsertype] = useState('')
  let token = localStorage.getItem('token')
  let [error, setError] = useState(false)
  let [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    profileImage: ''
  })
  function Logout() {
    // setUsertype('')
    dispatch(updateUserType(''))
    localStorage.removeItem('token')
    history.push('/')
  }
  const Authenticate = async () => {
    try {
      const request = await fetch(`http://localhost:4500/protected`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
      const response = await request.json()
      console.log(response)
      if (!request.ok) {
        setError(true)
      }
      // setUsertype(response?.userType || '')
      dispatch(updateUserType(response?.userType || ''))
      dispatch(updateFreelancerDetail(response || ''))
      // if(response?.userType === 'freelancer'){
      // }else{
      //   dispatch(updateCompanyDetails(response || ''))
      // }

      dispatch(updateStatus(false))
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  // ##############  API END ###########################



  // ##############  FUNCTION START ###########################
  function postProject() {
    if (!token) {
      history.push('/login')
    } else {
      history.push('/post-project')
    }
  }

  function postJob() {
    if (!token) {
      history.push('/login')
    } else {
      history.push('/postJob')
    }
  }

  // ##############  FUNCTION END ###########################



  // ##############  USE EFFECT START ###########################

  useEffect(() => {
    Authenticate()
  }, [flag])

  // ##############  USE EFFECT END ###########################


  // ##############  CONSOLE START ###########################

  console.log("this is user type", userType)

  // ##############  CONSOLE END ###########################



  // if (error) {
  //   return <ErrorModal message={'Something Went Wrong'} />
  // }

  return (
    <>
      {/* Header */}
      {/* eslint-disable-next-line react/prop-types */}
      {!location.pathname.includes("onboard-screen") &&
        !location.pathname.includes("onboard-screen-employer") &&
        !location.pathname.includes("/index-two") &&
        !location.pathname.includes("/index-three") &&
        !location.pathname.includes("/index-four") &&
        !location.pathname.includes("/index-five") && (
          <header className={`header ${navbar ? "sticky" : ""} `}>
            <div className="container">
              <nav className="navbar navbar-expand-lg header-nav">
                <div className="navbar-header">
                  <Link
                    id="mobile_btn"
                    to="#"
                    onClick={() => onHandleMobileMenu()}
                  >
                    <span className="bar-icon">
                      <span />
                      <span />
                      <span />
                    </span>
                  </Link>
                  <Link to="/" className="navbar-brand logo">
                    <img src={Logo_img} className="img-fluid" alt="Logo" />
                  </Link>
                </div>
                <div className="main-menu-wrapper">
                  <div className="menu-header">
                    <Link to="/" className="menu-logo">
                      <img src={Logo_img} className="img-fluid" alt="Logo" />
                    </Link>
                    <Link
                      id="menu_close"
                      className="menu-close"
                      to="#"
                      onClick={() => onhandleCloseMenu()}
                    >
                      <i>
                        <FontAwesomeIcon icon={faTimes} />
                      </i>
                    </Link>
                  </div>
                  <ul className="main-nav">
                    <li
                      className={` has-submenu ${location.pathname == "/" ||
                        pathname.includes("index-two") ||
                        pathname.includes("index-three") ||
                        pathname.includes("index-four") ||
                        pathname.includes("index-five")
                        ? "active"
                        : ""
                        }`}
                    // onClick={Reload}
                    >
                      <Link
                        to="/"
                        className={`hoverdrop ${isSideMenu === "home" ? "subdrop" : ""
                          }`}
                        onClick={() =>
                          toggleSidebar(isSideMenu === "home" ? "" : "home")
                        }
                        onMouseEnter={() => setSideMenu("home")}
                      >
                        Home{" "}
                        {/* <i>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </i> */}
                      </Link>
                      {/* {isSideMenu === "home" ? (
                        <ul
                          className="submenu"
                          style={{
                            display: isSideMenu === "home" ? "block" : "none",
                          }}
                        >
                          <li className="active">
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/index-two">Home 2</Link>
                          </li>
                          <li>
                            <Link to="/index-three">Home 3</Link>
                          </li>
                          <li>
                            <Link to="/index-four">Home 4</Link>
                          </li>
                          <li>
                            <Link to="/index-five">Home 5</Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )} */}
                    </li>

                    <li
                      className={`has-submenu ${pathname === "project" ||
                        pathname === "blank-page" ||
                        pathname === "404-page" ||
                        pathname === "user-account-details" ||
                        pathname === "login" ||
                        pathname === "register" ||
                        pathname === "forgot-password" ||
                        pathname === "change-password" ||
                        pathname === "freelancer-invoices" ||
                        pathname === "view-invoice" ||
                        location.pathname == "/change-passwords"
                        ? "active"
                        : ""
                        }`}
                    >

                      <Link
                        to="/project"
                        className={isSideMenu === "pages active" ? "subdrop" : ""}
                        onClick={() =>
                          toggleSidebar(isSideMenu === "pages" ? "" : "pages")
                        }
                        onMouseEnter={() => setSideMenu("pages")}
                      >
                        Projects
                        {/* <i>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </i> */}
                      </Link>
                      {/* {isSideMenu === "pages" ? (
                        <ul
                          className="submenu"
                          style={{
                            display: isSideMenu === "pages" ? "block" : "none",
                          }}
                        >
                          <li
                            className={pathname === "about" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/about">About us</Link>
                          </li>
                          <li
                            className={
                              pathname === "blank-page" ? "active" : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/blank-page">Starter Page</Link>
                          </li>
                          <li
                            className={pathname === "404-page" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/404-page">404 Page</Link>
                          </li>
                          <li
                            className={pathname === "login" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/login">Login</Link>
                          </li>
                          <li
                            className={pathname === "register" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/register">Register</Link>
                          </li>
                          <li
                            className={
                              pathname === "onboard-screen" ? "active" : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/onboard-screen">Onboard Screen</Link>
                          </li>
                          <li
                            className={
                              pathname === "forgot-password" ? "active" : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/forgot-password">Forgot Password</Link>
                          </li>
                          <li
                            className={
                              location.pathname == "/change-passwords"
                                ? "active"
                                : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/change-passwords">Change Password</Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )} */}
                    </li>
                    <li
                      className={`has-submenu ${pathname === "job" ||
                        pathname === "blog-grid" ||
                        pathname === "blog-details"
                        ? "active"
                        : ""
                        }`}
                    >
                      <Link
                        to="/job"
                        className={isSideMenu === "blog active" ? "subdrop" : ""}
                        onClick={() =>
                          toggleSidebar(isSideMenu === "blog" ? "" : "blog")
                        }
                        onMouseEnter={() => setSideMenu("blog")}
                      >
                        Jobs{" "}
                        {/* <i>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </i> */}
                      </Link>
                      {/* {isSideMenu === "blog" ? (
                        <ul
                          className="submenu"
                          style={{
                            display: isSideMenu === "blog" ? "block" : "none",
                          }}
                        >
                          <li
                            className={pathname === "blog-list" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/blog-list">Blog List</Link>
                          </li>
                          <li
                            className={pathname === "blog-grid" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/blog-grid">Blog Grid</Link>
                          </li>
                          <li
                            className={
                              pathname === "blog-details" ? "active" : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )} */}
                    </li>
                    {
                      userType === 'freelancer' && (
                        <li>
                          <Link to="/freelancer-dashboard"
                          //  target="_blank"
                          >Dashboard
                          </Link>
                        </li>
                      )
                    }
                    {
                      userType === 'company' && (
                        <li>
                          <Link to="/company-dashboard"
                          //  target="_blank"
                          >Dashboard
                          </Link>
                        </li>
                      )
                    }
                    {/* {
                      userType === '' && (
                        <li>
                          <Link to="/admin/login"
                          >
                            Admin
                          </Link>
                        </li>
                      )
                    } */}
                    {/* <li>
                      <Link to="/admin/login"
                      >
                        Admin
                      </Link>
                    </li> */}
                  </ul>
                </div>
                {
                  // pathname === "user-account-details" ||
                  pathname === "dashboard" ||
                    pathname === "manage-projects" ||
                    pathname === "pending-projects" ||
                    pathname === "ongoing-projects" ||
                    pathname === "completed-projects" ||
                    pathname === "cancelled-projects" ||
                    pathname === "favourites" ||
                    pathname === "invited-favourites" ||
                    pathname === "favourites-list" ||
                    pathname === "membership-plans" ||
                    pathname === "review" ||
                    pathname === "deposit-funds" ||
                    pathname === "profile-settings" ||
                    pathname === "change-password" ||
                    pathname === "delete-account" ||
                    pathname === "milestones" ||
                    pathname === "view-project-detail" ||
                    pathname === "tasks" ||
                    pathname === "files" ||
                    pathname === "project-payment" ||
                    pathname === "developer-details" ||
                    pathname === "developer" ? (
                    <ul className="nav header-navbar-rht">
                      <ul className="nav header-navbar-rht reg-head">
                        <li>
                          <Link to="/register" className="reg-btn">
                            <img src={users} className="me-1" alt="img" />
                            Register
                          </Link>
                        </li>
                        <li>
                          <Link to="/login" className="log-btn">
                            <img src={lock} className="me-1" alt="img" /> Login
                          </Link>
                        </li>
                        <li>
                          <Link to="/post-project" className="login-btn">
                            <i className="feather-plus me-1" />
                            Post a Projects{" "}
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  ) :

                    // Freelancer
                    // pathname === "freelancer-invoices" ||
                    //   pathname === "project" ||
                    //   pathname === "job" ||
                    //   pathname === "view-invoice" ||
                    //   pathname.includes("freelancer-") 
                    userType === 'freelancer'
                      ? (
                        <ul className="nav header-navbar-rht">
                          {/* <li>
                      <Link to="/freelancer-chats">
                        <img src={messagechat} alt="Img" />
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link data-bs-toggle="dropdown" to="javascript:void(0);">
                        <img src={notificationbell} alt="Img" />
                      </Link>
                      <div className="dropdown-menu notifications">
                        <div className="topnav-dropdown-header">
                          <div className="notification-title">
                            Notifications
                            <span className="msg-count-badge">2</span>
                          </div>
                          <Link
                            to="javascript:void(0)"
                            className="clear-noti d-flex align-items-center"
                          >
                            Mark all as read{" "}
                            <i className="fe fe-check-circle" />
                          </Link>
                        </div>
                        <div className="noti-content">
                          <ul className="notification-list">
                            <li className="notification-message">
                              <Link to="/freelancer-chats">
                                <div className="d-flex">
                                  <span className="avatar avatar-md active">
                                    <img
                                      className="avatar-img rounded-circle"
                                      alt="avatar-img"
                                      src={avatar2}
                                    />
                                  </span>
                                  <div className="media-body">
                                    <span className="noti-title">
                                      Edward Curr
                                    </span>
                                    <p className="noti-details">
                                      Notifications inform you when someone
                                      likes, reacts
                                    </p>
                                    <p className="noti-time">
                                      <span className="notification-time">
                                        Yesterday at 11:42 PM
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="notification-message">
                              <Link to="/freelancer-chats">
                                <div className="d-flex">
                                  <span className="avatar avatar-md active">
                                    <img
                                      className="avatar-img rounded-circle"
                                      alt="avatar-img"
                                      src={avatar4}
                                    />
                                  </span>
                                  <div className="media-body">
                                    <span className="noti-title">
                                      Maria Hill
                                    </span>
                                    <p className="noti-details">
                                      {" "}
                                      Notifications alert you to new messages in
                                      your XGEN Freelancing Platform inbox.
                                    </p>
                                    <div className="notification-btn">
                                      <span className="btn btn-primary">
                                        Accept
                                      </span>
                                      <span className="btn btn-outline-primary">
                                        Reject
                                      </span>
                                    </div>
                                    <p className="noti-time">
                                      <span className="notification-time">
                                        Today at 9:42 AM
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="notification-message">
                              <Link to="/freelancer-chats">
                                <div className="d-flex">
                                  <span className="avatar avatar-md">
                                    <img
                                      className="avatar-img rounded-circle"
                                      alt=""
                                      src={avatar2}
                                    />
                                  </span>
                                  <div className="media-body">
                                    <span className="noti-title">
                                      Maria Hill
                                    </span>
                                    <p className="noti-details">
                                      {" "}
                                      Notifications alert you to new messages in
                                      your XGEN Freelancing Platform inbox.
                                    </p>
                                    <p className="noti-time">
                                      <span className="notification-time">
                                        Yesterday at 5:42 PM
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="notification-message">
                              <Link to="/freelancer-chats">
                                <div className="d-flex">
                                  <span className="avatar avatar-md">
                                    <img
                                      className="avatar-img rounded-circle"
                                      alt="avatar-img"
                                      src={avatar3}
                                    />
                                  </span>
                                  <div className="media-body">
                                    <span className="noti-title">
                                      Edward Curr
                                    </span>
                                    <p className="noti-details">
                                      Notifications inform you when someone
                                      likes, reacts
                                    </p>
                                    <p className="noti-time">
                                      <span className="notification-time">
                                        Last Wednesday at 11:15 AM
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="topnav-dropdown-footer text-center">
                          <Link to="/freelancer-chats">
                            View All Notification
                          </Link>
                        </div>
                      </div>
                    </li> */}
                          {/* <li className={pathname === "post-project" ? "active" : ""}>
                        <Link to="/post-project" className="login-btn">
                          Post a Projects{" "}
                        </Link>
                      </li> */}
                          <li className="nav-item dropdown has-arrow account-item">
                            <Link
                              to="#"
                              className="dropdown-toggle nav-link"
                              data-bs-toggle="dropdown"
                            >
                              <span className="user-img">
                                <img src={profileImage} alt="" />
                              </span>
                              <span>{name}</span>
                            </Link>
                            <div className="dropdown-menu emp">
                              <div className="drop-head">Account Details</div>
                              <Link
                                className="dropdown-item"
                                to="/user-account-details"
                              >
                                <i className="material-icons">verified_user</i> View
                                profile
                              </Link>
                              {/* <div className="drop-head">Projects Settings</div>
                              <Link className="dropdown-item" to="/manage-projects">
                                <i className="material-icons">business_center</i>{" "}
                                Projects
                              </Link>
                              <Link className="dropdown-item" to="/favourites">
                                <i className="material-icons">local_play</i>{" "}
                                Favourites
                              </Link>
                              <Link className="dropdown-item" to="/review">
                                <i className="material-icons">pie_chart</i> Reviews
                              </Link>
                              <div className="drop-head">Account Details</div>
                              <Link className="dropdown-item" to="/profile-settings">
                                {" "}
                                <i className="material-icons">settings</i> Profile
                                Settings
                              </Link> */}
                              <div className="dropdown-item"  onClick={Logout}>
                                <i className="material-icons">power_settings_new</i>{" "}
                                Logout
                              </div>
                            </div>
                          </li>
                        </ul>
                      ) :
                      // pathname === "chats" ||
                      //   pathname === "verify-identity" ||
                      //   pathname === "post-project" 
                      userType === "company" ?
                        (
                          <ul className="nav header-navbar-rht">
                            <li className="nav-item dropdown has-arrow account-item">
                              <Link
                                to="#"
                                className="dropdown-toggle nav-link"
                                data-bs-toggle="dropdown"
                              >
                                <span>MY ACCOUNT</span>
                              </Link>
                              <div className="dropdown-menu emp">
                                <div className="drop-head">Account Details</div>
                                <Link
                                  className="dropdown-item"
                                  to="/user-account-details"
                                >
                                  <i className="material-icons">verified_user</i> View
                                  profile
                                </Link>
                                {/* <div className="drop-head">Projects Settings</div>
                                <Link className="dropdown-item" to="/manage-projects">
                                  <i className="material-icons">business_center</i>{" "}
                                  Projects
                                </Link>
                                <Link className="dropdown-item" to="/favourites">
                                  <i className="material-icons">local_play</i>{" "}
                                  Favourites
                                </Link>
                                <Link className="dropdown-item" to="/review">
                                  <i className="material-icons">pie_chart</i> Reviews
                                </Link>
                                <div className="drop-head">Account Details</div>
                                <Link className="dropdown-item" to="/profile-settings">
                                  {" "}
                                  <i className="material-icons">settings</i> Profile
                                  Settings
                                </Link> */}
                                <div className="dropdown-item" onClick={Logout}>
                                  <i className="material-icons">power_settings_new</i>{" "}
                                  Logout
                                </div>
                              </div>
                            </li>
                            <li>
                              <Link to="/post-project" className="login-btn"
                              // onClick={postProject}
                              >
                                Post a Project{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to="/post-job" className="login-btn">
                                Post a Job{" "}
                              </Link>
                            </li>
                          </ul>
                        )

                        : (
                          <ul className="nav header-navbar-rht reg-head">
                            <li className="nav-item dropdown account-item">
                              <Link
                                to="javascript:void(0);"
                                className="dropdown-toggle nav-link"
                                data-bs-toggle="dropdown"
                              ></Link>
                              <div className="dropdown-menu emp">
                                <div className="drop-head">Account Details</div>
                                <Link
                                  className="dropdown-item"
                                  to="/freelancer-profile"
                                >
                                  <i className="material-icons">verified_user</i> View
                                  profile
                                </Link>
                                <div className="drop-head">Projects Settings</div>
                                <Link
                                  className="dropdown-item"
                                  to="/freelancer-project-proposals"
                                >
                                  <i className="material-icons">business_center</i>{" "}
                                  Projects
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/freelancer-bookmarks"
                                >
                                  <i className="material-icons">local_play</i> Bookmarks
                                </Link>
                                <Link className="dropdown-item" to="/freelancer-review">
                                  <i className="material-icons">pie_chart</i> Reviews
                                </Link>
                                <div className="drop-head">Financial Settings</div>
                                <Link className="dropdown-item bal" to="#">
                                  Balance <span className="amt">₹0.00 INR</span>
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/freelancer-withdraw-money"
                                >
                                  <i className="material-icons">wifi_tethering</i>{" "}
                                  Withdraw funds
                                </Link>
                                <div className="drop-head">Account Details</div>
                                <Link
                                  className="dropdown-item"
                                  to="/freelancer-profile-settings"
                                >
                                  {" "}
                                  <i className="material-icons">settings</i> Profile
                                  Settings
                                </Link>
                                <Link className="dropdown-item" to="/index">
                                  <i className="material-icons">power_settings_new</i>{" "}
                                  Logout
                                </Link>
                              </div>
                            </li>
                            <ul className="nav header-navbar-rht reg-head">
                              <li>
                                <Link to="/register" className="reg-btn">
                                  <img src={users} className="me-1" alt="img" />
                                  Register
                                </Link>
                              </li>
                              <li>
                                <Link to="/login" className="log-btn">
                                  <img src={lock} className="me-1" alt="img" /> Login
                                </Link>
                              </li>
                              {
                                (userType === 'company' || userType === "") && (
                                  <>
                                    <li>
                                      <div
                                        // to="/post-project"
                                        className="login-btn"
                                        onClick={postProject}
                                      >
                                        <i className="feather-plus me-1" />
                                        Post a Projects{" "}
                                      </div>
                                    </li>
                                    <li>
                                      <div
                                        onClick={postJob}
                                        className="login-btn">
                                        <i className="feather-plus me-1" />
                                        Post a Job{" "}
                                      </div>
                                    </li>
                                  </>
                                )
                              }


                            </ul>
                          </ul>
                        )
                }
              </nav>
            </div>
          </header>
        )}
      {/* /Header */}
    </>
  );
};

export default Header;

// Header.propTypes = {
//   userType: PropTypes.string,
//   setUsertype: PropTypes.string
// };