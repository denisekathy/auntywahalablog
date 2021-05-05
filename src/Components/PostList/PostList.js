import React from 'react';
import { Link } from 'react-router-dom';


function PostList({ post, handleDeletePost }) {
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
			
					<button className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => handleDeletePost(post._id)}>
                                DELETE
                                </button>
			
				 
			</div>
		</div>
	);
}

export default PostList;