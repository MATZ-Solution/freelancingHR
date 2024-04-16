const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const { verifyToken } = require("../middleware/authenticate");
const { uploads } = require("../middleware/imageUploads");
const multer = require('multer');
const upload = multer();
// router.post("/cover", [verifyToken,upload.single('image')],userController.uploadCoverImage);
router.post("/project", [verifyToken,upload.single('image')], projectController.Project);
router.get("/getUserProject", verifyToken, projectController.getUserProject);
router.get("/getAllProject", projectController.getAllProject);
router.get("/getAllProjectByCategory", projectController.getAllProjectByCategory);
router.get("/projectCategoryCount", projectController.projectCategoryCount);
router.post("/proposalSubmit", verifyToken, projectController.proposalSubmit);
// router.get("/projectById/:id", projectController.projectById);
router.get("/projectById/:id/:userId", projectController.projectById);
// router.put("/updateProject/:id",[verifyToken
router.get("/allAppliedProject", verifyToken, projectController.allAppliedProject);
router.get("/allPostProject", verifyToken, projectController.AllPostProject);
router.get("/userAppliedProject/:id", verifyToken, projectController.userAppliedProject);
router.put("/updateStatus", verifyToken, projectController.updateStatus);
router.put("/updateProject", [verifyToken,upload.single('image')], projectController.updateProject);
router.delete("/deleteProject",verifyToken, projectController.deleteProject);

module.exports = router;

