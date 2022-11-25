import React, { useState } from "react";
import "./commentCard.css";
//import UpdateCommentForm from "../UpdateCommentForm/UpdateCommentForm";
import ReplyCard from "../ReplyCard/ReplyCard";
import replyIcon from "./../../images/icon-reply.svg";
import minusIcon from "./../../images/icon-minus.svg";
import plusIcon from "./../../images/icon-plus.svg";
import deleteIcon from "./../../images/icon-delete.svg";
import editIcon from "./../../images/icon-edit.svg";

function CommentCard({ comment, deletePost, edit }) {
  /* UseState to change score when user click + or -  */
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
          <span>{comment.score}</span>
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
              {/* display you if currentuser */}
              {comment.user.username === "juliusomo" && (
                <div className="you">you</div>
              )}
              <p>{comment.createdAt}</p>
            </div>
            {/* display delete and edit buttons if currentuser */}
            {comment.user.username === "juliusomo" ? (
              <>
                <div className="right">
                  <span
                    onClick={() => deletePost(comment.id)}
                    className="delete-btn"
                  >
                    <img src={deleteIcon} alt="delete icon" />
                    Delete
                  </span>
                  <span onClick={() => edit(comment.id)} className="edit-btn">
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
            <p>{comment.content}</p>
          </div>
        </div>
      </div>
      {/* {/* <UpdateCommentForm />*} */}
      <div className="replies-section">
        {comment.replies.map((reply, index) => (
          <ReplyCard key={index} reply={reply} />
        ))}
      </div>
    </>
  );
}

export default CommentCard;
