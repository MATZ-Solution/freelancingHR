const {
    sendMail,
    sendMailLandlord,
  } = require("../sendmail/sendmail.js");
   const imageToDelete = require("../middleware/deleteImage.js");
  const {
    selectQuery,
    deleteQuery,
    insertProjectQuery,
    insertImageQuery,
    projectCategoryQuery,
    insertProjectProposalQuery,
    ProjectByIdQuery,
    GetProjectProposalQuery,
    postProjectQuery,
    userProjectAppliedQuery,
    updateProjectStatusQuery,
    updateProjectQuery,
    deleteProjectImageQuery,
    deleteProjectQuery,
    projectByIdAppliedQuery

  
  } = require("../constants/queries.js");
  const { queryRunner } = require("../helper/queryRunner.js");
  const imageUploads = require("../middleware/imageUploads.js")
  const config = process.env;
  
  
  // ###################### Project Start #######################################
  exports.Project = async (req, res)=> {
    try {
      const {userId} = req.user;
      const currentDate = new Date();
      const {projectTitle, Location, companyType, projectType, amount, description, deliveryDate, status} = req.body;
      const insertResult = await queryRunner(insertProjectQuery, 
        [userId,projectTitle, Location, companyType, projectType, amount, description, deliveryDate, status,currentDate]);
      
        if (insertResult[0].affectedRows > 0) {
          const id = insertResult[0].insertId;
          const imageUrl = await imageUploads.uploadImage(req.file);
          const coverImage = await queryRunner(insertImageQuery, [imageUrl.url,imageUrl.asset_id,"project",id]);
    if (coverImage[0].affectedRows > 0) {
      return res.status(200).json({ 
        statusCode : 200,
        message: "Project Created successfully",
        id : insertResult[0].insertId
      });
    }else{
      return res.status(500).json({ 
        statusCode : 500,
        message: "Project Image is not saved",
      });
    }
            
          } else {
            return res.status(500).json({ statusCode : 500,message : "Failed to Create Project "});
          }
    } catch (error) {
      return res.status(500).json({
        // insertResult,
        statusCode : 500,
        message: "Failed to Create Project",
        error: error
      });
    }
  };
  // ###################### Project END #######################################
  
  // ###################### Get user Project start #######################################
exports.getUserProject = async (req, res) => {
  try {
    const { userId } = req.user;
    const selectResult = await queryRunner(selectQuery("project", "userId"), [userId]);
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
      res.status(200).json({ message: "User Not Found" });
    }
  } catch (error) {
    // console.error(error);
    // res.status(500).json({ error: error.message });
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get User projects",
      error: error.message
    });
  }
};
// ###################### Get user Project End #######################################


  // ###################### Get All Project start #######################################
  exports.getAllProject = async (req, res) => {
    try {
      // const { userId } = req.user;
      const selectResult = await queryRunner(selectQuery("project"));
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
        res.status(200).json({ message: "User Not Found" });
      }
    } catch (error) {
      // console.error(error);
      // res.status(500).json({ error: error.message });
      return res.status(500).json({
        statusCode : 500,
        message: "Failed to Get All projects",
        error: error.message
      });
    }
  };
  // ###################### Get All Project End #######################################
  
    // ###################### Get All Project By Category start #######################################
    exports.getAllProjectByCategory = async (req, res) => {
      try {
        const { projectType } = req.body;
        // const { userId } = req.user;
        const selectResult = await queryRunner(selectQuery("project","projectType"),[projectType]);
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
          res.status(200).json({ message: "Project Not Found" });
        }
      } catch (error) {
        // console.error(error);
        // res.status(500).json({ error: error.message });
        return res.status(500).json({
          statusCode : 500,
          message: "Failed to Get All project by category",
          error: error.message
        });
      }
    };
    // ######################  Get All Project By Category End #######################################
    

    // ###################### Get Project Category Count start #######################################
    exports.projectCategoryCount = async (req, res) => {
      try {
        // const { userId } = req.user;
        const selectResult = await queryRunner(projectCategoryQuery);
        if (selectResult[0].length > 0) {
          res.status(200).json({
            statusCode: 200,
            message: "Success",
            data: selectResult[0]
          });
        } else {
          res.status(200).json({ message: "Project Not Found" });
        }
      } catch (error) {
        // console.error(error);
        // res.status(500).json({ error: error.message });

        return res.status(500).json({
          statusCode : 500,
          message: "Failed to Get Project category count",
          error: error.message
        });
      }
    };
    // ######################  Get Project Category Count End #######################################
    

// ###################### Proposal Submit start #######################################
exports.proposalSubmit = async (req, res) => {
  try {
    const { userId } = req.user;
    const currentDate = new Date();
    const { projectId,Price,EstHours,coverLetter,status,startDate, endDate } = req.body;
    const selectResult = await queryRunner(selectQuery("project_proposal","userId","projectId"), [userId,projectId]);
    if (selectResult[0].length > 0) {
      res.status(200).json({
        statusCode: 200,
        message: "You Already submit your proposal on this projet",
      });
    } else {
      const insertResult = await queryRunner(insertProjectProposalQuery,[userId,projectId,Price,EstHours,coverLetter,status,startDate, endDate, currentDate]);
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
    // console.error(error);
    // res.status(500).json({ error: error.message });
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Submit proposal",
      error: error.message
    });
  }
};
// ######################  Proposal Submit End #######################################




