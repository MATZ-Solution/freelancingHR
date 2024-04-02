import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import {
  Avatar_1,
  Avatar_2,
  Avatar_3,
  Avatar_4,
  Avatar_5,
  Avatar_6,
  Avatar_7,
  Avatar_8,
  Avatar_9,
  Avatar_10,
  Avatar_11,
  Avatar_12,
} from "../../imagepath";
import Select from "react-select";
import FreelancerSidebar from "../common/freelancerSidebar";
import EmployerBreadcrumb from "../common/employerBreadcrumb";

const Developer = () => {
 
  const optionsSelect = [
    { value: 1, label: "Relevance" },
    { value: 2, label: "Rating" },
    { value: 3, label: "Latest" },
    { value: 4, label: "Free" },
  ];

  return (
    <>
      {/* Breadcrumb */}     
      <EmployerBreadcrumb title="Freelancer Grid" subtitle="Developers"/>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                {/* Search Filter */}
              <FreelancerSidebar/>
                {/* /Search Filter */}
              </StickyBox>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
             
           <div className="sort-tab develop-list-select">
  <div className="row align-items-center">
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
      <div className="d-flex align-items-center">
        <div className="freelance-view">
          <h4>Found 9 Results</h4>
        </div>
      </div>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-sm-end">
      <div className="sort-by">
      <Select
        className="select "
        options={optionsSelect}
        placeholder="Sort by (Default)"
      />
      </div>
      <ul className="list-grid d-flex align-items-center">
        <li><Link to="/developer" className="favour-active"><i className="fas fa-th-large" /></Link></li>
        <li><Link to="/developer-list"><i className="fas fa-list" /></Link></li>
      </ul>
    </div>
  </div>
</div>


<div className="row">
  <div className="col-md-6 col-lg-6 col-xl-4">
    <div className="freelance-widget">
      <div className="freelance-content">
        <Link data-bs-toggle="modal" to="#rating" className="favourite"><i className="feather-heart" /></Link>
        <div className="freelance-img">
          <Link to="/developer-details">
            <img src={Avatar_1} alt="User Image" />
            <span className="verified"><i className="fas fa-check-circle" /></span>
          </Link>
        </div>
        <div className="freelance-info">
          <h3><Link to="/developer-details">George Wells</Link></h3>
          <div className="freelance-specific">UI/UX Designer</div>
          <div className="freelance-location"> <i className="feather-map-pin me-1" />Alabama, USA</div>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
            <span className="average-rating">4.7 (32)</span>
          </div>
          <div className="freelance-tags border-0">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
          <div className="freelancers-price">$25 Hourly</div>
        </div>
      </div>
      <div className="cart-hover">
        <Link to="#" className="btn-invite mb-2 w-100 d-block" tabIndex={-1}>Invite</Link>
        <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-6 col-xl-4">
    <div className="freelance-widget">
      <div className="freelance-content">
        <Link data-bs-toggle="modal" to="#rating" className="favourite favourited"><i className="feather-heart" /></Link>
        <div className="freelance-img">
          <Link to="/developer-details">
            <img src={Avatar_2} alt="User Image" />
            <span className="verified"><i className="fas fa-check-circle" /></span>
          </Link>
        </div>
        <div className="freelance-info">
          <h3><Link to="/developer-details">Timothy Smith</Link></h3>
          <div className="freelance-specific">PHP Developer</div>
          <div className="freelance-location"> <i className="feather-map-pin me-1" />Illinois, USA</div>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
            <span className="average-rating">4.8 (55)</span>
          </div>
          <div className="freelance-tags">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
          <div className="freelancers-price">$21 Hourly</div>
        </div>
      </div>
      <div className="cart-hover">
        <Link to="#" className="btn-invite mb-2 w-100 d-block" tabIndex={-1}>Invite</Link>
        <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-6 col-xl-4">
    <div className="freelance-widget">
      <div className="freelance-content">
        <Link data-bs-toggle="modal" to="#rating" className="favourite"><i className="feather-heart" /></Link>
        <div className="freelance-img">
          <Link to="/developer-details">
            <img src={Avatar_3} alt="User Image" />
            <span className="verified"><i className="fas fa-check-circle" /></span>
          </Link>
        </div>
        <div className="freelance-info">
          <h3><Link to="/developer-details">Janet Paden</Link></h3>
          <div className="freelance-specific">Graphic Designer</div>
          <div className="freelance-location"> <i className="feather-map-pin me-1" />New York, USA</div>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
            <span className="average-rating">4.1 (30)</span>
          </div>
          <div className="freelance-tags ">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
          <div className="freelancers-price">Free</div>
        </div>
      </div>
      <div className="cart-hover">
        <Link to="#" className="btn-invite mb-2 w-100 d-block" tabIndex={-1}>Invite</Link>
        <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-6 col-xl-4">
    <div className="freelance-widget">
      <div className="freelance-content">
        <Link data-bs-toggle="modal" to="#rating" className="favourite"><i className="feather-heart" /></Link>
        <div className="freelance-img">
          <Link to="/developer-details">
            <img src={Avatar_4} alt="User Image" />
            <span className="verified"><i className="fas fa-check-circle" /></span>
          </Link>
        </div>
        <div className="freelance-info">
          <h3><Link to="/developer-details">James Douglas</Link></h3>
          <div className="freelance-specific">iOS Developer</div>
          <div className="freelance-location"> <i className="feather-map-pin me-1" />Florida, USA</div>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <span className="average-rating">3.2 (22)</span>
          </div>
          <div className="freelance-tags border-0">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
          <div className="freelancers-price">Free</div>
        </div>
      </div>
      <div className="cart-hover">
        <Link to="#" className="btn-invite mb-2 w-100 d-block" tabIndex={-1}>Invite</Link>
        <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-6 col-xl-4">
    <div className="freelance-widget">
      <div className="freelance-content">
        <Link data-bs-toggle="modal" to="#rating" className="favourite"><i className="feather-heart" /></Link>
        <div className="freelance-img">
          <Link to="/developer-details">
            <img src={Avatar_5} alt="User Image" />
            <span className="verified"><i className="fas fa-check-circle" /></span>
          </Link>
        </div>
        <div className="freelance-info">
          <h3><Link to="/developer-details">Floyd Lewis</Link></h3>
          <div className="freelance-specific">SEO Developer</div>
          <div className="freelance-location"> <i className="feather-map-pin me-1" />Texas, USA</div>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
            <span className="average-rating">4.9 (40)</span>
          </div>
          <div className="freelance-tags border-0">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
          <div className="freelancers-price">$30 Hourly</div>
        </div>
      </div>
      <div className="cart-hover">
        <Link to="#" className="btn-invite mb-2 w-100 d-block" tabIndex={-1}>Invite</Link>
        <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-6 col-xl-4">
    <div className="freelance-widget">
      <div className="freelance-content">
        <Link data-bs-toggle="modal" to="#rating" className="favourite"><i className="feather-heart" /></Link>
        <div className="freelance-img">
          <Link to="/developer-details">
            <img src={Avatar_6} alt="User Image" />
            <span className="verified"><i className="fas fa-check-circle" /></span>
          </Link>
        </div>
        <div className="freelance-info">
          <h3><Link to="/developer-details">Jacqueline Daye</Link></h3>
          <div className="freelance-specific">SM Developer</div>
          <div className="freelance-location"> <i className="feather-map-pin me-1" />California, USA</div>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
            <span className="average-rating">4.3 (35)</span>
          </div>
          <div className="freelance-tags border-0">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
          <div className="freelancers-price">$12 Hourly</div>
        </div>
      </div>
      <div className="cart-hover">
        <Link to="#" className="btn-invite mb-2 w-100 d-block" tabIndex={-1}>Invite</Link>
        <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-6 col-xl-4">
    <div className="freelance-widget">
      <div className="freelance-content">
        <Link data-bs-toggle="modal" to="#rating" className="favourite"><i className="feather-heart" /></Link>
        <div className="freelance-img">
          <Link to="/developer-details">
            <img src={Avatar_7} alt="User Image" />
            <span className="verified"><i className="fas fa-check-circle" /></span>
          </Link>
        </div>
        <div className="freelance-info">
          <h3><Link to="/developer-details">Crystal Kemper</Link></h3>
          <div className="freelance-specific">Network Engineer</div>
          <div className="freelance-location"> <i className="feather-map-pin me-1" />Maryland, USA</div>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <span className="average-rating">3.5 (28)</span>
          </div>
          <div className="freelance-tags border-0">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
          <div className="freelancers-price">$20 Hourly</div>
        </div>
      </div>
      <div className="cart-hover">
        <Link to="#" className="btn-invite mb-2 w-100 d-block" tabIndex={-1}>Invite</Link>
        <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-6 col-xl-4">
    <div className="freelance-widget">
      <div className="freelance-content">
        <Link data-bs-toggle="modal" to="#rating" className="favourite"><i className="feather-heart" /></Link>
        <div className="freelance-img">
          <Link to="/developer-details">
            <img src={Avatar_8} alt="User Image" />
            <span className="verified"><i className="fas fa-check-circle" /></span>
          </Link>
        </div>
        <div className="freelance-info">
          <h3><Link to="/developer-details">Tony Ingle</Link></h3>
          <div className="freelance-specific">Business Analyst</div>
          <div className="freelance-location"> <i className="feather-map-pin me-1" />Missouri, USA</div>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <span className="average-rating">2.1 (15)</span>
          </div>
          <div className="freelance-tags border-0">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
          <div className="freelancers-price">Free</div>
        </div>
      </div>
      <div className="cart-hover">
        <Link to="#" className="btn-invite mb-2 w-100 d-block" tabIndex={-1}>Invite</Link>
        <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-6 col-xl-4">
    <div className="freelance-widget">
      <div className="freelance-content">
        <Link data-bs-toggle="modal" to="#rating" className="favourite"><i className="feather-heart" /></Link>
        <div className="freelance-img">
          <Link to="/developer-details">
            <img src={Avatar_9} alt="User Image" />
            <span className="verified"><i className="fas fa-check-circle" /></span>
          </Link>
        </div>
        <div className="freelance-info">
          <h3><Link to="/developer-details">Kathleen Kaiser</Link></h3>
          <div className="freelance-specific">IT Project Manager</div>
          <div className="freelance-location"> <i className="feather-map-pin me-1" />Kansas, USA</div>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
            <span className="average-rating">4.5 (36)</span>
          </div>
          <div className="freelance-tags border-0">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
          <div className="freelancers-price">$25 Hourly</div>
        </div>
      </div>
      <div className="cart-hover">
        <Link to="#" className="btn-invite mb-2 w-100 d-block" tabIndex={-1}>Invite</Link>
        <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-6 col-xl-4">
    <div className="freelance-widget">
      <div className="freelance-content">
        <Link data-bs-toggle="modal" to="#rating" className="favourite"><i className="feather-heart" /></Link>
        <div className="freelance-img">
          <Link to="/developer-details">
            <img src={Avatar_10} alt="User Image" />
            <span className="verified"><i className="fas fa-check-circle" /></span>
          </Link>
        </div>
        <div className="freelance-info">
          <h3><Link to="/developer-details">Veronica Cheek</Link></h3>
          <div className="freelance-specific">Software Architect</div>
          <div className="freelance-location"> <i className="feather-map-pin me-1" />Vermont, USA</div>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <span className="average-rating">2.3 (20)</span>
          </div>
          <div className="freelance-tags border-0">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
          <div className="freelancers-price">$26 Hourly</div>
        </div>
      </div>
      <div className="cart-hover">
        <Link to="#" className="btn-invite mb-2 w-100 d-block" tabIndex={-1}>Invite</Link>
        <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-6 col-xl-4">
    <div className="freelance-widget">
      <div className="freelance-content">
        <Link data-bs-toggle="modal" to="#rating" className="favourite"><i className="feather-heart" /></Link>
        <div className="freelance-img">
          <Link to="/developer-details">
            <img src={Avatar_11} alt="User Image" />
            <span className="verified"><i className="fas fa-check-circle" /></span>
          </Link>
        </div>
        <div className="freelance-info">
          <h3><Link to="/developer-details">Andrew Glover</Link></h3>
          <div className="freelance-specific">Software Developer</div>
          <div className="freelance-location"> <i className="feather-map-pin me-1" />Virginia, USA</div>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
            <span className="average-rating">5.0 (4)</span>
          </div>
          <div className="freelance-tags border-0">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
          <div className="freelancers-price">$8 Hourly</div>
        </div>
      </div>
      <div className="cart-hover">
        <Link to="#" className="btn-invite mb-2 w-100 d-block" tabIndex={-1}>Invite</Link>
        <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-6 col-xl-4">
    <div className="freelance-widget">
      <div className="freelance-content">
        <Link data-bs-toggle="modal" to="#rating" className="favourite"><i className="feather-heart" /></Link>
        <div className="freelance-img">
          <Link to="/developer-details">
            <img src={Avatar_12} alt="User Image" />
            <span className="verified"><i className="fas fa-check-circle" /></span>
          </Link>
        </div>
        <div className="freelance-info">
          <h3><Link to="/developer-details">Mickey Bernier</Link></h3>
          <div className="freelance-specific">QA Engineer</div>
          <div className="freelance-location"> <i className="feather-map-pin me-1" />Colorado, USA</div>
          <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
            <span className="average-rating">5.0 (4)</span>
          </div>
          <div className="freelance-tags border-0">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
          <div className="freelancers-price">Free</div>
        </div>
      </div>
      <div className="cart-hover">
        <Link to="#" className="btn-invite mb-2 w-100 d-block" tabIndex={-1}>Invite</Link>
        <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-md-12">
    <ul className="paginations list-pagination">
      <li className="page-item"><Link to="#"><i className="feather-chevron-left" /></Link>
      </li>
      <li className="page-item"><Link to="#" className="active">1</Link></li>
      <li className="page-item"><Link to="#">2</Link></li>
      <li className="page-item"><Link to="#">3</Link></li>
      <li className="page-item"><Link to="#">...</Link></li>
      <li className="page-item"><Link to="#">10</Link></li>
      <li className="page-item"><Link to="#"><i className="feather-chevron-right" /></Link></li>
    </ul>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade" id="rating">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header d-block b-0 pb-0">
              <span className="modal-close float-end">
                <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle orange-text" />
                </Link>
              </span>
            </div>
            <div className="modal-body">
              <form action="project">
                <div className="modal-info">
                  <div className="text-center pt-0 mb-5">
                    <h3>Please login to Favourite Freelancer</h3>
                  </div>
                  <div className="submit-section text-center">
                    <button
                      data-bs-dismiss="modal"
                      className="btn btn-primary black-btn click-btn"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary click-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /The Modal */}
    </>
  );
};
export default Developer;
