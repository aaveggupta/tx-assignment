import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Layout from "./Components/Layout/Layout";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout Page={Dashboard} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
