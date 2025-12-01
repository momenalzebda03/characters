"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import baseApi from "../BaseApi/baseApi";
import { Character } from "../types/allTypes";

type CharacterContextValue = {
  data: Character[];
  filteredData: Character[];
  loading: boolean;
  error: string;
  handleSearch: (query: string) => void;
};

const CharacterContext = createContext<CharacterContextValue | undefined>(
  undefined
);

export function CharacterProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Character[]>([]);
  const [filteredData, setFilteredData] = useState<Character[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    baseApi
      .get("/character")
      .then((response) => {
        setData(response.data.results);
        setFilteredData(response.data.results);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
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
    <CharacterContext.Provider
      value={{ data, filteredData, loading, error, handleSearch }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacters() {
  const ctx = useContext(CharacterContext);
  if (!ctx) {
    throw new Error("useCharacters must be used within a CharacterProvider");
  }
  return ctx;
}
