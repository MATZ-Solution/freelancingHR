import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { fb_icon, google_icon, ios_icon, logo } from "../imagepath";
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'
import Modal from '../../../admin/component/pages/CustomModal/index'
// import ErrorModal from '../../../admin/component/pages/CustomModal/ErrorsModal';

function FormFreelancer(props) {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm()
  let [freelacerData, setFreelacerData] = useState('')
  const emailrgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/
  const { currentPage } = props;
  let [message, setMessage] = useState('')
  const history = useHistory();

  const submitFormFreelancer = (data) => {
    setFreelacerData(() => setFreelacerData(data))
    // setFreelacerData(data)
    SignUpFreelancer(data)
  }

  const SignUpFreelancer = async (data) => {
    try {
      const registerRequest = await fetch('http://localhost:4500/signup', {

        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, userType: currentPage })
      })

      const response = await registerRequest.json()
      if (response.message === 'User already exists') {
        setMessage(response.message)
      }

      else if (response.message === 'User added successfully') {
        setMessage(response.message)
        setTimeout(() => {
          history.push('/login')
        }, 3000)
      }

      else {
        alert(response.message)
      }
      console.log(message)
    } catch (err) {
      if (err.message === 'Failed to fetch') {
        setMessage("Server Can't respond")
      }
    }
  }

  console.log("this is freelancer", { ...freelacerData, user: currentPage })

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [passwordVisible1, setPasswordVisible1] = useState(false);

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };
  useEffect(() => {
    document.body.className = 'account-page';
    return () => { document.body.className = ''; }
  });

  return (
    <div role="tabpanel" id="company" className="tab-pane fade active show">

      {
        message === "User added successfully" && (
          <Modal message={'SignUp Successfully...'} />
        )
      }

      <form onSubmit={handleSubmit(submitFormFreelancer)} >
        <div className="input-block ">
          <label className="focus-label">First Name <span className="label-star"> *</span></label>
          <input className="form-control floating"
            // ref={register}
            // defaultValue=""
            {...register("firstName", { required: "Please fill First Name" })}
          />
          <p style={{ color: "red" }}>{errors?.firstName?.message}</p>
        </div>

        <div className="input-block ">
          <label className="focus-label">Last Name <span className="label-star"> *</span></label>
          <input className="form-control floating"
            // ref={register}
            {...register("lastName", { required: "Please fill last Name" })}
          />
          <p style={{ color: "red" }}>{errors?.lastName?.message}</p>
        </div>

        <div className="input-block ">
          <label className="focus-label">Email Address<span className="label-star"> *</span></label>

          <input type="email" name='email' className="form-control floating"
            {...register("email", {
              required: "Please fill email",
              pattern: {
                value: emailrgx,
                message: "Invalid Email"
              }

            })}
          />
          <p style={{ color: "red" }}>{errors?.email?.message}</p>
          {message === 'User already exists' && (
            <p style={{ color: "red" }}>User already exists</p>
          )}


        </div>
        <div className="input-block">
          <label className="">Password <span className="label-star"> *</span></label>
          <div className="position-relative">
            <input
              name='password'
              type={passwordVisible ? 'text' : 'password'}
              className="form-control floating pass-input"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              {...register("password", {
                required: "Please fill password",
                pattern: {
                  // value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                  // value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s])[A-Za-z\d^a-zA-Z0-9\s]{8,}$/,

                 value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                  message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character and length should be 8 characters."
                }
              })}
            />
            <p style={{ color: "red" }}>{errors?.password?.message}</p>

            <div className="password-icon" onClick={togglePasswordVisibility}>
              <span className={`fas toggle-password ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`} />
            </div>
          </div>
        </div>
        <div className="input-block mb-0">
          <label className="">Confirm Password <span className="label-star"> *</span></label>
          <div className="position-relative">
            <input
              name='confirmPassword'
              type={passwordVisible1 ? 'text' : 'password'}
              className="form-control floating pass-input"
              // value={password1}
              // onChange={(e) => setPassword1(e.target.value)}
              // ref={register}
              {...register("confirmPassword", {
                required: "Please fill confirm password",
                validate: (value) => value === getValues("password") || "Passwords do not match"
              })}
            />
            <p style={{ color: "red" }}>{errors?.confirmPassword?.message}</p>

            <div className="password-icon" onClick={togglePasswordVisibility1}>
              <span className={`fas toggle-password ${passwordVisible1 ? 'fa-eye' : 'fa-eye-slash'}`} />
            </div>
          </div>
        </div>
        <div className="dont-have">
          <label className="custom_check">
            <input type="checkbox" name="rem_password" />
            <span className="checkmark" /> I have read and agree to all <Link to="/privacy-policy">Terms &amp; Conditions</Link>
          </label>
        </div>
        {/* <Link to="/onboard-screen" className="btn btn-primary w-100 btn-lg login-btn d-flex align-items-center justify-content-center">Sign In Now<i className="feather-arrow-right ms-2" /></Link> */}
        <button
          // onClick={handleSubmit(submitFormFreelancer)}
          type='submit'
          className="btn btn-primary w-100 btn-lg login-btn d-flex align-items-center justify-content-center">Sign Up Now<i className="feather-arrow-right ms-2" /></button>

        <div className="login-or">
          <p><span>Or</span></p>
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
          <div className="col-sm-8 dont-have d-flex  align-items-center">Already have account  <Link to="/login" className="ms-2">Sign in?</Link></div>
        </div>
      </form>
      {/* } */}


    </div>

  )
}

