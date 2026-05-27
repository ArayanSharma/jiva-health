"use client";

import Link from "next/link";
import Image from "next/image";
import "../app/styles/Sidebar.css";
import {
  LayoutDashboard,
  Building2,
  Users,
  BriefcaseMedical,
  Stethoscope,
  FlaskConical,
  Pill,
  Ambulance,
  Handshake,
  FileText,
  ShieldCheck,
  Settings,
  LucideIcon,
} from "lucide-react";
import React from 'react';

interface MenuItem {
  title: string;
  icon: LucideIcon;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Organization",
    icon: Building2,
    path: "/organization",
  },
  {
    title: "User Management",
    icon: Users,
    path: "/user-management",
  },
  {
    title: "Services",
    icon: BriefcaseMedical,
    path: "/services",
  },
  {
    title: "Consultation",
    icon: Stethoscope,
    path: "/consultation",
  },
  {
    title: "Lab Test Booking",
    icon: FlaskConical,
    path: "/lab-test-booking",
  },
  {
    title: "Medicine Orders",
    icon: Pill,
    path: "/medicine-orders",
  },
  {
    title: "Ambulance Booking",
    icon: Ambulance,
    path: "/ambulance-booking",
  },
  {
    title: "Vendor & Partners",
    icon: Handshake,
    path: "/vendors",
  },
  {
    title: "Reports",
    icon: FileText,
    path: "/reports",
  },
  {
    title: "User Access",
    icon: ShieldCheck,
    path: "/user-access",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-logo">
          <Image
            src="/jivaLogo.png"
            alt="Jiva Health Logo"
            width={150}
            height={160}
            priority
          />
        </div>

        <div className="sidebar-menu">
          <ul>
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={`menu-link ${
                      item.title === "Dashboard"
                        ? "active"
                        : ""
                    }`}
                  >
                    <div className="menu-icon">
                      <Icon size={22} />
                    </div>

                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="sidebar-profile">
        <div className="profile-wrapper">
          <div className="profile-avatar">
            AD
          </div>

          <div className="profile-info">
            <h3>Admin User</h3>
            <p>admin@healthcare.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
