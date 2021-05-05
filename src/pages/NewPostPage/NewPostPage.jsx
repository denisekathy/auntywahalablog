import React, {  useState, useRef, useEffect } from 'react';

export default function NewPostPage(props) {
	const [invalidForm, setValidForm] = useState(true);
	const [formData, setFormData] = useState({
		title: "",
		content: "",
	
	});

	const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity()
			? setValidForm(false)
			: setValidForm(true);
	}, [formData]);

	const handleSubmit = e => {
		e.preventDefault();
		props.handleAddPost(formData);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
 
  return (
    <>
    <h1>Create New Post</h1>
    <form autoComplete='off' ref={formRef} onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Title</label>
        <input
          className='form-control'
          name='title'
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <br/>
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
      <br/>
      
      
      <button type='submit' className='btn btn-success' disabled={invalidForm} >
      Create Post
      </button>
    </form>
  </>
  
  
   
 


  );
}
