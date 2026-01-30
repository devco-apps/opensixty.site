"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  MapPin,
  Clock,
  Phone,
  Search,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";

const navLinks = [
  { href: "/", label: "Home", hasDropdown: true },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/portfolio", label: "Portfolio", hasDropdown: true },
  { href: "/pages", label: "Pages", hasDropdown: true },
  { href: "/news", label: "News", hasDropdown: true },
  { href: "/elements", label: "Elements", hasDropdown: true },
  { href: "/contact", label: "Contact Us", hasDropdown: false },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 w-full z-40 bg-white transition-all duration-300 border-b border-gray-100",
        isScrolled ? "shadow-md" : "",
      )}
    >
      {/* Top Bar - Desktop Only */}
      <div className="hidden md:block border-b border-gray-100">
        <Section className="py-6 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center relative overflow-hidden">
              {/* Abstract geometric logo shape */}
              <div className="absolute inset-0 bg-[#0a192f] transform translate-x-1/2 translate-y-1/2 rotate-45"></div>
              <div className="absolute top-1 left-1 w-3 h-3 bg-white z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-[#0a192f] leading-none tracking-tight">
                COMPACTOR
              </span>
              <span className="text-xs font-medium text-gray-400 tracking-[0.2em] uppercase mt-1">
                ASPHALT PAVING
              </span>
            </div>
          </Link>

          {/* Info Blocks */}
          <div className="flex items-center gap-8">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#0a192f] mt-1" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#0a192f]">
                  Our Address
                </span>
                <span className="text-xs text-gray-500">
                  125 Golden St, New York, NY
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-[#0a192f] mt-1" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#0a192f]">
                  Work Time
                </span>
                <span className="text-xs text-gray-500">hi@compactor.com</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-[#0a192f] mt-1" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#0a192f]">
                  Call Us Today
                </span>
                <span className="text-xs text-gray-500">548-661-322</span>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Main Navigation Bar */}
      <Section className="py-4 md:py-0 flex items-center justify-between min-h-[60px]">
        {/* Mobile Logo (Visible only on mobile) */}
        <Link href="/" className="flex items-center gap-2 md:hidden">
          <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0a192f] transform translate-x-1/2 translate-y-1/2 rotate-45"></div>
          </div>
          <span className="text-lg font-bold text-[#0a192f]">COMPACTOR</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1 text-[15px] font-bold text-[#0a192f] hover:text-yellow-500 transition-colors py-6 relative"
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-yellow-500 transition-colors" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button className="hidden md:flex text-[#0a192f] hover:text-yellow-500 transition-colors">
            <Search className="w-5 h-5" />
          </button>

          <button className="hidden md:flex text-[#0a192f] hover:text-yellow-500 transition-colors relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-[#ff3b30] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </button>

          <Link
            href="/contact"
            className="hidden md:flex bg-yellow-400 hover:bg-yellow-500 text-[#0a192f] text-xs font-bold px-6 py-3 uppercase tracking-wider transition-colors"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#0a192f]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Section>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-6 flex flex-col gap-6">
              <div className="flex justify-between items-center border-b pb-4">
                <span className="text-xl font-bold text-[#0a192f]">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6 text-[#0a192f]" />
                </button>
              </div>

              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between py-3 border-b border-gray-100 text-[#0a192f] font-bold hover:text-yellow-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-3 text-[#0a192f]">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">548-661-322</span>
                </div>
                <div className="flex items-center gap-3 text-[#0a192f]">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">125 Golden St, New York</span>
                </div>
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-[#0a192f] text-center font-bold py-3 uppercase tracking-wider hover:bg-yellow-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </header>
  );
}
