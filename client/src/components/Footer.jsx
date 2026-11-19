import { assets } from "../assets/assets";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "#",
    },
    {
      name: "Menu",
      href: "#",
    },
    {
      name: "Gallery",
      href: "#",
    },
    {
      name: "Book a Table",
      href: "#",
    },
  ];

  return (
    <div className="text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32 fixed">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <img src={assets.logo} alt="logo" className="mb-4 h-8 md:h-9" />
          <p className="text-sm">
            Serving freshly prepared dishes with authentic flavors, premium
            ingredients and exceptional hospitality every day.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {/* X */}
            <img
              className="h-5 rounded-full border border-gray-100"
              src={assets.x}
              alt="X logo"
            />
            {/* Youtube */}
            <img
              className="h-5 rounded-full border border-gray-100"
              src={assets.youtube}
              alt="Youtube logo"
            />
            {/* Instagram */}
            <img
              className="h-5 rounded-full border border-gray-100"
              src={assets.instagram}
              alt="Instagram logo"
            />
          </div>
        </div>

        <div>
          <p className="text-lg text-gray-800">Quick Links</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {quickLinks.map((link, _) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-lg text-gray-800">Get In Touch</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">
                <Mail /> hello@example.com
              </a>
            </li>
            <li className="flex flex-col">
              <a href="#">
                <Phone /> 987-654-3210
              </a>
            </li>
          </ul>
        </div>

        <div className="max-w-80">
          <p className="text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none"
              placeholder="Your email"
            />
            <button className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r">
              {/* Arrow icon */}
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
