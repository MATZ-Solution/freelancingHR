const nodemailer = require("nodemailer");
const { createTransporter } = require("../helper/googleAuth");
const codeHTML = require("./codeHTML");
const tenantMail = require("./tenantInviteMail.js");
const constants = process.env;


// ################################## sendMail ###########################################
exports.sendMail = async (email, mailSubject, random, name, emailTemplate) => {
  if(mailSubject == "Spade Welcome Email"){
if(emailTemplate == '0'){
  var emailHTML = tenantMail.tenantWelcomeHTML0(email, random, name)
}
else{
  var emailHTML = tenantMail.tenantWelcomeHTML1(email, random, name)
}
  }else{
    var emailHTML = codeHTML.codeHTML(name, random)
  }
  try {
    let transpoter = await createTransporter();
    var mailOptions = {
      from: constants.EMAIL_HOST,
      to: email,
      // to:"aj8706786@gmail.com",
      subject: mailSubject,
      html: emailHTML,
        // mailSubject == "Spade Welcome Email"
          // ? codeHTML.welcomeHTML(email, random, name)
          // : codeHTML.codeHTML(name, random),
    };
    transpoter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Error occur to send email" + error);
      } else {
        // console.log("email send sucessfully" + info.response);
        console.log("email send sucessfully");
      }
    });
  } catch (error) {
    // console.log("sendmail "+error.message);
    console.log(error);
  }
};
// ################################## sendMail ###########################################

