"use client";
import Character from "./Character";

export type FriendType = {
  id: number;
  name: string;
  image: string;
};

type FriendsListProps = {
 data: FriendType[];
};

function FriendsList({ data }: FriendsListProps) {
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

export default FriendsList;
