/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TopDevelopers } from "./slider/topdevelopers";
import { Reviews } from "./review";
import { useHistory } from "react-router-dom";
import {
  Banner_img,
  Project_01,
  Project_02,
  Project_03,
  Project_04,
  Project_05,
  Project_06,
  Project_07,
  Project_08,
  Img_02,
  Img_03,
  Img_04,
  Blog_01,
  Blog_02,
  Blog_03,
  Top_icon,
  load_icon,
  categoriesicon1,
  categoriesicon7,
  categoriesicon3,
  categoriesicon4,
  categoriesicon6,
  categoriesicon8,
  categoriesicon5,
  achievement1,
  achievement4,
  achievement3,
  achievement2,
  Recent_icon_01,
  Recent_icon_02,
  work1,
  work2,
  Recent_icon_03,
  work3,
  job1,
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import Select from "react-select";
import CountUp from "react-countup";
import ErrorModal from "../../../admin/component/pages/CustomModal/ErrorsModal";

const Home = () => {
  const [scroll, setScroll] = useState(true);

  const [count, setCount] = useState(10);
  const interval = 1000;
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, interval);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [interval]);
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1200,
  //     once: true,
  //   });
  // }, []);
  const options = [
    { value: 1, label: "Project" },
    { value: 2, label: "Job" },
  ];
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => document.body.classList.remove("home-page");
  }, []);
  useEffect(() => {
    document.body.classList.add("bg-one");
    return () => document.body.classList.remove("bg-one");
  }, []);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY > 150);
  //   });
  //   return () =>
  //     window.removeEventListener("scroll", () => {
  //       setScroll(window.scrollY > 150);
  //     });
  // }, []);



  const handleSelectChange = (selectedOption) => {
    setSearchDetails({ ...searchDetails, select: selectedOption.label  });
  };


  // console.log("this is search details",searchDetails)
  // useEffect(() => {
  //   setTimeout(function () {
  //     $("#global-loader");
  //     setTimeout(function () {
  //       $("#global-loader").fadeOut("slow");
  //     }, 100);
  //   }, 500);
  // }, []);
  const history = useHistory();
  const eventclick = () => {
    let url = '/'

    if (!searchDetails.select || !searchDetails.keyword) {
      return alert("Please Select Fields")
    }

    if (searchDetails.select === 'Project' ) {
      url += `project?keywords=${searchDetails.keyword}`;
    } 
    else if (searchDetails.select === 'Job' ) {
      url += `job?keywords=${searchDetails.keyword}`;
    } 
    else {
      console.log('')
    }

    history.push(url)
  };

  // ###################### VARAIBLE DECLARATION START ####################################################

  let [error, setError] = useState(false)
  let [searchDetails, setSearchDetails] = useState({
    select: null,
    keyword: ""
  })
  let [getProjectCategory, setProjectCategory] = useState({
    allCategory: [],
    error: ''
  })


  // ###################### VARAIBLE DECLARATION  END ####################################################



  // ###################### API START ####################################################

  const getCategory = async () => {
    try {
      const getCategoryRequest = await fetch('http://localhost:4500/project/projectCategoryCount', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const response = await getCategoryRequest.json()
      console.log(response)
      if (!getCategoryRequest.ok) {
        // setError(true)
        setProjectCategory({ ...getProjectCategory, error: "Failed to load Category" })
      }
      if (response.message === 'Success') {
        setProjectCategory({ ...getProjectCategory, allCategory: response?.data })
      }
      // else {
      //   setError(true)
      // }
    } catch (err) {
      console.log(err)
      // setError(true)
      setProjectCategory({ ...getProjectCategory, error: "Failed to load Category" })

    }
  }

  // ###################### API END ####################################################


  // ###################### USE EFFECT START ####################################################

  useEffect(() => {
    getCategory()
  }, [])

  // ###################### USE EFFECT END ####################################################


  if (error) {
    return <ErrorModal message={'Something Went Wrong'} />
  }

  return (
    <>
      <>
        {/* Loader */}
        {/* <div id="global-loader">
          <div className="whirly-loader"> </div>
          <div className="loader-img">
            <img src={load_icon} className="img-fluid" alt="" />
          </div>
        </div> */}
        {/* Loader */}
        {/* Home Banner */}
        <section className="section home-banner row-middle">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8 col-lg-7">
                <div className="banner-content aos" data-aos="fade-up">
                  {/* <div className="rating">
                    <i className="fas fa-star checked" />
                    <i className="fas fa-star checked" />
                    <i className="fas fa-star checked" />
                    <i className="fas fa-star checked" />
                    <i className="fas fa-star checked" />

                    <h5>Trused by over 2M+ users</h5>
                  </div> */}
                  <h1>
                    Get the perfect{" "}
                    <span className="orange-text">
                      <br />
                      Developers &amp; Projects
                    </span>
                  </h1>
                  <p>With the world's #1 Developers marketplace</p>
                  {/* <form
                    className="form"
                    name="store"
                    id="store"
                    method="post"
                    action={`${config.publicPath}project`}
                  > */}
                  {/* <form> */}
                    <div className="form-inner">
                      <div className="input-group">
                        <span className="drop-detail">
                          <Select
                            className="select"
                            options={options}
                            placeholder="Select"
                            // value={searchDetails.select}
                            onChange={handleSelectChange}
                          />
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Keywords"
                          onChange={(e) => { setSearchDetails({ ...searchDetails, keyword: e.target.value }) }}

                        />
                        <button
                          className="btn btn-primary sub-btn"
                          onClick={eventclick}
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  {/* </form> */}
                </div>
              </div>
              <div className="col-md-4 col-lg-5">
                <div className="banner-img aos" data-aos="fade-up">
                  <img src={Banner_img} className="img-fluid" alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Home Banner */}
        {/* Our Feature */}
        <section className="section review">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto text-center">
                <div className="section-header aos" data-aos="fade-up">
                  <h2 className="header-title">Popular Categories</h2>
                  <p>Get some Inspirations from 1300+ skills</p>

                </div>
              </div>
              <div className="row">
                <>
                  {
                    getProjectCategory?.allCategory?.map((data, index) => {
                      return (
                        <div
                          key={index}
                          className="col-lg-3 col-md-6 col-12 aos"
                          data-aos="zoom-in"
                          data-aos-duration={1000}
                        >
                          <div className="popular-catergories">
                            <div className="popular-catergories-img">
                              <span>
                                <img src={categoriesicon1} alt="img" />
                              </span>
                            </div>
                            <div className="popular-catergories-content">
                              <h5>{data?.projectType}</h5>
                              <Link to="#">
                                {data?.count} Skills
                                <i className="feather-arrow-right ms-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </>
                {/* <div
                  className="col-lg-3 col-md-6 col-12 aos"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <div className="popular-catergories">
                    <div className="popular-catergories-img">
                    <span>
                    <img src={categoriesicon7} alt="img" />
                    </span>
                    </div>
                    <div className="popular-catergories-content">
                    <h5>Design &amp; Creative</h5>
                    <Link to="#">
                    515 Skills
                    <i className="feather-arrow-right ms-2" />
                    </Link>
                    </div>
                    </div>
                    </div>
                    <div
                    className="col-lg-3 col-md-6 col-12 aos"
                    data-aos="zoom-in"
                    data-aos-duration={2000}
                    >
                    <div className="popular-catergories">
                    <div className="popular-catergories-img">
                    <span>
                    <img src={categoriesicon3} alt="img" />
                    </span>
                    </div>
                    <div className="popular-catergories-content">
                      <h5>Digital Marketing</h5>
                      <Link to="#">
                        486 Skills
                        <i className="feather-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-12 aos"
                  data-aos="zoom-in"
                  data-aos-duration={2500}
                >
                  <div className="popular-catergories">
                    <div className="popular-catergories-img">
                      <span>
                      <img src={categoriesicon4} alt="img" />
                      </span>
                      </div>
                    <div className="popular-catergories-content">
                      <h5>Writing &amp; Translation</h5>
                      <Link to="#">
                        956 Skills
                        <i className="feather-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-12 aos"
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                >
                  <div className="popular-catergories">
                    <div className="popular-catergories-img">
                      <span>
                        <img src={categoriesicon5} alt="img" />
                      </span>
                    </div>
                    <div className="popular-catergories-content">
                      <h5>Music &amp; Video</h5>
                      <Link to="#">
                        662 Skills
                        <i className="feather-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                  </div>
                  <div
                  className="col-lg-3 col-md-6 col-12 aos"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                  >
                  <div className="popular-catergories">
                  <div className="popular-catergories-img">
                  <span>
                  <img src={categoriesicon6} alt="img" />
                  </span>
                  </div>
                  <div className="popular-catergories-content">
                  <h5>Video &amp; Animation</h5>
                  <Link to="#">
                  226 Skills
                  <i className="feather-arrow-right ms-2" />
                  </Link>
                  </div>
                  </div>
                  </div>
                  <div
                  className="col-lg-3 col-md-6 col-12 aos"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                  >
                  <div className="popular-catergories">
                    <div className="popular-catergories-img">
                      <span>
                        <img src={categoriesicon7} alt="img" />
                      </span>
                    </div>
                    <div className="popular-catergories-content">
                      <h5>Engineering &amp; Architecture</h5>
                      <Link to="#">
                        756 Skills
                        <i className="feather-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                  </div>
                  <div
                  className="col-lg-3 col-md-6 col-12 aos"
                  data-aos="zoom-in"
                  data-aos-duration={2500}
                  >
                  <div className="popular-catergories">
                    <div className="popular-catergories-img">
                      <span>
                        <img src={categoriesicon8} alt="img" />
                      </span>
                    </div>
                    <div className="popular-catergories-content">
                      <h5>Finance &amp; Accounting</h5>
                      <Link to="#">
                        958 Skills
                        <i className="feather-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/*- Developed Project  */}
        <section className="section news pt-0 review-set">
          <div className="container">
            <div className="row">
              {/* Feature Item */}
              <div className="col-lg-6 col-md-12">
                <div
                  className="work-box bg1"
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                >
                  <div className="work-content">
                    <h2>
                      I need a Developed <span>Project</span>
                    </h2>
                    <p>
                      Get the perfect Developed project for your budget from our
                      creative community.
                    </p>
                    <Link to="/project" className="btn btn-primary">
                      Browse
                    </Link>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              <div className="col-lg-6 col-md-12">
                <div
                  className="work-box aos bg2"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                >
                  <div className="work-content ">
                    <h2>
                      Find Your Next Great <span>Job Opportunity!</span>
                    </h2>
                    <p>
                      Do you want to earn money, find unlimited clients and
                      build your freelance career?
                    </p>
                    <Link to="/job" className="btn btn-primary">
                      Browse
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*- /Developed Project  */}
        {/* <section className="section projects pt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto text-center">
                <div className="section-header aos" data-aos="fade-up">
                  <h2 className="header-title">Achievement We Have Earned</h2>
                  <p>
                    At Freelancer, we believe that talent is borderless and
                    opportunity should be too.
                  </p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 aos"
                data-aos="zoom-in"
                data-aos-duration={1000}
              >
                <div className="feature-item freelance-count ">
                  <div className="feature-icon">
                    <img src={achievement1} className="img-fluid" alt="Img" />
                  </div>
                  <div className="feature-content course-count">
                    <h3>
                      <CountUp end={9207} duration={10} />
                    </h3>
                    <p>Freelance developers</p>
                  </div>
                </div>
              </div>
              
              <div
                className="col-xl-3 col-md-6 aos"
                data-aos="zoom-in"
                data-aos-duration={1500}
              >
                <div className="feature-item ">
                  <div className="feature-icon">
                    <img src={achievement2} className="img-fluid" alt="Img" />
                  </div>
                  <div className="feature-content course-count">
                    <h3>
                      <CountUp end={8368} duration={10} />
                    </h3>

                    <p>Projects Added</p>
                  </div>
                </div>
              </div>
           
              <div
                className="col-xl-3 col-md-6 aos"
                data-aos="zoom-in"
                data-aos-duration={2000}
              >
                <div className="feature-item comp-project ">
                  <div className="feature-icon">
                    <img src={achievement3} className="img-fluid" alt="Img" />
                  </div>
                  <div className="feature-content course-count">
                    <h3>
                      <CountUp end={9198} duration={10} />
                    </h3>
                    <p>Completed projects</p>
                  </div>
                </div>
              </div>
           
              <div
                className="col-xl-3 col-md-6 aos"
                data-aos="zoom-in"
                data-aos-duration={2500}
              >
                <div className="feature-item comp-project ">
                  <div className="feature-icon">
                    <img src={achievement4} className="img-fluid" alt="Img" />
                  </div>
                  <div className="feature-content course-count">
                    <h3>
                      <CountUp end={998} duration={10} />
                    </h3>
                    <p>Companies Registered</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section> */}
        {/* /Our Feature */}
        <section className="section review">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="work-set-image">
                  <div className="work-set">
                    <div
                      className="recent-pro-img aos"
                      data-aos="zoom-in"
                      data-aos-duration={1000}
                    >
                      <img src={work1} alt="Img" className="img-fluid " />
                    </div>
                  </div>
                  <div className="work-sets">
                    <div className="recent-pro-img">
                      <img
                        src={work2}
                        alt="Img"
                        className="img-fluid mb-2 aos"
                        data-aos="zoom-in"
                        data-aos-duration={2000}
                      />
                      <img
                        src={work3}
                        alt="Img"
                        className="img-fluid aos"
                        data-aos="zoom-in"
                        data-aos-duration={2500}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aos " data-aos="fade-up">
                  <div className="demand-professional">
                    <h2>Get Expert in Less Time and Our Work Process</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                  <div className="demand-post-job">
                    <div className="demand-post-img">
                      <img
                        src={Recent_icon_01}
                        alt="Img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="demand-content">
                      <h6>Post a job</h6>
                      <p>
                        Publish the job posting on your selected platforms.
                        Follow the specific submission process for each
                        platform.
                      </p>
                    </div>
                  </div>
                  <div className="demand-post-job">
                    <div className="demand-post-img">
                      <img
                        src={Recent_icon_02}
                        alt="Img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="demand-content">
                      <h6>Hire Freelancers</h6>
                      <p>
                        Depending on the platform, you can either wait for
                        freelancers to apply or invite specific freelancers to
                        submit proposals.
                      </p>
                    </div>
                  </div>
                  <div className="demand-post-job">
                    <div className="demand-post-img">
                      <img
                        src={Recent_icon_03}
                        alt="Img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="demand-content">
                      <h6>Get Work Done</h6>
                      <p>
                        Utilize productivity tools and apps to help you stay
                        organized, manage tasks, and set reminders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Projects */}
        {/* <section className="section projects">
          <div className="container"> */}
            {/* <div className="row">
              <div className="col-12 col-md-12 mx-auto">
                <div
                  className="section-header text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">
                    Get Inspired By Development Projects
                  </h2>
                  <p>High performing solutions to your requests</p>
                </div>
              </div>
            </div> */}
            {/* <div className="row"> */}
              {/*- Project Item  */}
              {/* <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="/project">
                      <img src={Project_01} alt="Img" className="img-fluid" />
                    </Link>
                    <h6>Android Apps</h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5>
                        <Link to="/project">Projects</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5>
                        <Link to="/project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*- /Project Item  */}
              {/*- Project Item  */}
              {/* <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="/project">
                      <img src={Project_02} alt="Img" className="img-fluid" />
                    </Link>
                    <h6>Laravel</h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="project-content">
                      <h4>52</h4>
                      <h5>
                        <Link to="/project">Projects</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>17</h4>
                      <h5>
                        <Link to="/project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*- /Project Item  */}
              {/*- Project-Item  */}
              {/* <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="/project">
                      <img src={Project_03} alt="Img" className="img-fluid" />
                    </Link>
                    <h6>React</h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="project-content">
                      <h4>58</h4>
                      <h5>
                        <Link to="/project">Projects</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>12</h4>
                      <h5>
                        <Link to="/project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*- /Project Item  */}
              {/*- Project Item  */}
              {/* <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="/project">
                      <img src={Project_04} alt="Img" className="img-fluid" />
                    </Link>
                    <h6>Angular</h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="project-content">
                      <h4>26</h4>
                      <h5>
                        <Link to="/project">Projects</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>19</h4>
                      <h5>
                        <Link to="/project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*- /Project Item  */}
              {/*- Project Item  */}
              {/* <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="/project">
                      <img src={Project_05} alt="Img" className="img-fluid" />
                    </Link>
                    <h6>.NET</h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="project-content">
                      <h4>45</h4>
                      <h5>
                        <Link to="/project">Projects</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>20</h4>
                      <h5>
                        <Link to="/project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*- /Project Item  */}
              {/*- Project Item  */}
              {/* <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="/project">
                      <img src={Project_06} alt="Img" className="img-fluid" />
                    </Link>
                    <h6>Java</h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="project-content">
                      <h4>49</h4>
                      <h5>
                        <Link to="/project">Projects</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>36</h4>
                      <h5>
                        <Link to="/project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*- /Project Item  */}
              {/*- Project Item  */}
              {/* <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="/project">
                      <img src={Project_07} alt="Img" className="img-fluid" />
                    </Link>
                    <h6>Python</h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="project-content">
                      <h4>73</h4>
                      <h5>
                        <Link to="/project">Projects</Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>59</h4>
                      <h5>
                        <Link to="/project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*- /Project Item  */}
              {/*- Project-Item  */}
              {/* <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="/project">
                      <img src={Project_08} alt="Img" className="img-fluid" />
                    </Link>
                    <h6>PHP</h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="project-content">
                      <h4>61</h4>
                      <h5>
                        <Link to="/project">Projects </Link>
                      </h5>
                    </div>
                    <div className="pro-icon">
                      <div className="project-icon" />
                    </div>
                    <div className="project-content">
                      <h4>53</h4>
                      <h5>
                        <Link to="/project">Developers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*- /Project Item  */}
            {/* </div> */}
            {/* <div className="row">
              <div className="col-md-12 text-center">
                <div className="see-all aos" data-aos="fade-up">
                  <Link to="/project" className="btn all-btn">
                    View More Projects
                  </Link>
                </div>
              </div>
            </div> */}
          {/* </div>
        </section> */}

        {/* /Projects */}
        {/* Top Instructor */}
        <TopDevelopers />
        {/* / Review */}
        {/* <Reviews /> */}
        {/* Company Hire */}
        {/* / Company Hire */}
        {/* News */}
        {/* <section className="section news">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="section-header text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">Our Blog</h2>
                  <p>
                    Freelancing refers to working as an independent contractor
                  </p>
                </div>
              </div>
            </div>
            <div className="row blog-grid-row">
              <div className="col-xl-4 col-md-6 d-flex"> */}
                {/* Blog Post */}
                {/* <div className="blog grid-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={Blog_01}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <Link to="/developer-details">
                            <img src={Img_02} alt="Post Author" />{" "}
                            <span>Aidan Funnell</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="feather-calendar me-1" /> 4 Oct 2023
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="/blog-details">Choose a Blogging Platform</Link>
                    </h3>
                    <p className="mb-0">
                      Select a blogging platform that suits your needs.
                      WordPress, Blogger, and Medium are popular options.
                    </p>
                    <div className="blog-read">
                      <Link to="/blog-details">
                        Read More <i className="fas fa-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div> */}
                {/* /Blog Post */}
              {/* </div>
              <div className="col-xl-4 col-md-6 d-flex"> */}
                {/* Blog Post */}
                {/* <div className="blog grid-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={Blog_02}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <Link to="/developer-details">
                            <img src={Img_03} alt="Post Author" />{" "}
                            <span> Deborah Angel</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="feather-calendar me-1" /> 10 Oct 2023
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="/blog-details">Pick a Domain Name</Link>
                    </h3>
                    <p className="mb-0">
                      Choose a memorable and relevant domain name for your blog.
                      Ideally, it should reflect your niche and personal brand.
                    </p>
                    <div className="blog-read">
                      <Link to="/blog-details">
                        Read More <i className="fas fa-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div> */}
                {/* /Blog Post */}
              {/* </div>
              <div className="col-xl-4 col-md-6 d-flex"> */}
                {/* Blog Post */}
                {/* <div className="blog grid-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={Blog_03}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <Link to="/developer-details">
                            <img src={Img_04} alt="Post Author" />{" "}
                            <span>Darren Elder</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="feather-calendar me-1" /> 3 Nov 2023
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="/blog-details">Analyze and Improve</Link>
                    </h3>
                    <p className="mb-0">
                      Use analytics tools (e.g., Google Analytics) to track your
                      blog's performance. Analyze which content performs well
                      and adjust your strategy accordingly.
                    </p>
                    <div className="blog-read">
                      <Link to="/blog-details">
                        Read More <i className="fas fa-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div> */}
                {/* /Blog Post */}
              {/* </div>
            </div>
          </div>
        </section> */}

        {/* / News */}
        {/* News */}
        <section className="section job-register">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="register-job-blk">
                  <div className="job-content-blk aos" data-aos="fade-up">
                    <h2>Find Your Next Great Job Opportunity!</h2>
                    <p>
                      Quisque pretium dolor turpis, quis blandit turpis semper
                      ut. Nam malesuada eros nec luctus laoreet.
                    </p>
                    <Link to="/register" className="btn all-btn">
                      Join Now
                    </Link>
                  </div>
                  <div
                    className="see-all mt-0 aos opportunity"
                    data-aos="zoom-in"
                  >
                    <img src={job1} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /Main Wrapper */}
        {/* <button
          className={
            scroll
              ? "scroll-top scroll-to-target open"
              : "scroll-top scroll-to-target"
          }
          data-target="html"
        >
          <span className="ti-angle-up">
            <img src={Top_icon} className="img-fluid" alt="" />
          </span>
        </button> */}
      </>
    </>
  );
};
export default Home;
