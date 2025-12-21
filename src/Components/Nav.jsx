import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFolderOpen,
  faEnvelope,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { to: "about", icon: faUser, label: "About" },
    { to: "skills", icon: faTools, label: "Skills" },
    { to: "projects", icon: faFolderOpen, label: "Projects" },
    { to: "contact", icon: faEnvelope, label: "Contact" },
  ];

  // Handle scroll behavior for auto-hide navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNav(false); // scroll down → hide
      } else {
        setShowNav(true); // scroll up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full z-50 bg-black/90 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full" }`} >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="text-xl font-bold tracking-wider">
            My Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
                className="flex items-center gap-1 cursor-pointer hover:text-teal-400 transition-colors"
              >
                <FontAwesomeIcon icon={item.icon} />
                {item.label}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 gap-1 focus:outline-none"
            >
              <span
                className={`h-0.5 w-6 bg-white transition-transform ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-6 bg-white transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`h-0.5 w-6 bg-white transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={200}
              spy={true}
              offset={-100}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 cursor-pointer text-white justify-center hover:text-teal-400 transition-colors"
            >
              <FontAwesomeIcon icon={item.icon} />
              {item.label}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
}