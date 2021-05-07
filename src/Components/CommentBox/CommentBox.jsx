import react, { useRef, useState } from "react";

export default function CommentBox(props) {
  const [comments, setComments] = useState();
  const [commentData, setCommentData] = useState({
    content: "",
  });

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddComment(commentData);
  };

  const handleChange = (e) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h1>Leave a Comment</h1>
      <form
        action="/details"
        autoComplete="off"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <textarea
          class="form-control"
          name="content"
          value={commentData.content}
          onChange={handleChange}
          col="100"
          rows="10"
          placeholder="Comment Here..."
        ></textarea>
        <div class="text-right">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
