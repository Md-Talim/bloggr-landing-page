import { useState } from 'react';
import { navLinks } from '../../data';

const NavLink = ({ label, links }: { label: string; links: string[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <li className="text-white flex items-center relative">
      <button
        className="text-white flex items-center gap-2 font-bold hover:underline active:underline"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {label}
        <img src="/images/icon-arrow-light.svg" alt="" />
      </button>

      <div
        className={`absolute top-8 rounded-xl bg-white ${
          isMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-4 p-4">
          {links.map((link) => (
            <li className="font-bold text-veryDarkGrayishBlue hover:text-veryDarkBlackBlue">
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const DesktopNav = () => (
  <nav className="hidden md:flex">
    <ul className="flex items-center justify-between gap-4">
      {navLinks.map((link) => (
        <NavLink key={link.label} {...link} />
      ))}
    </ul>
  </nav>
);

export default DesktopNav;
