import React from "react";
import CommentCard from "../CommentCard/CommentCard";
import CommentForm from "../CommentForm/CommentForm";

function UserHome({ user }) {
  return (
    <>
      <div className="comments-section">
        {user.comments.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}
      </div>

      <CommentForm user={user} />
    </>
  );
}

export default UserHome;
