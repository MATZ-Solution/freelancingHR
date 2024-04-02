import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const EmployerBreadcrumb = (props) => {
  const { coverImage, title, subtitle } = props;
  return (

    <div className="bread-crumb-bar">
      <div className="container">
        <div className="row align-items-center"
          style={{ padding: '60px 0', backgroundImage: `url(${coverImage})`, backgroundSize: '100% auto' }}
        >
          <div className="col-md-12 col-12 text-center">
            <div className="breadcrumb-list">
              <h2>{title}</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/"> Home</Link></li>
                  <li className="breadcrumb-item" aria-current="page">{subtitle}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

EmployerBreadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired
};

export default EmployerBreadcrumb