// ######################  Get Project by Id start #######################################
exports.projectById = async (req, res) => {
  try {
    const { id,userId } = req.params;
    const selectResult = await queryRunner(ProjectByIdQuery, [id]);
    if (selectResult[0].length > 0) {
      if(userId !== 0){
        const selectAppliedResult = await queryRunner(projectByIdAppliedQuery, [id,userId]);
        selectResult[0][0].Applied = selectAppliedResult[0][0].userApplied == 0 ? "Not Applied" : "Applied" ;
      }
      const selectImageResult = await queryRunner(selectQuery("uploadimage","userId","type"), [id,"project"]);
    selectResult[0][0].image = selectImageResult[0];   
    res.status(200).json({
        statusCode: 200,
        message: "Success",
        data: selectResult[0]
      });
    } else {
      res.status(200).json({ message: "Project Not Found" });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get Project by Id",
      error: error.message
    });
  }
};
// ######################  Get Project by Id End #######################################



// ######################  Get All Project Applied start #######################################
exports.allAppliedProject = async (req, res) => {
  try {
    const {userId} = req.user;
    const selectResult = await queryRunner( GetProjectProposalQuery, [userId]);
    if (selectResult[0].length > 0) { 
    res.status(200).json({
        statusCode: 200,
        message: "Success",
        data: selectResult[0]
      });
    } else {
      res.status(200).json({ message: "Project Not Found" });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get all Applied Project",
      error: error.message
    });
  }
};
// ######################  Get All Project Applied End #######################################

// ######################  Get All Post Project start #######################################
exports.AllPostProject = async (req, res) => {
  try {
    const {userId} = req.user;
    const selectResult = await queryRunner( postProjectQuery, [userId]);
    if (selectResult[0].length > 0) { 
    res.status(200).json({
        statusCode: 200,
        message: "Success",
        data: selectResult[0]
      });
    } else {
      res.status(200).json({ message: "Project Not Found" });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Get all post Project",
      error: error.message
    });
  }
};
// ######################  Get All Post Project End #######################################



// ######################  Get user Applied Project start #######################################
exports.userAppliedProject = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const selectResult = await queryRunner(userProjectAppliedQuery, [id]);
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
      message: "Failed to Get user applied project",
      error: error.message
    });
  }
};
// ######################  Get user Applied Project End #######################################


// ###################### update Status start #######################################
exports.updateStatus = async (req, res) => {
  try {
    const { projectId, status } = req.body;
    const selectResult = await queryRunner(updateProjectStatusQuery, [ status, projectId]);    
    if (selectResult[0].affectedRows > 0) { 
      res.status(200).json({
        statusCode: 200,
        message: "Successfully Updated Status",
      });
    } else {
      res.status(200).json({ message: "Project Not Found" });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to update A Project Status",
      error: error.message
    });
  }
};
// ###################### update Status End #######################################

  // ###################### update Project Start #######################################
  exports.updateProject = async (req, res)=> {
    try {
      const {userId} = req.user;
      const updatedAt = new Date();
      const {projectTitle, Location, companyType, projectType, amount, description, deliveryDate, status, projectId} = req.body;
      const insertResult = await queryRunner(updateProjectQuery, 
        [projectTitle, Location, companyType, projectType, amount, description, deliveryDate, status,updatedAt, projectId, userId]);
        if (insertResult[0].affectedRows > 0) {
          if(req.file){
            console.log("4");

            // ############# delete Image #################
            const deleteImage = await queryRunner(deleteProjectImageQuery, [projectId, 'Project']);    
            // ################  delete Image ##############
          const imageUrl = await imageUploads.uploadImage(req.file);
          const coverImage = await queryRunner(insertImageQuery, [imageUrl.url,imageUrl.asset_id,"project",projectId]);
    if (coverImage[0].affectedRows > 0) {
      return res.status(200).json({ 
        statusCode : 200,
        message: "Project Updated successfully",
        id : insertResult[0].insertId
      });
    }else{
      return res.status(500).json({ 
        statusCode : 500,
        message: "Project Image is not saved",
      });
    }
  }else{
    
    return res.status(200).json({ 
      statusCode : 200,
      message: "Project Updated successfully",
    });
  }
            
          } else {
            return res.status(500).json({ statusCode : 500,message : "Project Not Found"});
          }
    } catch (error) {
      return res.status(500).json({
        // insertResult,
        statusCode : 500,
        message: "Failed to Update Project",
        error: error
      });
    }
  };
  // ###################### update Project END #######################################
  

  // ###################### delete Project start #######################################
exports.deleteProject = async (req, res) => {
  try {
    const { ProjectId } = req.body;
    const selectResult = await queryRunner(deleteProjectQuery, [ProjectId]);    
    if (selectResult[0].affectedRows > 0) { 
      res.status(200).json({
        statusCode: 200,
        message: "Successfully Deleted Project",
      });
    } else {
      res.status(200).json({ message: "Job Not Found" });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode : 500,
      message: "Failed to Delete A Project",
      error: error.message
    });
  }
};
// ###################### delete Project End ####################################