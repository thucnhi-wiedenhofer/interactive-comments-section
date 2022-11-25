import React from "react";
import CommentCard from "../CommentCard/CommentCard";

function Comments({ comments }) {
  //Delete Comment
  const deletePost = (id) => {
    // Fetching comments from localstorage data:
    const comments = JSON.parse(localStorage.getItem("comments"));
    console.log(comments);
    comments.filter((comment) => comment.id !== id);
    localStorage.setItem("comments", JSON.stringify(comments));
  };

  return (
    <>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          deletePost={deletePost}
          //edit={edit}
        />
      ))}
    </>
  );
}

export default Comments;
