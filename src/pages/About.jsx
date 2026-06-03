import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  Award,
  Target,
  Handshake,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import PillBadge from "../components/ui/PillBadge.jsx";
import DoctorsSection from "../components/DoctorsSection.jsx";

const timeline = [
  {
    year: "1960",
    title: "Founded",
    desc: "Sukrutha Healthcare established in Karnataka with a vision to serve community health needs.",
  },
  {
    year: "1980",
    title: "Expansion",
    desc: "Expanded operations across multiple districts, establishing a robust supply chain network.",
  },
  {
    year: "2000",
    title: "Modernization",
    desc: "Adopted modern logistics and pharmaceutical standards, partnering with leading manufacturers.",
  },
  {
    year: "2020",
    title: "Digital Era",
    desc: "Embraced digital transformation while maintaining the personal touch that defines our legacy.",
  },
  {
    year: "Today",
    title: "65+ Years Strong",
    desc: "Serving 500+ healthcare institutions across 30+ districts of Karnataka.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    desc: "Every decision we make is guided by empathy for patients and respect for healthcare providers.",
  },
  {
    icon: Handshake,
    title: "Relationship Driven",
    desc: "We build emotional connections at the grassroot level — patients and providers are family, not transactions.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    desc: "Our commitment to excellent service is non-negotiable. We strive to exceed expectations in everything we do.",
  },
  {
    icon: Target,
    title: "Patient-Centered",
    desc: "The patient is at the center of our universe. Every product we supply, every service we offer — it serves them.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Evolution",
    desc: "Redefined healthcare means never standing still. We evolve with the times while honoring our roots.",
  },
  {
    icon: Users,
    title: "Community Bond",
    desc: "Deeply embedded in Karnataka communities, we understand local health challenges and respond with precision.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-[72px]">
        <div className="bg-medic-navy py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <PillBadge variant="outline-white">About Us</PillBadge>
            <h1 className="font-heading font-bold text-[40px] md:text-[52px] text-white mt-4">
              65 Years of Healing Karnataka
            </h1>
            <p className="text-medic-muted text-[17px] mt-4 max-w-[600px] mx-auto leading-relaxed">
              From a humble beginning in 1960 to becoming Karnataka's most
              trusted healthcare partner — our journey is one of compassion,
              commitment, and continuous care.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="w-full h-[400px] rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=500&fit=crop"
                    alt="Healthcare professionals dedicated to patient care"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-medic-teal rounded-2xl p-6 shadow-lg hidden md:block">
                  <span className="block font-heading font-extrabold text-[42px] text-white leading-none">
                    65+
                  </span>
                  <span className="text-white/80 text-[14px]">
                    Years of Trust
                  </span>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="w-full lg:w-1/2">
              <span className="text-medic-teal font-semibold text-[14px] uppercase tracking-wide">
                Our Story
              </span>
              <h2 className="font-heading font-bold text-[32px] md:text-[36px] text-medic-navy mt-2 mb-5">
                Built on Trust, Driven by Purpose
              </h2>
              <p className="text-[16px] text-medic-muted font-body leading-relaxed mb-4">
                Sukrutha Healthcare Pvt Ltd was founded in 1960 with a singular
                vision: to make quality healthcare products accessible to every
                corner of Karnataka. What started as a small pharmaceutical
                supply operation has grown into the state's most trusted
                healthcare partner.
              </p>
              <p className="text-[16px] text-medic-muted font-body leading-relaxed mb-4">
                We deal with the hospital and healthcare industry — providing
                medicinal products, therapeutics, physical health recovery
                items, wellness products, surgical support, daycare services,
                and post-operative care solutions.
              </p>
              <p className="text-[16px] text-medic-muted font-body leading-relaxed">
                In 65 years, what has never changed is the relationship. Every
                patient, every provider — they are not a transaction. They are
                family. This emotional connection at the grassroot level is what
                makes Sukrutha Healthcare different.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-[100px] bg-medic-gray-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-medic-teal font-semibold text-[14px] uppercase tracking-wide">
              Our Values
            </span>
            <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-medic-navy mt-2">
              What Guides Us Every Day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-medic-teal/10 flex items-center justify-center mb-4 group-hover:bg-medic-teal transition-colors">
                    <Icon
                      size={22}
                      className="text-medic-teal group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-[18px] text-medic-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[14px] text-medic-muted leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-medic-teal font-semibold text-[14px] uppercase tracking-wide">
              Our Journey
            </span>
            <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-medic-navy mt-2">
              Six Decades of Healthcare Excellence
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                {/* Year marker */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full medic-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-heading font-bold text-[13px]">
                      {item.year}
                    </span>
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-[2px] flex-1 bg-medic-border mt-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <h4 className="font-heading font-bold text-[18px] text-medic-navy mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[15px] text-medic-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <DoctorsSection />

      {/* CTA */}
      <section className="py-[80px] bg-medic-navy">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-medic-muted text-[16px] max-w-[500px] mx-auto mb-8">
            Join the 500+ healthcare institutions across Karnataka that trust
            Sukrutha Healthcare for their needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-medic-teal text-white text-[15px] font-semibold px-8 py-[14px] hover:bg-medic-teal-light transition-colors"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
