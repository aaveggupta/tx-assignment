import React from "react";

import "./SalesActivities.css";

import sa1 from "../../assets/sa-1.png";

const SalesActivities = () => {
  return (
    <div className="salesactivities">
      <h1>Sales Activity</h1>
      <img src={sa1} alt="salesactivity" />
    </div>
  );
};

export default SalesActivities;
