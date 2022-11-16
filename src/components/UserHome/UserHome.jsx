import React from "react";
import "./userHome.css";
import CommentCard from "../CommentCard/CommentCard";
import CommentForm from "../CommentForm/CommentForm";
import Modal from "../Modal/Modal";
function UserHome({ user }) {
  return (
    <>
      <div className="comments-section">
        {user.comments.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}
        <CommentForm user={user} />
        <Modal />
      </div>
    </>
  );
}

export default UserHome;
