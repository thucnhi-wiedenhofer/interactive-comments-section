import React from "react";
import "./commentForm.css";

function CommentForm({ user }) {
  return (
    <div className="comment-form card">
      <span className="avatar">
        <img src={user.username} alt="Juliusomo avatar" />
      </span>
      <form className="comment-form">
        <div className="form-group">
          <textarea
            className="form-control"
            id=""
            placeholder="Add a comment..."
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
