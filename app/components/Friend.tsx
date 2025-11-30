import Button from "./Button";

export type FriendType = {
  id: number;
  name: string;
  image: string;
  balance: number;
};

interface FriendProps {
  item: FriendType;
  isSelectedForm: number | null;
  setIsSelectedForm: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Friend({
  item,
  isSelectedForm,
  setIsSelectedForm,
}: FriendProps) {
  const handleCardFriend = (id: number) => {
    setIsSelectedForm((prevId) => (prevId === id ? null : id));
  };

  return (
    <li className="friend-item">
      <img src={item.image} alt={`${item.name}'s avatar`} />
      <h3>{item.name}</h3>

      {item.balance < 0 && (
        <p className="red">
          You owe {item.name} ${Math.abs(item.balance)}
        </p>
      )}

      {item.balance > 0 && (
        <p className="green">
          {item.name} owes you ${Math.abs(item.balance)}
        </p>
      )}

      {item.balance === 0 && <p>You and {item.name} are even</p>}

      <Button onClick={() => handleCardFriend(item.id)}>
        {isSelectedForm === item.id ? "Close" : "Select"}
      </Button>
    </li>
  );
}
