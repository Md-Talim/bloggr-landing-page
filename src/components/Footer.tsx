import { navLinks } from '../data';

const Links = ({ links, label }: { label: string; links: string[] }) => (
  <div>
    <h3 className="text-white font-ubuntu font-semibold mb-5">{label}</h3>
    <ul className="space-y-3 max-sm:mb-8">
      {links.map((link) => (
        <li className="text-grayishBlue font-ubuntu">
          <a href="/">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="mt-40 bg-veryDarkBlackBlue py-20 px-10 rounded-tr-[100px]">
      <div className="Container flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="max-sm:mb-16">
          <img src="/images/logo.svg" alt="Blogr Logo" />
        </div>
        {navLinks.map((links) => (
          <Links key={links.label} {...links} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
