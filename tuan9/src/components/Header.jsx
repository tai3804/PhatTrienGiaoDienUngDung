import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      {/* counter */}
        <NavLink
        to="/counter_app"
        className={({ isActive }) => 
            isActive ? "bg-cyan-500 text-white p-2 " : "text-gray-500"
        }
        >
        Counter App
        </NavLink>

      {/* to do list
        <NavLink
        to="/to_do_list"
        className={({ isActive }) => 
            isActive ? "bg-cyan-500 text-white p-2 " : "text-gray-500"
        }
        >
        Counter App
        </NavLink> */}
    </div>
  )
}
