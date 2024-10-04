import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "../pages/sidebar";
import Header from "../component/header/header";
import Inbox from "../pages/inbox";
import Users from "../pages/users";
import Assigned from "../pages/assigned";
import Resolved from "../pages/resolved";
import Pending from "../pages/pending";
import Dashboard from "../pages/dashboard";
import Purchase_History from "../pages/purchase";
import Login from "../pages/login";

const Router = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className="flex">
      {!isLoginPage && <Header />}
      {!isLoginPage && <Sidebar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/users" element={<Users />} />
          <Route path="/assigned" element={<Assigned />} />
          <Route path="/resolved" element={<Resolved />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/purchase" element={<Purchase_History />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
