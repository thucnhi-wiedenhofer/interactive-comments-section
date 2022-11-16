import React from "react";
import "./replyToReplyForm.css";
import juliusomoImg from "./../../images/avatars/image-juliusomo.webp";

function ReplyToReplyForm() {
  return (
    <div className="reply-form card">
      <span className="avatar">
        <img src={juliusomoImg} alt="Juliusomo avatar" />
      </span>
      <form className="reply-form">
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

export default ReplyToReplyForm;
