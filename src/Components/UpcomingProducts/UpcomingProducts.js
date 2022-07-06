import React from "react";

import "./UpcomingProducts.css";

import { IoTimeSharp } from "react-icons/io5";

const list = [
  {
    title: "Coconut Water & Coconut Oil",
    subtitle: "Healthy Products",
    date: "15 Nov, 2021",
    color: "#FCD5C7",
  },
  {
    title: "Herbal Supplements",
    subtitle: "Medical Products",
    date: "20 Nov, 2021",
    color: "#CB0A26",
  },
  {
    title: "NOC-Out Cover-Up Compact",
    subtitle: "Cosmetics Products",
    date: "17 Nov, 2021",
    color: "#1D7DCE",
  },
];

const UpcomingProducts = () => {
  return (
    <div className="upcomingproducts">
      <h1>Upcoming Products</h1>
      <div className="upcomingproducts__list">
        {list.map((item, index) => (
          <div key={index}>
            <div style={{ backgroundColor: item.color }}></div>
            <div>
              <div>
                <IoTimeSharp style={{ color: "#FF9017" }} />
                <p>{item.date}</p>
              </div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingProducts;
