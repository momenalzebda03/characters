"use client";
import "./assets/css/index.css";
import CharacterList from "./components/character/CharacterList";
import Search from "./components/common/Search";
import { CharacterProvider, useCharacters } from "./store/CharacterContext";
 
function AppContent() {
  const { loading, error } = useCharacters();

  return (
    <div className="app">
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="sidebar">
          <Search />
          <CharacterList />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <CharacterProvider>
      <AppContent />
    </CharacterProvider>
  );
}

export default App;
