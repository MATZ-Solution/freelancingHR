import React from 'react'
import {load_icon} from "../imagepath";
function Loader() {
  return (
    <div>
         <div id="global-loader">
          <div className="whirly-loader"> </div>
          <div className="loader-img">
            <img src={load_icon} className="img-fluid" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Loader