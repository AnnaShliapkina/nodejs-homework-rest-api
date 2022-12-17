const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: "deer1anna@meta.ua" };
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw Error;
  }
};

module.exports = sendEmail;
