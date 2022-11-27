import React, { useState, useEffect } from "react";
import CommentCard from "../CommentCard/CommentCard";

function Comments() {
  // Fetching from localstorage data:
  const dataUser = JSON.parse(localStorage.getItem("data"));
  console.log(dataUser);
  const [comments, setComments] = useState(dataUser.comments);
  console.log(comments);
  const getComments = JSON.parse(localStorage.getItem("commentAdded"));
  console.log(getComments);
  useEffect(() => {
    if (getComments === null) {
      setComments(comments);
    } else {
      setComments(getComments);
    }
  }, [comments, getComments]);

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
