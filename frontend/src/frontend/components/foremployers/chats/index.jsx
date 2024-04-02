import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Owlcarousel from "react-owl-carousel";
import "boxicons/css/boxicons.css";
import "boxicons/css/boxicons.min.css";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

import {
  AvatarImg_02,
  AvatarImg_10,
  AvatarImg_14,
  AvatarImg_15,
  AvatarImg_01,
  AvatarImg_03,
  AvatarImg_04,
  AvatarImg_05,
  AvatarImg_06,
  AvatarImg_07,
  AvatarImg_08,
  AvatarImg_09,
  Play_01,
  award,
  emoj_icon_01,
  emoj_icon_02,
  emoj_icon_03,
  emoj_icon_04,
  emoj_icon_05,
  heart,
  like,
  media_01,
  media_02,
  media_03,
  media_04,
  media_05,
  media_link_01,
  media_link_02,
  voice,
  AvatarImg_13,
} from "../../imagepath";
import "../../../assets/css/chat.css";
import Scrollbars from "react-custom-scrollbars-2";
import FsLightbox from "fslightbox-react";

const Chats = () => {
  const [addClass, setAddClass] = useState(false);
  const [isShow, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [toggler, setToggler] = useState(false);

  const handleAddClass = () => {
    setAddClass(true);
  };

  const handleRemoveClass = () => {
    setAddClass(false);
  };

  const handleShowClass = () => {
    setShow(true);
  };

  const handleShowremoveClass = () => {
    setShow(false);
  };

  const handleAddVisible = () => {
    setIsVisible(true);
  };

  const handleRemoveVisible = () => {
    setIsVisible(false);
  };

  const galleryItems = [
    { original: media_01 },
    { original: media_02 },
    { original: media_03 },
    { original: media_04 },
  ];

  const galleryImages = [
    { original: media_01 },
    { original: media_02 },
    { original: media_03 },
    { original: media_04 },
    { original: media_05 },
  ];

  emoj_icon_01;

  const options = {
    items: 5,
    // margin: 30,
    dots: false,
    nav: false,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      150: {
        items: 2,
      },
      300: {
        items: 3,
      },
      450: {
        items: 4,
      },
      600: {
        items: 5,
      },
      750: {
        items: 5,
      },
    },
  };

  useEffect(() => {
    document.body.className = "chat-page main-chat-blk dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      <div className="chat-page-wrapper">
        <div className="container">
          <div className="chat-contents">
            <div className="sidebar-group left-sidebar chat_sidebar">
              {/* Chats sidebar */}
              <div
                id="chats"
                className="left-sidebar-wrap sidebar active slimscroll"
              >
                <div className="slimscroll">
                  <Scrollbars>
                    <div className="left-chat-title all-chats d-flex justify-content-between align-items-center">
                      <div className="select-group-chat">
                        <div className="dropdown">
                          <Link to="#">All Chats</Link>
                        </div>
                      </div>
                      <div className="add-section">
                        <ul>
                          <li>
                            <Link
                              to="#"
                              className="user-chat-search-btn"
                              onClick={handleAddClass}
                            >
                              <i className="bx bx-search" />
                            </Link>
                          </li>
                          <li>
                            <div className="chat-action-btns">
                              <div className="chat-action-col">
                                <Link
                                  className="#"
                                  to="#"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="bx bx-dots-vertical-rounded" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link
                                    to="#"
                                    className="dropdown-item "
                                    data-bs-toggle="modal"
                                    data-bs-target="#new-chat"
                                  >
                                    <span>
                                      <i className="bx bx-message-rounded-add" />
                                    </span>
                                    New Chat{" "}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#new-group"
                                  >
                                    <span>
                                      <i className="bx bx-user-circle" />
                                    </span>
                                    Create Group
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#invite-other"
                                  >
                                    <span>
                                      <i className="bx bx-user-plus" />
                                    </span>
                                    Invite Others
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        {/* Chat Search */}
                        <div
                          className={
                            addClass
                              ? "user-chat-search visible-chat"
                              : "user-chat-search"
                          }
                        >
                          <form>
                            <span className="form-control-feedback">
                              <i className="bx bx-search" />
                            </span>
                            <input
                              type="text"
                              name="chat-search"
                              placeholder="Search"
                              className="form-control"
                            />
                            <div className="user-close-btn-chat">
                              <span
                                className="material-icons"
                                onClick={handleRemoveClass}
                              >
                                close
                              </span>
                            </div>
                          </form>
                        </div>
                        {/* /Chat Search */}
                      </div>
                    </div>
                    {/* /Left Chat Title */}
                    {/* Top Online Contacts */}
                    <div className="top-online-contacts">
                      <div className="fav-title">
                        <h6>Online Now</h6>
                      </div>
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          <Owlcarousel
                            className="owl-theme testimonial-slider aos"
                            {...options}
                          >
                            <div className="swiper-slide">
                              <div className="top-contacts-box">
                                <div className="profile-img online">
                                  <Link to="/chats">
                                    <img src={AvatarImg_02} alt="Image" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="top-contacts-box">
                                <div className="profile-img online">
                                  <Link to="/chats">
                                    <img src={AvatarImg_01} alt="Image" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="top-contacts-box">
                                <div className="profile-img online">
                                  <Link to="/chats">
                                    <img src={AvatarImg_07} alt="Image" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="top-contacts-box">
                                <div className="profile-img online">
                                  <Link to="/chats">
                                    <img src={AvatarImg_05} alt="Image" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="top-contacts-box">
                                <div className="profile-img online">
                                  <Link to="/chats">
                                    <img src={AvatarImg_03} alt="Image" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="top-contacts-box">
                                <div className="profile-img online">
                                  <Link to="/chats">
                                    <img src={AvatarImg_02} alt="Image" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Owlcarousel>
                        </div>
                      </div>
                    </div>
                    {/* /Top Online Contacts */}
                    <div className="sidebar-body chat-body" id="chatsidebar">
                      {/* Left Chat Title */}
                      <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                        <div className="fav-title pin-chat">
                          <h6>
                            <i className="bx bx-pin me-1" />
                            Pinned Chat
                          </h6>
                        </div>
                      </div>
                      {/* /Left Chat Title */}
                      <ul className="user-list space-chat">
                        <li className="user-list-item chat-user-list">
                          <Link to="#" className="status-active">
                            <div className="avatar avatar-online">
                              <img
                                src={AvatarImg_02}
                                className="rounded-circle"
                                alt="image"
                              />
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Mark Villiams</h5>
                                <p>Have you called them?</p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">10:20 PM</small>
                                <div className="chat-pin">
                                  <i className="bx bx-pin me-2" />
                                  <i className="bx bx-check-double" />
                                </div>
                              </div>
                            </div>
                          </Link>
                          <div className="chat-hover ms-1">
                            <div className="chat-action-col">
                              <span
                                className="d-flex"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </span>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <span className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-archive-in" />
                                  </span>
                                  Archive Chat{" "}
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mute-notification"
                                >
                                  <span>
                                    <i className="bx bx-volume-mute" />
                                  </span>
                                  Mute Notification
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#change-chat"
                                >
                                  <span>
                                    <i className="bx bx-log-out" />
                                  </span>
                                  Delete Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-pin" />
                                  </span>
                                  Unpin Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-check-square" />
                                  </span>
                                  Mark as Unread
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="user-list-item chat-user-list">
                          <Link to="#">
                            <div>
                              <div className="avatar ">
                                <img
                                  src={AvatarImg_13}
                                  className="rounded-circle"
                                  alt="image"
                                />
                              </div>
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Elizabeth Sosa</h5>
                                <p>
                                  <span className="animate-typing-col">
                                    Typing
                                    <span className="dot" />
                                    <span className="dot" />
                                    <span className="dot" />
                                  </span>
                                </p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">Yesterday</small>
                                <div className="chat-pin">
                                  <i className="bx bx-pin me-2" />
                                </div>
                              </div>
                            </div>
                          </Link>
                          <div className="chat-hover">
                            <div className="chat-action-col">
                              <span
                                className="d-flex"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </span>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <span className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-archive-in" />
                                  </span>
                                  Archive Chat{" "}
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mute-notification"
                                >
                                  <span>
                                    <i className="bx bx-volume-mute" />
                                  </span>
                                  Mute Notification
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#change-chat"
                                >
                                  <span>
                                    <i className="bx bx-log-out" />
                                  </span>
                                  Delete Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-pin" />
                                  </span>
                                  Unpin Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-check-square" />
                                  </span>
                                  Mark as Unread
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="user-list-item chat-user-list">
                          <Link to="#">
                            <div className="avatar avatar-online">
                              <img
                                src={AvatarImg_05}
                                className="rounded-circle"
                                alt="image"
                              />
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Michael Howard</h5>
                                <p>Thank you</p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">10:20 PM</small>
                                <div className="chat-pin">
                                  <i className="bx bx-pin me-2" />
                                  <i className="bx bx-check-double check" />
                                </div>
                              </div>
                            </div>
                          </Link>
                          <div className="chat-hover ms-1">
                            <div className="chat-action-col">
                              <span
                                className="d-flex"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </span>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <span className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-archive-in" />
                                  </span>
                                  Archive Chat{" "}
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mute-notification"
                                >
                                  <span>
                                    <i className="bx bx-volume-mute" />
                                  </span>
                                  Mute Notification
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#change-chat"
                                >
                                  <span>
                                    <i className="bx bx-log-out" />
                                  </span>
                                  Delete Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-pin" />
                                  </span>
                                  Unpin Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-check-square" />
                                  </span>
                                  Mark as Unread
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      {/* Left Chat Title */}
                      <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                        <div className="fav-title pin-chat">
                          <h6>
                            <i className="bx bx-message-square-dots me-1" />
                            Recent Chat
                          </h6>
                        </div>
                      </div>
                      {/* /Left Chat Title */}
                      <ul className="user-list">
                        <li className="user-list-item chat-user-list">
                          <Link to="#">
                            <div className="avatar avatar-online">
                              <img
                                src={AvatarImg_01}
                                className="rounded-circle"
                                alt="image"
                              />
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Horace Keene</h5>
                                <p>Have you called them?</p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">Just Now</small>
                                <div className="chat-pin">
                                  <span className="count-message">5</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                          <div className="chat-hover ms-1">
                            <div className="chat-action-col">
                              <span
                                className="d-flex"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </span>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <span className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-archive-in" />
                                  </span>
                                  Archive Chat{" "}
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mute-notification"
                                >
                                  <span>
                                    <i className="bx bx-volume-mute" />
                                  </span>
                                  Mute Notification
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#change-chat"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-pin" />
                                  </span>
                                  Pin Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-check-square" />
                                  </span>
                                  Mark as Read
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#block-user"
                                >
                                  <span>
                                    <i className="bx bx-block" />
                                  </span>
                                  Block
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="user-list-item chat-user-list">
                          <Link to="#">
                            <div>
                              <div className="avatar avatar-online">
                                <img
                                  src={AvatarImg_03}
                                  className="rounded-circle"
                                  alt="image"
                                />
                              </div>
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Hollis Tran</h5>
                                <p>
                                  <i className="bx bx-video me-1" />
                                  Video
                                </p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">Yesterday</small>
                                <div className="chat-pin">
                                  <i className="bx bx-check" />
                                </div>
                              </div>
                            </div>
                          </Link>
                          <div className="chat-hover ms-1">
                            <div className="chat-action-col">
                              <span
                                className="d-flex"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </span>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <span className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-archive-in" />
                                  </span>
                                  Archive Chat{" "}
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mute-notification"
                                >
                                  <span>
                                    <i className="bx bx-volume-mute" />
                                  </span>
                                  Mute Notification
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#change-chat"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-pin" />
                                  </span>
                                  Pin Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-check-square" />
                                  </span>
                                  Mark as Unread
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#block-user"
                                >
                                  <span>
                                    <i className="bx bx-block" />
                                  </span>
                                  Block
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="user-list-item chat-user-list">
                          <Link to="#">
                            <div className="avatar">
                              <img
                                src={AvatarImg_04}
                                className="rounded-circle"
                                alt="image"
                              />
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>James Albert</h5>
                                <p>
                                  <i className="bx bx-file me-1" />
                                  Project Tools.doc
                                </p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">10:20 PM</small>
                              </div>
                            </div>
                          </Link>
                          <div className="chat-hover ms-1">
                            <div className="chat-action-col">
                              <span
                                className="d-flex"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </span>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <span className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-archive-in" />
                                  </span>
                                  Archive Chat{" "}
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mute-notification"
                                >
                                  <span>
                                    <i className="bx bx-volume-mute" />
                                  </span>
                                  Mute Notification
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#change-chat"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-pin" />
                                  </span>
                                  Pin Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-check-square" />
                                  </span>
                                  Mark as Unread
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#block-user"
                                >
                                  <span>
                                    <i className="bx bx-block" />
                                  </span>
                                  Block
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="user-list-item chat-user-list">
                          <Link to="#">
                            <div>
                              <div className="avatar avatar-online">
                                <img
                                  src={AvatarImg_09}
                                  className="rounded-circle"
                                  alt="image"
                                />
                              </div>
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Debra Jones</h5>
                                <p>
                                  <i className="bx bx-microphone me-1" />
                                  Audio
                                </p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">12:30 PM</small>
                                <div className="chat-pin">
                                  <i className="bx bx-check-double check" />
                                </div>
                              </div>
                            </div>
                          </Link>
                          <div className="chat-hover ms-1">
                            <div className="chat-action-col">
                              <span
                                className="d-flex"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </span>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <span className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-archive-in" />
                                  </span>
                                  Archive Chat{" "}
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mute-notification"
                                >
                                  <span>
                                    <i className="bx bx-volume-mute" />
                                  </span>
                                  Mute Notification
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#change-chat"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-pin" />
                                  </span>
                                  Pin Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-check-square" />
                                  </span>
                                  Mark as Unread
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#block-user"
                                >
                                  <span>
                                    <i className="bx bx-block" />
                                  </span>
                                  Block
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="user-list-item chat-user-list">
                          <Link to="#">
                            <div>
                              <div className="avatar ">
                                <img
                                  src={AvatarImg_07}
                                  className="rounded-circle"
                                  alt="image"
                                />
                              </div>
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Dina Brown</h5>
                                <p>Have you called them?</p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">Yesterday</small>
                                <div className="chat-pin">
                                  <i className="bx bx-microphone-off" />
                                </div>
                              </div>
                            </div>
                          </Link>
                          <div className="chat-hover ms-1">
                            <div className="chat-action-col">
                              <span
                                className="d-flex"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </span>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <span className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-archive-in" />
                                  </span>
                                  Archive Chat{" "}
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mute-notification"
                                >
                                  <span>
                                    <i className="bx bx-volume-mute" />
                                  </span>
                                  Mute Notification
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#change-chat"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-pin" />
                                  </span>
                                  Pin Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-check-square" />
                                  </span>
                                  Mark as Unread
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#block-user"
                                >
                                  <span>
                                    <i className="bx bx-block" />
                                  </span>
                                  Block
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="user-list-item chat-user-list">
                          <Link to="#">
                            <div>
                              <div className="avatar avatar-online">
                                <img
                                  src={AvatarImg_08}
                                  className="rounded-circle"
                                  alt="image"
                                />
                              </div>
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Judy Mercer</h5>
                                <p className="missed-call-col">
                                  <i className="bx bx-phone-incoming me-1" />
                                  Missed Call
                                </p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">25/July/23</small>
                              </div>
                            </div>
                          </Link>
                          <div className="chat-hover ms-1">
                            <div className="chat-action-col">
                              <span
                                className="d-flex"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </span>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <span className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-archive-in" />
                                  </span>
                                  Archive Chat{" "}
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mute-notification"
                                >
                                  <span>
                                    <i className="bx bx-volume-mute" />
                                  </span>
                                  Mute Notification
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#change-chat"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-pin" />
                                  </span>
                                  Pin Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-check-square" />
                                  </span>
                                  Mark as Unread
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#block-user"
                                >
                                  <span>
                                    <i className="bx bx-block" />
                                  </span>
                                  Block
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="user-list-item chat-user-list">
                          <Link to="#">
                            <div>
                              <div className="avatar">
                                <img
                                  src={AvatarImg_05}
                                  className="rounded-circle"
                                  alt="image"
                                />
                              </div>
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Richard Ohare</h5>
                                <p>
                                  <i className="bx bx-image-alt me-1" />
                                  Photo
                                </p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">27/July/23</small>
                                <div className="chat-pin">
                                  <i className="bx bx-check-double" />
                                </div>
                              </div>
                            </div>
                          </Link>
                          <div className="chat-hover ms-1">
                            <div className="chat-action-col">
                              <span
                                className="d-flex"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </span>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <span className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-archive-in" />
                                  </span>
                                  Archive Chat{" "}
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mute-notification"
                                >
                                  <span>
                                    <i className="bx bx-volume-mute" />
                                  </span>
                                  Mute Notification
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#change-chat"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-pin" />
                                  </span>
                                  Pin Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-check-square" />
                                  </span>
                                  Mark as Unread
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#block-user"
                                >
                                  <span>
                                    <i className="bx bx-block" />
                                  </span>
                                  Block
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="user-list-item chat-user-list">
                          <Link to="#">
                            <div>
                              <div className="avatar avatar-online">
                                <img
                                  src={AvatarImg_06}
                                  className="rounded-circle"
                                  alt="image"
                                />
                              </div>
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Charles Sellars</h5>
                                <p>Have you called them?</p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">10:20 PM</small>
                              </div>
                            </div>
                          </Link>
                          <div className="chat-hover ms-1">
                            <div className="chat-action-col">
                              <span
                                className="d-flex"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </span>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <span className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-archive-in" />
                                  </span>
                                  Archive Chat{" "}
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mute-notification"
                                >
                                  <span>
                                    <i className="bx bx-volume-mute" />
                                  </span>
                                  Mute Notification
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#change-chat"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-pin" />
                                  </span>
                                  Pin Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-check-square" />
                                  </span>
                                  Mark as Unread
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#block-user"
                                >
                                  <span>
                                    <i className="bx bx-block" />
                                  </span>
                                  Block
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Scrollbars>
                </div>
              </div>
              {/* / Chats sidebar */}
            </div>
            {/* Content */}

            {/* Chat */}
            <div className="chat chat-messages" id="middle">
              <div>
                <div className="chat-header">
                  <div className="user-details">
                    <div className="d-lg-none">
                      <ul className="list-inline mt-2 me-2">
                        <li className="list-inline-item">
                          <Link
                            className="text-muted px-0 left_sides"
                            to="#"
                            data-chat="open"
                          >
                            <i className="fas fa-arrow-left" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <figure className="avatar ms-1">
                      <img
                        src={AvatarImg_02}
                        className="rounded-circle"
                        alt="image"
                      />
                    </figure>
                    <div className="mt-1">
                      <h5>Mark Villiams</h5>
                      <small className="last-seen">Last Seen at 07:15 PM</small>
                    </div>
                  </div>
                  <div className="chat-options ">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link
                          to="#"
                          className="btn btn-outline-light chat-search-btn"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Search"
                          onClick={handleShowClass}
                        >
                          <i className="bx bx-search" />
                        </Link>
                      </li>
                      <li
                        className="list-inline-item"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Video Call"
                      >
                        <Link
                          to="#"
                          className="btn btn-outline-light"
                          data-bs-toggle="modal"
                          data-bs-target="#video_call"
                        >
                          <i className="bx bx-video" />
                        </Link>
                      </li>
                      <li
                        className="list-inline-item"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Voice Call"
                      >
                        <Link
                          to="#"
                          className="btn btn-outline-light"
                          data-bs-toggle="modal"
                          data-bs-target="#voice_call"
                        >
                          <i className="bx bx-phone" />
                        </Link>
                      </li>
                      <li className="list-inline-item dream_profile_menu">
                        <Link
                          to="#"
                          className="btn btn-outline-light not-chat-user"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Contact Info"
                          onClick={handleAddVisible}
                        >
                          <i className="bx bx-info-circle" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          className="btn btn-outline-light no-bg"
                          to="#"
                          data-bs-toggle="dropdown"
                        >
                          <i className="bx bx-dots-vertical-rounded" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link to="/index" className="dropdown-item ">
                            <span>
                              <i className="bx bx-x" />
                            </span>
                            Close Chat{" "}
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#mute-notification"
                          >
                            <span>
                              <i className="bx bx-volume-mute" />
                            </span>
                            Mute Notification
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#disappearing-messages"
                          >
                            <span>
                              <i className="bx bx-time-five" />
                            </span>
                            Disappearing Message
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#clear-chat"
                          >
                            <span>
                              <i className="bx bx-brush-alt" />
                            </span>
                            Clear Message
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#change-chat"
                          >
                            <span>
                              <i className="bx bx-trash" />
                            </span>
                            Delete Chat
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#report-user"
                          >
                            <span>
                              <i className="bx bx-dislike" />
                            </span>
                            Report
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#block-user"
                          >
                            <span>
                              <i className="bx bx-block" />
                            </span>
                            Block
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Chat Search */}
                  <div
                    className={
                      isShow ? "chat-search visible-chat" : "chat-search"
                    }
                  >
                    <form>
                      <span className="form-control-feedback">
                        <i className="bx bx-search" />
                      </span>
                      <input
                        type="text"
                        name="chat-search"
                        placeholder="Search Chats"
                        className="form-control"
                      />
                      <div className="close-btn-chat">
                        <span
                          className="material-icons"
                          onClick={handleShowremoveClass}
                        >
                          close
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /Chat Search */}
                </div>
                <div className="chat-body chat-page-group slimscroll">
                  <div className="messages">
                    <div className="chats">
                      <div className="chat-avatar">
                        <img
                          src={AvatarImg_02}
                          className="rounded-circle dreams_chat"
                          alt="image"
                        />
                      </div>
                      <div className="chat-content">
                        <div className="chat-profile-name">
                          <h6>
                            Mark Villiams<span>8:16 PM</span>
                            <span className="check-star msg-star d-none">
                              <i className="bx bxs-star" />
                            </span>
                          </h6>
                          <div className="chat-action-btns ms-2">
                            <div className="chat-action-col">
                              <Link
                                className="#"
                                to="#"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </Link>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item message-info-left"
                                >
                                  <span>
                                    <i className="bx bx-info-circle" />
                                  </span>
                                  Message Info{" "}
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item reply-button"
                                >
                                  <span>
                                    <i className="bx bx-share" />
                                  </span>
                                  Reply
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <i className="bx bx-smile" />
                                  </span>
                                  React
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#forward-message"
                                >
                                  <span>
                                    <i className="bx bx-reply" />
                                  </span>
                                  Forward
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item click-star"
                                >
                                  <span>
                                    <i className="bx bx-star" />
                                  </span>
                                  <span className="star-msg">Star Message</span>
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#report-user"
                                >
                                  <span>
                                    <i className="bx bx-dislike" />
                                  </span>
                                  Report
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-message"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="message-content">
                          Hello <Link to="#">@Alex</Link> Thank you for the
                          beautiful web design ahead schedule.
                          <div className="emoj-group">
                            <ul>
                              <li className="emoj-action">
                                <Link to="#">
                                  <i className="bx bx-smile" />
                                </Link>
                                <div className="emoj-group-list">
                                  <ul>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_01} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_02} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_03} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_04} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_05} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li className="add-emoj">
                                      <Link to="#">
                                        <i className="feather-plus" />
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#forward-message"
                                >
                                  <i className="bx bx-share" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-line">
                      <span className="chat-date">Today, July 24</span>
                    </div>
                    <div className="chats chats-right">
                      <div className="chat-content">
                        <div className="chat-profile-name text-end">
                          <h6>
                            <i className="bx bx-check-double me-1 inactive-check" />
                            Alex Smith<span>8:16 PM</span>
                            <span className="check-star msg-star-one d-none">
                              <i className="bx bxs-star" />
                            </span>
                          </h6>
                          <div className="chat-action-btns ms-2">
                            <div className="chat-action-col">
                              <Link
                                className="#"
                                to="#"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </Link>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item message-info-left"
                                >
                                  <span>
                                    <i className="bx bx-info-circle" />
                                  </span>
                                  Message Info{" "}
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item reply-button"
                                >
                                  <span>
                                    <i className="bx bx-share" />
                                  </span>
                                  Reply
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <i className="bx bx-smile" />
                                  </span>
                                  React
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#forward-message"
                                >
                                  <span>
                                    <i className="bx bx-reply" />
                                  </span>
                                  Forward
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item click-star-one"
                                >
                                  <span>
                                    <i className="bx bx-star" />
                                  </span>
                                  <span className="star-msg-one">
                                    Star Message
                                  </span>
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-message"
                                >
                                  <span>
                                    <i className="bx bx-edit-alt" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-message"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="message-content ">
                          <div className="emoj-group rig-emoji-group">
                            <ul>
                              <li className="emoj-action">
                                <Link to="#">
                                  <i className="bx bx-smile" />
                                </Link>
                                <div className="emoj-group-list">
                                  <ul>
                                    {galleryImages.map((item, index) => (
                                      <li key={index}>
                                        <Link to="#">
                                          <SlideshowLightbox>
                                            <img
                                              src={item.original}
                                              alt="Icon"
                                            />
                                          </SlideshowLightbox>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#forward-message"
                                >
                                  <i className="bx bx-share" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="chat-voice-group">
                            <ul>
                              <li>
                                <Link to="#">
                                  <span>
                                    <img src={Play_01} alt="image" />
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <img src={voice} alt="image" />
                              </li>
                              <li>0:05</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="chat-avatar">
                        <img
                          src={AvatarImg_10}
                          className="rounded-circle dreams_chat"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="chats">
                      <div className="chat-avatar">
                        <img
                          src={AvatarImg_02}
                          className="rounded-circle dreams_chat"
                          alt="image"
                        />
                      </div>
                      <div className="chat-content">
                        <div className="chat-profile-name">
                          <h6>
                            Mark Villiams<span>8:16 PM</span>
                            <span className="check-star msg-star-three d-none">
                              <i className="bx bxs-star" />
                            </span>
                          </h6>
                          <div className="chat-action-btns ms-2">
                            <div className="chat-action-col">
                              <Link
                                className="#"
                                to="#"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </Link>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item message-info-left"
                                >
                                  <span>
                                    <i className="bx bx-info-circle" />
                                  </span>
                                  Message Info{" "}
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item reply-button"
                                >
                                  <span>
                                    <i className="bx bx-share" />
                                  </span>
                                  Reply
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <i className="bx bx-smile" />
                                  </span>
                                  React
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#forward-message"
                                >
                                  <span>
                                    <i className="bx bx-reply" />
                                  </span>
                                  Forward
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item click-star-three"
                                >
                                  <span>
                                    <i className="bx bx-star" />
                                  </span>
                                  <span className="star-msg-three">
                                    Star Message
                                  </span>
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#report-user"
                                >
                                  <span>
                                    <i className="bx bx-dislike" />
                                  </span>
                                  Report
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-message"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="message-content award-link chat-award-link">
                          <Link to="#">
                            https://www.youtube.com/watch?v=GCmL3mS0Psk
                          </Link>
                          <img src={award} alt="img" />
                          <div className="emoj-group">
                            <ul>
                              <li className="emoj-action">
                                <Link to="#">
                                  <i className="bx bx-smile" />
                                </Link>
                                <div className="emoj-group-list">
                                  <ul>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_01} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_02} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_03} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_04} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_05} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li className="add-emoj">
                                      <Link to="#">
                                        <i className="feather-plus" />
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#forward-message"
                                >
                                  <i className="bx bx-share" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chats chats-right">
                      <div className="chat-content">
                        <div className="chat-profile-name justify-content-end">
                          <h6>
                            <i className="bx bx-check-double me-1 active-check" />
                            Alex Smith<span>8:16 PM</span>
                            <span className="check-star msg-star-four d-none">
                              <i className="bx bxs-star" />
                            </span>
                          </h6>
                          <div className="chat-action-btns ms-2">
                            <div className="chat-action-col">
                              <Link
                                className="#"
                                to="#"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </Link>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item message-info-left"
                                >
                                  <span>
                                    <i className="bx bx-info-circle" />
                                  </span>
                                  Message Info{" "}
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item reply-button"
                                >
                                  <span>
                                    <i className="bx bx-share" />
                                  </span>
                                  Reply
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <i className="bx bx-smile" />
                                  </span>
                                  React
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#forward-message"
                                >
                                  <span>
                                    <i className="bx bx-reply" />
                                  </span>
                                  Forward
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item click-star-four"
                                >
                                  <span>
                                    <i className="bx bx-star" />
                                  </span>
                                  <span className="star-msg-four">
                                    Star Message
                                  </span>
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-message"
                                >
                                  <span>
                                    <i className="bx bx-edit-alt" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-message"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="message-content fancy-msg-box">
                          <div className="emoj-group wrap-emoji-group ">
                            <ul>
                              <li className="emoj-action">
                                <Link to="#">
                                  <i className="bx bx-smile" />
                                </Link>
                                <div className="emoj-group-list">
                                  <ul>
                                    {galleryImages.map((item, index) => (
                                      <li key={index}>
                                        <Link to="#">
                                          <SlideshowLightbox>
                                            <img
                                              src={item.original}
                                              alt="Icon"
                                            />
                                          </SlideshowLightbox>
                                        </Link>
                                      </li>
                                    ))}

                                    <li className="add-emoj">
                                      <Link to="#">
                                        <i className="feather-plus" />
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#forward-message"
                                >
                                  <i className="bx bx-share" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="download-col">
                            <ul className="nav mb-0">
                              {galleryImages.map((item, index) => (
                                <li key={index}>
                                  <div className="image-download-col">
                                    <Link
                                      to="#"
                                      data-fancybox="gallery"
                                      className="fancybox"
                                    >
                                      <SlideshowLightbox>
                                        <img src={item.original} alt="Img" />
                                      </SlideshowLightbox>
                                    </Link>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="chat-avatar">
                        <img
                          src={AvatarImg_10}
                          className="rounded-circle dreams_chat"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="chats">
                      <div className="chat-avatar">
                        <img
                          src={AvatarImg_02}
                          className="rounded-circle dreams_chat"
                          alt="image"
                        />
                      </div>
                      <div className="chat-content">
                        <div className="chat-profile-name">
                          <h6>
                            Mark Villiams<span>8:16 PM</span>
                            <span className="check-star msg-star-five d-none">
                              <i className="bx bxs-star" />
                            </span>
                          </h6>
                          <div className="chat-action-btns ms-2">
                            <div className="chat-action-col">
                              <Link
                                className="#"
                                to="#"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </Link>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item message-info-left"
                                >
                                  <span>
                                    <i className="bx bx-info-circle" />
                                  </span>
                                  Message Info{" "}
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item reply-button"
                                >
                                  <span>
                                    <i className="bx bx-share" />
                                  </span>
                                  Reply
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <i className="bx bx-smile" />
                                  </span>
                                  React
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#forward-message"
                                >
                                  <span>
                                    <i className="bx bx-reply" />
                                  </span>
                                  Forward
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item click-star-five"
                                >
                                  <span>
                                    <i className="bx bx-star" />
                                  </span>
                                  <span className="star-msg-five">
                                    Star Message
                                  </span>
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#report-user"
                                >
                                  <span>
                                    <i className="bx bx-dislike" />
                                  </span>
                                  Report
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-message"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="like-chat-grp">
                          <ul>
                            <li className="like-chat">
                              <Link to="#">
                                2
                                <img src={like} alt="Icon" />
                              </Link>
                            </li>
                            <li className="comment-chat">
                              <Link to="#">
                                2
                                <img src={heart} alt="Icon" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="chats">
                      <div className="chat-avatar">
                        <img
                          src={AvatarImg_02}
                          className="rounded-circle dreams_chat"
                          alt="image"
                        />
                      </div>
                      <div className="chat-content">
                        <div className="chat-profile-name">
                          <h6>
                            Mark Villiams<span>8:16 PM</span>
                            <span className="check-star msg-star d-none">
                              <i className="bx bxs-star" />
                            </span>
                          </h6>
                          <div className="chat-action-btns ms-2">
                            <div className="chat-action-col">
                              <Link
                                className="#"
                                to="#"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </Link>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item message-info-left"
                                >
                                  <span>
                                    <i className="bx bx-info-circle" />
                                  </span>
                                  Message Info{" "}
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item reply-button"
                                >
                                  <span>
                                    <i className="bx bx-share" />
                                  </span>
                                  Reply
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <i className="bx bx-smile" />
                                  </span>
                                  React
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#forward-message"
                                >
                                  <span>
                                    <i className="bx bx-reply" />
                                  </span>
                                  Forward
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item click-star"
                                >
                                  <span>
                                    <i className="bx bx-star" />
                                  </span>
                                  <span className="star-msg">Star Message</span>
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#report-user"
                                >
                                  <span>
                                    <i className="bx bx-edit-alt" />
                                  </span>
                                  Report
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-message"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="message-content reply-getcontent">
                          Thank you for your support
                          <div className="emoj-group">
                            <ul>
                              <li className="emoj-action">
                                <Link to="#">
                                  <i className="bx bx-smile" />
                                </Link>
                                <div className="emoj-group-list">
                                  <ul>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_01} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_02} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_03} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_04} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <img src={emoj_icon_05} alt="Icon" />
                                      </Link>
                                    </li>
                                    <li className="add-emoj">
                                      <Link to="#">
                                        <i className="feather-plus" />
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#forward-message"
                                >
                                  <i className="bx bx-share" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chats">
                      <div className="chat-avatar">
                        <img
                          src={AvatarImg_02}
                          className="rounded-circle dreams_chat"
                          alt="image"
                        />
                      </div>
                      <div className="chat-content chat-cont-type">
                        <div className="chat-profile-name chat-type-wrapper">
                          <p>Mark Villiams Typing...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-footer">
                <form>
                  <div className="smile-foot">
                    <div className="chat-action-btns">
                      <div className="chat-action-col">
                        <Link
                          className="action-circle"
                          to="#"
                          data-bs-toggle="dropdown"
                        >
                          <i className="bx bx-dots-vertical-rounded" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link to="#" className="dropdown-item ">
                            <span>
                              <i className="bx bx-file" />
                            </span>
                            Document
                          </Link>
                          <Link to="#" className="dropdown-item">
                            <span>
                              <i className="bx bx-camera" />
                            </span>
                            Camera
                          </Link>
                          <Link to="#" className="dropdown-item">
                            <span>
                              <i className="bx bx-image" />
                            </span>
                            Gallery
                          </Link>
                          <Link to="#" className="dropdown-item">
                            <span>
                              <i className="bx bx-volume-full" />
                            </span>
                            Audio
                          </Link>
                          <Link to="#" className="dropdown-item">
                            <span>
                              <i className="bx bx-map" />
                            </span>
                            Location
                          </Link>
                          <Link to="#" className="dropdown-item">
                            <span>
                              <i className="bx bx-user-pin" />
                            </span>
                            Contact
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="smile-foot emoj-action-foot">
                    <Link to="#" className="action-circle">
                      <i className="bx bx-smile" />
                    </Link>
                    <div className="emoj-group-list-foot down-emoji-circle">
                      <ul>
                        <li>
                          <Link to="#">
                            <img src={emoj_icon_01} alt="Icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src={emoj_icon_02} alt="Icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src={emoj_icon_03} alt="Icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src={emoj_icon_04} alt="Icon" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src={emoj_icon_05} alt="Icon" />
                          </Link>
                        </li>
                        <li className="add-emoj">
                          <Link to="#">
                            <i className="feather-plus" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="smile-foot">
                    <Link to="#" className="action-circle">
                      <i className="bx bx-microphone-off" />
                    </Link>
                  </div>
                  <div className="replay-forms">
                    <div className="chats forward-chat-msg reply-div d-none">
                      <div className="contact-close_call text-end">
                        <Link to="#" className="close-replay">
                          <i className="bx bx-x" />
                        </Link>
                      </div>
                      <div className="chat-avatar">
                        <img
                          src={AvatarImg_02}
                          className="rounded-circle dreams_chat"
                          alt="image"
                        />
                      </div>
                      <div className="chat-content">
                        <div className="chat-profile-name">
                          <h6>
                            Mark Villiams<span>8:16 PM</span>
                          </h6>
                          <div className="chat-action-btns ms-2">
                            <div className="chat-action-col">
                              <Link
                                className="#"
                                to="#"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </Link>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item message-info-left"
                                >
                                  <span>
                                    <i className="bx bx-info-circle" />
                                  </span>
                                  Message Info{" "}
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item reply-button"
                                >
                                  <span>
                                    <i className="bx bx-share" />
                                  </span>
                                  Reply
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <i className="bx bx-smile" />
                                  </span>
                                  React
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#forward-message"
                                >
                                  <span>
                                    <i className="bx bx-reply" />
                                  </span>
                                  Forward
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <i className="bx bx-star" />
                                  </span>
                                  Star Message
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#report-user"
                                >
                                  <span>
                                    <i className="bx bx-dislike" />
                                  </span>
                                  Report
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-message"
                                >
                                  <span>
                                    <i className="bx bx-trash" />
                                  </span>
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="message-content reply-content"></div>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control chat_form"
                      placeholder="Type your message here..."
                    />
                  </div>
                  <div className="form-buttons">
                    <button className="btn send-btn" type="submit">
                      <i className="bx bx-paper-plane" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* /Chat */}

            <div
              className={
                isVisible
                  ? "right-sidebar right_sidebar_profile right-side-contact show-right-sidebar"
                  : "right-sidebar right_sidebar_profile right-side-contact hide-right-sidebar"
              }
              id="middle1"
            >
              <div className="right-sidebar-wrap active">
                <div className="slimscroll">
                  <Scrollbars>
                    <div className="left-chat-title d-flex justify-content-between align-items-center border-bottom-0">
                      <div className="fav-title mb-0">
                        <h6>Contact Info</h6>
                      </div>
                      <div className="contact-close_call text-end">
                        <Link to="#" className="close_profile close_profile4">
                          <span
                            className="material-icons"
                            onClick={handleRemoveVisible}
                          >
                            close
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="sidebar-body">
                      <div className="mt-0 right_sidebar_logo">
                        <div className="text-center right-sidebar-profile">
                          <figure className="avatar avatar-xl mb-3">
                            <img
                              src={AvatarImg_02}
                              className="rounded-circle"
                              alt="image"
                            />
                          </figure>
                          <h5 className="profile-name">Mark Villiams</h5>
                          <div className="last-seen-profile">
                            <span>last seen at 07:15 PM</span>
                          </div>
                          <div className="chat-options chat-option-profile">
                            <ul className="list-inline">
                              <li
                                className="list-inline-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Voice Call"
                              >
                                <Link
                                  to="#"
                                  className="btn btn-outline-light "
                                  data-bs-toggle="modal"
                                  data-bs-target="#voice_call"
                                >
                                  <i className="bx bx-phone" />
                                </Link>
                              </li>
                              <li
                                className="list-inline-item "
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Video Call"
                              >
                                <Link
                                  to="#"
                                  className="btn btn-outline-light profile-open"
                                  data-bs-toggle="modal"
                                  data-bs-target="#voice_call"
                                >
                                  <i className="bx bx-video" />
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link
                                  to="/chats"
                                  className="btn btn-outline-light"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="Chat"
                                >
                                  <i className="bx bx-message-square-dots" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="chat-member-details">
                          <div className="member-details">
                            <ul>
                              <li>
                                <h5>Info</h5>
                              </li>
                              <li>
                                <h6>Bio</h6>
                                <span>Hello, I am using DreamsChat</span>
                              </li>
                              <li>
                                <h6>Phone</h6>
                                <span>555-555-21541</span>
                              </li>
                              <li>
                                <h6>Email Address</h6>
                                <span>info@example.com</span>
                              </li>
                              <li>
                                <h6>Social Media</h6>
                                <div className="social-icons ">
                                  <Link to="https://www.facebook.com/">
                                    <i className="bx bxl-facebook" />
                                  </Link>
                                  <Link to="https://twitter.com/">
                                    <i className="bx bxl-twitter" />
                                  </Link>
                                  <Link to="#">
                                    <i className="bx bxl-youtube" />
                                  </Link>
                                  <Link to="https://in.linkedin.com/">
                                    <i className="bx bxl-linkedin" />
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right-sidebar-head share-media">
                      <div className="share-media-blk">
                        <h5>Shared Media</h5>
                        <Link to="#">View All</Link>
                      </div>
                      <div className="about-media-tabs">
                        <nav>
                          <div className="nav nav-tabs " id="nav-tab">
                            <Link
                              className="nav-item nav-link active"
                              id="nav-home-tab"
                              data-bs-toggle="tab"
                              to="#info"
                            >
                              Photos
                            </Link>
                            <Link
                              className="nav-item nav-link"
                              id="nav-profile-tab1"
                              data-bs-toggle="tab"
                              to="#Participants"
                            >
                              Videos
                            </Link>
                            <Link
                              className="nav-item nav-link"
                              id="nav-profile-tab2"
                              data-bs-toggle="tab"
                              to="#media"
                            >
                              File
                            </Link>
                            <Link
                              className="nav-item nav-link"
                              id="nav-profile-tab3"
                              data-bs-toggle="tab"
                              to="#link"
                            >
                              Link
                            </Link>
                          </div>
                        </nav>
                        <div className="tab-content pt-0" id="nav-tabContent">
                          <div className="tab-pane fade show active" id="info">
                            <ul className="nav share-media-img mb-0">
                              {galleryItems.map((item, index) => (
                                <li key={index}>
                                  <Link
                                    to="#"
                                    data-fancybox="gallery"
                                    className="fancybox"
                                  >
                                    <SlideshowLightbox>
                                      <img src={item.original} alt="Img" />
                                    </SlideshowLightbox>
                                  </Link>
                                </li>
                              ))}
                              {/* <li>
                                <Link
                                  to="#"
                                  data-fancybox="gallery"
                                  className="fancybox"
                                >
                                  <img src={media_02} alt="Img" />
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  data-fancybox="gallery"
                                  className="fancybox"
                                >
                                  <img src={media_03} alt="Img" />
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  data-fancybox="gallery"
                                  className="fancybox"
                                >
                                  <img src={media_04} alt="Img" />
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  data-fancybox="gallery"
                                  className="fancybox"
                                >
                                  <img src={media_05} alt="Img" />
                                </Link>
                              </li>
                              <li className="blur-media">
                                <Link
                                  to="#"
                                  data-fancybox="gallery"
                                  className="fancybox"
                                >
                                  <img src={media_02} alt="Img" />
                                </Link>
                                <span>+10</span>
                              </li> */}
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="Participants">
                            <ul className="nav share-media-img mb-0">
                              <li>
                                <Link to="#" data-fancybox className="fancybox">
                                  <img
                                    src={media_01}
                                    alt="img"
                                    onClick={() => setToggler(!toggler)}
                                  />

                                  <span>
                                    <i className="bx bx-play-circle" />
                                  </span>
                                </Link>
                              </li>

                              <FsLightbox
                                toggler={toggler}
                                sources={[
                                  "https://www.youtube.com/embed/Mj9WJJNp5wA",
                                  "https://www.youtube.com/embed/Mj9WJJNp5wA",
                                  "https://www.youtube.com/embed/Mj9WJJNp5wA",
                                  "https://www.youtube.com/embed/Mj9WJJNp5wA",
                                  "https://www.youtube.com/embed/Mj9WJJNp5wA",
                                ]}
                              />

                              <li>
                                <Link to="#" data-fancybox className="fancybox">
                                  <img
                                    src={media_02}
                                    alt="img"
                                    onClick={() => setToggler(!toggler)}
                                  />
                                  <span>
                                    <i className="bx bx-play-circle" />
                                  </span>
                                </Link>
                              </li>

                              <li>
                                <Link to="#" data-fancybox className="fancybox">
                                  <img
                                    src={media_03}
                                    alt="img"
                                    onClick={() => setToggler(!toggler)}
                                  />
                                  <span>
                                    <i className="bx bx-play-circle" />
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#" data-fancybox className="fancybox">
                                  <img
                                    src={media_04}
                                    alt="img"
                                    onClick={() => setToggler(!toggler)}
                                  />
                                  <span>
                                    <i className="bx bx-play-circle" />
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link to="#" data-fancybox className="fancybox">
                                  <img
                                    src={media_05}
                                    alt="img"
                                    onClick={() => setToggler(!toggler)}
                                  />
                                  <span>
                                    <i className="bx bx-play-circle" />
                                  </span>
                                </Link>
                              </li>
                              <li className="blur-media">
                                <Link to="#" data-fancybox className="fancybox">
                                  <img src={media_03} alt="img" />
                                </Link>
                                <span>+10</span>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="media">
                            <div className="media-file">
                              <div className="media-doc-blk">
                                <span>
                                  <i className="bx bxs-file-doc" />
                                </span>
                                <div className="document-detail">
                                  <h6>Landing_page_V1.doc</h6>
                                  <ul>
                                    <li>12 Mar 2023</li>
                                    <li>246.3 KB</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="media-download">
                                <Link to="#">
                                  <i className="bx bx-download" />
                                </Link>
                              </div>
                            </div>
                            <div className="media-file">
                              <div className="media-doc-blk">
                                <span>
                                  <i className="bx bxs-file-pdf" />
                                </span>
                                <div className="document-detail">
                                  <h6>Design Guideless.pdf</h6>
                                  <ul>
                                    <li>12 Mar 2023</li>
                                    <li>246.3 KB</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="media-download">
                                <Link to="#">
                                  <i className="bx bx-download" />
                                </Link>
                              </div>
                            </div>
                            <div className="media-file">
                              <div className="media-doc-blk">
                                <span>
                                  <i className="bx bxs-file" />
                                </span>
                                <div className="document-detail">
                                  <h6>sample site.txt</h6>
                                  <ul>
                                    <li>12 Mar 2023</li>
                                    <li>246.3 KB</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="media-download">
                                <Link to="#">
                                  <i className="bx bx-download" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="link">
                            <div className="media-link-grp">
                              <div className="link-img">
                                <Link to="#">
                                  <img src={media_link_01} alt="Img" />
                                </Link>
                              </div>
                              <div className="media-link-detail">
                                <h6>
                                  <Link to="#">Digital Marketing Guide</Link>
                                </h6>
                                <span>
                                  <Link to="#">
                                    https://elements.envato.com/all-items/blog
                                  </Link>
                                </span>
                              </div>
                            </div>
                            <div className="media-link-grp mb-0">
                              <div className="link-img">
                                <Link to="#">
                                  <img src={media_link_02} alt="Img" />
                                </Link>
                              </div>
                              <div className="media-link-detail">
                                <h6>
                                  <Link to="#">Blog Post</Link>
                                </h6>
                                <span>
                                  <Link to="#">
                                    https://elements.envato.com/blog-post-TXQ5FB8
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-comman-theme">
                      <h6>2 Group in Common</h6>
                      <ul>
                        <li>
                          <div className="avatar">
                            <img
                              src={AvatarImg_14}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="theme-content">
                            <h6>Themeforest Group</h6>
                            <p>Mark Villiams, Elizabeth, Michael....</p>
                          </div>
                        </li>
                        <li>
                          <div className="avatar">
                            <img
                              src={AvatarImg_15}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="theme-content">
                            <h6>Graphic Designers</h6>
                            <p>Mark Villiams, Elizabeth, Michael....</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="chat-message-grp">
                      <ul>
                        <li>
                          <Link to="#" className="star-message-left">
                            <div className="stared-group">
                              <span className="star-message">
                                {" "}
                                <i className="bx bxs-star" />
                              </span>
                              <h6>Starred Messages</h6>
                            </div>
                            <div className="count-group">
                              <span>10</span>
                              <i className="feather-chevron-right" />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#mute-notification"
                          >
                            <div className="stared-group">
                              <span className="mute-message">
                                {" "}
                                <i className="bx bxs-microphone-off" />
                              </span>
                              <h6>Mute Notifications</h6>
                            </div>
                            <div className="count-group">
                              <i className="feather-chevron-right" />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#block-user"
                          >
                            <div className="stared-group">
                              <span className="block-message">
                                {" "}
                                <i className="bx bx-block" />
                              </span>
                              <h6>Block User</h6>
                            </div>
                            <div className="count-group">
                              <i className="feather-chevron-right" />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#report-user"
                          >
                            <div className="stared-group">
                              <span className="report-message">
                                {" "}
                                <i className="bx bx-dislike" />
                              </span>
                              <h6>Report User</h6>
                            </div>
                            <div className="count-group">
                              <i className="feather-chevron-right" />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-user"
                          >
                            <div className="stared-group">
                              <span className="delete-message">
                                {" "}
                                <i className="bx bx-trash" />
                              </span>
                              <h6>Delete Chat</h6>
                            </div>
                            <div className="count-group">
                              <i className="feather-chevron-right" />
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Scrollbars>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </div>
      </div>
    </>
  );
};
export default Chats;
