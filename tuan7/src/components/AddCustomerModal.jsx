import React, { useContext, useState } from 'react';
import { CustomerContext } from '../hooks/CustomerContext';

const AddCustomerModal = ({ onClose, onSave }) => {

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    orderValue: '',
    status: 'New',
    joinDate: new Date().toISOString().split('T')[0] // Ngày hiện tại
  });

  const handleChange = (e) => {
    console.log(formData);
    
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      id: `CUS-${Math.floor(Math.random() * 10000)}`,
      name: formData.name,
      company: formData.company,
      img: `/img/Avatar (${Math.floor(Math.random() * 5) + 1}).png`,
      orderHistory: [{
        value: Number(formData.orderValue),
        date: formData.joinDate,
        status: formData.status
      }],
      joinDate: formData.joinDate
    };
    onSave(newCustomer);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Add New Customer</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Order Value ($)</label>
            <input
              type="number"
              name="orderValue"
              value={formData.orderValue}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              min="0"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomerModal;