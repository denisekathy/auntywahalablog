import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function EditPostPage(props) {
	const location = useLocation();

	const [invalidForm, setValidForm] = useState(true);
	const [formData, setFormData] = useState(location.state.post);

	const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity()
			? setValidForm(false)
			: setValidForm(true);
	}, [formData]);

	const handleSubmit = e => {
		e.preventDefault();
		props.handleUpdatePost(formData);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<h1>Edit Post</h1>
			<form ref={formRef} autoComplete='off' onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>Title</label>
					<input
						className='form-control'
						name='name'
						value={formData.title}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label>Content</label>
					<textarea
						className='form-control'
                        name='content'
                        type="text"
                         cols="10"
                         rows="20"
						value={formData.content}
						onChange={handleChange}
						required
					/>
				</div>
				
		
				<button
					type='submit'
					className='btn btn-xs'
					disabled={invalidForm}
				>
					SAVE POST
				</button>
				&nbsp;&nbsp;
				<Link to='/'>CANCEL</Link>
			</form>
		</>
	);

}



  