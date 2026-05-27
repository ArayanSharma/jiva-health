"use client";

import "../../styles/Userdet.css";
import { useParams, useRouter } from "next/navigation";
import { useState, FormEvent, ChangeEvent } from "react";
import UserStatsCard from "@/components/Card";
import {
  ArrowLeft,
  CalendarDays,
  Activity,
  Mail,
  Phone,
  User,
  Heart,
  Home,
  Pencil,
  Trash2,
  Plus,
  ShoppingBag,
  CreditCard,
  Users,
  X,
  Crown,
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

interface AddressData {
  type: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

interface FamilyData {
  name: string;
  relationship: string;
  email: string;
  phone: string;
}

type TabType = "overview" | "orders" | "payments" | "family";

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

const UserDetailsPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();

  const userId = parseInt(params.userid as string);

  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [showAddressForm, setShowAddressForm] = useState<boolean>(false);
  const [showFamilyForm, setShowFamilyForm] = useState<boolean>(false);
  const [addressData, setAddressData] = useState<AddressData>({
    type: "Home",
    street: "",
    city: "",
    state: "",
    zipcode: "",
  });
  const [familyData, setFamilyData] = useState<FamilyData>({
    name: "",
    relationship: "Spouse",
    email: "",
    phone: "",
  });

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return <h1>User Not Found</h1>;
  }

  const handleEdit = (): void => {
    alert(`Edit mode for ${user.name} - Coming soon!`);
    setEditMode(!editMode);
  };

  const handleDelete = (): void => {
    if (window.confirm(`Delete user: ${user.name}?`)) {
      alert(`${user.name} has been deleted.`);
      router.push("/user-management");
    }
  };

  const handleUpgradeStatus = (): void => {
    alert(`${user.name} has been upgraded to Prime User!`);
  };

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    alert(`Status changed to: ${e.target.value}`);
  };

  // Address functions
  const handleAddAddressClick = (): void => {
    setShowAddressForm(true);
  };

  const handleCloseAddressForm = (): void => {
    setShowAddressForm(false);
    setAddressData({
      type: "Home",
      street: "",
      city: "",
      state: "",
      zipcode: "",
    });
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setAddressData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!addressData.street || !addressData.city || !addressData.state) {
      alert("Please fill in all address fields");
      return;
    }
    alert(`${addressData.type} address added successfully!`);
    handleCloseAddressForm();
  };

  // Family functions
  const handleAddFamilyClick = (): void => {
    setShowFamilyForm(true);
  };

  const handleCloseFamilyForm = (): void => {
    setShowFamilyForm(false);
    setFamilyData({
      name: "",
      relationship: "Spouse",
      email: "",
      phone: "",
    });
  };

  const handleFamilyChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFamilyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFamilySubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!familyData.name || !familyData.email || !familyData.phone) {
      alert("Please fill in all family member fields");
      return;
    }
    alert(`${familyData.name} added as family member successfully!`);
    handleCloseFamilyForm();
  };

  return (
    <div className="user-details-page">
      <div className="top-header">
        <button
          className="back-btn"
          onClick={() => router.push("/user-management")}
        >
          <ArrowLeft size={18} />
          Back to User Management
        </button>
      </div>

      <div className="profile-section">
        <div className="profile-left">
          <div className="profile-avatar">
            {user.initials}
          </div>

          <div>
            <h1 className="profile-name">
              {user.name}
            </h1>

            <div className="badge-row">
              <span className="status-badge">
                {user.status}
              </span>

              <span className="role-badge">
                {user.role}
              </span>

              <span className="normal-badge">
                Normal User
              </span>

              <span className="id-text">
                ID: #{user.id}
              </span>
            </div>

            <div className="profile-info-row">
              <p>
                <CalendarDays size={18} />
                Joined {user.joined}
              </p>

              <p>
                <Activity size={18} />
                Last active {user.last}
              </p>
            </div>
          </div>
        </div>

        <div className="profile-right">
          <button className="prime-btn" onClick={handleUpgradeStatus} style={{ display: "flex", alignItems: "center", gap: "8px", color: "white" }}>
            <Crown size={16} />
            Upgrade to Prime
          </button>

          <select className="status-select" onChange={handleStatusChange} defaultValue={user.status}>
            <option>{user.status}</option>
            <option>{user.status === 'Active' ? 'Inactive' : 'Active'}</option>
          </select>
        </div>
      </div>

      <div className="stats-grid">
        <UserStatsCard
          title="Total Orders"
          count={6}
        />

        <UserStatsCard
          title="Total Booking & Appointment"
          count={5}
          color="#16A34A"
        />

        <UserStatsCard
          title="Total Family Member"
          count={10}
          color="#16A34A"
        />

        <UserStatsCard
          title="Total Spent"
          count="₹24500.00"
        />
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          <User size={18} />
          Overview
        </button>

        <button
          className={`tab ${activeTab === "orders" ? "active" : ""}`}
          onClick={() => setActiveTab("orders")}
        >
          <ShoppingBag size={18} />
          Orders & Bookings
        </button>

        <button
          className={`tab ${activeTab === "payments" ? "active" : ""}`}
          onClick={() => setActiveTab("payments")}
        >
          <CreditCard size={18} />
          Payments
        </button>

        <button
          className={`tab ${activeTab === "family" ? "active" : ""}`}
          onClick={() => setActiveTab("family")}
        >
          <Users size={18} />
          Family Members
        </button>
      </div>

      {activeTab === "overview" && (
        <div className="details-grid">
          <div className="details-card">
            <div className="card-header">
              <h2>Personal Information</h2>

              <button className="edit-btn" onClick={handleEdit}>
                <Pencil size={16} />
                Edit
              </button>
            </div>

            <div className="info-list">
              <p>
                <Mail size={18} />
                <span className="info-label" style={{ color: "#16A34A" }}>
                  Email:
                </span>
                {user.email}
              </p>

              <p>
                <Phone size={18} />
                <span className="info-label" style={{ color: "#16A34A" }}>
                  Phone:
                </span>
                {user.phone}
              </p>

              <p>
                <CalendarDays size={18} />
                <span className="info-label" style={{ color: "#16A34A" }}>
                  Date of Birth:
                </span>
                5/15/1990
              </p>

              <p>
                <User size={18} />
                <span className="info-label" style={{ color: "#16A34A" }}>
                  Gender:
                </span>
                Female
              </p>

              <p>
                <Heart size={18} />
                <span className="info-label" style={{ color: "#16A34A" }}>
                  Blood Group:
                </span>
                O+
              </p>
            </div>
          </div>


          <div className="details-card">
            <div className="card-header">
              <h2>Addresses</h2>

              <button className="edit-btn" onClick={handleAddAddressClick}>
                <Plus size={16} />
                Add
              </button>
            </div>

            <div className="address-box">
              <div className="address-left">
                <div className="address-icon">
                  <Home size={20} />
                </div>

                <div>
                  <div className="address-top">
                    <h3>Home</h3>

                    <span>Default</span>
                  </div>

                  <p>
                    Flat 301, Sunshine Apartments,
                    MG Road Mumbai Maharashtra
                    400001 India
                  </p>
                </div>
              </div>

              <div className="address-actions">
                <button onClick={handleEdit}>
                  <Pencil size={16} />
                </button>

                <button className="delete-btn" onClick={handleDelete}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "orders" && (
        <div className="tab-content-card">
          <h2>Order History</h2>

          <div className="order-box">
            <div className="order-left">
              <div className="order-icon">
                <ShoppingBag size={24} />
              </div>

              <div>
                <div className="order-top">
                  <h3>Order #1</h3>
                  <span>Delivered</span>
                </div>

                <p>Paracetamol 500mg - 30 tablets</p>

                <small>March 28, 2026</small>
              </div>
            </div>

            <div className="order-right">
              <select>
                <option>Delivered</option>
              </select>

              <button className="delete-btn">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "payments" && (
        <div className="tab-content-card">
          <h2>Payment History</h2>

          <div className="payment-box">
            <div className="payment-left">
              <div className="payment-icon">
                <CreditCard size={22} />
              </div>

              <div>
                <div className="order-top">
                  <h3>Consultation Fee</h3>
                  <span>Completed</span>
                </div>

                <p>Paracetamol 500mg - 30 tablets</p>

                <small>March 28, 2026</small>
              </div>
            </div>

            <h1>₹150.00</h1>
          </div>
        </div>
      )}

      {activeTab === "family" && (
        <div className="tab-content-card">
          <div className="card-header">
            <h2>Family Members</h2>

            <button className="add-member-btn" onClick={handleAddFamilyClick}>
              <Plus size={18} />
              Add Member
            </button>
          </div>

          <div className="family-box">
            <div className="family-left">
              <div className="family-avatar">
                EL
              </div>

              <div>
                <h3>John Williams</h3>

                <span className="family-role">
                  Son
                </span>

                <p>
                  <Phone size={16} />
                  +1 (555) 111-1112
                </p>

                <p>
                  <CalendarDays size={16} />
                  3/20/1988
                </p>
              </div>
            </div>

            <div className="address-actions">
              <button onClick={handleEdit}>
                <Pencil size={16} />
              </button>

              <button className="delete-btn" onClick={handleDelete}>
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddressForm && (
        <div className="modal-overlay" onClick={handleCloseAddressForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Address</h2>
              <button className="modal-close-btn" onClick={handleCloseAddressForm}>
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleAddressSubmit} className="add-user-form">
              <div className="form-group">
                <label htmlFor="type">Address Type</label>
                <select
                  id="type"
                  name="type"
                  value={addressData.type}
                  onChange={handleAddressChange}
                >
                  <option>Home</option>
                  <option>Office</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="street">Street Address *</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={addressData.street}
                  onChange={handleAddressChange}
                  placeholder="Enter street address"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={addressData.city}
                    onChange={handleAddressChange}
                    placeholder="Enter city"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={addressData.state}
                    onChange={handleAddressChange}
                    placeholder="Enter state"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="zipcode">Zip Code</label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  value={addressData.zipcode}
                  onChange={handleAddressChange}
                  placeholder="Enter zip code"
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCloseAddressForm}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Add Address
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showFamilyForm && (
        <div className="modal-overlay" onClick={handleCloseFamilyForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add Family Member</h2>
              <button className="modal-close-btn" onClick={handleCloseFamilyForm}>
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleFamilySubmit} className="add-user-form">
              <div className="form-group">
                <label htmlFor="fname">Full Name *</label>
                <input
                  type="text"
                  id="fname"
                  name="name"
                  value={familyData.name}
                  onChange={handleFamilyChange}
                  placeholder="Enter family member name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="relationship">Relationship *</label>
                <select
                  id="relationship"
                  name="relationship"
                  value={familyData.relationship}
                  onChange={handleFamilyChange}
                  required
                >
                  <option>Spouse</option>
                  <option>Child</option>
                  <option>Son</option>
                  <option>Daughter</option>
                  <option>Parent</option>
                  <option>Mother</option>
                  <option>Father</option>
                  <option>Sibling</option>
                  <option>Brother</option>
                  <option>Sister</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="femail">Email *</label>
                <input
                  type="email"
                  id="femail"
                  name="email"
                  value={familyData.email}
                  onChange={handleFamilyChange}
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="fphone">Phone Number *</label>
                <input
                  type="tel"
                  id="fphone"
                  name="phone"
                  value={familyData.phone}
                  onChange={handleFamilyChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCloseFamilyForm}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Add Family Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailsPage;
