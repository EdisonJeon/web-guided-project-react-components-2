import React from "react";
import PetsList from "./PetsList";

export default function Friend(props) {
  // 👉 1- What does a Friend need?
  const { elem, changeStatus } = props;

  if (!elem) return <div className="friend-friends container"></div>;

  return (
    <div className="friend-friends container">
      {/* 👉 2- Fix the JSX so it displays real info coming into the component */}
      <div className="friend-info">
        <div>
          <h3>Name: {elem.name}</h3>
          <p>Age: {elem.age}</p>

          <p>
            Married: {elem.married ? "Yes" : "No"}{" "}
            <button onClick={() => changeStatus(elem.id)}>change</button>
          </p>
          <div>
            Likes:
            <ul>
              {elem.hobbies.map((like, idx) => (
                <li key={idx}>{like}</li>
              ))}
              {/* 👉 3- Loop over the friend's hobbies and generate <li/> elements as you go */}
            </ul>
          </div>
        </div>

        <div>
          {/* 👉 3- What data does the PetsList need? */}
          {/* What is the exact name of the prop/props it expects? */}
          {/* Is the data around here somewhere so I may pass it? */}
          <PetsList pets={elem.pets} />
        </div>
      </div>
    </div>
  );
}
