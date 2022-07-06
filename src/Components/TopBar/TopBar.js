import React from "react";

import "./TopBar.css";

import { TiWeatherPartlySunny } from "react-icons/ti";
import {
  AiOutlinePlus,
  AiOutlineCalendar,
  AiFillPieChart,
} from "react-icons/ai";
import { IoMdNotificationsOutline, IoMdStats } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

import { RiTimerFill } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar__top">
        <div>
          <div>
            <TiWeatherPartlySunny
              style={{
                fontSize: "1.5rem",
                color: "white",
              }}
            />
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "500" }}>75</h1>
          <div>
            <p style={{ fontSize: ".9rem", fontWeight: "700" }}>Wednesday</p>
            <p style={{ fontSize: ".8rem", marginTop: "-.2rem" }}>
              Sydney, Australia
            </p>
          </div>
        </div>
        <div>
          <div style={{ position: "relative" }}>
            <BiSearch className="topbar__search-icon" />
            <input type="text" placeholder="Search here..." />
          </div>
          <button className="topbar__btn">
            {" "}
            <AiOutlinePlus style={{ color: "#45D3A0" }} />{" "}
            <span>Add Project</span>{" "}
          </button>
          <button className="topbar__btn">
            {" "}
            <AiOutlineCalendar style={{ color: "#FFAC7E" }} />{" "}
            <span>30/11/2021</span>{" "}
          </button>
          <button className="topbar__nbtn">
            {" "}
            <IoMdNotificationsOutline
              style={{
                fontSize: "1.2rem",
                color: "#757575",
                cursor: "pointer",
              }}
            />{" "}
          </button>
        </div>
      </div>

      <div className="topbar__bottom">
        <div>
          <h1>Welcome, Aaveg Gupta!</h1>
          <p>Product Engineer</p>
        </div>
        <div>
          <div className="topbar__bottom-item">
            <div style={{ backgroundColor: "#D5EDFA" }}>
              {" "}
              <RiTimerFill
                style={{ fontSize: "1.3rem", color: "#139CE8" }}
              />{" "}
            </div>
            <div>
              <h3>$8,542.50</h3>
              <p>Net Benefit</p>
            </div>
          </div>

          <div className="topbar__bottom-item">
            <div style={{ backgroundColor: "#ECF0FD" }}>
              {" "}
              <IoMdStats
                style={{ fontSize: "1.3rem", color: "#5173E8" }}
              />{" "}
            </div>
            <div>
              <h3>$782.50</h3>
              <p>Reference</p>
            </div>
          </div>

          <div className="topbar__bottom-item">
            <div style={{ backgroundColor: "#F4EAFC" }}>
              {" "}
              <AiFillPieChart
                style={{ fontSize: "1.3rem", color: "#AB4BF4" }}
              />{" "}
            </div>
            <div>
              <h3>$5,896.50</h3>
              <p>Assessed Sales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
