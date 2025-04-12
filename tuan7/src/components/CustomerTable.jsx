import React, { useContext, useState } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import { CustomerContext } from '../hooks/CustomerContext';
import EditCustomerModal from './EditCustomerModal';

const CustomerTable = () => {
  const { customers, updateCustomer } = useContext(CustomerContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  
    const handleEdit = () => {
      setIsModalOpen(true);
    };
  
    const handleAddCustomer = (newCustomer) => {
      updateCustomer(newCustomer);
      setIsEditModalOpen(false);
    };

  const columns = React.useMemo(
    () => [
      {
        Header: 'Customer',
        accessor: 'name',
        Cell: ({ row, value }) => (
          <div className="flex items-center">
            <img 
              src={row.original.img} 
              alt={value}
              className="w-8 h-8 rounded-full mr-3"
            />
            <span>{value}</span>
          </div>
        ),
      },
      {
        Header: 'Company',
        accessor: 'company',
      },
      {
        Header: 'Order Value',
        accessor: 'orderHistory[0].value',
        Cell: ({ value }) => `$${value}`,
      },
      {
        Header: 'Order Date',
        accessor: 'orderHistory[0].date',
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
      {
        Header: 'Status',
        accessor: 'orderHistory[0].status',
        Cell: ({ value }) => (
          <span className={`px-2 py-1 rounded-full text-xs ${
            value === 'Completed' 
              ? 'bg-green-100 text-green-800' 
              : value === 'In-progress' 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-blue-100 text-blue-800'
          }`}>
            {value}
          </span>
        ),
      },
      {
        Header: "",
        accessor: "edit", 
        Cell: ({ row }) => (
          <img
            src="/public/img/Create.png" 
            alt="Edit"
            className="cursor-pointer"
            onClick={() => {
              setSelectedCustomer(row.original); 
              handleEdit(); 
            }}
          />
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: customers,
      initialState: { pageIndex: 0, pageSize: 6},
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th 
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      {column.render('Header')}
                      {column.isSorted && (
                        <span className="ml-1">
                          {column.isSortedDesc ? '↓' : '↑'}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
            {page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-50">
                  {row.cells.map(cell => (
                    <td 
                      {...cell.getCellProps()} 
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-4 py-3 flex items-center justify-between border-t">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{pageIndex * 6 + 1}</span> to{' '}
              <span className="font-medium">
                {Math.min((pageIndex + 1) * 6, customers.length)}
              </span> of{' '}
              <span className="font-medium">{customers.length}</span> results
            </p>
          </div>
          <div>
            <nav className="flex  items-center">
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="hover:text-white text-2xl text-gray-600 disabled:opacity-50  hover:bg-pink-600  pl-3 pr-3 rounded-4xl disabled:hover:bg-transparent"
              >
                ‹
              </button>

              {pageOptions.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => gotoPage(pageNumber)}
                  className={`px-3 py-1 hover:bg-pink-500 hover:text-white rounded-4xl ${
                    pageIndex === pageNumber
                      ? 'bg-pink-500 text-white rounded-4xl'
                      : ' text-gray-700'
                  }`}
                >
                  {pageNumber + 1}
                </button>
              ))}

              <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="hover:text-white text-2xl text-gray-600 disabled:opacity-50  hover:bg-pink-600  pl-3 pr-3 rounded-4xl disabled:hover:bg-transparent"
              >
                ›
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && selectedCustomer && (
  <EditCustomerModal
    customer={selectedCustomer}
    onClose={() => {
      setIsModalOpen(false);
      setSelectedCustomer(null);
    }}
    onUpdate={(updatedCustomer) => {
      // Cập nhật UI nếu cần
    }}
  />
)}
    </div>
  );
};

export default CustomerTable;
