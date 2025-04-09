import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import './Content.css';
import './EditModal.css';
import StatusBadge from './StatusBadge';
import EditModal from './EditModal';

export default function Content() {
  const [userData, setUserData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [newUser, setNewUser] = useState({
    customer_name: "",
    company: "",
    order_value: "",
    order_date: "",
    status: "New",
    img: "src/imgs/Avatar (1).png"
  });

  useEffect(() => {
    fetch("http://localhost:3001/detailed_report")
      .then(res => res.json())
      .then(data => setUserData(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  const handleEditClick = (id) => () => {
    const user = userData.find(user => user.id === id);
    setEditingUser(user);
    setShowEditModal(true);
  };

  const handleSaveUser = (updatedUser) => {
    fetch(`http://localhost:3001/detailed_report/${updatedUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser)
    })
      .then(() => {
        setUserData(prev =>
          prev.map(user => user.id === updatedUser.id ? updatedUser : user)
        );
        setShowEditModal(false);
      })
      .catch(err => console.error("Update failed:", err));
  };

  const handleAddUser = () => {
    fetch("http://localhost:3001/detailed_report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        setUserData(prev => [...prev, data]);
        setShowAddModal(false);
        resetNewUser();
      })
      .catch(err => console.error("Add user failed:", err));
  };

  const resetNewUser = () => {
    setNewUser({
      customer_name: "",
      company: "",
      order_value: "",
      order_date: "",
      status: "New",
      img: "src/imgs/Avatar (1).png"
    });
  };

  const columns = [
    {
      name: 'CUSTOMER NAME',
      selector: row => row.customer_name,
      cell: row => (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <img src={row.img} alt="" style={{ marginRight: 4 }} />
          {row.customer_name}
        </span>
      ),
      sortable: true,
    },
    { name: 'COMPANY', selector: row => row.company, sortable: true },
    { name: 'ORDER VALUE', selector: row => `$${row.order_value}`, sortable: true },
    { name: 'ORDER DATE', selector: row => row.order_date, sortable: true },
    {
      name: 'STATUS',
      selector: row => row.status,
      cell: row => <StatusBadge status={row.status} />,
      sortable: true,
    },
    {
      name: '',
      cell: row => (
        <div style={{ cursor: 'pointer', padding: '8px' }}>
          <img
            src="src/imgs/create.png"
            alt="Edit"
            width={20}
            height={20}
            onClick={handleEditClick(row.id)}
          />
        </div>
      ),
      width: '60px'
    }
  ];

  const customStyles = {
    rows: { style: { fontSize: '14px' } },
    head: {
      style: { fontSize: '16px', backgroundColor: '#f8f9fa', fontWeight: 'bold' }
    },
    headCells: { style: { backgroundColor: '#f8f9fa' } },
    table: {
      style: {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden'
      }
    },
    pagination: { style: { border: 'none', marginTop: '0px' } },
  };

  return (
    <div id='content' className='user-list'>
      <div className="content__header">
        <div className="content__title">
          <img src="src/imgs/File text 1.png" alt="" />
          <h2>Detailed Report</h2>
        </div>
        <div className="content__btns">
          <button onClick={() => setShowAddModal(true)}>
            <img src="src/imgs/Download.png" alt="" />
            <span>Import</span>
          </button>
          <button>
            <img src="src/imgs/Move up.png" alt="" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={userData}
        pagination
        paginationPerPage={10}
        selectableRows
        selectableRowsHighlight
        onSelectedRowsChange={({ selectedRows }) => setSelectedRows(selectedRows)}
        customStyles={customStyles}
        highlightOnHover
      />

      {selectedRows.length > 0 && (
        <div className="selected-count">{selectedRows.length} row(s) selected</div>
      )}

      <div className="version-info">
        <span>{userData.length} results</span>
      </div>

      <EditModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleSaveUser}
        user={editingUser}
      />

      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New User</h3>
            <input
              placeholder="Customer Name"
              value={newUser.customer_name}
              onChange={(e) => setNewUser({ ...newUser, customer_name: e.target.value })}
            />
            <input
              placeholder="Company"
              value={newUser.company}
              onChange={(e) => setNewUser({ ...newUser, company: e.target.value })}
            />
            <input
              placeholder="Order Value"
              type="number"
              value={newUser.order_value}
              onChange={(e) => setNewUser({ ...newUser, order_value: e.target.value })}
            />
            <input
              placeholder="Order Date"
              type="date"
              value={newUser.order_date}
              onChange={(e) => setNewUser({ ...newUser, order_date: e.target.value })}
            />
            <select
              value={newUser.status}
              onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
            >
              <option>New</option>
              <option>In-progress</option>
              <option>Completed</option>
            </select>
            <div className="modal-actions">
              <button onClick={handleAddUser}>Save</button>
              <button onClick={() => setShowAddModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
