const {
  sendMail,
  sendMailLandlord,
} = require("../sendmail/sendmail.js");
 const imageToDelete = require("../middleware/deleteImage.js");
const {
  selectQuery,
  deleteQuery,
  insertJobQuery,
  insertImageQuery,
  insertskillQuery,
  insertJobProposalQuery,
  GetJobProposalQuery,
  postJobQuery,
  userJobAppliedQuery,
  updateStatusQuery,
  jobByIdQuery,
  updateJobQuery,
  deleteJobQuery,
  deleteJobSkillsQuery

} = require("../constants/queries.js");
const { queryRunner } = require("../helper/queryRunner.js");
const imageUploads = require("../middleware/imageUploads.js")
const config = process.env;


// ###################### Company Profile Start #######################################
exports.Job = async (req, res)=> {
  try {
    const {jobTitle,jobCategory,pay,shift,location,qualification,skills
      ,jobType,jobDescription, lastDate, status} = req.body;
    const {userId} = req.user;
    const currentDate = new Date();

    // const skill = Array.isArray(skills) ? skills : JSON.parse(skills);
    // const skill = JSON.parse(skills);
    const insertResult = await queryRunner(insertJobQuery, 
      [userId,jobTitle,jobCategory, pay,shift,location,qualification
        ,jobType,jobDescription, lastDate, status,currentDate]);
        if (insertResult[0].affectedRows > 0) {
          
          const id = insertResult[0].insertId;
          console.log("asd1");
        
        // #### Skill ####
        for (let i = 0; i < skills.length; i++) {
          const insertResult = await queryRunner(insertskillQuery, [skills[i],'Job', id]);
          if (!insertResult) {
            throw new Error("Failed to save user profile skill.");
          }
        }
        // #### Skill ####
        // const imageUrl = await imageUploads.uploadImage(req.file);
        // const coverImage = await queryRunner(insertImageQuery, [imageUrl.url,imageUrl.asset_id,"job",id]);
        // if (!coverImage) {
        //   throw new Error("Failed to save user profile Image.");
        // }
        return res.status(200).json({ 
      statusCode : 200,
      message: "Job Created successfully",
      id : insertResult[0].insertId
    });          
        } else {
          return res.status(500).json({ statusCode : 500,message : "Failed to Create Job "});
        }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Create Job",
      error: error.message
    });
  }
};
// ###################### create Job END #######################################

// ###################### Get Job start #######################################
exports.getUserJobs = async (req, res) => {
  try {
    const { userId } = req.user;
    const selectResult = await queryRunner(selectQuery("job", "userId"), [userId]);
    if (selectResult[0].length > 0) {
      for (let job of selectResult[0]) {
        const selectImage = await queryRunner(selectQuery("uploadimage", "type", "userId"), ["job", job.id]);
        job.Images = selectImage[0] ? [selectImage[0]] : [];
        const selectSkill = await queryRunner(selectQuery("skills", "type", "userId"), ["job", job.id]);
        job.skills = selectSkill[0] ? [selectSkill[0]] : [];
      }
      res.status(200).json({
        statusCode: 200,
        message: "Success",
        data: selectResult[0]
      });
    } else {
      res.status(200).json({ message: "User Not Found" });
    }
  } catch (error) {
    // console.error(error);
    // res.status(500).json({ error: error.message });
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get User Jobs",
      error: error.message
    });
  }
};
// ###################### Get job End #######################################

// ###################### Get All Job start #######################################
exports.getAllJobs = async (req, res) => {
  try {
    // const { userId } = req.user;
    const selectResult = await queryRunner(selectQuery("job"));
    if (selectResult[0].length > 0) {
      for (let job of selectResult[0]) {
        const selectImage = await queryRunner(selectQuery("uploadimage", "type", "userId"), ["job", job.id]);
        job.Images = selectImage[0] ? [selectImage[0]] : [];
        const selectSkill = await queryRunner(selectQuery("skills", "type", "userId"), ["job", job.id]);
        job.skills = selectSkill[0] ? [selectSkill[0]] : [];
      }
      res.status(200).json({
        statusCode: 200,
        message: "Success",
        data: selectResult[0]
      });
    } else {
      res.status(200).json({ message: "User Not Found" });
    }
  } catch (error) {
    // console.error(error);
    // res.status(500).json({ error: error.message });
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get All Jobs",
      error: error.message
    });
  }
};
// ###################### Get All job End #######################################