FormFreelancer.propTypes = {
  currentPage: PropTypes.string.isRequired
};

function FormCompany(props) {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm()
  let [companyData, setCompanyData] = useState('')
  const emailrgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/
  const { currentPage } = props;
  let [message, setMessage] = useState('')
  const history = useHistory();

  // const history = useHistory();

  const submitFormCompany = (data) => {
    setCompanyData(data)
    SignUpCompany(data)
    // history.push('/login');

  }

  const SignUpCompany = async (data) => {
    try {
      const registerRequest = await fetch('http://localhost:4500/signUp', {

        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, userType: currentPage })
      })

      const response = await registerRequest.json()
      if (response.message === 'User already exists') {
        setMessage(response.message)
      }

      else if (response.message === 'User added successfully') {
        setMessage(response.message)
        setTimeout(() => {
          history.push('/login')
        }, 2000)
      }

      else {
        alert(response.message)
      }
      console.log(response)
    } catch (err) {
      // cons
      console.log(err)
      console.log("this is error")
    }
  }

  console.log("company data", { ...companyData, user: currentPage })

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [passwordVisible1, setPasswordVisible1] = useState(false);

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };
  useEffect(() => {
    document.body.className = 'account-page';
    return () => { document.body.className = ''; }
  });

  return (
    <div role="tabpanel" id="developer" className="tab-pane fade active show">

      {
        message === "User added successfully" && (
          <Modal message={'SignUp Successfully'} />

        )
      }

      {/* <Modal message={'SignUp Successfully'} /> */}
      <form onSubmit={handleSubmit(submitFormCompany)}>
        <div className="input-block ">
          <label className="focus-label">First Name <span className="label-star"> *</span></label>
          <input className="form-control floating"
            // ref={register}
            {...register("firstName", { required: "Please fill First Name" })}
          />
          <p style={{ color: "red" }}>{errors?.firstName?.message}</p>
        </div>

        <div className="input-block ">
          <label className="focus-label">Last Name <span className="label-star"> *</span></label>
          <input className="form-control floating"
            // ref={register}
            {...register("lastName", { required: "Please fill last Name" })}
          />
          <p style={{ color: "red" }}>{errors?.lastName?.message}</p>
        </div>

        <div className="input-block ">
          <label className="focus-label">Email Address<span className="label-star"> *</span></label>

          <input type="email" name='email' className="form-control floating"
            {...register("email", {
              required: "Please fill email",
              pattern: {
                value: emailrgx,
                message: "Invalid Email"
              }

            })}
          />
          <p style={{ color: "red" }}>{errors?.email?.message}</p>

          {message === 'User already exists' && (
            <p style={{ color: "red" }}>User already exists</p>
          )}

        </div>
        <div className="input-block">
          <label className="">Password <span className="label-star"> *</span></label>
          <div className="position-relative">
            <input
              name='password'
              type={passwordVisible ? 'text' : 'password'}
              className="form-control floating pass-input"
              {...register("password", {
                required: true,
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                }
              })}
            />
            <p style={{ color: "red" }}>{errors?.password?.message}</p>
            <div className="password-icon" onClick={togglePasswordVisibility}>
              <span className={`fas toggle-password ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`} />
            </div>
          </div>
        </div>
        <div className="input-block mb-0">
          <label className="">Confirm Password <span className="label-star"> *</span></label>
          <div className="position-relative">
            <input
              name='confirmPassword'
              type={passwordVisible1 ? 'text' : 'password'}
              className="form-control floating pass-input"
              // value={password1}
              // onChange={(e) => setPassword1(e.target.value)}
              // ref={register}
              {...register("confirmPassword", {
                required: "Please fill confirm password",
                validate: (value) => value === getValues("password") || "Passwords do not match"
              })}
            />
            <p style={{ color: "red" }}>{errors?.confirmPassword?.message}</p>

            <div className="password-icon" onClick={togglePasswordVisibility1}>
              <span className={`fas toggle-password ${passwordVisible1 ? 'fa-eye' : 'fa-eye-slash'}`} />
            </div>
          </div>
        </div>
        <div className="dont-have">
          <label className="custom_check">
            <input type="checkbox" name="rem_password" />
            <span className="checkmark" /> I have read and agree to all <Link to="/privacy-policy">Terms &amp; Conditions</Link>
          </label>
        </div>
        {/* <Link to="/onboard-screen" className="btn btn-primary w-100 btn-lg login-btn d-flex align-items-center justify-content-center">Sign In Now<i className="feather-arrow-right ms-2" /></Link> */}
        <button
          // onClick={handleSubmit(submitFormCompany)} 
          type='submit'
          className="btn btn-primary w-100 btn-lg login-btn d-flex align-items-center justify-content-center">Sign In Now<i className="feather-arrow-right ms-2" /></button>

        <div className="login-or">
          <p><span>Or</span></p>
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
          <div className="col-sm-8 dont-have d-flex  align-items-center">Already have account  <Link to="/login" className="ms-2">Sign in?</Link></div>
        </div>
      </form>
    </div>
  )
}
FormCompany.propTypes = {
  currentPage: PropTypes.string.isRequired
};

