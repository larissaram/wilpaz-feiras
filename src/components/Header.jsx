import React from 'react';
import ThemeToggle from './Toogle';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-yellow-200 text-6xl p-4 h-16 flex justify-between">
      <button onClick={toggleSidebar} className="text-orange-500 absolute top-1 left-1 text-2xl">
        ☰
      </button>
      <h1 className="text-orange-500 text-bold  pl-10 flex hover:text-sm">WilPaz</h1>
      <ThemeToggle/>
    </header>
  );
};

export default Header;
