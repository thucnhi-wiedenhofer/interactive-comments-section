import React from "react";
import "./commentCard.css";
import replyIcon from "./../../images/icon-reply.svg";
import minusIcon from "./../../images/icon-minus.svg";
import plusIcon from "./../../images/icon-plus.svg";

function CommentCard({ comment }) {
  return (
    <div className="comment card">
      <div className="score">
        <img src={plusIcon} alt="plus icon" />
        <span>{comment.score}</span>
        <img src={minusIcon} alt="minus icon" />
      </div>

      <div className="card-content">
        <div className="heading-card">
          <div className="left">
            <img
              src={comment.user.image.png}
              className="avatar-profile"
              alt="profile avatar"
            />
            <h2>{comment.user.username}</h2>
            <p>{comment.createdAt}</p>
          </div>
          <span className="reply-btn">
            <img src={replyIcon} alt="reply icon" />
            reply
          </span>
        </div>

        <div className="card-text">
          <p>{comment.content}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
