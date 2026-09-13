/**
 * @file Footer.tsx
 * @description Global footer with brand details, navigation links, services, and contact info.
 * @module Components/Layout
 */

import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { contactInfo, socialLinks } from "@/data/siteContent";
import { shopConfig } from "@/config/shop.config";

/**
 * Navigation link type definition
 */
interface NavLink {
  label: string;
  href: string;
}

/**
 * Service type definition
 */
interface Service {
  label: string;
  href: string;
}

/**
 * Social link type definition
 */
interface SocialLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

const Footer: React.FC = memo(() => {
  const currentYear: number = new Date().getFullYear();

  const quickLinks: NavLink[] = [
    { label: "About Us", href: "/about" },
    { label: "Collection", href: "/collection" },
    { label: "Contact", href: "/contact" },
  ];

  const services: Service[] = [
    { label: "Bespoke Jewelry Design", href: "#" },
    { label: "Restoration & Repair", href: "#" },
    { label: "Gemstone Consultation", href: "#" },
    { label: "Jewelry Appraisal", href: "#" },
    { label: "Corporate Gifts", href: "#" },
  ];

  const socials: SocialLink[] = [
    { label: "Instagram", href: socialLinks.instagram, icon: Instagram },
    { label: "Facebook", href: socialLinks.facebook, icon: Facebook },
    { label: "Twitter", href: socialLinks.twitter, icon: Twitter },
  ];

  return (
    <footer
      className="bg-primary text-primary-foreground py-16"
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3
              id="footer-heading"
              className="font-serif text-2xl font-bold mb-6"
            >
              {shopConfig.name}
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              {shopConfig.tagline}
            </p>
            <nav aria-label="Social Media">
              <ul className="flex space-x-4">
                {socials.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <section aria-labelledby="footer-services-heading">
            <h4
              id="footer-services-heading"
              className="font-semibold text-lg mb-6"
            >
              Services
            </h4>
            <ul className="space-y-3 text-primary-foreground/80">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact Info */}
          <address
            className="not-italic"
            aria-labelledby="footer-contact-heading"
          >
            <h4
              id="footer-contact-heading"
              className="font-semibold text-lg mb-6"
            >
              Contact Information
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div className="text-primary-foreground/80">
                  {contactInfo.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone
                  className="w-5 h-5 text-accent flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-primary-foreground/80"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail
                  className="w-5 h-5 text-accent flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-primary-foreground/80"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} {shopConfig.name}. All rights reserved.
            </p>
            <nav aria-label="Legal">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
