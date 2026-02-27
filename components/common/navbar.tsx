"use client";
import { motion } from "framer-motion";
import { useState, useEffect, use } from "react";
import { LogOut, Menu, Plane, X } from "lucide-react";
import { NextFont } from "next/dist/compiled/@next/font";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence } from "framer-motion";
import { useAppContext } from "@/context/useAppContext";
import Image from "next/image";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.2 },
  },
};

export default function Navbar({ poppings }: { poppings: NextFont }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setShowForm } = useAppContext();
  const pathName = usePathname();

  // sticky scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const links = [
    { id: 1, href: "/", link: "Home" },
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
           <div className="
          w-8.75 h-10
          lg:w-[45px] lg:h-[55px] relative">
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
            <button className="rounded-[8px] hidden md:flex space-x-1.5 border px-5 py-2 text-sm cursor-pointer hover:bg-[#FF6B35] hover:border-[#FF6B35] border-[#FFFFFF] ">
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
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-[74%] max-w-sm bg-[#03045E] md:hidden"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-6 py-6 flex flex-col gap-8 text-white">
                {/* Close button */}
                <button className="self-end" onClick={() => setOpen(false)}>
                  <X size={26} />
                </button>

                {/* Links */}
                <ul className="flex flex-col gap-6 text-lg font-medium">
                  {links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block w-full"
                      >
                        {link.link}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => {
                    setShowForm?.(true);
                    setOpen(false);
                  }}
                  className="bg-[#FF6B35] px-6 py-3 rounded-md font-semibold"
                >
                  Get Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}