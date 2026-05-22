import React from "react";
import { Link } from "react-router-dom";
import PillBadge from "./ui/PillBadge.jsx";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-[92vh] pt-[72px] flex items-center"
      style={{ padding: "80px 0" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="w-full lg:w-[55%]">
          <PillBadge variant="outline-teal">
            65 Years of Healing Karnataka
          </PillBadge>

          <h1 className="font-heading font-bold text-[40px] md:text-[56px] leading-tight text-medic-navy mt-6">
            Redefining
            <br />
            <span className="relative">
              Healthcare
              <span className="absolute left-0 bottom-1 w-full h-[3px] bg-medic-teal rounded-full" />
            </span>
            <br />
            <span className="text-medic-teal">From the Heart</span>
          </h1>

          <p className="text-[17px] text-medic-muted font-body max-w-[480px] mt-5 leading-relaxed">
            Sukrutha Healthcare has been the trusted partner in health and
            healing across Karnataka — delivering medicines, therapeutics,
            surgical care, and wellness with unwavering compassion.
          </p>

          <hr className="border-medic-border my-6 max-w-[480px]" />

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/services"
              className="rounded-full bg-medic-teal text-white text-[15px] font-semibold px-7 py-[14px] hover:bg-medic-teal-light transition-colors"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="rounded-full border-[1.5px] border-medic-teal text-medic-teal text-[15px] font-semibold px-7 py-[14px] hover:bg-medic-teal hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Stat Cards */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="bg-white rounded-2xl shadow-[0_4px_18px_rgba(0,0,0,0.07)] px-6 py-4">
              <span className="block font-heading font-bold text-[32px] text-medic-teal">
                65+
              </span>
              <span className="text-[13px] text-medic-muted">
                Years of Service
              </span>
            </div>
            <div className="bg-white rounded-2xl shadow-[0_4px_18px_rgba(0,0,0,0.07)] px-6 py-4">
              <span className="block font-heading font-bold text-[32px] text-medic-teal">
                ∞
              </span>
              <span className="text-[13px] text-medic-muted">
                Patient Relationships
              </span>
            </div>
            <div className="bg-white rounded-2xl shadow-[0_4px_18px_rgba(0,0,0,0.07)] px-6 py-4">
              <span className="block font-heading font-bold text-[32px] text-medic-teal">
                KA
              </span>
              <span className="text-[13px] text-medic-muted">
                Statewide Reach
              </span>
            </div>
            <div className="bg-white rounded-2xl shadow-[0_4px_18px_rgba(0,0,0,0.07)] px-6 py-4">
              <span className="block font-heading font-bold text-[32px] text-medic-teal">
                ✚
              </span>
              <span className="text-[13px] text-medic-muted">Est. 1960</span>
            </div>
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <div className="w-full max-w-[480px] h-[420px] rounded-[32px] bg-medic-gray-bg flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=500&fit=crop"
              alt="Modern healthcare facility representing Sukrutha Healthcare's commitment to Karnataka"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
