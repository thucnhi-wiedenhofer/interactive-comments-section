import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentForm from "../components/CommentForm/CommentForm";
import CommentCard from "../components/CommentCard/CommentCard";

function Home() {
  /*  data of Json file are fetched by axios   */
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("data.json")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <div className="container">
        <div className="comments-section">
          {data.map((comments) => (
            <CommentCard key={comments.id} data={comments} />
          ))}
        </div>
        <CommentForm data={data} />
      </div>
    </main>
  );
}

export default Home;
