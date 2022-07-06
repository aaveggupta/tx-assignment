import React from "react";
import Orders from "../Orders/Orders";
import SalesActivities from "../SalesActivities/SalesActivities";
import UpcomingProducts from "../UpcomingProducts/UpcomingProducts";
import UserActivity from "../UserActivity/UserActivity";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <SalesActivities />
        <Orders />
      </div>
      <div>
        <UserActivity />
        <UpcomingProducts />
      </div>
    </div>
  );
};

export default Dashboard;
