import React from "react";
import juliusomoAvatar from "./../images/avatars/image-juliusomo.webp";
import "./commentForm.css";

function CommentForm() {
  return (
    <div className="card">
      <span className="avatar">
        <img src={juliusomoAvatar} alt="Juliusomo avatar" />
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
