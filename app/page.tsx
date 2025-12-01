"use client";
import "./assets/css/index.css";
import { useState, useEffect } from "react";
import FriendsList from "./components/FriendsList";
import Search from "./components/Search";
import baseApi from "./BaseApi/baseApi";

interface Post {
  id: number;
  name: string;
  image: string;
}

function App() {
  const [data, setData] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    baseApi
      .get("/character")
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="app">
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div className="sidebar">
          <Search />
          <FriendsList data={data} />
        </div>
      )}
    </div>
  );
}

export default App;
