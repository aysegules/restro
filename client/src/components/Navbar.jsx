import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navLinks } from "../data/data.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-20 px-auto transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent"} `}
      >
        <div className="flex items-center justify-between font-medium py-4 mx-auto">
          <Link to="/">
            <img src={assets.logo} alt="Restro logo" />
          </Link>

          {/**Desktop Navbar */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, _) => (
              <NavLink
                key={link.name}
                className={({ isActive, isPending }) =>
                  ` hover:text-zinc-600 ${isActive && ""}`
                }
                to={link.href}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/**booking process isimli bölğme gidecek */}
          <button className="hidden md:block rounded-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white transition">
            Book a table
          </button>

          {/**Mobile Navbar */}
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden ">
            <Menu />
          </button>

          <div
            className={`flex flex-col items-center justify-center p-8 fixed inset-0 bg-white/70 backdrop-blur-md z-40 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="flex flex-col items-center space-y-6 font-medium">
              {navLinks.map((link, _) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl text-zinc-800 hover:text-orange-600 transition"
                >
                  {link.name}
                </NavLink>
              ))}

              <button onClick={() => setIsMenuOpen(false)}>
                <X />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
