import { useState } from 'react';
import { navLinks } from '../../data';
import Button from '../Button';

const MenuLink = ({ links, label }: { label: string; links: string[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className="w-full">
      <button
        className="text-xl active:text-veryDarkGrayishBlue text-veryDarkBlackBlue flex items-center justify-center gap-2 w-full font-medium hover:underline"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {label}
        <img src="/images/icon-arrow-dark.svg" alt="" />
      </button>

      {/* Expanded Area */}
      <div
        className={`${
          isExpanded
            ? 'p-5 transition-opacity opacity-100'
            : 'hidden opacity-0 overflow-hidden'
        }`}
      >
        <ul className="bg-lightGray text-center rounded-md space-y-2 py-5">
          {links.map((link) => (
            <li className="text-veryDarkGrayishBlue font-bold text-xl">
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const Menu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <nav
      className={`${
        isMenuOpen ? 'block' : 'hidden'
      } absolute right-0 rounded-lg w-full p-4`}
    >
      <div className="bg-white rounded-lg py-8 drop-shadow-xl">
        {/* Navbar */}
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <MenuLink key={link.label} {...link} />
          ))}
        </ul>

        <hr className="mt-4 px-4" />

        {/* Login Buttons */}
        <div className="flex items-center flex-col">
          <Button
            label="Login"
            // variant="secondary"
            customStyles="text-veryDarkGrayishBlue py-6 hover:text-veryDarkBlackBlue"
          />
          <Button
            label="Sign up"
            customStyles="bg-lightRed text-white rounded-full text-lg px-8 py-2"
          />
        </div>
      </div>
    </nav>
  );
};

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {/* Show hamburgur icon when menu is closed */}
        <img
          alt="A hamburger icon"
          src="/images/icon-hamburger.svg"
          className={`${isMenuOpen ? 'hidden' : 'block'}`}
        />

        {/* Show close icon when menu is open */}
        <img
          alt="A close icon"
          src="/images/icon-close.svg"
          className={`${!isMenuOpen ? 'hidden' : 'block'}`}
        />
      </button>

      <Menu isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default MobileNav;
