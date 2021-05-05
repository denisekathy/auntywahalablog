const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//Do I need to create a route pre-pended by /school? to be required in server.js
//Or can I create a comments-api but then idk how to change it if the category changes
router.get('/', postsCtrl.index)
router.post('/', postsCtrl.create);


module.exports = router;