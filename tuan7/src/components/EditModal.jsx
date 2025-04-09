import React, { useState, useEffect } from 'react';

export default function EditModal({ isOpen, onClose, onSave, user }) {
  const [editedUser, setEditedUser] = useState(user || {});

  useEffect(() => {
    setEditedUser(user || {});
  }, [user]);

  if (!isOpen || !user) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(editedUser);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Edit User</h3>
        <input name="customer_name" value={editedUser.customer_name} onChange={handleChange} />
        <input name="company" value={editedUser.company} onChange={handleChange} />
        <input name="order_value" value={editedUser.order_value} onChange={handleChange} />
        <input name="order_date" value={editedUser.order_date} onChange={handleChange} />
        <input name="status" value={editedUser.status} onChange={handleChange} />
        <div className="modal-buttons">
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
