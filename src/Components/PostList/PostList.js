import React from 'react';
import { Link } from 'react-router-dom';


function PostList({ post }) {
	return (
		<div className='panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>{post.title}</h3>
				<h3 className='panel-content'>{post.content}</h3>

			</div>
			<div className='panel-footer PostList-action-panel'>
				<Link
					className='btn btn-xs btn-info'
					to={{
						pathname: '/details',
						state: { post },
					}}
				>
					DETAILS
				</Link>
				
				 
			</div>
		</div>
	);
}

export default PostList;