import React, { useState } from 'react';
import PostDetails from '../../Components/PostDetails/PostDetails'
import { useLocation, Route } from 'react-router-dom';
import CommentBox from '../../Components/CommentBox/CommentBox'
import AuthPage from '../AuthPage/AuthPage';
import { getUser } from '../../utilities/users-service'
function PostDetailPage(props) {
    const [user, setUser] =useState(getUser());
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
            {user ? (
            <CommentBox  user={user} />
            
            ) :
                (
                   
<AuthPage setUser={setUser} user={user}/>
                    
                    
                )
            }
            
            
		</>
	);
}

export default PostDetailPage;