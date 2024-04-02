import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ErrorModal = (props) => {
  const { message } = props;

  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Page Not Found */}
              <div className="empty-content text-center">
                {/* <img src={Img_404} alt="logo" className="img-fluid" />
          <h2>Page not found</h2> */}
                <h2>{message}</h2>
                <div className="btn-item" style={{display:"flex", flexWrap:"wrap",alignItems:"center", justifyContent:"center"}}>
                  <div  style={{display:"flex"}}>
                  <Link className="btn get-btn" to="/">Go To Home <i className="feather-arrow-right ms-2" /></Link>

                  </div>
                  <Link className="btn courses-btn" to="#">Back <i className="feather-arrow-right ms-2" /></Link>
                </div>
              </div>
              {/* / Page Not Found */}
            </div>
          </div>
        </div>
      </div>

      {/* /Page Content */}
    </>
  )

}

ErrorModal.propTypes = {
  message: PropTypes.string.isRequired
};
export default ErrorModal;