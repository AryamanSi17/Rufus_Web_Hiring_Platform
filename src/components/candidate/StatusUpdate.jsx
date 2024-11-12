import React, { useState } from 'react';

const StatusUpdate = ({ status }) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleStatusChange = (e) => {
    setCurrentStatus(e.target.value);
  };

  return (
    <div>
      <h3>Status Update</h3>
      <select value={currentStatus} onChange={handleStatusChange}>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Interview Scheduled">Interview Scheduled</option>
      </select>
    </div>
  );
};

export default StatusUpdate;
