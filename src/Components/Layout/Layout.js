import React, { useRef } from "react";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";

import "./Layout.css";

// Components

const Layout = ({ Page }) => {
  return (
    <div className="layout">
      <Sidebar className="layout__sidebar" />
      <div className="layout__body">
        <TopBar />
        <div className="layout__content">
          <Page />
        </div>
      </div>
    </div>
  );
};

export default Layout;
