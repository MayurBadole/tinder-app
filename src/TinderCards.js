import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = () => {
  const [people] = useState([
    {
      name: "elon mask",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg ",
    },
    {
      name: "Sachin T",
      url: " https://images.news18.com/ibnlive/uploads/2021/04/sachin.jpg ",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing : " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen !");
  };
  return (
    <div className="tinderCard">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              {" "}
              <h3> {person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};
export default TinderCards;
