const nodemailer = require("nodemailer");
const { createTransporter } = require("../helper/googleAuth");
const codeHTML = require("./codeHTML");
const tenantMail = require("./tenantInviteMail.js");
const constants = process.env;


// ################################## sendMail ###########################################
exports.sendMail = async (email, mailSubject, name ) => {
  try {
    var emailHTML = codeHTML.welcome(name)
    let transpoter = await createTransporter();
    var mailOptions = {
      from: constants.EMAIL_HOST,
      to: email,
      subject: mailSubject,
      html: emailHTML,
    };

    transpoter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Error occur to send email" + error);
      } else {
        console.log("email send sucessfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
};
// ################################## sendMail ###########################################

// ################################## Forget sendMail ###########################################
exports.ForgetsendMail = async (email, mailSubject, random, name ) => {
  try {
    var emailHTML = codeHTML.forgetHTML(name, random)
    let transpoter = await createTransporter();
    var mailOptions = {
      from: constants.EMAIL_HOST,
      to: email,
      subject: mailSubject,
      html: emailHTML,
    };

    transpoter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Error occur to send email" + error);
      } else {
        console.log("email send successfully");
        // return info;
      }
    });
  } catch (error) {
    console.log(error);
  }
};
// ################################## Forget sendMail ###########################################
