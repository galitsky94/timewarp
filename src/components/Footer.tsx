import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 px-6 bg-black">
      <div className="max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <div className="text-xs text-gray-600 mono tracking-wider">
            &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
