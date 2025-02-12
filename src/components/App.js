import React, { useState } from "react";
import FriendsList from "./FriendsList";
import Search from "./Search";
import dummyData from "../dummy-data/friends";
import Friend from "./Friend";

export default function App() {
  const [data, setData] = useState(dummyData);
  const [search, setSearch] = useState("");

  const changeStatus = (id) => {
    setData(
      data.map((elem) => {
        if (elem.id === id) {
          return { ...elem, married: !elem.married };
        } else {
          return elem;
        }
      })
    );
  };

  const filteredArr = () => {
    const term = search.trim().toLowerCase();
    if (!term) return data;
    return data.filter((elem) => {
      return elem.name.toLowerCase().includes(term);
    });
  };

  return (
    <div className="app-friends container">
      <Search setSearch={setSearch} />
      <FriendsList filteredArr={filteredArr()} changeStatus={changeStatus} />
    </div>
  );
}
