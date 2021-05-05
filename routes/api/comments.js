const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//Do I need to create a route pre-pended by /school? to be required in server.js
//Or can I create a comments-api but then idk how to change it if the category changes
router.get('/posts/:id/comments', commentsCtrl.index)
router.post('/posts/:id/comments', commentsCtrl.create)



module.exports = router;