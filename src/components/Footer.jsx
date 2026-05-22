import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services & Products", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];

const serviceLinks = [
  "Medicinal Products",
  "Therapeutics",
  "Physical Recovery",
  "Wellness Products",
  "Surgeries & Day Care",
  "Post-Operative Care",
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-medic-navy-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1 - Brand */}
          <div>
            <Link to="/" className="font-heading font-bold text-xl text-white">
              Sukrutha<span className="text-medic-teal"> Healthcare</span>
            </Link>
            <p className="text-[13px] text-medic-muted mt-4 mb-4 leading-relaxed">
              Serving the health & wellness needs of Karnataka since 1960.
              Committed to excellent care, redefined for every generation.
            </p>
            <div className="flex items-start gap-2 mt-4">
              <MapPin
                size={14}
                className="text-medic-teal flex-shrink-0 mt-1"
              />
              <p className="text-[13px] text-medic-muted">Karnataka, India</p>
            </div>
            <div className="flex items-start gap-2 mt-3">
              <Clock size={14} className="text-medic-teal flex-shrink-0 mt-1" />
              <p className="text-[13px] text-medic-muted">
                Monday - Saturday: 9:00 AM - 7:00 PM
              </p>
            </div>
            <div className="flex items-start gap-2 mt-3">
              <Mail size={14} className="text-medic-teal flex-shrink-0 mt-1" />
              <a
                href="mailto:info@sukruthahealthcare.com"
                className="text-[13px] text-medic-teal hover:text-medic-teal-light transition-colors"
              >
                info@sukruthahealthcare.com
              </a>
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h5 className="font-heading font-semibold text-[14px] text-white mb-4">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[13px] text-white/80 hover:text-medic-teal transition-colors"
                  >
                    › {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h5 className="font-heading font-semibold text-[14px] text-white mb-4">
              Our Services
            </h5>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <Link
                    to="/services"
                    className="text-[13px] text-white/80 hover:text-medic-teal transition-colors"
                  >
                    › {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <p className="text-[13px] text-medic-muted text-center">
            © 2026 Sukrutha Healthcare Pvt Ltd | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
