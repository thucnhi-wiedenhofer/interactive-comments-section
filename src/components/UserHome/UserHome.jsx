import React from "react";
import "./userHome.css";
import CommentCard from "../CommentCard/CommentCard";
import CommentForm from "../CommentForm/CommentForm";

function UserHome({ user }) {
  return (
    <>
      <div className="comments-section">
        {user.comments.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}
        <CommentForm user={user} />
      </div>
    </>
  );
}

export default UserHome;
