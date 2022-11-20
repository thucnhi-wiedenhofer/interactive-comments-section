import React from "react";
import data from "../data.json";
import "./home.css";
import Modal from "./../components/Modal/Modal";
import CommentCard from "../components/CommentCard/CommentCard";
import CommentForm from "../components/CommentForm/CommentForm";

function Home() {
  // Put the object data into storage
  localStorage.setItem("data", JSON.stringify(data));
  const dataUser = JSON.parse(localStorage.getItem("data"));

  return (
    <main>
      <div className="container">
        <div className="comments-section">
          {dataUser.comments.map((comment, index) => (
            <CommentCard key={index} comment={comment} />
          ))}
          <CommentForm user={dataUser} />
          <Modal />
        </div>
      </div>
    </main>
  );
}

export default Home;
