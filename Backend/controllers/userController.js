const {
  sendMail,
  // sendMailLandlord,
} = require("../sendmail/sendmail.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const imageToDelete = require("./../middleware/deleteImage.js");
const { serialize } = require("cookie");
const {
  selectQuery,
  deleteQuery,
  insertInUsers,
  updateUserCoverImage,
  updateUserProfileImage,
  updateProfileHeaderQuery,
  updateProfileOverviewQuery,
  insertUserExperienceQuery,
  insertUserEducationQuery,
  insertskillQuery,
  updateCompanyProfileQuery,
  updateUseraddressQuery,
  insertProjectQuery,
  insertInCompany,
  projectSearchQuery,
  jobSearchQuery,
  userDashboardQuery,
  websiteCountQuery

} = require("../constants/queries");

const { hashedPassword } = require("../helper/hash");
const { queryRunner } = require("../helper/queryRunner");
// const userServices = require("../Services/userServices");
const imageUploads = require("./../middleware/imageUploads")
const { log } = require("console");
const config = process.env;





// ###################### user Create #######################################
exports.createUser = async function (req, res) {
  const { firstName, lastName, email, password, userType } = req.body;
  const currentDate = new Date();
  try {
    const selectResult = await queryRunner(selectQuery("user", "Email"),[email]);
    // const selectResult = await queryRunner(getuserQuery,[email]);
    // const result = mysqliQuery(conn,qyery)
    if (selectResult[0].length > 0) {
      return res.status(400).send("Email already exists");
    }

    const hashPassword = await hashedPassword(password);
    const salt = bcrypt.genSaltSync(10);
    const id = bcrypt
      .hashSync(lastName + new Date().getTime().toString(), salt)
      .substring(0, 10);
    const insertResult = await queryRunner(insertInUsers, [
      firstName,
      lastName,
      email,
      hashPassword,
      userType,
      currentDate,
    ]);
    const name = firstName + " " + lastName;
    const mailSubject = "Freelancing HR Welcome Email";
    if (insertResult[0].affectedRows > 0) {
      
      // await sendMail(email, mailSubject, name);
      if(userType == "company"){
        const insertCompanyIdResult = await queryRunner(insertInCompany, [insertResult[0].insertId]); 
      }
      return res.status(200).json({ 
        message: "User added successfully",
        id : insertResult[0].insertid
      });
    } else {
      return res.status(500).send("Failed to add user");
    }
  } catch (error) {
    return res.status(500).json({
      message : "Failed to add user",
       message: error.message 
      });
  }
};
// ###################### user Create #######################################

// ###################### SignIn user start #######################################
exports.signin = async function (req, res) {

  const { email, password } = req.body;
  try {
      const selectResult = await queryRunner(selectQuery("user", "email"), [
        email,
      ]);
      if (selectResult[0].length === 0) {
        return res.status(200).json({
          statusCode : 200, 
          message: "Email not found",
        });
      } else if (await bcrypt.compare(password, selectResult[0][0].password)) {
        const id = selectResult[0][0].id;

        const token = jwt.sign({ email, id }, "11madklfnqo3393", {
          expiresIn: "3h",
        });
        return res.status(200).json({ 
          message: "SignIn successfully",
          id,
          token,
          data : selectResult[0] 
        });
        
      } else {
        return res.status(500).json({
          statusCode : 500, 
          message: "Incorrect Password",
        });
      }
    
  } catch (error) {
    // console.log(error);
    // res.status(400).send(error.message);
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to SignIn",
      error: error.message
    });
    

  }
};
// ###################### SignIn user End #######################################


// ###################### Forget Password start #######################################
exports.ForgetPassword = async function (req, res) {
  const { email } = req.body;
  try {
      const selectResult = await queryRunner(selectQuery("user", "email"), [
        email,
      ]);
      if (selectResult[0].length === 0) {
        return res.status(200).json({
          statusCode : 200, 
          message: "Email not found",
        });
      } else if (await bcrypt.compare(password, selectResult[0][0].password)) {
        const id = selectResult[0][0].id;
        // const token = jwt.sign({ email, id }, config.JWT_SECRET_KEY, {
        const token = jwt.sign({ email, id }, "11madklfnqo3393", {
          expiresIn: "3h",
        });
        return res.status(200).json({ 
          message: "SignIn successfully",
          id,
          token,
          data : selectResult[0] 
        });
        
      } else {
        return res.status(500).json({
          statusCode : 500, 
          message: "Incorrect Password",
        });
      }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Forget password",
      error: error.message
    });
  }
};
// ###################### Forget Password End #######################################



