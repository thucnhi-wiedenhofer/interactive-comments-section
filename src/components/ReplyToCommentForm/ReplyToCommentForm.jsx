import React from "react";
import "./replyToCommentForm.css";
import juliusomoImg from "./../../images/avatars/image-juliusomo.webp";

function ReplyToCommentForm() {
  return (
    <div className="comment-form card">
      <span className="avatar">
        <img src={juliusomoImg} alt="Juliusomo avatar" />
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
        Reply
      </button>
    </div>
  );
}

export default ReplyToCommentForm;
