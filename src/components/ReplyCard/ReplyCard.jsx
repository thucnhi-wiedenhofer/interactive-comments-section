import React from "react";
import "./replyCard.css";
import replyIcon from "./../../images/icon-reply.svg";
import minusIcon from "./../../images/icon-minus.svg";
import plusIcon from "./../../images/icon-plus.svg";

function ReplyCard({ reply }) {
  return (
    <div className="reply card">
      <div className="score">
        <img src={plusIcon} alt="plus icon" />
        <span>{reply.score}</span>
        <img src={minusIcon} alt="minus icon" />
      </div>

      <div className="card-content">
        <div className="heading-card">
          <div className="left">
            <img
              src={reply.user.image.webp}
              className="avatar-profile"
              alt="profile avatar"
            />
            <h2>{reply.user.username}</h2>
            <p>{reply.createdAt}</p>
          </div>
          <span className="reply-btn">
            <img src={replyIcon} alt="reply icon" />
            reply
          </span>
        </div>

        <div className="card-text">
          <p>
            <span className="strong">@{reply.replyingTo}</span> {reply.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReplyCard;
