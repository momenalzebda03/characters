import Button from "../common/Button";
import { CharacterProps } from "../../types/allTypes";

function Character({ item }: CharacterProps) {
  return (
    <li className="friend-item">
      <img src={item.image} alt={`${item.name}'s avatar`} />
      <h3>{item.name}</h3>
      <Button link={`details/${item.id}`}>Details</Button>
    </li>
  );
}

export default Character;