import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 bg-black">
      <div className="max-w-5xl mx-auto flex justify-center items-center">
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <h1 className="ml-2 text-sm font-bold text-white mono tracking-widest">TIME WARP</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
