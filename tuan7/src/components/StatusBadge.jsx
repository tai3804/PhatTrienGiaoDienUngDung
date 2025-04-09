import React from 'react';

const StatusBadge = ({ status }) => {
  const getStatusStyle = () => {
    switch (status.toLowerCase()) {
      case 'new':
        return { background: '#E3F2FD', color: '#1976D2' };
      case 'in-progress':
        return { background: '#FFF8E1', color: '#FFA000' };
      case 'completed':
        return { background: '#E8F5E9', color: '#388E3C' };
      default:
        return { background: '#f0f0f0', color: '#333' };
    }
  };

  return (
    <span 
      style={{
        ...getStatusStyle(),
        padding: '4px 12px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: 500,
        display: 'inline-block',
        textAlign: 'center',
      }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;