// ###################### Protected user Start #######################################

exports.getUser = (req, res) => {
  // console.log(req.user);
  res.status(200).json(req.user);
};
// ###################### Protected user End #######################################


// ###################### Cover Image start #######################################
exports.uploadCoverImage = async function (req, res) {
  try {
    const {userId} = req.user;
    const imageUrl = await imageUploads.uploadImage(req.file);
    const coverImage = await queryRunner(updateUserCoverImage, [imageUrl.url,imageUrl.asset_id, userId]);
    if (coverImage[0].affectedRows > 0) {
      res.status(200).json({
        message: "User Cover Image updated successfully",
      });
    }
  } catch (error) {
    // console.error(error);
    // res.status(500).json({ error: 'Failed to upload file' });

    return res.status(500).json({
      statusCode : 500,
      message: "Failed to upload cover Image",
      error: error.message
    });
  }
};
// ###################### Cover Image End #######################################

// ###################### Profile Image start #######################################
exports.uploadProfileImage = async function (req, res) {
  try {
    const {userId} = req.user;
    const imageUrl = await imageUploads.uploadImage(req.file);
    const profileImage = await queryRunner(updateUserProfileImage, [imageUrl.url,imageUrl.asset_id, userId]);
    if (profileImage[0].affectedRows > 0) {
      res.status(200).json({
        message: "User Profile Image updated successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to upload profile Image",
      error: error.message
    });
  }
};
// ###################### Profile Image End #######################################



// ###################### Profile Image start #######################################
exports.profileHeader = async (req, res)=> {
  try {
    const {professionalHeadline, worktype,address, hourlyRate, country, city, state, zipcode } = req.body;
    const {userId} = req.user;
    const currentDate = new Date();
    const profileHeaderResult = await queryRunner(
      updateProfileHeaderQuery,
      [professionalHeadline, worktype,address,hourlyRate,country, city, state, zipcode, currentDate,userId]);
       if (profileHeaderResult[0].affectedRows > 0) {
      res.status(200).json({
        statusCode : 200,
        message: "User Profile Header updated successfully",
      });
    }
  } catch (error) {
    // console.error(error);
    // res.status(500).json({ error: error.message });
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to saved profile header",
      error: error.message
    });
  }
};
// ###################### Profile Image End #######################################

// ###################### Profile Overview start #######################################
exports.profileOverview = async (req, res)=> {
  try {
    const { overview } = req.body;
    const {userId} = req.user;
    const currentDate = new Date();
    console.log(overview, currentDate,userId);
    const profileHeaderResult = await queryRunner(
      updateProfileOverviewQuery,
       [overview, currentDate,userId]);
    if (profileHeaderResult[0].affectedRows > 0) {
      res.status(200).json({
        statusCode : 200,
        message: "User Profile Header updated successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to save profile overview",
      error: error.message
    });
  }
};
// ###################### Profile Overview End #######################################


// ###################### user experience Start #######################################
exports.experience = async (req, res)=> {
  const {title,employmentType,companyName,Location,locationType,startDate,endDate,Description } = req.body;
  const {userId} = req.user;
  const currentDate = new Date();
  try {
    // console.log(req.body);
    const insertResult = await queryRunner(
      insertUserExperienceQuery, 
      [title,employmentType,companyName,Location,locationType,startDate,endDate,Description,userId]);
    if (insertResult[0].affectedRows > 0) {
      return res.status(200).json({ 
        message: "User Experience added successfully",
        id : insertResult[0].insertId
      });
    } else {
      return res.status(500).send("Failed to add user experience");
    }
  } catch (error) {
      return res.status(500).json({
        statusCode : 500,
        message : "Failed to add user experience",
        error: error.message
      });
  }
};
// ###################### user experience END #######################################


// ###################### user education Start #######################################
exports.education = async (req, res)=> {
  const {
    school,
    degree,
    fieldStudy,
    startDate,
    endDate,
    grade,
    Description,

   } = req.body;
  const {userId} = req.user;
  const currentDate = new Date();
  try {
    const insertResult = await queryRunner(
      insertUserEducationQuery, 
      [school,degree,fieldStudy,grade,startDate,endDate,Description,userId]);
    if (insertResult[0].affectedRows > 0) {
      return res.status(200).json({ 
        message: "User Education added successfully",
        id : insertResult[0].insertId
      });
    } else {
      return res.status(500).send("Failed to add user education");
    }
  } catch (error) {

      return res.status(500).json({
        statusCode : 500,
        message : "Failed to add user education",
        error: error.message
      });
  }
};
// ###################### user education END #######################################


// ###################### user skill Start #######################################
exports.skill = async (req, res)=> {
  const {skills} = req.body;
  const {userId} = req.user;
  const currentDate = new Date();
  try {
    for (let i = 0; i < skills.length; i++) {
      const insertResult = await queryRunner(insertskillQuery, [skills[i],'profile', userId]);
      if (!insertResult) {
        throw new Error("Failed to save user profile skill.");
      }
    }
    // Send a response indicating success
    return res.status(200).json({
      statusCode: 200,
      message: "User profile skills saved successfully."
    });
    
  } catch (error) {
    // Send a response indicating failure
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to add user skill",
      error: error
    });

  }
};
// ###################### user skill END #######################################





