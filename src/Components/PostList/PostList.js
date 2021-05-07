import React from "react";
import { Link } from "react-router-dom";

export default function PostList({ post, handleDeletePost }) {
  return (
    <div className="card bg-light">
      <div className="card-deck">
        <div className="card-body customBody">
          <h3 className="card-title">✍🏾 {post.title}</h3>
        </div>
        <div className="panel-footer PostList-action-panel">
          <Link
            className="btn btn-xs btn-success mr-4 mt-4"
            to={{
              pathname: "/details",
              state: { post },
            }}
          >
            DETAILS
          </Link>
          <Link
            className="btn btn-xs btn-secondary mr-4 mt-4"
            to={{
              pathname: "/edit",
              state: { post },
            }}
          >
            EDIT
          </Link>

          <button
            className="btn btn-xs btn-dark mr-4 mt-4"
            onClick={() => handleDeletePost(post._id)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
