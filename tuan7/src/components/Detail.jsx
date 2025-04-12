import React, { useContext, useState } from 'react';
import CustomerTable from './CustomerTable';
import { CustomerContext } from '../hooks/CustomerContext';
import AddCustomerModal from './AddCustomerModal.jsx';

export default function Detail() {
  const { addCustomer } = useContext(CustomerContext);
  const [ isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleImport = () => {
    setIsAddModalOpen(true);
  };

  const handleAddCustomer = (newCustomer) => {
    addCustomer(newCustomer);
    setIsAddModalOpen(false);
  };

  return (
    <div className='p-4' style={{ gridArea: 'detail' }}>
      <div className="flex justify-between mb-6">
        <div className="flex items-center">
          <img src="/img/File.png" alt="Report icon" className="w-5 h-5" />
          <h2 className="text-xl font-bold text-gray-700 ml-2">Detailed report</h2>
        </div>

        <div className="flex space-x-4">
          <button 
            className='hover:bg-pink-300 hover:text-white transition-colors flex items-center border border-pink-600 rounded px-4 py-1 text-pink-500'
            onClick={handleImport}
          >
            <img src="/img/Download.png" alt="Import" className="w-4 h-4 mr-2" />
            Import
          </button>

          <button className='hover:bg-pink-300 hover:text-white transition-colors flex items-center border border-pink-600 rounded px-4 py-1 text-pink-500'>
            <img src="/img/Export.png" alt="Export" className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      <CustomerTable />

      {/* Modal thêm khách hàng */}
      {isAddModalOpen && (
        <AddCustomerModal 
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddCustomer}
        />
      )}
    </div>
  );
}