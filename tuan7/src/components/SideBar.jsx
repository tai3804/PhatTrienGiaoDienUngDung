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
    <div className="bg-white pl-2 border border-gray-100 p-4" style={{gridArea:"sidebar"}}>
      <div className="flex items-center mb-8">
        {/* logo */}
        <img 
          src="public/img/logo.png" 
          alt="Logo"
        />
      </div>

      {/* link */}
      <nav>
        <ul className="">
          {menuItems.map((item, index) => (
            <li key={index} className='group flex items-center p-2 rounded hover:cursor-pointer hover:bg-pink-400 hover '>
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

      <div className="flex flex-col p-4 bg-blue-50 rounded-lg mt-4">
        <img src="public/img/Group.png" alt="" />
        <b className='block text-center m-1'>V2.0 is available</b>
        <button className='p-0.5 border text-blue-200 border-blue-300 bg-white rounded hover:bg-blue-400 hover:text-white'>
          Try now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;