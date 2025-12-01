"use client";
import "./assets/css/index.css";
import { useState, useEffect } from "react";
import CharacterList from "./components/CharacterList";
import Search from "./components/Search";
import baseApi from "./BaseApi/baseApi";

interface Friend {
  id: number;
  name: string;
  image: string;
}

function App() {
  const [data, setData] = useState<Friend[]>([]);
  const [filteredData, setFilteredData] = useState<Friend[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    baseApi
      .get("/character")
      .then((response) => {
        setData(response.data.results);
        setFilteredData(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredData(data);
    } else {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(results);
    }
  };

  return (
    <div className="app">
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="sidebar">
          <Search onSearch={handleSearch} />
          <CharacterList data={filteredData} />
        </div>
      )}
    </div>
  );
}

export default App;
