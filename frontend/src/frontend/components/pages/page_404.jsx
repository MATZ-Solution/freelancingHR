import React from "react";
import { Link } from "react-router-dom";
// Import Images
import { Img_404 } from "../imagepath";
const Page404 = () => {
        return (
          <>
          {/* Page Content */}
       <div className="content">
  <div className="container-fluid">					
    <div className="row">
      <div className="col-md-8 offset-md-2">
        {/* Page Not Found */}
        <div className="empty-content text-center">
          <img src={Img_404} alt="logo" className="img-fluid" />
          <h2>Page not found</h2>
          <p>Oops! looks like you followed a bad link. If you think this is a problem with us, please tell us.</p>
          <div className="btn-item">
            <Link className="btn get-btn" to="/">Go To Home <i className="feather-arrow-right ms-2" /></Link>
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
export default Page404;