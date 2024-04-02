/* eslint-disable no-unused-vars */
import React from 'react';
import EmployerBreadcrumb from '../foremployers/common/employerBreadcrumb';
const BlankPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <EmployerBreadcrumb title="Project Grid" subtitle="Projects"/>
     {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
  <div className="container">					
    <div className="row">
      <div className="col-12">
        <h5>Blank Page</h5>
      </div>
    </div>
  </div>
</div>
	
      {/* /Page Content */}
    </>
  )
}
export default BlankPage;