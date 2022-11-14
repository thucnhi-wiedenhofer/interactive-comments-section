import React from "react";
import CommentCard from "../CommentCard/CommentCard";
import CommentForm from "../CommentForm/CommentForm";

function UserHome({ data }) {
  return (
    <>
      <div className="comments-section">
        {data.map((comments) => (
          <CommentCard key={comments.id} data={comments} />
        ))}
      </div>
      {data.map((users) => (
        <CommentForm key={users.id} data={users} />
      ))}
    </>
  );
}

export default UserHome;
