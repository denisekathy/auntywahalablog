import React, { useState, useRef, useEffect } from "react";
import "./NewPostPage.css";

export default function NewPostPage(props, user) {
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    userId: user._id,
    title: "",
    content: "",
    createdAt: "created_at",
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddPost(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <br />
      <h1>Create New Post</h1>
      <br />

      <br />
      <form
        className="form"
        autoComplete="off"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div>
          <label className="label">Title</label>
          <input
            className="form-control"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <label className="label">Content</label>
          <textarea
            className="form-control"
            name="content"
            type="text"
            cols="10"
            rows="20"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <button
          type="submit"
          className="btn btnPost btn-lg"
          disabled={invalidForm}
        >
          Create Post
        </button>
      </form>
    </>
  );
}
