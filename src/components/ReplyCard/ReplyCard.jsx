import React, { useState } from "react";
import "./replyCard.css";
import replyIcon from "./../../images/icon-reply.svg";
import minusIcon from "./../../images/icon-minus.svg";
import plusIcon from "./../../images/icon-plus.svg";
import deleteIcon from "./../../images/icon-delete.svg";
import editIcon from "./../../images/icon-edit.svg";

function ReplyCard({ reply }) {
  /* UseState to change score when user click + or -  */
  const [score, setScore] = useState(reply.score);

  return (
    <>
      <div className="divider">
        <div className="vr"></div>
      </div>
      <div className="reply card">
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
                src={reply.user.image.webp}
                className="avatar-profile"
                alt="profile avatar"
              />
              <h2>{reply.user.username}</h2>
              {/* display you if currentuser */}
              {reply.user.username === "juliusomo" && (
                <div className="you">you</div>
              )}
              <p>{reply.createdAt}</p>
            </div>
            {/* display delete and edit buttons if currentuser */}
            {reply.user.username === "juliusomo" ? (
              <>
                <div className="right">
                  <span className="delete-btn">
                    <img src={deleteIcon} alt="delete icon" />
                    Delete
                  </span>
                  <span className="edit-btn">
                    <img src={editIcon} alt="edit icon" />
                    Edit
                  </span>
                </div>
              </>
            ) : (
              <span className="reply-btn">
                <img src={replyIcon} alt="reply icon" />
                Reply
              </span>
            )}
          </div>

          <div className="card-text">
            <p>
              <span className="strong">@{reply.replyingTo}</span>{" "}
              {reply.content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReplyCard;
