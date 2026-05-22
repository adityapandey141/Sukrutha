import React from "react";
import { Building2, Pill, Stethoscope, Leaf } from "lucide-react";
import PillBadge from "./ui/PillBadge.jsx";

const careCards = [
  {
    icon: Building2,
    title: "Hospital & Clinic Supply",
    description:
      "Full-spectrum medicinal products for healthcare institutions across Karnataka.",
  },
  {
    icon: Pill,
    title: "Therapeutics",
    description:
      "Evidence-based treatment solutions for chronic and acute care.",
  },
  {
    icon: Stethoscope,
    title: "Surgical Care",
    description:
      "Day care & post-operative support products and clinical solutions.",
  },
  {
    icon: Leaf,
    title: "Wellness Products",
    description:
      "Physical recovery & wellbeing essentials for long-term health.",
  },
];

export default function BodyPartSection() {
  return (
    <section className="bg-medic-navy py-[100px]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <PillBadge variant="outline-white">Since 1960</PillBadge>
          <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-white mt-4">
            Karnataka's Trusted Care
          </h2>
          <p className="text-medic-muted text-[16px] mt-4 max-w-[600px] mx-auto leading-relaxed">
            For over six decades, we've been the backbone of healthcare delivery
            — connecting patients with the products and care they need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 hover:bg-white/[0.1] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl medic-gradient flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-[17px] text-white mb-2 group-hover:text-medic-teal transition-colors">
                  {card.title}
                </h3>
                <p className="text-[14px] text-medic-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
