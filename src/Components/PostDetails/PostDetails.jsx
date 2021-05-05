import React from 'react';
import { Link } from 'react-router-dom';

function PostDetails({ post }) {
	return (
		<div className='panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>{post.title}</h3>
			</div>
			<div className='panel-body'>
				<dl>
					<dt>Content</dt>
					<dd>{post.content}</dd>
				</dl>
			</div>
			<div className='panel-footer'>
				<Link to='/'>RETURN TO LIST</Link>
			</div>
		</div>
	);
}

export default PostDetails;