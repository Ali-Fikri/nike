import { headerLogo } from "../assets/images";
import { navLinks } from "../data";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between content-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 gap-16 justify-center items-center padding-x max-lg:hidden">
          {navLinks.map((link) => (
            <li>
              <a href={link.href} className="font-montserrate leading-normal text-lg text-slate-gray">{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="" width={25} height={25}/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
