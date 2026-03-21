import logo from "../assets/icons/logo.svg";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import { useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Resume", href: "#Resume" },
    { name: "Education", href: "#Education" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Certificates", href: "#Certificates" },
    { name: "Achievements", href: "#Achievements" },
    { name: "Training", href: "#Training" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <>
      <div className="flex w-full justify-center">
        <nav className="flex h-[15vh] w-full justify-between items-center px-6 md:px-16 py-8">
          <div className="logo z-30 flex items-center">
            <span className="text-white text-lg md:text-xl font-bold lowercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-color1 to-color2">vanshika.portfolio</span>
          </div>
          <div onClick={() => setToggle(!toggle)} className="menu lg:hidden z-30 cursor-pointer">
            <img className="w-8" src={menu} alt="" />
          </div>
          <div className="menu-items hidden lg:flex gap-4 xl:gap-6 text-[8px] xl:text-[10px] text-white uppercase z-30">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="menu-item cursor-pointer hover:text-white/60 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile & Full Menu */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } flex-col items-center fixed inset-0 w-full h-full bg-deepBlue/95 z-50 backdrop-blur-xl overflow-y-auto pt-20 pb-10`}
      >
        <div className="close">
          <img
            onClick={() => setToggle(!toggle)}
            className="w-10 fixed right-4 top-8 cursor-pointer z-50"
            src={close}
            alt="Close Menu"
          />
        </div>
        <div className="text text-white uppercase text-2xl md:text-4xl font-extralight flex flex-col items-center gap-6 h-full mt-10">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              onClick={() => setToggle(false)}
              href={link.href}
              className="menu-item cursor-pointer hover:text-color1 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            onClick={() => setToggle(false)}
            href="#Contact"
            className="buttons w-full flex flex-col items-center text-white mt-8 tracking-widest"
          >
            <button className="text-color2 border-2 border-color2 hover:bg-color2 hover:text-deepBlue rounded-3xl w-[70vw] md:w-[20rem] py-3 uppercase text-center font-bold cursor-pointer transition-colors">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </>
  );
};