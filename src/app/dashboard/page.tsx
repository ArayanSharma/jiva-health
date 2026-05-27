"use client";

import "../styles/dashboard.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-layout">
    
      <Sidebar />

  
      <div className="dashboard-main">
       
        <Navbar />

       
        <div className="dashboard-container">
      
          <div className="dashboard-header">
            <div>
              <h1 className="dashboard-title">
              
              </h1>

              <p className="dashboard-subtitle">
                Manage user accounts and permissions
              </p>
            </div>

            <button className="add-user-btn">
              + Add User
            </button>
          </div>

          
          <div className="stats-grid">
            <Card
              title="Total User"
              count={6}
            />

            <Card
              title="Prime User"
              count={5}
              color="#16A34A"
            />

            <Card
              title="Non-Prime User"
              count={10}
              color="#16A34A"
            />

            <Card
              title="Total Family Members"
              count={49}
              color="#16A34A"
            />
          </div>

        
          <div className="dashboard-filters">
            <SearchBar
              placeholder="Search by patient, doctor, or specialty..."
              width="100%"
            />

            <select className="filter-select">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <select className="filter-select">
              <option>All Users</option>
              <option>Prime User</option>
              <option>Non-Prime User</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
