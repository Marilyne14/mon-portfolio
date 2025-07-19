import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "#home", label: "Accueil" },
    { to: "#about", label: "À propos" },
    { to: "#competences", label: "Compétences" },
    { to: "#experiences", label: "Expérience" },
    { to: "#contacts", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 p-4 shadow-md ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">
        <div className="text-xl font-bold ">
          <span className="text-blue-400">Marilyne</span>
          <span className="text-purple-400">Ashley</span>
        </div>
        <div className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className={`text-lg hover:text-blue-500 transition ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
              onClick={() => setIsOpen(false)} // Ferme le menu mobile
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 focus:outline-none"
        >
          {darkMode ? (
            <SunIcon className="w-6 h-6 text-yellow-400" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-900" />
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white dark:bg-gray-800 px-6 pb-4 mt-2 rounded-md shadow-md`}
      >
        {navLinks.map((link) => (
          <a
            key={link.to}
            href={link.to}
            className={`block py-2 text-lg hover:text-blue-500 transition ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
