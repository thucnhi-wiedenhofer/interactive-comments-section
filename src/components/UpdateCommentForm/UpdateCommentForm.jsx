import React, { useState } from "react";
import "./updateCommentForm.css";
import minusIcon from "./../../images/icon-minus.svg";
import plusIcon from "./../../images/icon-plus.svg";
import deleteIcon from "./../../images/icon-delete.svg";
import editIcon from "./../../images/icon-edit.svg";

function UpdateCommentForm({ comment }) {
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
          <span>{score}</span>
          <img
            src={minusIcon}
            alt="minus icon"
            onClick={() => setScore(score - 1)}
          />
        </div>
        {/* Update and delete comment possible only for currentuser */}
        <div className="card-content">
          <div className="heading-card">
            <div className="left">
              <img
                src={comment.user.image.webp}
                className="avatar-profile"
                alt="profile avatar"
              />
              <h2>{comment.user.username}</h2>

              <div className="you">you</div>

              <p>{comment.createdAt}</p>
            </div>

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
          </div>

          <div className="comment-form card-text">
            <form className="comment-form">
              <div className="form-group">
                <textarea
                  id="response"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
            </form>
            <button type="submit" className="btn">
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateCommentForm;
