"use client";
import Character from "./Character";
import { CharacterListProps } from "../../types/allTypes";

function CharacterList({ data }: CharacterListProps) {
  return (
    <div>
      <ul>
        {data.map((item) => (
         <Character key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
