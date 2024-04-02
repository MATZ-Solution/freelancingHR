import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import {install_line, money_dollar_box, uninstall_line, wallet_icon } from "../../imagepath";
import { Sidebar } from '../sidebar';
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
const Withdrawmoney = () => {
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  const data = [
    {
      "id":1,
      "Date": "29 Sep 2023, 11:26 PM",
      "ID": "1023456",
      "Type": "Wallet Top-up",
      "PaymentType": "PayPal",
      "Amount": "+$80.00",
      "Fees": "$80.00",
      "Status": "Paid",
      "bg":"text-success"

    },
    {
      "id":2,
      "Date": "17 Sep 2023, 09:14 AM",
      "ID": "1023457",
      "Type": "Project",
      "PaymentType": "Stripe",
      "Amount": "-$20.50",
      "Fees": "$20.50",
      "Status": "Pending",
      "bg":"text-danger"

    },
    {
      "id":3,
      "Date": "13 Sep 2023, 11:15 AM",
      "ID": "1023458",
      "Type": "Income",
      "PaymentType": "Bank Transfer",
      "Amount": "+$35.70",
      "Fees": "$35.70",
      "Status": "Paid",
      "bg":"text-success"
    },
    {
      "id":4,
      "Date": "07 Sep 2023, 05:37 PM",
      "ID": "1023459",
      "Type": "Wallet Top-up",
      "PaymentType": "PayPal",
      "Amount": "+$62.80",
      "Fees": "$62.80",
      "Status": "Pending",
      "bg":"text-success"

    },
    {
      "id":5,
      "Date": "02 Sep 2023, 07:42 PM",
      "ID": "1023460",
      "Type": "Purchase",
      "PaymentType": "Stripe",
      "Amount": "-$73.30",
      "Fees": "$73.30",
      "Status": "Paid",
      "bg":"text-danger"
    }
  ]
  const columns = [
    {
      title: "Date",
      dataIndex: "Date",
      render: (text) => (
        <div>{text}</div>
      ),
      sorter: (a, b) => a.Date.length - b.Date.length,
    },
    {
      title: "ID",
      dataIndex: "ID",
      render: (text) => (
        <div>{text}</div>
      ),
      sorter: (a, b) => a.ID.length - b.ID.length,
    },
    {
      title: "Type",
      dataIndex: "Type",
      render: (text) => (
        <div>{text}</div>
      ),
      sorter: (a, b) => a.Type.length - b.Type.length,
    },
    {
      title: "PaymentType",
      dataIndex: "PaymentType",
      render: (text) => (
        <div>{text}</div>
      ),
      sorter: (a, b) => a.PaymentType.length - b.PaymentType.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      render: (text, record) => (
      <span className={record.bg}>{text}</span>
      ),
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Fees",
      dataIndex: "Fees",
      render: (text) => (
        <div>{text}</div>
      ),
      sorter: (a, b) => a.Fees.length - b.Fees.length,
    },
   
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <span className={record.Status === 'Paid' ? 'bade success-bg-light' : record.Status === 'Pending' ? 'bade danger-bg-light' : ''}>{text}</span>

      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
  ]
  return (
    <>
      {/* Page Content */}
      <div className="content content-page bookmark">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <div className="col-xl-3 col-lg-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-lg-8">
              <div className="dashboard-sec payout-section freelancer-statements">
                <div className="page-title portfolio-title">
                  <h3 className="mb-0">Wallet</h3>
                </div>
                <div className="widget-section">
                  <div className="row row-gap">
                    <div className="col-md-6 col-lg-3 d-flex">
                      <div className="dash-widget flex-fill">
                        <div className="dash-info">
                          <div className="d-flex">
                            <div className="dashboard-icon">
                              <img
                                src={money_dollar_box}
                                alt="icon"
                              />
                            </div>
                            <div className="dash-widget-info">
                              <span>Total Added</span>
                              <h5>$10,000</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex">
                      <div className="dash-widget flex-fill">
                        <div className="dash-info">
                          <div className="d-flex">
                            <div className="dashboard-icon">
                              <img
                                src={wallet_icon}
                                alt="icon"
                              />
                            </div>
                            <div className="dash-widget-info">
                              <span>Wallet Balance</span>
                              <h5>$100</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex">
                      <div className="dash-widget flex-fill">
                        <div className="dash-info">
                          <div className="d-flex">
                            <div className="dashboard-icon">
                              <img
                                src={install_line}
                                alt="icon"
                              />
                            </div>
                            <div className="dash-widget-info">
                              <span>Total Credit</span>
                              <h5>$750</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex">
                      <div className="dash-widget flex-fill">
                        <div className="dash-info">
                          <div className="d-flex">
                            <div className="dashboard-icon">
                              <img
                                src={uninstall_line}
                                alt="icon"
                              />
                            </div>
                            <div className="dash-widget-info">
                              <span>Total Debit</span>
                              <h5>$870</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Table */}
                <div className="table-top-section">
                  <div className="table-header">
                    <h5 className="mb-0">Wallet Transactions</h5>
                  </div>
                  <div className="table-options">
                    <div className="data-search-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                        name="search"
                        id="search"
                      />
                    </div>
                    <Link to="#" className="table-option-btn">
                      <i className="feather-printer" />
                    </Link>
                    <Link to="#" className="table-option-btn">
                      <i className="feather-repeat" />
                    </Link>
                  </div>
                </div>
                <div className="table-responsive">
                  <Table
                    pagination={{
                      total: data.length,
                      showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                      showSizeChanger: true, onShowSizeChange: onShowSizeChange, itemRender: itemRender
                    }}
                    className="table role"
                    style={{ overflowX: "auto" }}
                    columns={columns}
                    dataSource={data}
                    rowKey={(record) => record.id} />
                </div>
                {/* /Table */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>


  )
}
export default Withdrawmoney;