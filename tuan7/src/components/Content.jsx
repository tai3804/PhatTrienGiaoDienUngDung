import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import './Content.css';
import StatusBadge from './StatusBadge';

export default function Content() {
  const [userData, setUserData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/metrics")
      .then(res => res.json())
      .then(data => {
        setUserData(data.detailed_report);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      name: 'CUSTOMER NAME',
      selector: row => row.customer_name,
      cell: row => 
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <img src={row.img} alt=""  style={{display:"block", marginRight:"4px"}}/>
          {row.customer_name}
        </span>,
      sortable: true,
    },
    {
      name: 'COMPANY',
      selector: row => row.company,
      sortable: true,
    },
    {
      name: 'ORDER VALUE',
      selector: row => `$${row.order_value}`,
      sortable: true,
    },
    {
      name: 'ORDER DATE',
      selector: row => row.order_date,
      sortable: true,
    },
    {
      name: 'STATUS',
      selector: row => row.status,
      cell: row => <StatusBadge status={row.status}/>,
      sortable: true,
    },
  ];

  const handleRowSelected = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
  };

  const customStyles = {
    rows: {
      style: {
        fontSize: '14px',
      },
    },
    head: {
      style: {
        fontSize: '16px',
        backgroundColor: '#f8f9fa',
        fontWeight: 'bold',
      }
    },
    headCells: {
      style: {
        fontWeight: 'bold',
        backgroundColor: '#f8f9fa',
      },
    },
    table: {
      style: {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
      },
    },
    pagination: {
      style: {
        border: 'none',
        marginTop: '0px', 
      },
    },
  };

  return (
    <div id='content' className='user-list'>
      <div className="content__header">
        <div className="content__title">
          <img src="src/imgs/File text 1.png" alt="" />
          <h2>Detailed Report</h2>
        </div>
        <div className="content__btns">
          <button>
            <img src="src/imgs/Download.png" alt="" />
            <span>Import</span>
          </button>

          <button>
            <img src="src/imgs/Move up.png" alt="" />
            <span>Export</span>
          </button>

        </div>
      </div>
      <div className="user__list">
        <DataTable
          columns={columns}
          data={userData}
          pagination
          paginationPerPage={10}
          selectableRows
          selectableRowsHighlight
          onSelectedRowsChange={handleRowSelected}
          customStyles={customStyles}
          highlightOnHover
        />
      </div>

      {selectedRows.length > 0 && (
        <div className="selected-count">
          {selectedRows.length} row(s) selected
        </div>
      )}

      <div className="version-info">
        <span>{userData.length} results</span>
      </div>
    </div>
  );
}