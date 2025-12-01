import Button from "./Button";

export type FriendType = {
  id: number;
  name: string;
  image: string;
};

type FriendProps = {
  item: FriendType;
};

export default function Friend({ item }: FriendProps) {
  return (
    <li className="friend-item">
      <img src={item.image} alt={`${item.name}'s avatar`} />
      <h3>{item.name}</h3>
      <Button>Details</Button>
    </li>
  );
}