// ###################### Company Profile Start #######################################
exports.CompanyProfile = async (req, res)=> {
  const {
    firstName,lastName,email,phoneNumber,address,country,city,state,zipcode,companyName,
    tagline,establishedOn,companyOwnerName,industry,website,teamSize,about,workingHours,
    companyAddress,companyCountry,companyCity,companyState,companyZipCode,facebook,instagram,
    linkedIn,behance,pinterest,twitter} = req.body;
  const {userId} = req.user;
  const currentDate = new Date();
  try {
    const updateUser = await queryRunner(updateUseraddressQuery, [firstName,lastName,email,phoneNumber,address,country,city,state,zipcode,userId]);
   const hoursString = workingHours.toString();
   
   const insertResult = await queryRunner(updateCompanyProfileQuery, [companyName,
    tagline,establishedOn,companyOwnerName,industry,website,teamSize,about,hoursString,
    companyAddress,companyCountry,companyCity,companyState,companyZipCode,facebook,instagram,
    linkedIn,behance,pinterest,twitter, userId]);
  
        if (insertResult[0].affectedRows > 0) {
          return res.status(200).json({ 
            statusCode : 200,
            message: "Company Profile updated successfully",
            id : insertResult[0].insertId
          });
        } else {

          return res.status(500).json({ statusCode : 500,message : "Failed to update Company Profile "});
        }
    
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to update Company Profile",
      error: error.message
    });
  }
};
// ###################### Company Profile END #######################################



// ###################### Profile Overview start #######################################
exports.getUserProfile = async (req, res)=> {
  try {
    const {userId} = req.user;
    const selectResult = await queryRunner(selectQuery("user", "id"), [userId]);
    if (selectResult[0].length > 0) {
      const selectExperience = await queryRunner(selectQuery("user_experience", "userId"), [userId]);
      selectResult[0][0].Experience =  selectExperience[0];
      const selectEducation = await queryRunner(selectQuery("user_education", "userId"), [userId]);
      selectResult[0][0].Education =  selectEducation[0];
      const selectSkill = await queryRunner(selectQuery("skills","type", "userId"), ["profile",userId]);
      selectResult[0][0].Skill =  selectSkill[0];
      res.status(200).json({
        statusCode : 200,
        message: "Success",
        data : selectResult[0]
      });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message : "Failed to get user Profile",
      error: error.message
    });
  }
};
// ###################### Get User Profile  End #######################################

// ###################### Get Company Profile start #######################################
exports.getCompanyProfile = async (req, res)=> {
  try {
    const {userId} = req.user;
    const selectResult = await queryRunner(selectQuery("user", "id"), [userId]);
    if (selectResult[0].length > 0) {
      const selectCompany = await queryRunner(selectQuery("user_company", "userId"), [userId]);
      selectResult[0][0].Company =  selectCompany[0];
      res.status(200).json({
        statusCode : 200,
        message: "Success",
        data : selectResult[0]
      });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message : "Failed to get Company profile",
      error: error.message
    });
  }
};
// ###################### Get Company Profile End #######################################


