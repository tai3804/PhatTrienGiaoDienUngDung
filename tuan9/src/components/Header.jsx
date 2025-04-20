import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      {/* counter */}
        <NavLink
        to="/counter_app"
        className={({ isActive }) => 
            isActive ? "bg-cyan-500 text-white p-2 " : "text-gray-500 p-2"
        }
        >
        Counter App
        </NavLink>

        <NavLink
        to="/to_do_list"
        className={({ isActive }) => 
            isActive ? "bg-cyan-500 text-white p-2 " : "text-gray-500 p-2"
        }
        >
        To Do List
        </NavLink>

        <NavLink
        to="/toggle_theme"
        className={({ isActive }) => 
            isActive ? "bg-cyan-500 text-white p-2 " : "text-gray-500 p-2"
        }
        >
        Toggle Theme
        </NavLink>

        <NavLink
        to="/shopping_cart"
        className={({ isActive }) => 
            isActive ? "bg-cyan-500 text-white p-2 " : "text-gray-500 p-2"
        }
        >
        Shopping Cart
        </NavLink>

        <NavLink
        to="/login"
        className={({ isActive }) => 
            isActive ? "bg-cyan-500 text-white p-2 " : "text-gray-500 p-2"
        }
        >
          Login
        </NavLink>

        
    </div>
  )
}
