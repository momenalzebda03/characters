import { ReactNode } from "react";

export interface Character {
  id: number;
  name: string;
  image: string;
}

export interface SearchProps {
  onSearch: (query: string) => void;
}

export type CharacterType = {
  id: number;
  name: string;
  image: string;
};

export type CharacterListProps = {
 data: CharacterType[];
};

export type CharacterProps = {
  item: CharacterType;
};

export interface ButtonProps {
  link: string;
  children: ReactNode;
}

export type url = {
  epUrl: string;
};
