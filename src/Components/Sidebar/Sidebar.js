import React, { useRef } from "react";

import "./Sidebar.css";

import SideBarOption from "../SidebarOption/SidebarOption";
import { sidebarContent1, sidebarContent2 } from "../../helpers/sidebarContent";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import truckxLogo from "../../assets/pure-blue-logo.png";
import { useState } from "react";

const SideBar = ({ className }) => {
  const sidebar = useRef(0);
  const [visible, setVisible] = useState(true);
  const collapseSidebar = () => {
    sidebar.current.style.flex = 0.03;
    setVisible(false);
  };
  const expandSidebar = () => {
    sidebar.current.style.flex = 0.1;
    setVisible(true);
  };
  return (
    <div
      ref={sidebar}
      className={`sidebar ${className}`}
      style={{ minWidth: visible ? "12rem" : "" }}
    >
      {visible ? (
        <BsFillArrowLeftSquareFill
          style={{
            fontSize: "1.8rem",
            color: "#1890FF",
            cursor: "pointer",
            position: "absolute",
            right: ".5rem",
            top: "1rem",
          }}
          onClick={collapseSidebar}
        />
      ) : (
        <BsFillArrowRightSquareFill
          style={{
            fontSize: "1.8rem",
            color: "#1890FF",
            cursor: "pointer",
            position: "absolute",
            right: ".5rem",
            top: "1rem",
          }}
          onClick={expandSidebar}
        />
      )}

      {visible ? (
        <>
          {" "}
          <div className="sidebar__head">
            <img
              src={truckxLogo}
              alt="truckx_logo"
              className="sidebar__head-logo-img"
            />
          </div>
          <div className="sidebar__body">
            {sidebarContent1.map((option, index) => (
              <SideBarOption
                key={index}
                Icon={option.icon}
                text={option.text}
              />
            ))}
          </div>
          <div style={{ marginTop: "4rem" }} className="sidebar__body">
            {sidebarContent2.map((option, index) => (
              <SideBarOption
                key={index}
                Icon={option.icon}
                text={option.text}
              />
            ))}
          </div>
          <div className="sidebar__foot">
            <div></div>
            <div>
              <h4>Aaveg Gupta</h4>
              <p>Product Engineer</p>
            </div>
          </div>{" "}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SideBar;
