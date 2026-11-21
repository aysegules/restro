import { assets } from "../assets/assets";
import { Phone, Mail } from "lucide-react";
import Animated from "./Animated";
import { sitemapLinks, socialLinks } from "../data/data";

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
    <footer className="px-auto relative mt-44 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-6 justify-between pb-8">
          {/**Brand & Socials */}
          <div className="flex flex-col items-start text-left">
            <Animated>
              <img src={assets.logo} alt="Restro logo" />
            </Animated>
            <Animated delay={0.2}>
              <p className="mt-3 text-sm/5.5 text-zinc-600 max-w-81.25">
                Serving freshly prepared dishes with authentic flavors, premium
                ingredients and exceptional hospitality every day.
              </p>
            </Animated>
            <div className="flex items-center gap-1.5 mt-6">
              {socialLinks.map((link, index) => (
                <Animated key={link.name} delay={index * 0.05}>
                  <a
                    href={link.href}
                    className="size-7.5 rounded-full border border-slate-300 grid place-content-center"
                  >
                    {link.icon}
                  </a>
                </Animated>
              ))}
            </div>
          </div>
          {/**Quick Links */}
          <div>
            <p className="font-medium mb-5">Quick Links</p>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link, index) => (
                <Animated key={index} delay={index * 0.05}>
                  <a
                    href={link.href}
                    className="text-zinc-600 hover:text-zinc-500"
                  >
                    {link.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>
          {/**Get in Touch */}
          <div>
            <p className="capitalize font-medium mb-5">Get in touch</p>
            <div className="space-y-2">
              <Animated>
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500"
                >
                  <Mail className="shrink-0 size-4" />
                  hello@example.com
                </a>
              </Animated>
              <Animated>
                <a
                  href="tel:987-654-3210"
                  className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500"
                >
                  <Phone className="shrink-0 size-4" />
                  987-654-3210
                </a>
              </Animated>
            </div>
          </div>
          {/**Sitemap */}
          <div>
            <p className="font-medium mb-5">Sitemap</p>
            <div className="flex flex-col gap-2.5">
              {sitemapLinks.map((link, index) => (
                <Animated key={link.name} delay={index * 0.05}>
                  <a
                    href={link.href}
                    className="text-zinc-600 hover:text-zinc-500"
                  >
                    {link.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>
        </div>
        <hr className="border-slate-200 mt-8" />
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
          <p>
            © {new Date().getFullYear()}{" "}
            <a href="https://prebuiltui.com">PrebuiltUI</a>. All rights
            reserved.
          </p>
          <ul className="flex items-center gap-4">
            {sitemapLinks.map((link, _) => (
              <li key={link.name}>
                <a href={link.href} className="capitalize">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute inset-0 text-center select-none -z-1 pointer-events-none">
        <span className="text-[300px] tracking-wide font-urbanist font-semibold text-zinc-100/70">
          Restro
        </span>
      </div>
    </footer>
  );
};

export default Footer;