const Register = () => {
  let [currentPage, setCurrentPage] = useState('freelancer')

  const handleCurrentPage = (state) => {
    setCurrentPage(state)
  }

  useEffect(() => {
    document.body.className = 'account-page';
    return () => { document.body.className = ''; }
  });


  return (
    <>
      {/* Page Content */}
      <div className="login-wrapper">


        <div className="content w-100">
          {/* Login Content */}
          <div className="account-content">
            <div className="align-items-center justify-content-center">
              <div className="login-right">
                <div className="login-header text-center">
                  <Link to="/"><img src={logo} alt="logo" className="img-fluid" /></Link>
                  <h3>We love to see you joining our community</h3>
                </div>
                <nav className="user-tabs mb-4">
                  <ul role="tablist" className="nav nav-pills nav-justified">
                    <li className="nav-item">
                      <div onClick={() => handleCurrentPage('freelancer')} data-bs-toggle="tab" className="nav-link active">Freelancer</div>
                    </li>
                    <li className="nav-item">
                      <div onClick={() => handleCurrentPage('company')} data-bs-toggle="tab" className="nav-link">Company</div>
                    </li>
                  </ul>
                </nav>
                <div className="tab-content pt-0">

                  {
                    currentPage === 'freelancer' && (
                      <FormFreelancer currentPage={currentPage} />
                    )
                  }

                  {
                    currentPage === 'company' && (
                      <FormCompany currentPage={currentPage} />
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          {/* /Login Content */}
        </div>
      </div>

      {/* /Page Content */}
    </>
  )

}
export default Register;