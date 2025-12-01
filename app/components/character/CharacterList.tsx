"use client";
import Character from "./Character";
import { useCharacters } from "../../store/CharacterContext";

function CharacterList() {
  const { filteredData } = useCharacters();

  return (
    <div>
      <ul>
        {filteredData.map((item) => (
          <Character key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
