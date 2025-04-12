import React, { createContext, useState, useEffect } from 'react';

// Tạo Context
export const CustomerContext = createContext();

// Component Provider để cung cấp context cho các component con
const CustomerProvider = ({ children }) => {  // Khai báo function component
    const [customers, setCustomers] = useState([]);
    
    // Lấy dữ liệu từ mock API
    useEffect(() => {
        fetch('http://localhost:3001/customers')
            .then(res => res.json())
            .then(data => setCustomers(data))
            .catch(err => console.log("Failed to fetch customers", err));
    }, []); 

    // Thêm mới khách hàng
    const addCustomer = (newCustomer) => {
        fetch('http://localhost:3001/customers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCustomer)
        })
        .then(res => res.json())
        .then(data => setCustomers(prevCustomers => [...prevCustomers, data]));
    };

    // Cập nhật thông tin khách hàng
    const updateCustomer = (id, updatedCustomer) => {
        fetch(`http://localhost:3001/customers/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedCustomer)
        })
        .then(res => res.json())
        .then(() => {
            setCustomers(prevCustomers =>
                prevCustomers.map(customer =>
                    customer.id === id ? { ...customer, ...updatedCustomer } : customer
                )
            );
        });
    };

    // Xóa khách hàng
    const deleteCustomer = (id) => {
        fetch(`http://localhost:3001/customers/${id}`, { method: 'DELETE' })
            .then(() => {
                setCustomers(prevCustomers =>
                    prevCustomers.filter(customer => customer.id !== id)
                );
            });
    };

    return (
        <CustomerContext.Provider value={{
            customers,
            addCustomer,
            updateCustomer,
            deleteCustomer
        }}>
            {children}
        </CustomerContext.Provider>
    );
};

// Export default CustomerProvider
export default CustomerProvider;
