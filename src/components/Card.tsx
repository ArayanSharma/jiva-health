import "../app/styles/Card.css";
import React from 'react';

interface UserStatsCardProps {
  title: string;
  count: number | string;
  color?: string;
}

const UserStatsCard: React.FC<UserStatsCardProps> = ({
  title,
  count,
  color = "#111827",
}) => {
  return (
    <div className="user-stats-card">
      <h3 className="stats-title">
        {title}
      </h3>

      <h1
        className="stats-count"
        style={{ color }}
      >
        {count}
      </h1>
    </div>
  );
};

export default UserStatsCard;
