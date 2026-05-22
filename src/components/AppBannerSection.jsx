import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, ShieldCheck, Truck, Clock } from "lucide-react";
import PillBadge from "./ui/PillBadge.jsx";

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { count, ref };
}

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    desc: "Pharmaceutical-grade products from verified manufacturers",
  },
  {
    icon: Truck,
    title: "Statewide Delivery",
    desc: "Reliable supply chain across all of Karnataka",
  },
  {
    icon: Clock,
    title: "65+ Years of Trust",
    desc: "Generational relationships built on dependability",
  },
];

export default function AppBannerSection() {
  const { count, ref } = useCountUp(65, 2000);

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left */}
        <div className="w-full lg:w-[55%]">
          <PillBadge variant="outline-teal">Why Choose Us</PillBadge>

          <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-medic-navy mt-4 mb-5">
            Why Patients Trust Us
          </h2>

          <p className="text-[15px] text-medic-muted font-body leading-relaxed max-w-[480px] mb-8">
            More than a supplier — a partner in healing. In 65 years, what has
            never changed is the relationship. Every patient, every provider —
            they are not a transaction. They are family.
          </p>

          <div ref={ref} className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp size={28} className="text-medic-teal" />
              <span className="font-heading font-extrabold text-[64px] md:text-[72px] text-medic-teal leading-none">
                {count}+
              </span>
            </div>
            <p className="text-medic-muted text-[14px] font-semibold">
              Years serving the health & wellness needs of Karnataka
            </p>
          </div>
        </div>

        {/* Right - Trust Points */}
        <div className="w-full lg:w-[45%]">
          <div className="space-y-6">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="flex gap-4 items-start bg-medic-gray-bg rounded-2xl p-5"
                >
                  <div className="w-11 h-11 rounded-xl medic-gradient flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[16px] text-medic-navy mb-1">
                      {point.title}
                    </h4>
                    <p className="text-[14px] text-medic-muted">{point.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quote */}
          <div className="mt-8 border-l-4 border-medic-teal pl-5">
            <p className="text-[15px] text-medic-navy font-body italic leading-relaxed">
              "In 65 years, what has never changed is the relationship. Every
              patient, every provider — they are not a transaction. They are
              family."
            </p>
            <p className="text-[13px] text-medic-teal font-semibold mt-2">
              — The Sukrutha Healthcare Promise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
