import Button from '../Button';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Logo = () => (
  <div>
    <img src="/images/logo.svg" alt="bloggr" />
  </div>
);

const Navbar = () => {
  return (
    <nav className="py-10 md:py-20 max-sm:px-5 w-full flex gap-8 items-center justify-between relative">
      <Logo />

      {/* Mobile menu */}
      <MobileNav />

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
