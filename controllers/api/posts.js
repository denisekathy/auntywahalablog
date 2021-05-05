const Post = require('../../models/post');

module.exports = {
	index,
	create,
	
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

