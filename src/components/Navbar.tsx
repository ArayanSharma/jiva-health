"use client";

import "../app/styles/Navbar.css";
import SearchBar from "./SearchBar";
import {
  Search,
  Bell,
  Settings,
  Moon,
} from "lucide-react";
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        

        <div>
          <SearchBar />
        </div>
      </div>

      <div className="navbar-right">
        <div className="nav-icon">
          <Moon size={20} />
        </div>

        <div className="nav-icon notification">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </div>

        <div className="nav-icon">
          <Settings size={20} />
        </div>

        <div className="navbar-profile">
          <div className="profile-image">
            AD
          </div>

          <div className="profile-details">
            <h4>Admin User</h4>
            <p>Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
