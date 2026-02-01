import { Section } from "@/components/layout/Section";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Clock,
  Mail,
  ChevronRight,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-16">
      <Section>
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-12 gap-6">
          <div className="shrink-0">
            <Image
              src="/images/logo-text-dark.svg"
              alt="OpenSixty Logo"
              width={200}
              height={50}
              priority
            />
          </div>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-primary transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-primary transition-colors"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Col 1: About Company */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-gray-700 w-full inline-block mb-6">
              About Company
              <div className="h-1 w-20 bg-primary mt-2" />
            </h3>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>
                A premier industrial integrator providing sustainable solutions
                in construction, logistics &amp; commodity broking.
              </p>
              <p>
                We empower African industries through end-to-end product
                integration &amp; expert ancillary services.
              </p>
              <div className="pt-4">
                <div className="bg-white text-secondary font-bold p-3 rounded-md inline-flex items-center gap-2 border border-gray-200">
                  <span className="text-2xl">★</span>
                  <div className="leading-tight">
                    <div className="text-xs uppercase">Accredited</div>
                    <div className="text-lg">BUSINESS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div>
            <h3 className="text-xl font-bold border-b border-gray-700 w-full inline-block mb-6">
              Useful Links
              <div className="h-1 w-20 bg-primary mt-2" />
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { label: "Main Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary flex items-center gap-2 transition-colors"
                  >
                    <ChevronRight size={14} className="text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold border-b border-gray-700 w-full inline-block mb-6">
              Contact Info
              <div className="h-1 w-20 bg-primary mt-2" />
            </h3>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-primary shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Address</p>
                  <p>11 Rhodesville Rd, Eastlea</p>
                  <p>Harare</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">
                    Support &amp; Sales
                  </p>
                  <p>+263 789 579 040</p>
                  <p>+263 242 779 714</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-primary shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">
                    Business Hours:{" "}
                  </p>
                  <p>Mon-Sat: 8 AM - 5 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Email</p>
                  <p>contactus@opensixty.co.zw</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Services Offered */}
          <div>
            <h3 className="text-xl font-bold border-b border-gray-700 w-full inline-block mb-6">
              Services Offered
              <div className="h-1 w-20 bg-primary mt-2" />
            </h3>
            <div className="flex flex-col gap-0 space-y-6 text-sm text-gray-400">
              <div className="group">
                <h4 className="text-white font-semibold group-hover:text-primary transition-colors cursor-pointer">
                  Construction & Engineering
                </h4>
                <p className="line-clamp-2">
                  Infrastructure development &amp; industrial facility
                  maintenance across the region.
                </p>
              </div>
              <div className="group border-t border-gray-700 pt-4">
                <h4 className="text-white font-semibold group-hover:text-primary transition-colors cursor-pointer">
                  Logistics & Supply Chain
                </h4>
                <p className="line-clamp-2">
                  End-to-end product integration &amp; distribution services for
                  seamless industrial operations.
                </p>
              </div>
              <div className="group border-t border-gray-700 pt-4">
                <h4 className="text-white font-semibold group-hover:text-primary transition-colors cursor-pointer">
                  Commodity Broking
                </h4>
                <p className="line-clamp-2">
                  Expert ancillary services &amp; commodity trade solutions
                  connecting African industries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>
            © {new Date().getFullYear()} OpenSixty. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </Section>
    </footer>
  );
}
