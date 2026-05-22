import React from "react";
import {
  Pill,
  FlaskConical,
  Dumbbell,
  Sprout,
  Syringe,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    icon: Pill,
    title: "Medicinal Products",
    description:
      "Comprehensive supply of pharmaceutical-grade medicines, generics, and specialty drugs to hospitals and healthcare providers across Karnataka.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop",
    alt: "Pharmaceutical medicines and healthcare products",
  },
  {
    icon: FlaskConical,
    title: "Therapeutics",
    description:
      "Advanced therapeutic products tailored for effective patient outcomes — from chronic condition management to acute care protocols.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
    alt: "Advanced therapeutic treatment solutions",
  },
  {
    icon: Dumbbell,
    title: "Physical Recovery",
    description:
      "Equipment and products supporting physical rehabilitation, post-surgical recovery, and long-term mobility improvement.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    alt: "Physical rehabilitation and recovery support",
  },
  {
    icon: Sprout,
    title: "Wellness Products",
    description:
      "Curated wellness essentials that promote preventive health and support patients in maintaining quality of life beyond treatment.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
    alt: "Wellness and preventive health products",
  },
  {
    icon: Syringe,
    title: "Surgeries & Day Care",
    description:
      "Clinical support and product supply for surgical procedures, day-care interventions, and outpatient healthcare programmes.",
    image:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&h=400&fit=crop",
    alt: "Surgical and day care medical support",
  },
  {
    icon: HeartHandshake,
    title: "Post-Operative Care",
    description:
      "Aftercare products and guidance ensuring patients receive the right support during recovery — because healing doesn't end at discharge.",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=400&fit=crop",
    alt: "Post-operative patient care and recovery",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-medic-teal font-semibold text-[14px] uppercase tracking-wide">
            What We Do
          </span>
          <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-medic-navy mt-2">
            A Complete Ecosystem of Care
          </h2>
          <p className="text-medic-muted text-[16px] mt-4 max-w-[640px] mx-auto leading-relaxed">
            From the pharmacy shelf to the recovery room, Sukrutha Healthcare
            accompanies patients and providers at every stage of the health
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl border border-medic-border overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Image */}
                <div className="w-full h-[200px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-medic-teal/10 flex items-center justify-center mb-4 -mt-10 relative z-10 border-2 border-white">
                    <Icon size={20} className="text-medic-teal" />
                  </div>
                  <h3 className="font-heading font-semibold text-[18px] text-medic-navy mb-3 group-hover:text-medic-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-medic-muted font-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
