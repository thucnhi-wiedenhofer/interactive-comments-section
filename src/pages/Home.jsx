import React, { useEffect, useState } from "react";
import axios from "axios";
import UserHome from "../components/UserHome/UserHome";

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
        <UserHome data={data} />
      </div>
    </main>
  );
}

export default Home;
