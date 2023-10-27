import { useState } from 'react';
import Button from './Button';

const Logo = () => (
  <div>
    <img src="/images/logo.svg" alt="bloggr" />
  </div>
);

const MobileNav = ({ isMenuOpen }: { isMenuOpen: boolean }) => (
  <nav className={`${isMenuOpen ? 'block' : 'hidden'} absolute`}>
    <ul>
      <li>Product</li>
      <li>About</li>
      <li>Home</li>
    </ul>
  </nav>
);

const DesktopNav = () => (
  <nav className="hidden md:flex">
    <ul className="flex items-center justify-between gap-4">
      <li className="text-white flex items-center">
        <button className="text-white flex items-center gap-2 font-bold">
          Product
          <img src="/images/icon-arrow-light.svg" alt="" />
        </button>
      </li>
      <li className="text-white flex items-center">
        <button className="text-white flex items-center gap-2 font-bold">
          Company
          <img src="/images/icon-arrow-light.svg" alt="" />
        </button>
      </li>
      <li className="text-white flex items-center">
        <button className="text-white flex items-center gap-2 font-bold">
          Connect
          <img src="/images/icon-arrow-light.svg" alt="" />
        </button>
      </li>
    </ul>
  </nav>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-10 md:py-20 max-sm:px-5 w-full flex gap-8 items-center justify-between relative">
      <Logo />

      {/* Mobile menu */}
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

        <MobileNav isMenuOpen={isMenuOpen} />
      </div>

      {/* Desktop Navigation */}
      <div className="md:flex w-full items-center justify-between hidden">
        <DesktopNav />

        <div className="flex items-center">
          <Button label="Login" variant="secondary" />
          <Button label="Sign up" variant="primary" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
