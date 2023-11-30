import React from "react";
import Friend from "./Friend";
// 👉 1- FriendsList renders several Friend components, import Friend

export default function FriendsList(props) {
  // 👉 2- What data does FriendsList need to do its job? Use destructuring
  const { filteredArr, changeStatus } = props;
  return (
    <div className="list-friends container">
      {filteredArr.map((elem) => {
        return <Friend key={elem.id} elem={elem} changeStatus={changeStatus} />;
      })}
    </div>
  );
}
