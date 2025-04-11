import React from 'react';

const Sidebar = () => {
  // Danh sách các mục menu
  const menuItems = [
    { name: 'Dashboard', icon: 'public/img/Square4.png' },
    { name: 'Projects', icon: 'public/img/Folder.png' },
    { name: 'Teams', icon: 'public/img/Groups.png' },
    { name: 'Analytics', icon: 'public/img/pie chart.png' },
    { name: 'Messages', icon: 'public/img/chat.png' },
    { name: 'Integrations', icon: 'public/img/code.png' }
  ];

  return (
    <div className="w-60 bg-white fixed left-0 top-0 pt-2 pl-2">
      <div className="flex items-center mb-8">
        <img 
          src="public/img/logo.png" 
          alt="Logo"
        />
      </div>

      <nav>
        <ul className="">
          {menuItems.map((item, index) => (
            <li key={index} className='group flex items-center w-full p-2 rounded hover:cursor-pointer hover:bg-pink-400 hover '>
                <img 
                  src={item.icon} 
                  alt={item.name}
                  className="w-5 h-5 mr-3 group-hover:brightness-200 group-hover:invert-0"
                />
                <span className="text-gray-700 group-hover:text-white ">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;