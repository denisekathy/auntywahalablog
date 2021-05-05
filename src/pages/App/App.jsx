import { useState, useEffect } from 'react';
import { Redirect, Route, Switch, Link, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import * as postAPI from '../../utilities/posts-api'
import * as commentAPI from '../../utilities/comments-api'
import NavBar from '../../Components/NavBar/NavBar';
import NewPostPage from '../../pages/NewPostPage/NewPostPage'
import Home from '../Home/Home'
import PostDetailPage from '../../pages/PostDetailPage/PostDetailPage'
import EditPostPage from '../../pages/EditPostPage/EditPostPage'





import './App.css';

import UserLogOut from '../../Components/UserLogOut/UserLogOut';
import PostDetails from '../../Components/PostDetails/PostDetails';

export default function App(props) {
const [user, setUser] = useState(getUser());
const[posts, setPosts] = useState([]);
const[comments, setComments] = useState();
const history = useHistory();

	useEffect(() => {
		// This is listening for each time puppies state is changed,
		// then will run our function below to reroute
		history.push('/');
	}, [posts, history]);


useEffect(() => {
	async function getPosts() {
		const posts = await postAPI.getAll();
		setPosts(posts);
	}
	getPosts();
}, []);

async function handleAddPost(newPostData) {
	const newPost = await postAPI.create(newPostData);
	setPosts([...posts, newPost]);
}

async function handleUpdatePost(updatedPostData) {
	const updatedPost= await postAPI.update(updatedPostData);

	const newPostsArray = posts.map(post => {
		return post._id === updatedPost._id ? updatedPost : post;
	});
	setPosts(newPostsArray);
}

async function handleDeletePost(id) {
	console.log(id);
	await postAPI.deleteOne(id);
	setPosts(posts.filter(post => post._id !== id));
}

async function handleAddComment(newCommentData) {
	const newComment = await commentAPI.create(newCommentData);
	setComments([...comments, newComment]);
}
	return (
		
			<>
			
			<NavBar user={user} setUser={setUser} />
			<Route exact path='/'>
				<Home posts={posts} handleDeletePost={handleDeletePost} />
	
			</Route>
			<Route exact path='/posts/new'>
			<NewPostPage
			handleAddPost={handleAddPost} />
			</Route>

			<Route exact path='/details'>
					<PostDetailPage handleAddComment={handleAddComment} />
				</Route>
				<Route exact path='/edit'>
					<EditPostPage handleUpdatePost={handleUpdatePost} />
				</Route>
			</>
			
		
			
			
				
	)
		}
		
		
		
	


	


		
		
		
		

