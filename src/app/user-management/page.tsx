"use client";

import Link from "next/link";
import { useState, FormEvent, ChangeEvent } from "react";
import "../styles/User.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";
import {
  Eye,
  Pencil,
  Crown,
  Mail,
  Phone,
  CalendarDays,
  X,
} from "lucide-react";
import React from 'react';

interface User {
  id: number;
  initials: string;
  name: string;
  role: string;
  status: "Active" | "Inactive";
  email: string;
  phone: string;
  joined: string;
  last: string;
  appointments: number;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
}

/* USERS DATA */
const users: User[] = [
  {
    id: 1,
    initials: "EL",
    name: "Eva Lopez",
    role: "Patient",
    status: "Active",
    email: "eva.lopez@email.com",
    phone: "+1 (555) 555-5555",
    joined: "2025-07-18",
    last: "2026-03-21",
    appointments: 8,
  },
  {
    id: 2,
    initials: "CS",
    name: "Cecilia Smith",
    role: "Patient",
    status: "Inactive",
    email: "cecilia.smith@email.com",
    phone: "+1 (555) 333-3333",
    joined: "2024-05-22",
    last: "2025-12-30",
    appointments: 5,
  },
  {
    id: 3,
    initials: "DK",
    name: "David Kim",
    role: "Nurse",
    status: "Active",
    email: "david.kim@hospital.org",
    phone: "+1 (555) 444-4444",
    joined: "2022-11-03",
    last: "2026-03-22",
    appointments: 30,
  },
];

const UserManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("All Status");
  const [filterRole, setFilterRole] = useState<string>("All Users");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    role: "Patient",
    status: "Active",
  });

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.includes(searchQuery);
    const matchesStatus =
      filterStatus === "All Status" || user.status === filterStatus;
    const matchesRole = filterRole === "All Users" || user.role === filterRole;
    return matchesSearch && matchesStatus && matchesRole;
  });

  const handleAddUser = (): void => {
    setShowForm(true);
  };

  const handleCloseForm = (): void => {
    setShowForm(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "Patient",
      status: "Active",
    });
  };

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all fields");
      return;
    }
    alert(`User ${formData.name} added successfully!`);
    handleCloseForm();
  };

  const handleUpgrade = (userName: string): void => {
    alert(`Upgrade ${userName} to Prime User`);
  };

  const handleView = (userId: number): void => {
    alert(`Viewing user ID: ${userId}`);
  };

  const handleEdit = (userName: string): void => {
    alert(`Edit user: ${userName}`);
  };

  return (
    <div className="user-layout">
      <Sidebar />

      <div className="user-main">
        <Navbar />

        <div className="user-container">
          <div className="user-header">
            <div>
              <h1>User Management</h1>

              <p>
                Manage user accounts and permissions
              </p>
            </div>

            <button className="add-user-btn" onClick={handleAddUser}>
              + Add User
            </button>
          </div>

          <div className="stats-grid">
            <Card
              title="Total User"
              count={6}
              color="#16A34A"
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

          <div className="filter-section">
            <SearchBar
              placeholder="Search by name, email or phone..."
              width="100%"
              onSearch={setSearchQuery}
            />

            <select
              className="filter-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <select
              className="filter-select"
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
            >
              <option>All Users</option>
              <option>Patient</option>
              <option>Nurse</option>
              <option>Doctor</option>
            </select>
          </div>

          <div style={{ marginBottom: '10px', color: '#666' }}>
            <p>Showing {filteredUsers.length} of {users.length} users</p>
          </div>

          <div className="user-list">
            {filteredUsers.length > 0 ? filteredUsers.map((user) => (
              <Link
                href={`/userdet/${user.id}`}
                className="user-card-link"
                key={user.id}
              >
                <div className="user-card">
                  <div className="user-left">
                    <div className="user-avatar">
                      {user.initials}
                    </div>

                    <div className="user-info">
                      <h2>{user.name}</h2>

                      <div className="badge-row">
                        <span className="role-badge">
                          {user.role}
                        </span>

                        <span
                          className={`status-badge ${
                            user.status === "Active"
                              ? "active"
                              : "inactive"
                          }`}
                        >
                          {user.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="user-contact">
                    <p>
                      <Mail size={16} />
                      {user.email}
                    </p>

                    <p>
                      <Phone size={16} />
                      {user.phone}
                    </p>
                  </div>

                  <div className="joined-info">
                    <p className="joined-title">
                      <CalendarDays size={16} />
                      Joined
                    </p>

                    <h4>{user.joined}</h4>

                    <span>
                      Last: {user.last}
                    </span>
                  </div>

                  <div className="appointment-box">
                    <p>Appointments</p>

                    <h1>
                      {user.appointments}
                    </h1>
                  </div>

                  <div className="user-actions">
                    <button
                      className="prime-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        handleUpgrade(user.name);
                      }}
                    >
                      <Crown size={16} />
                      Upgrade
                    </button>

                    <button
                      className="icon-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        handleView(user.id);
                      }}
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      className="icon-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        handleEdit(user.name);
                      }}
                    >
                      <Pencil size={18} />
                    </button>
                  </div>
                </div>
              </Link>
            )) : (
              <div style={{
                gridColumn: '1 / -1',
                padding: '40px',
                textAlign: 'center',
                color: '#999'
              }}>
                <p>No users found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={handleCloseForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New User</h2>
              <button
                className="modal-close-btn"
                onClick={handleCloseForm}
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="add-user-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleFormChange}
                  >
                    <option>Patient</option>
                    <option>Nurse</option>
                    <option>Doctor</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleFormChange}
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCloseForm}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="submit-btn"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
