const express = require("express");
const router = express.Router();
const commentsCtrl = require("../../controllers/api/comments");

const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/posts/:id/comments", commentsCtrl.index);
router.post("/posts/:id/comments", commentsCtrl.create);

module.exports = router;
