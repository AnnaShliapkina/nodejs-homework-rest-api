const express = require("express");
const { validation, ctrlWrapper, auth, upload } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { userSchema, userStatusSchema } = require("../../models");

const validateMiddlwarePost = validation(userSchema);

const validateMiddlwarePatch = validation(userStatusSchema);

const router = express.Router();

router.post("/register", validateMiddlwarePost, ctrlWrapper(ctrl.register));
router.post("/login", validateMiddlwarePost, ctrlWrapper(ctrl.login));
router.get("/logout", auth, ctrlWrapper(ctrl.logout));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.patch("/subscription", auth, validateMiddlwarePatch, ctrlWrapper(ctrl.updateStatusUser));

router.patch("/avatars", auth, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));

module.exports = router;
