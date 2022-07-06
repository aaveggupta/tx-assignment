import React from "react";
import { useState } from "react";

import "./SidebarOption.css";

const SideBarOption = ({ Icon, text }) => {
  const [activeOption, setActiveOption] = useState("Dashboard");
  let active = text === activeOption;
  return (
    <>
      {Icon ? (
        <div className={`sidebaroption ${active && "sidebaroption--active"}`}>
          <div className={`${active && "sidebaroption--active__left"}`}></div>
          <Icon className="sidebaroption__icon" />
          <h3>{text}</h3>
        </div>
      ) : (
        <div className={`sidebaroption ${active && "sidebaroption--active"}`}>
          <h3 style={{ fontSize: ".95rem" }}>{text}</h3>
        </div>
      )}
    </>
  );
};

export default SideBarOption;
