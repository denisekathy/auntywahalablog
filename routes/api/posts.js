const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/api/posts");

const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", postsCtrl.index);
router.post("/", postsCtrl.create);
router.put("/:id", postsCtrl.update);
router.delete("/:id", postsCtrl.delete);

module.exports = router;
