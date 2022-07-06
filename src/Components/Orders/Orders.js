import React from "react";

import "./Orders.css";

const list = [
  {
    code: "#2458",
    name: "Ronald Richards",
    location: "Desoto, Oklahoma",
    startDate: "16/11/2021",
    status: "Complete",
    color: "#4AAF05",
  },
  {
    code: "#2458",
    name: "Theresa Webb",
    location: "Portland, Illinois",
    startDate: "17/11/2021",
    status: "Pending",
    color: "#FB8832",
  },
  {
    code: "#2458",
    name: "Arlene McCopy",
    location: "Coppell, Virginia",
    startDate: "18/11/2021",
    status: "Processing",
    color: "#20C2CC",
  },
];

const Orders = () => {
  return (
    <div className="orders">
      <h1>Orders</h1>
      <div>
        <div className="orders__listTitle">
          <p>Code</p>
          <p>Name</p>
          <p>Location</p>
          <p>Start Date</p>
          <p>Status</p>
        </div>
        {list.map((item, index) => (
          <div key={index} className="orders__list">
            <p>{item.code}</p>
            <p>{item.name}</p>
            <p>{item.location}</p>
            <p>{item.startDate}</p>
            <button style={{ backgroundColor: item.color }}>
              {item.status}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
