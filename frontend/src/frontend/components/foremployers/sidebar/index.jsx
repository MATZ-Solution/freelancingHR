import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { sidebar_icon_01, sidebar_icon_02, sidebar_icon_03, sidebar_icon_04, sidebar_icon_06, sidebar_icon_07, sidebar_icon_10, sidebar_icon_11, table_avatar, verified_badge } from "../../imagepath"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  // const pathname = window.location.pathname.split("/")[1];
  const { values } = props;
  const freelancerDetails = useSelector(state=>state.freelancerDetails.data)
  const {name, email, profileImage} = freelancerDetails
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isFavourities, setIsFavourities] = useState(false);
  const [isSettings, setIsSettings] = useState(false);


  const toggleHighlight = () => {
    setIsHighlighted((prevState) => !prevState);
  };

  const toggleFavourities = () => {
    setIsFavourities((prevState) => !prevState);
  };

  const toggleSettings = () => {
    setIsSettings((prevState) => !prevState);
  };

  return (
    <>
      <div className="settings-widget">
        <div className="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
          <Link to="/freelancer-profile"><img alt="profile image" src={profileImage} className="avatar-lg rounded-circle" /></Link>
          <div className="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
            <h3 className="mb-0"><Link to="/profile-settings">{name}</Link><img src={verified_badge} className="ms-1" alt="Img" /></h3>
            <p className="mb-0">{email}</p>
          </div>
        </div>
        <div className="settings-menu">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="nav-item">
                <Link to="/company-dashboard" className={`nav-link ${values === 'dashboard' ? 'active' : ""}`}>
                  <img src={sidebar_icon_01} alt="Img" /> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/company-postedJob" className={`nav-link ${values === 'postedJob' ? 'active' : ""}`}>
                  <img src={sidebar_icon_01} alt="Img" /> Posted Job
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/company-postedProject" className={`nav-link ${values === 'postedProject' ? 'active' : ""}`}>
                  <img src={sidebar_icon_01} alt="Img" /> Posted Project
                </Link>
              </li>
              <li className="nav-item submenu">
                <Link to="#" className={`${isHighlighted ? 'nav-link subdrop' : 'nav-link'}`} onClick={toggleHighlight}>
                  <img src={sidebar_icon_02} alt="Img" /> Projects
                  <span className="menu-arrow" />
                </Link>
                <ul className="sub-menu-ul" style={{ display: isHighlighted ? 'block' : 'none' }}>
                  <li>
                    <Link to="/manage-projects">All Projects</Link>
                  </li>
                  <li>
                    <Link to="/ongoing-projects">Ongoing Projects</Link>
                  </li>
                  <li>
                    <Link to="/completed-projects">Completed Projects</Link>
                  </li>
                  <li>
                    <Link to="/pending-projects">Pending Projects</Link>
                  </li>
                  <li>
                    <Link to="/cancelled-projects">Cancelled Projects</Link>
                  </li>
                  <li>
                    <Link to="/expired-projects">Expired Projects</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item submenu">
                <Link to="#" className={`${isFavourities ? 'nav-link subdrop' : 'nav-link'}`} onClick={toggleFavourities}>
                  <img src={sidebar_icon_03} alt="Img" /> Favourites
                  <span className="menu-arrow" />
                </Link>
                <ul className="sub-menu-ul" style={{ display: isFavourities ? 'block' : 'none' }}>
                  <li>
                    <Link to="/favourites">Bookmarked Projects</Link>
                  </li>
                  <li>
                    <Link to="/invited-favourites">Invitations</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/review" className="nav-link">
                  <img src={sidebar_icon_04} alt="Img" /> Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/chats" className="nav-link">
                  <img src={sidebar_icon_06} alt="Img" /> Chat
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/deposit-funds" className="nav-link">
                  <img src={sidebar_icon_07} alt="Img" /> Payments
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className={`${isSettings ? 'nav-link subdrop' : 'nav-link'}`} onClick={toggleSettings} >
                  <img src={sidebar_icon_10} alt="Img" />  Settings
                  <span className="menu-arrow" />
                </Link>
                <ul className="sub-menu-ul" style={{ display: isSettings ? 'block' : 'none' }}>
                  <li>
                    <Link to="/profile-settings">Profile</Link>
                  </li>
                  <li>
                    <Link to="/membership-plans">Plan &amp; Billing</Link>
                  </li>
                  <li>
                    <Link to="/verify-identity">Verify Identity</Link>
                  </li>
                  <li>
                    <Link to="/change-password">Change Password</Link>
                  </li>
                  <li>
                    <Link to="/delete-account">Delete Account</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/index" className="nav-link">
                  <img src={sidebar_icon_11} alt="Img" /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}
export { Sidebar };
Sidebar.propTypes = {
  values: PropTypes.string.isRequired
};