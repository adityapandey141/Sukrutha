import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const bulletItems = [
  "Pharmaceutical-grade medicines & specialty drugs statewide",
  "End-to-end surgical and post-operative care products",
  "Trusted by hospitals & clinics across Karnataka since 1960",
];

export default function SpecialistsCta() {
  return (
    <section className="bg-medic-navy py-[80px]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left */}
        <div className="w-full lg:w-[55%]">
          <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-white">
            Partner With Karnataka's Most Trusted Healthcare Provider
          </h2>
          <p className="text-medic-muted text-[16px] mt-4 leading-relaxed">
            Whether you're a hospital, clinic, or healthcare professional —
            Sukrutha Healthcare is ready to serve your needs with reliability
            and compassion.
          </p>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[45%]">
          <ul className="space-y-4 mb-8">
            {bulletItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="text-medic-teal flex-shrink-0 mt-0.5"
                />
                <span className="text-white text-[15px] font-body">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-medic-teal text-white text-[15px] font-semibold px-8 py-[14px] hover:bg-medic-teal-light transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
