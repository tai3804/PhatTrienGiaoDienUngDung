import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import CounterReducer from './reducer/CounterReducer';
import CounterRedux from './redux/CounterRedux';
import CounterToolkit from './toolkit/CounterToolkit';

export default function CounterRouter() {
  return (
    <div>
      <nav className="flex gap-4 mb-6 justify-center items-center">
        <NavLink
          to="/counter_app/reducer"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500'
          }
        >
          Reducer
        </NavLink>

        <NavLink
          to="/counter_app/redux"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500'
          }
        >
          Redux
        </NavLink>

        <NavLink
          to="/counter_app/toolkit"
          className={({ isActive }) =>
            isActive ? 'bg-cyan-500 text-white p-2 rounded' : 'text-gray-500'
          }
        >
          Toolkit
        </NavLink>
      </nav>

      <Routes>
        <Route path="/reducer" element={<CounterReducer />} />
        <Route path="/redux" element={<CounterRedux />} />
        <Route path="/toolkit" element={<CounterToolkit />} />
      </Routes>
    </div>
  );
}
