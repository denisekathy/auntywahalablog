import React from 'react';
import PostDetails from '../../Components/PostDetails/PostDetails'
import { useLocation } from 'react-router-dom';
import CommentBox from '../../Components/CommentBox/CommentBox'
function PostDetailPage(props) {
	// Refer to PuppyListItem to see how puppy is being passed via the <Link>
	// using the useLocation hook from react-router dom, to grab the
	// state, desctructering the puppy variable attached to state
	const {
		state: {post},
	} = useLocation();

	return (
		<>
			<h1>Post Details</h1>
			<PostDetails key={post._id} post={post} />
            <CommentBox />
		</>
	);
}

export default PostDetailPage;