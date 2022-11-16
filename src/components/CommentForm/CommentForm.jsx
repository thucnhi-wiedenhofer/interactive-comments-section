import React from "react";
import "./commentForm.css";

function CommentForm({ user }) {
  return (
    <div className="comment-form card">
      <span className="avatar">
        <img src={user.currentUser.image.webp} alt="Juliusomo avatar" />
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
      </form>
      <button type="submit" className="btn">
        Send
      </button>
    </div>
  );
}

export default CommentForm;
