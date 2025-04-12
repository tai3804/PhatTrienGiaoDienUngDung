import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  // Danh sách các mục menu
  const menuItems = [
    { name: 'Dashboard', icon: '/img/Square4.png', to: '/' },
    { name: 'Projects', icon: '/img/Folder.png', to: '/project' },
    { name: 'Teams', icon: '/img/Groups.png', to: '/team' },
    { name: 'Analytics', icon: '/img/Pie chart.png', to: '/analytic' },
    { name: 'Messages', icon: '/img/Chat.png', to: '/message' },
    { name: 'Integrations', icon: '/img/Code.png', to: '/integration' }
  ];

  return (
    <div className="bg-white pl-2 border border-gray-100 p-4" style={{ gridArea: "sidebar" }}>
      <div className="flex items-center mb-8">
        {/* logo */}
        <img 
          src="/img/Logo.png" 
          alt="Logo"
        />
      </div>

      {/* Nav items */}
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink 
                to={item.to}
                className={({ isActive }) =>
                  `group flex items-center p-2 rounded hover:cursor-pointer hover:bg-pink-400 ${
                    isActive ? 'bg-pink-400 text-white' : ''
                  }`
                }
              >
                <img 
                  src={item.icon} 
                  alt={item.name}
                  className="w-5 h-5 mr-3 group-hover:brightness-200"
                />
                <span className={`text-gray-700 group-hover:text-white`}>
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col p-4 bg-blue-50 rounded-lg mt-4">
        <img src="/img/Group.png" alt="update banner" />
        <b className='block text-center m-1'>V2.0 is available</b>
        <button className='p-0.5 border text-blue-200 border-blue-300 bg-white rounded hover:bg-blue-400 hover:text-white'>
          Try now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
