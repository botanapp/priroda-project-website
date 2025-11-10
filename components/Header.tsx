
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/mockData';
import { NavLinkItem } from '../types';

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#16a34a', // brand-light-green active color
    textDecoration: 'underline',
    textUnderlineOffset: '4px'
  };

  return (
    <header className="bg-brand-beige/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-brand-green tracking-wider">
              Природа
            </NavLink>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link: NavLinkItem) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="text-brand-gray hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-brand-gray hover:text-brand-green hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link: NavLinkItem) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-brand-gray hover:text-brand-green block px-3 py-2 rounded-md text-base font-medium"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
