import React from 'react';

function ThemeUI({ theme, toggleTheme }) {
  return (
    <div className={` flex flex-col items-center justify-center transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-6">Theme Toggle</h1>
        <p className="mb-4">Current theme: <span className="font-bold">{theme}</span></p>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-lg font-medium ${theme === 'dark' ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
        >
          Toggle to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
}

export default ThemeUI;