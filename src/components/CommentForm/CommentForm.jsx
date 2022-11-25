import React, { useState } from "react";
import "./commentForm.css";
//To create a random UUID:
import { v4 as uuidv4 } from "uuid";

function CommentForm() {
  const dataUser = JSON.parse(localStorage.getItem("data"));
  const comments = dataUser.comments;
  const [content, setContent] = useState("");

  const addComment = (content) => {
    const newComment = {
      id: uuidv4(),
      content: content,
      createdAt: "1 second ago",
      replies: [],
      score: 0,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
    };
    comments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(comments));
  };

  const post = (e) => {
    e.preventDefault();
    if (content) {
      addComment(content);
    } else {
      setContent("");
    }
  };

  return (
    <div className="comment-form card">
      <span className="avatar">
        <img src={dataUser.currentUser.image.webp} alt="Juliusomo avatar" />
      </span>
      <form className="comment-form">
        <div className="form-group">
          <textarea
            className="form-control"
            id=""
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add a comment..."
            rows="3"
          ></textarea>
        </div>
      </form>
      <button type="submit" className="btn" onClick={post}>
        Send
      </button>
    </div>
  );
}

export default CommentForm;
