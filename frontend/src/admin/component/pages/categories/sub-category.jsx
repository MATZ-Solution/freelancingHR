/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Header from '../../../commoncomponent/header';
import Sidebar from "../../../commoncomponent/sidebar";
// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import "../../../antdstyle.css";
import Select from "react-select";

const SubCategory = () => {
  // const [date, setDate] = useState(new Date());
  const [inputfilter, setInputfilter] = useState(false);
  const [selectedSize, setSelectedSize] = useState();
  // const handleChange = (date) => {
  //     setDate(date)
  // }
  const togglefilter = (value) => {
    setInputfilter(value);
  };
  const data = [
    {
      id: 1,
      parentcategory: "Graphics &amp; Design",
      subcategoryname: "Design a Website Mockup",
    },
    {
      id: 2,
      parentcategory: "Graphics &amp; Design",
      subcategoryname: "Design a Banner",
    },
    {
      id: 3,
      parentcategory: "Web Design",
      subcategoryname: "Design a Website",
    },
    {
      id: 4,
      parentcategory: "Graphics &amp; Design",
      subcategoryname: "Design a Logo",
    },
    {
      id: 5,
      parentcategory: "Web Design",
      subcategoryname: "Design a Admin panel",
    },
    {
      id: 6,
      parentcategory: "Angular",
      subcategoryname: "Website Design",
    },
    {
      id: 7,
      parentcategory: "Angular",
      subcategoryname: "web application Development",
    },
  ];
  const columns = [
    {
      title: "Parent Category",
      dataIndex: "parentcategory",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.ParentCategory.length - b.ParentCategory.length,
    },
    {
      title: "Sub Category Name",
      dataIndex: "subcategoryname",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.SubCategoryName.length - b.SubCategoryName.length,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <>
          <div>
            <Link
              to="#"
              className="btn btn-sm btn-secondary me-2"
              data-bs-toggle="modal"
              data-bs-target="#edit-category"
            >
              <i className="far fa-edit" />
            </Link>
            <Link
              to="#"
              className="btn btn-sm btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#delete_category"
            >
              <i className="far fa-trash-alt" />
            </Link>
          </div>
        </>
      ),
    },
  ];
  const options = [
    { value: 1, label: "Select A Parent Category" },
    { value: 2, label: "Graphics Design" },
    { value: 3, label: "Graphics Design" },
  ];
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* <Header /> */}
          <Sidebar />
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Sub Categories</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="index">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="fees">Categories</Link>
                  </li>
                  <li className="breadcrumb-item active">Sub Categories</li>
                </ul>
              </div>
              <div className="col-auto">
                <Link
                  to="#"
                  className="btn add-button me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#add-category"
                >
                  <i className="fas fa-plus" />
                </Link>
                <Link className="btn filter-btn" to="#" id="filter_search">
                  <i
                    className="fas fa-filter"
                    onClick={() => togglefilter(!inputfilter)}
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Search Filter */}
          <div
            className="card filter-card"
            id="filter_inputs"
            style={{ display: inputfilter ? "block" : "none" }}
          >
            <div className="card-body pb-0">
              <form>
                <div className="row filter-row">
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <label>Parent Category</label>
                      <Select
                        className="select"
                        options={options}
                        placeholder="Select A Parent Category"
                      />
                      {/* <select className="form-control select">
                                                    <option>Select A Parent Category</option>
                                                    <option>Graphics &amp; Design</option>
                                                    <option>Graphics &amp; Design</option>
                                                </select> */}
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <label>Sub Category Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* /Search Filter */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-center table-hover mb-0 datatable">
                      <Table
                        pagination={{
                          total: data.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        className="table"
                        style={{ overflowX: "auto" }}
                        columns={columns}
                        dataSource={data}
                        rowKey={(record) => record.id}
                      />
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* Add Modal */}
            <div className="modal fade custom-modal" id="add-category">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  {/* Modal Header */}
                  <div className="modal-header">
                    <h4 className="modal-title">Add Sub Categories</h4>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                    >
                      <span>×</span>
                    </button>
                  </div>
                  {/* Modal body */}
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label>Select A Parent Category</label>
                        {/* <Select2
                                                    className="select form-control"
                                                    data={options}
                                                    options={{
                                                        placeholder: 'Select A Parent Category',
                                                    }} /> */}
                        <Select
                          className="select"
                          options={options}
                          placeholder="Select A Parent Category"
                        />
                      </div>
                      <div className="form-group">
                        <label>Sub Category Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Create a Sub Category"
                        />
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Add Modal */}
            {/* Edit Modal */}
            <div className="modal fade custom-modal" id="edit-category">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  {/* Modal Header */}
                  <div className="modal-header">
                    <h4 className="modal-title">Edit Sub Categories</h4>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                    >
                      <span>×</span>
                    </button>
                  </div>
                  {/* Modal body */}
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label>Select A Parent Category</label>
                        <Select
                          //   className="form-select"
                          options={options}
                          placeholder="Select A Parent Category"
                        />
                        {/* <Select2
                                                    className="select form-control"
                                                    data={options}
                                                    options={{
                                                        placeholder: 'Select A Parent Category',
                                                    }} /> */}
                        {/* <select className="form-select form-control"> */}
                        {/* <select
                                                    value={selectedSize}
                                                    defaultValue={"Graphics &amp; Design"}
                                                    onChange={(e) => setSelectedSize(e.target.value)}
                                                >
                                                    <option value={"Select A Parent Category"}>Select A Parent Category</option>
                                                    <option value={"Graphics &amp; Design"}>Graphics &amp; Design</option>
                                                    {/* <option selected="">Graphics &amp; Design</option> */}
                        {/* <option value={"Web Design"}>Web Design</option>
                                                </select>  */}
                        {/* <h1>You selected {selectedSize}</h1> */}
                      </div>
                      <div className="form-group">
                        <label>Sub Category Name</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Design a Banner"
                        />
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Edit Modal */}
            {/* Delete Modal */}
            <div
              className="modal custom-modal fade"
              id="delete_category"
              role="dialog"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="form-header">
                      <h3>Delete</h3>
                      <p>Are you sure want to delete?</p>
                    </div>
                    <div className="modal-btn delete-action">
                      <div className="row">
                        <div className="col-6">
                          <Link to="#" className="btn btn-primary continue-btn">
                            Delete
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="#"
                            data-bs-dismiss="modal"
                            className="btn btn-primary cancel-btn"
                          >
                            Cancel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Delete Modal */}
          </div>
        </div>
      </div>
    </>
  );
};
export default SubCategory;
