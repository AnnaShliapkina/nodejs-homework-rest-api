const { User } = require("../../models/index");
const { NotFound } = require("http-errors");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw NotFound("User is not found");
  }
  await User.findByIdAndUpdate(use._id, {
    verify: true,
    verificationToken: null,
  });
  res.sttus(200).json({
    message: "Verification sucsessful",
  });
};

module.expors = verifyEmail;
