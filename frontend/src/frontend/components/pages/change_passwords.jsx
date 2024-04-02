import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const ChangePasswords = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [password1, setPassword1] = useState('');

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [password2, setPassword2] = useState('');

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };
  useEffect(() => {
    document.body.className = 'account-page';
    return () => { document.body.className = ''; }
  });
  return (
    <>
      {/* Page Content */}
      <div className="login-wrapper">
        <div className="content w-100">
          <div className="container">
            {/* Login Content */}
            <div className="account-content">
              <div className="align-items-center justify-content-center">
                <div className="login-right">
                  <div className="login-header text-center">
                    <h2>Password Change</h2>
                    <span>Change New Password</span>
                  </div>
                  <form>
                    <div className="input-block">
                      <label className="">Old Password <span className="label-star"> *</span></label>
                      <div className="position-relative">
                        <input
                          type={passwordVisible ? 'text' : 'password'}
                          className="form-control floating pass-input"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="password-icon" onClick={togglePasswordVisibility}>
                          <span className={`fas toggle-password ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`} />
                        </div>
                      </div>
                    </div>
                    <div className="input-block">
                      <label className="">New Password <span className="label-star"> *</span></label>
                      <div className="position-relative">
                        <input
                          type={passwordVisible1 ? 'text' : 'password'}
                          className="form-control floating pass-input"
                          value={password1}
                          onChange={(e) => setPassword1(e.target.value)}
                        />
                        <div className="password-icon" onClick={togglePasswordVisibility1}>
                          <span className={`fas toggle-password ${passwordVisible1 ? 'fa-eye' : 'fa-eye-slash'}`} />
                        </div>
                      </div>
                    </div>
                    <div className="input-block">
                    <label className="">Confirm New Password <span className="label-star"> *</span></label>
                    <div className="position-relative">
                      <input
                        type={passwordVisible2 ? 'text' : 'password'}
                        className="form-control floating pass-input"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                      />
                      <div className="password-icon" onClick={togglePasswordVisibility2}>
                        <span className={`fas toggle-password ${passwordVisible2  ? 'fa-eye' : 'fa-eye-slash'}`} />
                      </div>
                    </div>
                  </div>
                    <Link to ="/dashboard" className="btn btn-primary btn-lg login-btn d-flex align-items-center justify-content-center w-100" type="submit">Password Change<i className="feather-arrow-right ms-2" /></Link>
                  </form>
                </div>
              </div>
            </div>
            {/* /Login Content */}
          </div>
        </div>
      </div>
      {/* /Page Content */}

    </>
  )

}
export default ChangePasswords;