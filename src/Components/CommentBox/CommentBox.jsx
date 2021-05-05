import react from "react";

export default function CommentBox(prop) {
  return (
    <>
   
      <h1>Leave a Comment</h1>
      <form action="/posts/{{post._id}}/comments" method="post">
        <textarea
          class="form-control"
          name="content"
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
