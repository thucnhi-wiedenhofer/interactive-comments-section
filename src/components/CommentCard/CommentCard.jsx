import React, { useState } from "react";
import "./commentCard.css";
import replyIcon from "./../../images/icon-reply.svg";
import minusIcon from "./../../images/icon-minus.svg";
import plusIcon from "./../../images/icon-plus.svg";
import ReplyCard from "../ReplyCard/ReplyCard";

function CommentCard({ comment }) {
  const [score, setScore] = useState(comment.score);
  return (
    <>
      <div className="comment card">
        <div className="score">
          <img
            src={plusIcon}
            alt="plus icon"
            onClick={() => setScore(score + 1)}
          />
          <span>{score}</span>
          <img
            src={minusIcon}
            alt="minus icon"
            onClick={() => setScore(score - 1)}
          />
        </div>

        <div className="card-content">
          <div className="heading-card">
            <div className="left">
              <img
                src={comment.user.image.webp}
                className="avatar-profile"
                alt="profile avatar"
              />
              <h2>{comment.user.username}</h2>
              <p>{comment.createdAt}</p>
            </div>
            <span className="reply-btn">
              <img src={replyIcon} alt="reply icon" />
              Reply
            </span>
          </div>

          <div className="card-text">
            <p>{comment.content}</p>
          </div>
        </div>
      </div>
      <div className="replies-section">
        {comment.replies.map((reply, index) => (
          <ReplyCard key={index} reply={reply} />
        ))}
      </div>
    </>
  );
}

export default CommentCard;
