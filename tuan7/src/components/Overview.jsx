import React, { useContext, useState } from 'react'

import Card from "../components/Card"
import { CustomerContext } from '../hooks/CustomerContext'


export default function Overview() {  
  const { customers } = useContext(CustomerContext)

  const turnover = customers.reduce((total, customer) => {
    const sumOrders = customer.orderHistory.reduce((sum, order) => sum + order.value, 0);
    return total + sumOrders;
  }, 0);

  const profit = (turnover * 0.3).toFixed();

  var turnoverChange = ((turnover / (turnover - 10000)) * 100).toFixed(2)
  var profitChange = (turnoverChange * 0.3).toFixed(2)
  
  return (
    <div className='p-4' style={{gridArea: 'overview' }}>
        <div className="flex mb-4">
          <img src="/public/img/Square4.png" alt="" />
          <span className='ml-1.5 font-bold'>Overview</span>
        </div>

        <div className="cards grid grid-cols-3 gap-4">
          <Card title='Turnover' value={turnover} change={turnoverChange}  icon="public/img/Cart.png" bg='pink'></Card>
          <Card title='Profit' value={profit} change={profitChange}  icon="public/img/Dollar.png" bg='blue'></Card>
          <Card title='Customer' value={customers.length} change={(customers.length / 9 * 10).toFixed(2)}  icon="public/img/User.png" bg='blue'></Card>
        </div>
    </div>
  )
}
