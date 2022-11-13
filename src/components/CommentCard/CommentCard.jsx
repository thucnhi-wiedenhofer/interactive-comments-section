import React from "react";
import "./commentCard.css";
import replyIcon from "./../../images/icon-reply.svg";
import minusIcon from "./../../images/icon-minus.svg";
import plusIcon from "./../../images/icon-plus.svg";

function CommentCard({ data }) {
  return (
    <div className="comment card">
      <div className="score">
        <img src={plusIcon} alt="plus icon" />
        <span>{data.comments.score}</span>
        <img src={minusIcon} alt="minus icon" />
      </div>

      <div className="card-content">
        <div className="heading-card">
          <div className="left">
            <img
              src={data.currentUser.image.png}
              className="avatar-profile"
              alt="profile avatar"
            />
            <h2>{data.currentUser.username}</h2>
            <p>{data.comments.createdAt}</p>
          </div>
          <span className="reply-btn">
            <img src={replyIcon} alt="reply icon" />
            reply
          </span>
        </div>

        <div className="card-text">
          <p>{data.comments.content}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
