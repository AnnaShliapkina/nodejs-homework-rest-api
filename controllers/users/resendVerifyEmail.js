const { User } = require("../../models/index");
const sendEmail = require("../../helpers/index");
const { BadRequest, NotFound } = require("http-errors");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw NotFound("User isn't found");
  }
  if (user.verify) {
    throw BadRequest("Verification has already been passed");
  }
  const mail = {
    to: mail,
    subject: "Підтвердіть реєстрацію на сайті",
    html: `<a href= "http://localhost:3000/api/users/verify/${verificationToken}" target="_blank">Нажміть для підтвердження email</a>`,
  };
  await sendEmail(mail);
  res.status(200).json({
    message: "Verification email sent",
  });
};
module.exports = resendVerifyEmail;
