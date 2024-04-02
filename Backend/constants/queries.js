exports.selectQuery = (table, ...field) => {
  if (field.length === 1) {
    return `SELECT * FROM ${table} WHERE ${field[0]} = ?`;
  } 
  else if (field.length > 1) {
    return `SELECT * FROM ${table} WHERE ${field[0]} = ? and ${field[1]} = ?`;
  } else {
    return `SELECT * FROM ${table}`;
  }
};

exports.deleteQuery = (table, ...field) => {
  if (field.length === 1) {
    return `DELETE FROM ${table} WHERE ${field[0]} = ?`;
  } else if (field.length === 2) {
    return `DELETE FROM ${table} WHERE ${field[0]} = ? AND ${field[1]} = ?`;
  }
};

exports.insertInUsers = "INSERT INTO user (firstName, lastName, email, password,userType,createdAt) VALUES (?,?,?, ?, ?, ?)";
exports.insertInCompany = "INSERT INTO user_company (userId) VALUES (?)";
exports.updateUserCoverImage = `UPDATE user SET coverImage = ?, coverImageKey = ? WHERE id = ?`;
exports.updateUserProfileImage = `UPDATE user SET profileImage = ?, ProfileImageKey = ? WHERE id = ?`;
// exports.updateProfileHeaderQuery = `UPDATE user SET professionalHeadline = ? WHERE id = ?`;
// exports.updateProfileHeaderQuery = `UPDATE user SET professionalHeadline = ?, Worktype = ?, address = ?,hourlyRate = ? ,country = ?, city = ?, state = ?, zipcode = ? WHERE id = ?`;
exports.updateProfileHeaderQuery = `UPDATE user SET professionalHeadline = ?, Worktype = ?, address = ?,hourlyRate = ? ,country = ?, city = ?, state = ?, zipcode = ?, updatedAt = ? WHERE id = ?`;
exports.updateProfileOverviewQuery = `UPDATE user SET overview = ?, updatedAt = ? WHERE id = ?`;
exports.insertUserExperienceQuery = "INSERT INTO user_experience (title, employmentType, companyName, Location, locationType, startDate, endDate, Description, userId) VALUES (?,?,?, ?, ?, ?,?,?,?)";
exports.insertUserEducationQuery = "INSERT INTO user_education (school, degree, fieldStudy, grade, startDate, endDate, Description, userId) VALUES (?,?,?,?,?,?,?,?)";
exports.insertskillQuery = "INSERT INTO skills (skill,type, userId) VALUES (?,?,?)";
exports.updateUseraddressQuery = `UPDATE user SET firstName = ?,lastName = ?,email = ?,phoneNumber = ?,address = ?,country = ?,city = ?,state = ?,zipcode = ? WHERE id = ?`;
exports.updateCompanyProfileQuery = `UPDATE user_company SET companyName = ?, tagline = ?, establishedOn = ?, companyOwnerName = ?, industry = ?, website = ?, teamSize = ?, about = ?, workingHours = ?, companyAddress = ?, companyCountry = ?, companyCity = ?, companyState = ?, companyZipCode = ?, facebook = ?, instagram = ?, linkedIn = ?, behance = ?, pinterest = ?, twitter = ? WHERE userId = ?`;
exports.insertProjectQuery = "INSERT INTO project (userId,projectTitle, Location, companyType, projectType, amount, description, deliveryDate, status,createdAt) VALUES (?,?,?,?,?,?,?,?,?,?)";
exports.insertImageQuery = "INSERT INTO uploadimage (image, imageKey, type, userId) VALUES (?,?,?,?)";
exports.insertJobQuery = "INSERT INTO job (userId,jobTitle,jobCategory,pay,shift,location,qualification,jobType,jobDescription, lastDate,status,createdAt) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
exports.projectCategoryQuery = "SELECT projectType, COUNT(*) AS count FROM freelancing.project GROUP BY projectType";
exports.insertProjectProposalQuery = "INSERT INTO project_proposal (userId,projectId,price,est_hours,cover_letter,status,startDate,endDate,createdAt) VALUES (?,?,?,?,?,?,?,?,?)";
exports.ProjectByIdQuery = "SELECT *,(select count(id) from project_proposal where projectId = P.id) as totalProposal FROM `project` as P LEFT JOIN user as U on P.userId = U.id LEFT JOIN user_company as UC on UC.userId = U.id where P.id = ?";
exports.insertJobProposalQuery = "INSERT INTO job_proposal (userId,jobId,notice_Period,cover_letter,resume,resumeKey,status,createdAt) VALUES (?,?,?,?,?,?,?,?)";
exports.GetProjectProposalQuery = "SELECT * FROM user as u join project_proposal as PP on u.id = PP.userId  join project as p on p.id = pp.projectId where PP.userId = ?";
exports.GetJobProposalQuery = "SELECT * FROM user as u join job_proposal as jp on u.id = jp.userId  join job as j on j.id = jp.jobId where jp.userId = ?";
exports.projectSearchQuery = `SELECT * FROM project WHERE projectTitle LIKE ? OR projectType LIKE ? OR description LIKE ?`;
exports.jobSearchQuery = `SELECT * FROM job WHERE jobDescription LIKE ? OR jobType LIKE ? OR jobCategory LIKE ? OR jobTitle LIKE ? OR skills LIKE ? OR qualification LIKE ?`;
exports.postProjectQuery = `SELECT * FROM user as u join project as P on u.id = P.userId where P.userId = ?`;
exports.postJobQuery = `SELECT * FROM user as u join job as J on u.id = J.userId where J.userId = ?`;
exports.userProjectAppliedQuery = "SELECT * FROM `user` as U JOIN project_proposal as PP on U.id = PP.userId where PP.projectId = ?";
exports.userJobAppliedQuery = "SELECT U.firstName, U.lastName, U.email, U.phoneNumber, JP.notice_Period, JP.resume, JP.resumeKey, JP.status, JP.createdAt  FROM `user` as U JOIN job_proposal as JP on U.id = JP.userId where JP.jobId = ?";
exports.userDashboardQuery = "select (select count(*) from job) as totalJobs, (select count(*) from job_proposal as JP INNER JOIN user as U ON JP.userId = U.id WHERE JP.userId = ? ) as appliedJob, (select count(*) from project) as totalProject, (select count(*) from project_proposal as PP INNER JOIN user as U ON PP.userId = U.id WHERE PP.userId = ? ) as 	appliedProject";
exports.updateStatusQuery = "UPDATE job SET status = ? WHERE id = ?";
exports.updateProjectStatusQuery = "UPDATE project SET status = ? WHERE id = ?";


