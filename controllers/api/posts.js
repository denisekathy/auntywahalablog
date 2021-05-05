
const Post = require('../../models/post');

module.exports = {
	index,
	create,
	update,
	delete: deleteOne,
};

async function index(req, res) {
	const posts = await Post.find({});
	res.status(200).json(posts);
}
async function create(req, res) {
	const {title, content} = req.body;

	const post = await Post.create(req.body);
	console.log("This is the", req.body)
	console.log("this is the post", post)
	res.status(201).json(post);
}

async function update(req, res) {
	const updatedPost = await Post.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);
	res.status(200).json(updatedPost);
}

async function deleteOne(req, res) {
	const deletedPost = await Post.findByIdAndDelete(req.params.id);
	res.status(200).json(deletedPost);
}


