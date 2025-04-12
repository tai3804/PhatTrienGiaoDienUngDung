import React from 'react'

import CustomerTable from './CustomerTable'
export default function Detail() {
  return (
    <div className='p-4' style={{gridArea: 'detail' }}>

      <div className="flex justify-between mb-6">

        <div className="flex">
          <img src="public/img/File.png" alt="" />
          <h2 className="text-xl font-bold text-gray-700 ml-2 w-40">Detailed report</h2>
        </div>

        <div className="flex justify-around">
          <button className='hover:bg-pink-300 hover:cursor-pointer group flex border-1 border-pink-600 rounded pl-2 pr-6 pt-1 pb-1 mr-4'>
            <img className='mr-2' src="public/img/Download.png" alt="" />
            <span className='text-pink-500  group-hover:text-white'>Import</span>
          </button>

          <button className='hover:bg-pink-300 hover:cursor-pointer group flex border-1 border-pink-600 rounded pl-2 pr-6 pt-1 pb-1'>
            <img className='' src="public/img/Export.png" alt="" />
            <span className='text-pink-500  group-hover:text-white'>Export</span>
          </button>
        </div>

      </div>

      <CustomerTable></CustomerTable>
    </div>
  )
}
