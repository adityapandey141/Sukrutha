import React from "react";
import { Heart, Users, Award } from "lucide-react";

export default function TeamStepsSection() {
  return (
    <section id="about" className="py-[100px] bg-medic-gray-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-medic-teal font-semibold text-[14px] uppercase tracking-wide">
            About Us
          </span>
          <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-medic-navy mt-2">
            More Than a Supplier —<br className="hidden md:block" /> A Partner
            in Healing
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left - Story */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Value 1 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-medic-teal/10 flex items-center justify-center flex-shrink-0">
                <Heart size={22} className="text-medic-teal" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-[18px] text-medic-navy mb-2">
                  Compassion at Our Core
                </h4>
                <p className="text-[15px] text-medic-muted font-body leading-relaxed">
                  Every patient, every provider — they are not a transaction.
                  They are family. That philosophy has guided us since 1960.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-medic-teal/10 flex items-center justify-center flex-shrink-0">
                <Users size={22} className="text-medic-teal" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-[18px] text-medic-navy mb-2">
                  Relationships Over Revenue
                </h4>
                <p className="text-[15px] text-medic-muted font-body leading-relaxed">
                  In 65 years, what has never changed is the relationship. We
                  grow alongside the communities and healthcare providers we
                  serve.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-medic-teal/10 flex items-center justify-center flex-shrink-0">
                <Award size={22} className="text-medic-teal" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-[18px] text-medic-navy mb-2">
                  Redefined for Every Generation
                </h4>
                <p className="text-[15px] text-medic-muted font-body leading-relaxed">
                  Committed to excellent care, we continuously evolve our
                  products and partnerships to meet modern healthcare demands
                  across Karnataka.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Images */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[520px] h-[420px]">
              {/* Image 1 */}
              <div className="absolute top-0 left-0 w-[240px] md:w-[260px] h-[300px] md:h-[320px] rounded-[20px] overflow-hidden z-[1] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=500&fit=crop"
                  alt="Healthcare professionals working together in a pharmacy setting"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2 */}
              <div className="absolute top-[80px] right-0 w-[240px] md:w-[260px] h-[300px] md:h-[320px] rounded-[20px] overflow-hidden z-[2] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=500&fit=crop"
                  alt="Modern healthcare delivery and patient care"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] px-5 py-4 z-[3] min-w-[260px]">
                <p className="font-heading font-bold text-[14px] text-medic-navy text-center">
                  "They are not a transaction.
                  <br />
                  They are family."
                </p>
                <p className="text-[12px] text-medic-muted mt-2 text-center">
                  — The Sukrutha Healthcare Promise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
