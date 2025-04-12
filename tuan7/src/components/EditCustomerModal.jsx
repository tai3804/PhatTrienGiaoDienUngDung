import React, { useState, useContext } from 'react';
import { CustomerContext } from '../hooks/CustomerContext';

const EditCustomerModal = ({ customer, onClose, onUpdate }) => {
  const { updateCustomer } = useContext(CustomerContext);
  const [formData, setFormData] = useState({
    name: customer.name,
    company: customer.company,
    orderValue: customer.orderHistory[0].value,
    status: customer.orderHistory[0].status,
    orderDate: customer.orderHistory[0].date
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const updatedCustomer = {
      ...customer,
      name: formData.name,
      company: formData.company,
      orderHistory: [
        {
          ...customer.orderHistory[0],
          value: Number(formData.orderValue),
          status: formData.status,
          date: formData.orderDate
        }
      ]
    };

    try {
      await updateCustomer(customer.id, updatedCustomer);
      onUpdate(updatedCustomer);
      onClose();
    } catch (error) {
      console.error('Failed to update customer:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Edit Customer</h3>
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
            <label className="block text-sm font-medium mb-1">Order Date</label>
            <input
              type="date"
              name="orderDate"
              value={formData.orderDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCustomerModal;