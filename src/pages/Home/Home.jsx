import React from 'react';
import PostList from "../../Components/PostList/PostList"


function HomePage(props) {
	return (
		<>
			<h1>All Posts</h1>
			<div >
				{props.posts.map(post => (
					<PostList post={post} key={post._id}
          />
				))}
			</div>
		</>
	);
}

export default HomePage;
