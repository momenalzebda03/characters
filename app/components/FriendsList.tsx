"use client";
import React from "react";
import Friend, { FriendType } from "./Friend";

type FriendsListProps = {
  initialFriends: FriendType[];
  setIsSelectedForm: React.Dispatch<React.SetStateAction<number | null>>;
  isSelectedForm: number | null;
};

function FriendsList({
  initialFriends,
  setIsSelectedForm,
  isSelectedForm,
}: FriendsListProps) {
  return (
    <div>
      <ul>
        {initialFriends.map((item) => (
          <Friend
            key={item.id}
            item={item}
            setIsSelectedForm={setIsSelectedForm}
            isSelectedForm={isSelectedForm}
          />
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
