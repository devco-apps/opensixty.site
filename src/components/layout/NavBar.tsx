"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { Menu, X, MapPin, Phone, ChevronDown, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

import { Section } from "@/components/layout/Section";

interface NavLink {
  href: string;
  label: string;
  hasDropdown: boolean;
  dropdownItems?: { href: string; label: string }[];
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home", hasDropdown: false },
  { href: "/about", label: "About", hasDropdown: false },
  {
    href: "/services",
    label: "Services",
    hasDropdown: true,
    dropdownItems: services.map((service) => ({
      href: `/services/${service.slug}`,
      label: service.title,
    })),
  },
  { href: "/projects", label: "Projects", hasDropdown: false },
  { href: "/contact", label: "Contact", hasDropdown: false },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <>
      <header className="w-full z-40 bg-white">
        {/* Top Bar - Desktop Only */}
        <div className="hidden md:block border-b border-gray-100">
          <Section className="py-6 flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/logo-with-text.svg"
                alt="OpenSixty"
                width={220}
                height={50}
              />
            </Link>

            {/* Info Blocks */}
            <div className="flex items-center gap-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-secondary mt-1" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-secondary">
                    Our Address
                  </span>
                  <span className="text-xs text-gray-500">
                    11 Rhodesville Rd, Eastlea - Harare
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-secondary mt-1" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-secondary">
                    Email Us
                  </span>
                  <span className="text-xs text-gray-500">
                    <a
                      href="mailto:contactus@opensixty.co.zw"
                      className="hover:text-primary transition-colors"
                    >
                      contactus@opensixty.co.zw
                    </a>
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-secondary mt-1" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-secondary">
                    Call Us
                  </span>
                  <span className="text-xs text-gray-500">
                    <a
                      href="tel:+263772277026"
                      className="hover:text-primary transition-colors"
                    >
                      +263 772 277 026
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </header>

      {/* Mobile Header Spacer */}
      <div className="h-[72px] md:hidden" />

      {/* Main Navigation Bar */}
      <div
        className={cn(
          "w-full bg-white transition-all duration-300 border-b border-gray-100 z-40",
          "fixed top-0 md:sticky md:top-0",
          isScrolled ? "shadow-md" : "",
        )}
      >
        <Section className="py-4 md:py-0 flex items-center justify-between min-h-[60px]">
          {/* Mobile Logo (Visible only on mobile) */}
          <Link href="/" className="flex items-center gap-2 md:hidden">
            <Image
              src="/images/logo-with-text.svg"
              alt="OpenSixty"
              width={190}
              height={40}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-[15px] font-bold text-secondary hover:text-primary transition-colors py-6"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-primary transition-colors" />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {link.hasDropdown && link.dropdownItems && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-primary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="py-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-6 py-3 text-sm text-secondary hover:bg-gray-50 hover:text-primary transition-colors border-b border-gray-50 last:border-0"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="hidden md:flex bg-primary hover:bg-primary/90 text-white text-xs font-bold px-6 py-3 uppercase tracking-wider transition-colors shadow-sm"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </Section>
      </div>

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
                <span className="text-xl font-bold text-secondary">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6 text-secondary" />
                </button>
              </div>

              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <div
                    key={link.label}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        className="flex-1 py-3 text-secondary font-bold hover:text-primary transition-colors"
                        onClick={() =>
                          !link.hasDropdown && setIsMobileMenuOpen(false)
                        }
                      >
                        {link.label}
                      </Link>
                      {link.hasDropdown && (
                        <button
                          onClick={() => toggleMobileExpand(link.label)}
                          className="p-3 text-gray-400 hover:text-primary"
                        >
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform",
                              mobileExpanded === link.label ? "rotate-180" : "",
                            )}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Dropdown Content */}
                    <AnimatePresence>
                      {link.hasDropdown &&
                        link.dropdownItems &&
                        mobileExpanded === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-gray-50"
                          >
                            <div className="flex flex-col pb-2">
                              {link.dropdownItems.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="pl-6 py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-3 text-secondary">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+263 772 277 026</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">
                    11 Rhodesville Rd, Eastlea
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="bg-primary text-white text-center font-bold py-3 uppercase tracking-wider hover:bg-primary/90 transition-colors"
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
            className="fixed inset-0 bg-secondary z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
