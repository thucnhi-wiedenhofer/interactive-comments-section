import React from "react";
import data from "../data.json";
import "./home.css";
import Modal from "./../components/Modal/Modal";
import CommentForm from "../components/CommentForm/CommentForm";
import Comments from "../components/Comments/Comments";

function Home() {
  // Put the object data into local storage
  localStorage.setItem("data", JSON.stringify(data));

  return (
    <main>
      <div className="container">
        <div className="comments-section">
          {/* Displaying comments */}
          <Comments />
          {/* Displaying form to add new comments */}
          <CommentForm />
          {/* Displaying modal when click on delete button */}
          <Modal />
        </div>
      </div>
    </main>
  );
}

export default Home;
