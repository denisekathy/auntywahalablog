const Comment = require('../../models/comment');

module.exports = {
	index,
	create,
	update,
    delete: deleteOne
};

async function index(req, res) {
	const comments = await Comment.find({});
	res.status(200).json(comments);
}
async function create(req, res) {
	const content = req.body;
	const comment = await Comment.create(req.body);
	res.status(201).json(comment);
}

async function update(req, res) {
	
}

async function deleteOne(req, res) {
}