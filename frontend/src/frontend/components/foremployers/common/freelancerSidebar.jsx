import React from "react";
import { Link } from "react-router-dom";

const FreelancerSidebar = () => {
  return (
    <div className="card search-filter">
      <div className="card-header d-flex justify-content-between">
        <h4 className="card-title mb-0">Search Filter</h4>
      </div>
      <div className="card-body">
        <div className="filter-widget">
          <h4 className="filter-title">
            <Link
              to="#"
              className="w-100"
              data-bs-toggle="collapse"
              data-bs-target="#collapselocation"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Location
              <span className="float-end">
                <i className="fa-solid fa-chevron-down" />
              </span>
            </Link>
          </h4>
          <div
            id="collapselocation"
            className="collapse show"
            data-bs-parent="#accordionExample1"
          >
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" />
                USA (25)
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" /> IND (62)
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" />
                UK (46)
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" />
                AUS (37)
              </label>
            </div>
            <div
              id="collapseOnes3"
              className="collapse"
              data-bs-parent="#accordionExample1"
            >
              <div>
                <label className="custom_check">
                  <input type="checkbox" name="select_time" />
                  <span className="checkmark" /> IND (62)
                </label>
              </div>
              <div>
                <label className="custom_check">
                  <input type="checkbox" name="select_time" />
                  <span className="checkmark" />
                  UK (46)
                </label>
              </div>
              <div>
                <label className="custom_check">
                  <input type="checkbox" name="select_time" />
                  <span className="checkmark" />
                  AUS (37)
                </label>
              </div>
            </div>
            <div className="showmore mt-2">
              <Link
                to="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOnes3"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i className="feather-plus me-1" />
                Show More
              </Link>
            </div>
          </div>
        </div>
        <div className="filter-widget">
          <h4 className="filter-title">
            <Link
              to="#"
              className="w-100"
              data-bs-toggle="collapse"
              data-bs-target="#collapseskills"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Skills
              <span className="float-end">
                <i className="fa-solid fa-chevron-down" />
              </span>
            </Link>
          </h4>
          <div
            id="collapseskills"
            className="collapse show"
            data-bs-parent="#accordionExample1"
          >
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" /> After Effects (6)
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" /> Android Developer (7)
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" /> Backend Developer (7)
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" /> Computer Operator (1)
              </label>
            </div>
            <div
              id="collapseOnes1"
              className="collapse"
              data-bs-parent="#accordionExample1"
            >
              <div>
                <label className="custom_check">
                  <input type="checkbox" name="select_time" />
                  <span className="checkmark" /> After Effects (6)
                </label>
              </div>
              <div>
                <label className="custom_check">
                  <input type="checkbox" name="select_time" />
                  <span className="checkmark" /> Android Developer (7)
                </label>
              </div>
              <div>
                <label className="custom_check">
                  <input type="checkbox" name="select_time" />
                  <span className="checkmark" /> Backend Developer (7)
                </label>
              </div>
              <div>
                <label className="custom_check">
                  <input type="checkbox" name="select_time" />
                  <span className="checkmark" /> Computer Operator (1)
                </label>
              </div>
            </div>
            <div className="showmore mt-2">
              <Link
                to="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOnes1"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i className="feather-plus me-1" />
                Show More
              </Link>
            </div>
          </div>
        </div>
        <div className="filter-widget">
          <h4 className="filter-title">
            <Link
              to="#"
              className="w-100"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Category
              <span className="float-end">
                <i className="fa-solid fa-chevron-down" />
              </span>
            </Link>
          </h4>
          <div
            id="collapseOne"
            className="collapse show"
            data-bs-parent="#accordionExample1"
          >
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" /> Developer (25)
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" /> UI Developer (62)
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" /> React Developer (46)
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" /> .Net Developer (37)
              </label>
            </div>
            <div
              id="collapseOnes"
              className="collapse"
              data-bs-parent="#accordionExample1"
            >
              <div>
                <label className="custom_check">
                  <input type="checkbox" name="select_time" />
                  <span className="checkmark" /> UI Developer (62)
                </label>
              </div>
              <div>
                <label className="custom_check">
                  <input type="checkbox" name="select_time" />
                  <span className="checkmark" /> React Developer (46)
                </label>
              </div>
              <div>
                <label className="custom_check">
                  <input type="checkbox" name="select_time" />
                  <span className="checkmark" /> .Net Developer (37)
                </label>
              </div>
            </div>
            <div className="showmore mt-2">
              <Link
                to="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOnes"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i className="feather-plus me-1" />
                Show More
              </Link>
            </div>
          </div>
        </div>
        <div className="filter-widget">
          <h4 className="filter-title">
            <Link
              to="#"
              className="w-100"
              data-bs-toggle="collapse"
              data-bs-target="#collapsproject"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Freelancer Type
              <span className="float-end">
                <i className="fa-solid fa-chevron-down" />
              </span>
            </Link>
          </h4>
          <div
            id="collapsproject"
            className="collapse show"
            data-bs-parent="#accordionExample1"
          >
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" />
                Fixed (6)
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" />
                Hourly (7)
              </label>
            </div>
          </div>
        </div>
        <div className="filter-widget">
          <h4 className="filter-title">
            <Link
              to="#"
              className="w-100"
              data-bs-toggle="collapse"
              data-bs-target="#collapselanguage"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Languages
              <span className="float-end">
                <i className="fa-solid fa-chevron-down" />
              </span>
            </Link>
          </h4>
          <div
            id="collapselanguage"
            className="collapse show"
            data-bs-parent="#accordionExample1"
          >
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" /> English (5)
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" /> Arabic (2)
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" />
                German (1)
              </label>
            </div>
            <div
              id="collapseOnes2"
              className="collapse"
              data-bs-parent="#accordionExample1"
            >
              <div>
                <label className="custom_check">
                  <input type="checkbox" name="select_time" />
                  <span className="checkmark" /> English (5)
                </label>
              </div>
              <div>
                <label className="custom_check">
                  <input type="checkbox" name="select_time" />
                  <span className="checkmark" /> Arabic (2)
                </label>
              </div>
              <div>
                <label className="custom_check">
                  <input type="checkbox" name="select_time" />
                  <span className="checkmark" />
                  German (1)
                </label>
              </div>
            </div>
            <div className="showmore mt-2">
              <Link
                to="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOnes2"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i className="feather-plus me-1" />
                Show More
              </Link>
            </div>
          </div>
        </div>
        <div className="filter-widget">
          <h4 className="filter-title">
            <Link
              to="#"
              className="w-100"
              data-bs-toggle="collapse"
              data-bs-target="#collapselanguagea"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Freelancer Type
              <span className="float-end">
                <i className="fa-solid fa-chevron-down" />
              </span>
            </Link>
          </h4>
          <div
            id="collapselanguagea"
            className="collapse show"
            data-bs-parent="#accordionExample1"
          >
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" />
                Full Time (3)
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" /> Part Time (4)
              </label>
            </div>
            <div>
              <label className="custom_check">
                <input type="checkbox" name="select_time" />
                <span className="checkmark" />
                Project Based (2)
              </label>
            </div>
          </div>
        </div>
        <div className="btn-search">
          <button type="button" className="btn btn-primary">
            Search
          </button>
          <button type="button" className="btn btn-block">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerSidebar;
