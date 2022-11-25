import React, { useState, useEffect } from "react";
import data from "../data.json";
import "./home.css";
import Modal from "./../components/Modal/Modal";
import CommentForm from "../components/CommentForm/CommentForm";
import Comments from "../components/Comments/Comments";

function Home() {
  // Put the object data into local storage
  localStorage.setItem("data", JSON.stringify(data));

  // Fetching from localstorage data:
  const dataUser = JSON.parse(localStorage.getItem("data"));
  console.log(dataUser);

  return (
    <main>
      <div className="container">
        <div className="comments-section">
          <Comments comments={dataUser.comments} />
          <CommentForm />
          <Modal />
        </div>
      </div>
    </main>
  );
}

export default Home;
