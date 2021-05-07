import { useEffect } from 'react';
import PostList from "../../Components/PostList/PostList";
import * as postAPI from '../../utilities/posts-api';


function HomePage(props) {
	useEffect(() => {
		async function getPosts() {
			const posts = await postAPI.getAll();
			props.setPosts(posts);
		}
		getPosts();
	}, []);

	return (
		<>
		<br/>
			<h1>All Posts</h1>
	<br/> <br/> 
			<div>
				{props.posts.map(post => (
					props.user._id === post.user ? (
<PostList 
					post={post} 
					key={post._id}
					handleDeletePost={props.handleDeletePost}
          />
					) :
					(
						<h1></h1>
					)
					
				))}
				
			
			</div>

		</>
	);
}

export default HomePage;
