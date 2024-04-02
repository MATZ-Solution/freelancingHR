/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import {
  company_img1,
  company_img2,
  company_img3,
  company_img4,
  company_img5,
  home_icon,
  sidebar_icon_02,
  table_avatar,
  verified_badge,
} from "../../imagepath";
import { Sidebar } from "../sidebar";
import { Table } from "antd";
// import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";

const Payment = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  const data = [
    {
      Name: "Research",
      TypeofPayment: "Milestone",
      Budget: "$2222",
      Status: "Completed",
      datapaid: "29 Sep 2023",
      Invoice: "",
    },
    {
      Name: "Design",
      TypeofPayment: "Milestone",
      Budget: "$5762",
      Status: "Pending",
      datapaid: "29 Sep 2023",
      Invoice: "",
    },
    {
      Name: "Development",
      TypeofPayment: "Milestone",
      Budget: "$4879",
      Status: "Completed",
      datapaid: "29 Sep 2023",
      Invoice: "",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "TypeofPayment",
      dataIndex: "TypeofPayment",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.TypeofPayment.length - b.TypeofPayment.length,
    },
    {
      title: "Budget",
      dataIndex: "Budget",
      render: (text, record) => <span className={record.bg}>{text}</span>,
      sorter: (a, b) => a.Budget.length - b.Budget.length,
    },
    // {
    //   title: 'Actions',
    //   dataIndex: 'actions',
    //   render: (text, record) => (
    //     <span>
    //       <span className={record.status === 'Pending' ? 'badge badge-pill bg-warning-light' : record.status === 'Completed' ? 'badge badge-pill bg-success-light' : ''}>{text}</span>
    //     </span>
    //   ),
    //   sorter: (a, b) => a.actions.length - b.actions.length,
    // },
    {
      title: "Date Paid",
      dataIndex: "datapaid",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.datapaid.length - b.datapaid.length,
    },

    {
      title: "Action",
      dataIndex: "invoice",
      render: (text, record) => (
        <Link to="#" className="file-circle">
          <i className="feather-download" />
        </Link>
      ),
      sorter: (a, b) => a.invoice.length - b.invoice.length,
    },
  ];
  const getStatusClassName = (status) => {
    if (status === "Pending") {
      return "badge badge-pill bg-warning-light";
    } else if (status === "Completed") {
      return "badge badge-pill bg-success-light";
    } else {
      // Handle other cases if needed
      return "";
    }
  };

  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-lg-8">
              <div className="page-title">
                <h3>Manage Projects</h3>
              </div>
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link" to="/view-project-detail">
                      Overview &amp; Discussions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/milestones">
                      Milestones
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tasks">
                      Tasks
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/files">
                      Files
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/project-payment">
                      Payments
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* project list */}
              <div className="my-projects-view">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="title-head d-flex justify-content-between align-items-center mb-4">
                      <h4 className="mb-0">Payments</h4>
                    </div>
                    <div className="table-responsive table-box manage-projects-table">
                      <Table
                        className="table-striped"
                        pagination={{
                          total: data.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        style={{ overflowX: "auto" }}
                        columns={columns}
                        // bordered
                        dataSource={data}
                        rowKey={(record) => record.id}
                        // onChange={this.handleTableChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* project list */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default Payment;
