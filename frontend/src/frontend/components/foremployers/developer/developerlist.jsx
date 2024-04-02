import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import {
  Img_02,
  Img_03,
  Img_04,
  Img_05,
  price,
} from "../../imagepath";
import Select from "react-select";
import EmployerBreadcrumb from "../common/employerBreadcrumb";
import FreelancerSidebar from "../common/freelancerSidebar";

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
      <EmployerBreadcrumb title="Freelancer List" subtitle="Developers"/>
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
        <li><Link to="/developer" ><i className="fas fa-th-large" /></Link></li>
        <li><Link to="/developer-list" className="favour-active"><i className="fas fa-list" /></Link></li>
      </ul>
    </div>
  </div>
</div>


<div className="row">
      
<div className="list-book-mark book-mark favour-book">
  <div className="row justify-content-center">
    <div className="col-lg-12">
      <div className="card list-develop-group">
        <div className="about-author d-flex align-items-center">
          <div className="about-list-author d-flex align-items-center">
            <div className="about-author-img">
              <div className="author-img-wrap">
                <Link to="/developer-details">
                  <img className="img-fluid" alt="Img" src={Img_02} />
                  <span className="verified"><i className="fas fa-check-circle" /></span>
                </Link>
              </div>
            </div>
            <div className="author-details d-flex">
              <div className="freelance-info">
                <h3><Link to="/developer-details">Akshay Handge</Link></h3>
                <div className="freelance-specific">UI/UX Designer</div>
                <div className="freelance-location"><i className="feather-map-pin me-1" />Alabama, USA</div>
              </div>
              <div className="freelance-rating">
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
              </div>
              <div className="freelance-price">
                <div className="freelance-price-img">
                  <img src={price} alt="img" />
                </div>
                <div className="freelance-price-content">
                  <h6>price</h6>
                  <h5>$42 Hourly</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="develop-list-pro">
            <div className="cart-hover">
              <Link to="#" className="btn-invite d-block w-100 mb-2" tabIndex={-1}>Invite</Link>
              <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card list-develop-group">
        <div className="about-author d-flex align-items-center">
          <div className="about-list-author d-flex align-items-center">
            <div className="about-author-img">
              <div className="author-img-wrap">
                <Link to="/developer-details">
                  <img className="img-fluid" alt="Img" src={Img_03} />
                  <span className="verified"><i className="fas fa-check-circle" /></span>
                </Link>
              </div>
            </div>
            <div className="author-details d-flex">
              <div className="freelance-info">
                <h3><Link to="/developer-details">George Wells</Link></h3>
                <div className="freelance-specific">UI/UX Designer</div>
                <div className="freelance-location"><i className="feather-map-pin me-1" />Newyork, USA</div>
              </div>
              <div className="freelance-rating">
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
              </div>
              <div className="freelance-price">
                <div className="freelance-price-img">
                  <img src={price} alt="img" />
                </div>
                <div className="freelance-price-content">
                  <h6>price</h6>
                  <h5>$24 Hourly</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="develop-list-pro">
            <div className="cart-hover">
              <Link to="#" className="btn-invite d-block w-100 mb-2" tabIndex={-1}>Invite</Link>
              <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card list-develop-group">
        <div className="about-author d-flex align-items-center">
          <div className="about-list-author d-flex align-items-center">
            <div className="about-author-img">
              <div className="author-img-wrap">
                <Link to="/developer-details">
                  <img className="img-fluid" alt="Img" src={Img_04} />
                  <span className="verified"><i className="fas fa-check-circle" /></span>
                </Link>
              </div>
            </div>
            <div className="author-details d-flex">
              <div className="freelance-info">
                <h3><Link to="/developer-details">Terri Morales</Link></h3>
                <div className="freelance-specific">UI/UX Designer</div>
                <div className="freelance-location"><i className="feather-map-pin me-1" />Alabama, USA</div>
              </div>
              <div className="freelance-rating">
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">4.7 (12)</span>
                </div>
                <div className="freelance-tags border-0">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
              </div>
              <div className="freelance-price">
                <div className="freelance-price-img">
                  <img src={price} alt="img" />
                </div>
                <div className="freelance-price-content">
                  <h6>price</h6>
                  <h5>$13 Hourly</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="develop-list-pro">
            <div className="cart-hover">
              <Link to="#" className="btn-invite d-block w-100 mb-2" tabIndex={-1}>Invite</Link>
              <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card list-develop-group">
        <div className="about-author d-flex align-items-center">
          <div className="about-list-author d-flex align-items-center">
            <div className="about-author-img">
              <div className="author-img-wrap">
                <Link to="/developer-details">
                  <img className="img-fluid" alt="Img" src={Img_05} />
                  <span className="verified"><i className="fas fa-check-circle" /></span>
                </Link>
              </div>
            </div>
            <div className="author-details d-flex">
              <div className="freelance-info">
                <h3><Link to="/developer-details">Sara Wyatt</Link></h3>
                <div className="freelance-specific">iOS Developer</div>
                <div className="freelance-location"><i className="feather-map-pin me-1" />Newyork, USA</div>
              </div>
              <div className="freelance-rating">
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
              </div>
              <div className="freelance-price">
                <div className="freelance-price-img">
                  <img src={price} alt="img" />
                </div>
                <div className="freelance-price-content">
                  <h6>price</h6>
                  <h5>$18 Hourly</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="develop-list-pro">
            <div className="cart-hover">
              <Link to="#" className="btn-invite d-block w-100 mb-2" tabIndex={-1}>Invite</Link>
              <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card list-develop-group">
        <div className="about-author d-flex align-items-center">
          <div className="about-list-author d-flex align-items-center">
            <div className="about-author-img">
              <div className="author-img-wrap">
                <Link to="/developer-details">
                  <img className="img-fluid" alt="Img" src={Img_04}  />
                  <span className="verified"><i className="fas fa-check-circle" /></span>
                </Link>
              </div>
            </div>
            <div className="author-details d-flex">
              <div className="freelance-info">
                <h3><Link to="/developer-details">Richard Wilson</Link></h3>
                <div className="freelance-specific">SEO Developer</div>
                <div className="freelance-location"><i className="feather-map-pin me-1" />Alabama, USA</div>
              </div>
              <div className="freelance-rating">
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">4.7 (20)</span>
                </div>
                <div className="freelance-tags border-0">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
              </div>
              <div className="freelance-price">
                <div className="freelance-price-img">
                  <img src={price} alt="img" />
                </div>
                <div className="freelance-price-content">
                  <h6>Price</h6>
                  <h5>$63 Hourly</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="develop-list-pro">
            <div className="cart-hover">
              <Link to="#" className="btn-invite d-block w-100 mb-2" tabIndex={-1}>Invite</Link>
              <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card list-develop-group">
        <div className="about-author d-flex align-items-center">
          <div className="about-list-author d-flex align-items-center">
            <div className="about-author-img">
              <div className="author-img-wrap">
                <Link to="/developer-details">
                  <img className="img-fluid" alt="Img" src={Img_02} />
                  <span className="verified"><i className="fas fa-check-circle" /></span>
                </Link>
              </div>
            </div>
            <div className="author-details d-flex">
              <div className="freelance-info">
                <h3><Link to="/developer-details">George Wells</Link></h3>
                <div className="freelance-specific">UI/UX Designer</div>
                <div className="freelance-location"><i className="feather-map-pin me-1" />Newyork, USA</div>
              </div>
              <div className="freelance-rating">
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
              </div>
              <div className="freelance-price">
                <div className="freelance-price-img">
                  <img src={price} alt="img" />
                </div>
                <div className="freelance-price-content">
                  <h6>price</h6>
                  <h5>$24 Hourly</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="develop-list-pro">
            <div className="cart-hover">
              <Link to="#" className="btn-invite d-block w-100 mb-2" tabIndex={-1}>Invite</Link>
              <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card list-develop-group">
        <div className="about-author d-flex align-items-center">
          <div className="about-list-author d-flex align-items-center">
            <div className="about-author-img">
              <div className="author-img-wrap">
                <Link to="/developer-details">
                  <img className="img-fluid" alt="Img" src={Img_03} />
                  <span className="verified"><i className="fas fa-check-circle" /></span>
                </Link>
              </div>
            </div>
            <div className="author-details d-flex">
              <div className="freelance-info">
                <h3><Link to="/developer-details">Terri Morales</Link></h3>
                <div className="freelance-specific">UI/UX Designer</div>
                <div className="freelance-location"><i className="feather-map-pin me-1" />Alabama, USA</div>
              </div>
              <div className="freelance-rating">
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">4.7 (12)</span>
                </div>
                <div className="freelance-tags border-0">
                  <Link to="#"><span className="badge badge-pill badge-design">Web Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">UI Design</span>&nbsp;</Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Node Js</span>&nbsp;</Link>
                </div>
              </div>
              <div className="freelance-price">
                <div className="freelance-price-img">
                  <img src={price} alt="img" />
                </div>
                <div className="freelance-price-content">
                  <h6>price</h6>
                  <h5>$13 Hourly</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="develop-list-pro">
            <div className="cart-hover">
              <Link to="#" className="btn-invite d-block w-100 mb-2" tabIndex={-1}>Invite</Link>
              <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card list-develop-group">
        <div className="about-author d-flex align-items-center">
          <div className="about-list-author d-flex align-items-center">
            <div className="about-author-img">
              <div className="author-img-wrap">
                <Link to="/developer-details">
                  <img className="img-fluid" alt="Img" src={Img_04}  />
                  <span className="verified"><i className="fas fa-check-circle" /></span>
                </Link>
              </div>
            </div>
            <div className="author-details d-flex">
              <div className="freelance-info">
                <h3><Link to="/developer-details">Sara Wyatt</Link></h3>
                <div className="freelance-specific">iOS Developer</div>
                <div className="freelance-location"><i className="feather-map-pin me-1" />Newyork, USA</div>
              </div>
              <div className="freelance-rating">
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
              </div>
              <div className="freelance-price">
                <div className="freelance-price-img">
                  <img src={price} alt="img" />
                </div>
                <div className="freelance-price-content">
                  <h6>price</h6>
                  <h5>$18 Hourly</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="develop-list-pro">
            <div className="cart-hover">
              <Link to="#" className="btn-invite d-block w-100 mb-2" tabIndex={-1}>Invite</Link>
              <Link to="/developer-details" className="btn-cart" tabIndex={-1}>View Profile</Link>
            </div>
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
