/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { fb_icon, google_icon, ios_icon, logo } from "../imagepath";
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import Modal from '../../../admin/component/pages/CustomModal/index'
import ErrorModal from '../../../admin/component/pages/CustomModal/ErrorsModal';
// import ErrorModal from '../../../admin/component/pages/CustomModal/ErrorsModal';
// import { FaCheckCircle } from "react-icons/fa";
const Login = () => {
  const history = useHistory();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState('');
  const emailrgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/
  const { register, handleSubmit, formState: { errors } } = useForm()

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const submitForm = (data) => {
    console.log(data)
    LogIn(data)
  }

  const LogIn = async (data) => {
    try {
      const loginRequest = await fetch('http://localhost:4500/signin', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      const response = await loginRequest.json()
      console.log(response)
      console.log("this is message: ", response?.message)

      if (response?.message === "Email not found") {
        setMessage(response?.message)
      }

      else if (response?.message === 'Incorrect Password') {
        setMessage(response?.message)
      }

      else if (response?.message === 'SignIn successfully') {
        setMessage(response?.message)
        localStorage.setItem('token', response?.token);

        setTimeout(() => {
          if (response.data[0].userType === 'freelancer') {
            history.push('/freelancer-dashboard')
          } else {
            history.push('/company-dashboard')
          }
        }, 2000)
      }
      else {
        setMessage(response.error?.message)
      }
    } catch (err) {
  
      if (err.message === 'Failed to fetch') {
        setMessage("Server Can't respond")

      }
    }
  }

  console.log("this is message:",message)

  useEffect(() => {
    document.body.className = 'account-page';
    return () => { document.body.className = ''; }
  });

  return (
    <>
      {/* Page Content */}
      <div className="login-wrapper">
        {
          message === "SignIn successfully" && (
            <Modal message={'SignIn Successfully'} />
          )
        }
        {
          message === "Server Can't respond" || message === "Some thing wents wrong"?
            <ErrorModal message={message}/>
            :
            <div className="content">
              {/* Login Content */}
              <div className="account-content">
                <div className="align-items-center justify-content-center">
                  <div className="login-right">
                    <div className="login-header text-center">
                      <Link to="/"><img src={logo} alt="logo" className="img-fluid" /></Link>
                      <h3>Welcome! Nice to see you again</h3>
                    </div>
                    <form onSubmit={handleSubmit(submitForm)}>
                      <div className="input-block">
                        <label className="focus-label">Email Address <span className="label-star"> *</span></label>
                        <input type="text" className="form-control floating"
                          {...register("email", {
                            required: "Please fill email",
                            pattern: {
                              value: emailrgx,
                              message: "Invalid Email"
                            }

                          })}
                        />
                        <p style={{ color: "red" }}>{errors?.email?.message}</p>
                        {
                          message === 'Email not found' && (<p style={{ color: "red" }}>{message}</p>)
                        }
                        {/* <p style={{ color: "red" }}>{errors?.email?.message}</p> */}

                      </div>
                      <div className="input-block">
                        <label className="">Password <span className="label-star"> *</span></label>
                        <div className="position-relative">
                          <input
                            type={passwordVisible ? 'text' : 'password'}
                            className="form-control floating pass-input"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            {...register("password", {
                              required: "Please fill password",
                              // pattern: {
                              //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              //   message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character and length should be 8 characters."
                              // }
                            })}
                          />
                          <p style={{ color: "red" }}>{errors?.password?.message}</p>
                          {
                            message === 'Incorrect Password' && (<p style={{ color: "red" }}>{message}</p>)
                          }
                          <div className="password-icon" onClick={togglePasswordVisibility}>
                            <span className={`fas toggle-password ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`} />
                          </div>
                        </div>
                      </div>
                      <button type='submit' className="btn btn-primary w-100 btn-lg login-btn d-flex align-items-center justify-content-center">
                        Login Now
                        <i className="feather-arrow-right ms-2" />
                      </button>
                      <div className="login-or">
                        <p><span>OR</span></p>
                      </div>
                      <div className="row social-login">
                        <div className="col-sm-4">
                          <Link to="#" className="btn btn-block"><img src={google_icon} alt="Google" />Google</Link>
                        </div>
                        <div className="col-sm-4">
                          <Link to="#" className="btn btn-block"><img src={fb_icon} alt="Fb" />Facebook</Link>
                        </div>
                        <div className="col-sm-4">
                          <Link to="#" className="btn btn-block"><img src={ios_icon} alt="Apple" />Apple</Link>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-8 dont-have d-flex  align-items-center">New to XGEN Freelancing Platform <Link to="/register" className="ms-2">Signup?</Link></div>
                        <div className="col-sm-4 text-sm-end">
                          <Link className="forgot-link" to="/forgot-password">Lost Password?</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Login Content */}
            </div>
        }

      </div>

      {/* /Page Content */}
    </>
  )
}
export default Login;