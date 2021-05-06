import React from 'react';
import PostList from "../../Components/PostList/PostList"


function HomePage(props) {
	return (
		<>
			<h1>All Posts</h1>
	
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
