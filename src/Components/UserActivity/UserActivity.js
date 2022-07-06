import React from "react";

import "./UserActivity.css";

import ua1 from "../../assets/ua-1.png";
import ua2 from "../../assets/ua-2.png";

const list = [
  {
    title: "Online Visitor",
    number: "556555",
    image: ua1,
  },
  {
    title: "Offline Visitor",
    number: "224505",
    image: ua2,
  },
];

const UserActivity = () => {
  return (
    <div className="useractivity">
      <h1>User Activity</h1>
      <div>
        {list.map((item, index) => (
          <div key={index} className="useractivity__list">
            <div>
              <p>{item.title}</p>
              <h4>{item.number}</h4>
            </div>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserActivity;
