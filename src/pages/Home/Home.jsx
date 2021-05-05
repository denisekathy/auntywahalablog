import React from 'react';
import PostList from "../../Components/PostList/PostList"


function HomePage(props, handleDeletePost) {
	return (
		<>
			<h1>All Posts</h1>
			<div >
				{props.posts.map(post => (
					<PostList 
					post={post} 
					key={post._id}
					handleDeletePost={props.handleDeletePost}
          />
				))}
			</div>
		</>
	);
}

export default HomePage;
