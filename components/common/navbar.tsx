"use client";
import { useState, useEffect } from "react";
import { LogOut, Menu, Plane, X } from "lucide-react";
import { NextFont } from "next/dist/compiled/@next/font";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar({
  poppings,
  setShowForm,
  showForm,
}: {
  poppings: NextFont;
  showForm?: boolean;
  setShowForm?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();

  console.log(pathName, "path");
  // sticky scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, href: "#", link: "Home" },
    { id: 2, href: "#services", link: "Services" },
    { id: 3, href: "#about", link: "About Us" },
    { id: 4, href: "#contact", link: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#03045E] shadow-lg" : "bg-[#03045E]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <div
          className={`flex items-center gap-2 font-semibold text-lg ${poppings.className}`}
        >
          <div className="w-[50px] h-[80px]">
          <Image
            alt="Ocean Dew Logistics logo"
            src={"/Images/logo-ocean-dew.png"}
            fill
          />
          </div>
          <span>Oceandew</span>
          <span className="text-[#FF6B35]">Logistics</span>
        </div>

        {/* Desktop Nav */}
        <div className="flex gap-8">
          {pathName === "/" && (
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
              {links.map((link) => (
                <li key={link.id} className="relative group cursor-pointer">
                  <Link href={link.href}>{link.link}</Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF6B35] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA */}
          {pathName === "/" && (
            <button
              onClick={() => setShowForm?.(true)}
              className="hidden md:block bg-[#FF6B35] hover:opacity-90 px-5 py-2 rounded-md text-sm font-semibold transition"
            >
              Get Quote
            </button>
          )}

          {pathName?.includes("/admin") && (
            <button className="rounded-[8px] flex space-x-1.5 border px-5 py-2 text-sm cursor-pointer hover:bg-[#FF6B35] hover:border-[#FF6B35] border-[#FFFFFF] ">
              <span>
                <LogOut />
              </span>{" "}
              <span>Log Out</span>{" "}
            </button>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#03045E] overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-white text-lg font-medium">
          {links.map((link) => (
            <li key={link.id} className="relative group cursor-pointer">
              <Link href={link.href}>{link.link}</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF6B35] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          <button
            onClick={() => setShowForm?.(true)}
            className="bg-[#FF6B35] px-6 py-2 rounded-md font-semibold mt-2"
          >
            Get Quote
          </button>
        </ul>
      </div>
    </nav>
  );
}