// ###################### Search Project start #######################################
exports.searchProject = async (req, res) => {
  try {
    const { keyword } = req.params;
    const formatKeyword = `%${keyword}%`;
    const selectResult = await queryRunner(projectSearchQuery, [formatKeyword, formatKeyword, formatKeyword]);
    if (selectResult[0].length > 0) {
      for (let job of selectResult[0]) {
        const selectImage = await queryRunner(selectQuery("uploadimage","type", "userId"), ["project", job.id]);
        job.Images = selectImage[0] ? [selectImage[0]] : [];
      }
      res.status(200).json({
        statusCode: 200,
        message: "Success",
        data: selectResult[0]
      });
    } else {
      res.status(200).json({statusCode: 200, message: " Not Found" });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get projects",
      error: error.message
    });
  }
};
// ###################### Search Project End #######################################


// ###################### Search Project start #######################################
exports.searchJob = async (req, res) => {
  try {
    const { keyword } = req.params;
    const formatKeyword = `%${keyword}%`;
    console.log(formatKeyword);
    const selectResult = await queryRunner(jobSearchQuery, [formatKeyword, formatKeyword,formatKeyword, formatKeyword,formatKeyword, formatKeyword]);
    if (selectResult[0].length > 0) {
      for (let job of selectResult[0]) {
        const selectImage = await queryRunner(selectQuery("uploadimage","type", "userId"), ["job", job.id]);
        job.Images = selectImage[0] ? [selectImage[0]] : [];
      }
      res.status(200).json({
        statusCode: 200,
        message: "Success",
        data: selectResult[0]
      });
    } else {
      res.status(200).json({statusCode: 200, message: " Not Found" });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get projects",
      error: error.message
    });
  }
};
// ###################### Search Project End #######################################

 
// ###################### Search Project start #######################################
exports.testAllUser = async (req, res) => {
  try {

        const selectImage = await queryRunner(selectQuery("user"));
        if(selectImage.length > 0){

          res.status(200).json({
            statusCode: 200,
            message: "Success",
            data : selectImage[0]
          });
        }else{
          res.status(200).json({
            statusCode: 200,
            message: "Not Found",
          });
        }

  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get All users",
      error: error.message
    });
  }
};
// ###################### Search Project End #######################################


// ###################### Freelancing Dashboard start #######################################
exports.freelancingDashboard = async (req, res) => {
  const {userId} = req.user;
  try {
        const selectResult = await queryRunner(userDashboardQuery, [userId, userId]);
        if(selectResult.length > 0){
          res.status(200).json({
            statusCode: 200,
            message: "Success",
            data : selectResult[0]
          });
        }else{
          res.status(200).json({
            statusCode: 200,
            message: "Not Data Found",
          });
        }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get Dashboard Data",
      error: error.message
    });
  }
};
// ###################### Freelancing Dashboard End #######################################


// ###################### Company Dashboard start #######################################
exports.CompanyDashboard = async (req, res) => {
  const {userId} = req.user;
  try {
        const selectResult = await queryRunner(userDashboardQuery, [userId, userId]);
        if(selectResult.length > 0){
          res.status(200).json({
            statusCode: 200,
            message: "Success",
            data : selectResult[0]
          });
        }else{
          res.status(200).json({
            statusCode: 200,
            message: "Not Data Found",
          });
        }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get Dashboard Data",
      error: error.message
    });
  }
};
// ###################### Company Dashboard End #######################################







// ###################### website Frontend count start #######################################
exports.websiteCount = async (req, res) => {
  try {
        const selectResult = await queryRunner(websiteCountQuery);
        if(selectResult.length > 0){
          res.status(200).json({
            statusCode: 200,
            message: "Success",
            data : selectResult[0]
          });
        }else{
          res.status(200).json({
            statusCode: 200,
            message: "Not Data Found",
          });
        }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get Dashboard Data",
      error: error.message
    });
  }
};
// ###################### website Frontend count End #######################################