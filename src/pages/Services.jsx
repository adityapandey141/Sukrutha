import React from "react";
import { Link } from "react-router-dom";
import {
  Pill,
  FlaskConical,
  Dumbbell,
  Sprout,
  Syringe,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PillBadge from "../components/ui/PillBadge.jsx";

const services = [
  {
    icon: Pill,
    title: "Medicinal Products",
    description:
      "Comprehensive supply of pharmaceutical-grade medicines, generics, and specialty drugs to hospitals and healthcare providers across Karnataka.",
    features: [
      "Pharmaceutical-grade medicines",
      "Generic & specialty drugs",
      "Hospital supply chain",
      "Quality-assured sourcing",
    ],
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop",
    alt: "Pharmaceutical medicines and healthcare products",
  },
  {
    icon: FlaskConical,
    title: "Therapeutics",
    description:
      "Advanced therapeutic products tailored for effective patient outcomes — from chronic condition management to acute care protocols.",
    features: [
      "Evidence-based solutions",
      "Chronic condition management",
      "Acute care protocols",
      "Outcome-focused therapies",
    ],
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
    alt: "Advanced therapeutic treatment solutions",
  },
  {
    icon: Dumbbell,
    title: "Physical Health Recovery",
    description:
      "Equipment and products supporting physical rehabilitation, post-surgical recovery, and long-term mobility improvement for patients of all ages.",
    features: [
      "Rehabilitation equipment",
      "Post-surgical recovery aids",
      "Mobility improvement products",
      "Long-term recovery support",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    alt: "Physical rehabilitation and recovery support",
  },
  {
    icon: Sprout,
    title: "Wellness Products",
    description:
      "Curated wellness essentials that promote preventive health and support patients in maintaining quality of life beyond treatment.",
    features: [
      "Preventive health products",
      "Nutritional supplements",
      "Quality-of-life essentials",
      "Holistic wellness solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
    alt: "Wellness and preventive health products",
  },
  {
    icon: Syringe,
    title: "Surgeries & Day Care",
    description:
      "Clinical support and product supply for surgical procedures, day-care interventions, and outpatient healthcare programmes across Karnataka.",
    features: [
      "Surgical product supply",
      "Day-care intervention support",
      "Outpatient programme products",
      "Clinical consumables",
    ],
    image:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&h=400&fit=crop",
    alt: "Surgical and day care medical support",
  },
  {
    icon: HeartHandshake,
    title: "Post-Operative Care",
    description:
      "Aftercare products and guidance ensuring patients receive the right support during recovery — because healing doesn't end at discharge.",
    features: [
      "Aftercare product supply",
      "Recovery guidance materials",
      "Patient support solutions",
      "Discharge-to-recovery products",
    ],
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=400&fit=crop",
    alt: "Post-operative patient care and recovery",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-[72px]">
        <div className="bg-medic-navy py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <PillBadge variant="outline-white">What We Offer</PillBadge>
            <h1 className="font-heading font-bold text-[40px] md:text-[52px] text-white mt-4">
              Services & Products
            </h1>
            <p className="text-medic-muted text-[17px] mt-4 max-w-[600px] mx-auto leading-relaxed">
              A complete ecosystem of care — from the pharmacy shelf to the
              recovery room, we accompany patients and providers at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.title}
                  className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="w-full h-[320px] md:h-[380px] rounded-3xl overflow-hidden group">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="w-14 h-14 rounded-2xl medic-gradient flex items-center justify-center mb-5">
                      <Icon size={26} className="text-white" />
                    </div>
                    <h2 className="font-heading font-bold text-[28px] md:text-[32px] text-medic-navy mb-4">
                      {service.title}
                    </h2>
                    <p className="text-[16px] text-medic-muted font-body leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle2
                            size={18}
                            className="text-medic-teal flex-shrink-0"
                          />
                          <span className="text-[15px] text-medic-text font-body">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-medic-teal font-semibold text-[15px] hover:text-medic-teal-light transition-colors"
                    >
                      Enquire Now <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-[100px] bg-medic-gray-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-medic-teal font-semibold text-[14px] uppercase tracking-wide">
              Industries
            </span>
            <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-medic-navy mt-2">
              Healthcare Sectors We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Multi-Specialty Hospitals",
                desc: "Complete pharmaceutical and surgical supply solutions",
              },
              {
                title: "Primary Health Centers",
                desc: "Essential medicines and basic healthcare products",
              },
              {
                title: "Private Clinics",
                desc: "Specialized products for focused medical practices",
              },
              {
                title: "Rehabilitation Centers",
                desc: "Recovery equipment and long-term care products",
              },
            ].map((sector) => (
              <div
                key={sector.title}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <h3 className="font-heading font-bold text-[16px] text-medic-navy mb-2">
                  {sector.title}
                </h3>
                <p className="text-[14px] text-medic-muted">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] bg-medic-navy">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-white mb-4">
            Need Healthcare Products or Support?
          </h2>
          <p className="text-medic-muted text-[16px] max-w-[500px] mx-auto mb-8">
            Whether you're looking for pharmaceutical supplies, surgical
            support, or wellness products — we're here for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-medic-teal text-white text-[15px] font-semibold px-8 py-[14px] hover:bg-medic-teal-light transition-colors"
          >
            Get a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
