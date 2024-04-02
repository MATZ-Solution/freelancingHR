import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar_1, sidebar_icon_01, sidebar_icon_02, sidebar_icon_03, sidebar_icon_04, sidebar_icon_05, sidebar_icon_06, sidebar_icon_07, sidebar_icon_08, sidebar_icon_09, sidebar_icon_10, verified_badge } from "../../imagepath";
import PropTypes from 'prop-types';

const Sidebar = (props) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isFavourities, setIsFavourities] = useState(false);
  const [isSettings, setIsSettings] = useState(false);
  const { values } = props;

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
          <Link to="/freelancer-profile"><img alt="profile image" src={Avatar_1} className="avatar-lg rounded-circle" /></Link>
          <div className="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
            <h3 className="mb-0"><Link to="/freelancer-profile">Bruce Bush</Link><img src={verified_badge} className="ms-1" alt="Img" /></h3>
            <p className="mb-0">@brucebush</p>
          </div>
        </div>
        <div className="settings-menu">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="nav-item">
                <Link to="/freelancer-dashboard" className={`nav-link ${values === 'dashboard' ? 'active' : ""}`}>
                  <img src={sidebar_icon_01} alt="Img" /> Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/freelancer-applied-project" className={`nav-link ${values === 'appliedProject' ? 'active' : ""}`}
                >
                  <img src={sidebar_icon_01} alt="Img" /> Applied Project
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/freelancer-applied-job" className={`nav-link ${values === 'appliedJob' && 'active'}`}
                >
                  <img src={sidebar_icon_01} alt="Img" /> Applied Job
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link to="/freelancer-posted-project" className={`nav-link ${values === 'postedProject' && 'active'}`}
                >
                  <img src={sidebar_icon_01} alt="Img" /> Posted Project
                </Link>
              </li> */}

              <li className="nav-item submenu">
                <Link to="#" className={`${isHighlighted ? 'nav-link subdrop' : 'nav-link'}`} onClick={toggleHighlight}>
                  <img src={sidebar_icon_02} alt="Img" /> Projects
                  <span className="menu-arrow" />
                </Link>
                <ul className="sub-menu-ul" style={{ display: isHighlighted ? 'block' : 'none' }}>
                  <li>
                    <Link to="/freelancer-project-proposals">My Proposal</Link>
                  </li>
                  <li>
                    <Link to="/freelancer-ongoing-projects">Ongoing Projects</Link>
                  </li>
                  <li>
                    <Link to="/freelancer-completed-projects">Completed Projects</Link>
                  </li>
                  <li>
                    <Link to="/freelancer-cancelled-projects">Cancelled Projects</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item submenu">
                <Link to="#" className={`${isFavourities ? 'nav-link subdrop' : 'nav-link'}`} onClick={toggleFavourities}>
                  <img src={sidebar_icon_03} alt="Img" /> Favourites
                  <span className="menu-arrow" />
                </Link>
                <ul className="sub-menu-ul" style={{ display: isFavourities ? 'block' : 'none' }} >
                  <li>
                    <Link to="/freelancer-favourites">Bookmarked Projects</Link>
                  </li>
                  <li>
                    <Link to="/freelancer-invitations">Invitations</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/freelancer-review" className="nav-link">
                  <img src={sidebar_icon_04} alt="Img" /> Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/freelancer-portfolio" className="nav-link">
                  <img src={sidebar_icon_05} alt="Img" /> Portfolio
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/freelancer-chats" className="nav-link">
                  <img src={sidebar_icon_06} alt="Img" /> Chat
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/freelancer-withdraw-money" className="nav-link">
                  <img src={sidebar_icon_07} alt="Img" /> Payments
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/freelancer-payout" className="nav-link">
                  <img src={sidebar_icon_08} alt="Img" /> Payout
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/freelancer-withdraw-money" className="nav-link">
                  <img src={sidebar_icon_09} alt="Img" /> Statement
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className={`${isSettings ? 'nav-link subdrop' : 'nav-link'}`} onClick={toggleSettings}>
                  <img src={sidebar_icon_10} alt="Img" />  Settings
                  <span className="menu-arrow" />
                </Link>
                <ul className="sub-menu-ul" style={{ display: isSettings ? 'block' : 'none' }}>
                  <li>
                    <Link to="/freelancer-profile-settings">Profile Setting</Link>
                  </li>
                  <li>
                    <Link to="/freelancer-membership">Plan &amp; Billing</Link>
                  </li>
                  <li>
                    <Link to="/freelancer-verify-identity">Verify Identity</Link>
                  </li>
                  <li>
                    <Link to="/freelancer-change-password">Changes Password</Link>
                  </li>
                  <li>
                    <Link to="/freelancer-delete-account">Delete Account</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/index" className="nav-link">
                  <img src={sidebar_icon_09} alt="Img" /> Logout
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