// ###################### Proposal Submit start #######################################
exports.proposalSubmit = async (req, res) => {
  try {
    const { userId } = req.user;
    const currentDate = new Date();
    const { jobId,notice_Period,coverLetter,status} = req.body;
    const selectResult = await queryRunner(selectQuery("job_proposal","userId","jobId"), [userId,jobId]);
    if (selectResult[0].length > 0) {
      res.status(200).json({
        statusCode: 200,
        message: "You Already Applied on this Job",
      });
    } else {
      console.log(req.file);
      const imageUrl = await imageUploads.uploadImage(req.file);
      const insertResult = await queryRunner(insertJobProposalQuery, [userId,jobId,notice_Period,coverLetter,imageUrl.url,imageUrl.asset_id,status,currentDate]);
      if (insertResult[0].affectedRows > 0) {
        return res.status(200).json({ 
          statusCode : 200,
          message: "Proposal Submitted successfully",
          id : insertResult[0].insertId
        });
      }else{
        return res.status(500).json({ 
          statusCode : 500,
          message: "Proposal is not saved",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to submit job proposal",
      error: error.message
    });
  }
};
// ######################  Proposal Submit End #######################################


// ######################  Get All Applied Jobs start #######################################
exports.allAppliedJobs = async (req, res) => {
  try {
    const {userId} = req.user;
    const selectResult = await queryRunner( GetJobProposalQuery, [userId]);
    if (selectResult[0].length > 0) { 
    res.status(200).json({
        statusCode: 200,
        message: "Success",
        data: selectResult[0]
      });
    } else {
      res.status(200).json({ message: "Jobs Not Found" });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get all Applied Jobs",
      error: error.message
    });
  }
};
// ######################  Get All Applied Jobs End #######################################



// ######################  Get All Post Job start #######################################
exports.allPostJobs = async (req, res) => {
  try {
    const {userId} = req.user;
    const selectResult = await queryRunner( postJobQuery, [userId]);
    if (selectResult[0].length > 0) { 
    res.status(200).json({
        statusCode: 200,
        message: "Success",
        data: selectResult[0]
      });
    } else {
      res.status(200).json({ message: "Jobs Not Found" });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get all post Jobs",
      error: error.message
    });
  }
};
// ######################  Get All Post Job End #######################################



// ######################  Get user Applied Jobs start #######################################
exports.userAppliedJobs = async (req, res) => {
  try {
    const { id } = req.params;
    const selectResult = await queryRunner(userJobAppliedQuery, [id]);
    if (selectResult[0].length > 0) {
    res.status(200).json({
        statusCode: 200,
        message: "Success",
        data: selectResult[0]
      });
    } else {
      res.status(200).json({ message: "No user Found",data : selectResult[0] });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get user applied Job",
      error: error.message
    });
  }
};
// ######################  Get user Applied Job End #######################################

// ###################### Get job By ID start #######################################
exports.jobByID = async (req, res) => {
  try {
    const { jobId } = req.params;
    const selectResult = await queryRunner(jobByIdQuery, [jobId]);
    if (selectResult[0].length > 0) {
        const selectImage = await queryRunner(selectQuery("uploadimage", "type", "userId"), ["job", jobId]);
        selectResult[0][0].Images = selectImage[0] ? [selectImage[0]] : [];
        const selectSkill = await queryRunner(selectQuery("skills", "type", "userId"), ["job", jobId]);
        selectResult[0][0].skills = selectSkill[0] ? [selectSkill[0]] : [];
      res.status(200).json({
        statusCode: 200,
        message: "Success",
        data: selectResult[0]
      });
    } else {
      res.status(200).json({ message: "Job Not Found" });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get A Job By Id",
      error: error.message
    });
  }
};
// ###################### Get job By ID End #######################################
 
// ###################### update Status start #######################################
exports.updateStatus = async (req, res) => {
  try {
    const { jobId, status } = req.body;
    const selectResult = await queryRunner(updateStatusQuery, [ status, jobId]);    
    if (selectResult[0].affectedRows > 0) { 
      res.status(200).json({
        statusCode: 200,
        message: "Successfully Updated Status",
      });
    } else {
      res.status(200).json({ message: "Job Not Found" });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to update A Job Status",
      error: error.message
    });
  }
};
// ###################### update Status End #######################################


// ###################### update Job start #######################################
exports.updateJob = async (req, res) => {
  try {
    const { userId } = req.user;
    const { jobId, jobTitle, jobCategory, pay, shift, location, qualification, skills, jobType, jobDescription } = req.body;
    const updatedAt = new Date();
    const updateResult = await queryRunner(updateJobQuery, [jobTitle, jobCategory, pay, shift, location, qualification, jobType, jobDescription,updatedAt, jobId, userId]);    
    if (updateResult[0].affectedRows > 0) { 
      const deleteResult = await queryRunner(deleteJobSkillsQuery, [jobId,'Job']); 
      for (let i = 0; i < skills.length; i++) {
        const insertResult = await queryRunner(insertskillQuery, [skills[i],'Job', jobId]);
        if (!insertResult) {
          throw new Error("Failed to save user profile skill.");
        }
      }
      res.status(200).json({
        statusCode: 200,
        message: "Successfully Updated Status",
      });
    } else {
      res.status(200).json({ message: "Job Not Found" });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to update A Job ",
      error: error.message
    });
  }
};
// ###################### update Job End #######################################


// ###################### delete Job start #######################################
exports.deleteJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const selectResult = await queryRunner(deleteJobQuery, [jobId]);    
    if (selectResult[0].affectedRows > 0) { 
      res.status(200).json({
        statusCode: 200,
        message: "Successfully Deleted Job",
      });
    } else {
      res.status(200).json({ message: "Job Not Found" });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Delete A Job Status",
      error: error.message
    });
  }
};
// ###################### delete Job End ####################################