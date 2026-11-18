import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Dishes", href: "#dishes" },
    { name: "Contact", href: "#timing" },
    { name: "Faq", href: "#faq" },
  ];

  return (
    <div className="top-0 sticky flex justify-evenly">
      <Link to="/">
        <div>
          <img src={assets.logo} alt="" />
        </div>
      </Link>

      <div className="flex gap-5">
        {navLinks.map((link, i) => (
          <NavLink className={`text-black`} to={link.href}>
            {link.name}
          </NavLink>
        ))}
      </div>

      <button className="rounded-full">Book a table</button>
    </div>
  );
};

export default Navbar;
