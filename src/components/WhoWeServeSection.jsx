import React from 'react'
import { Link } from 'react-router-dom'
import { Building, Stethoscope, Users, ArrowRight } from 'lucide-react'

const audiences = [
  {
    icon: Building,
    title: 'Hospitals & Clinics',
    description: 'End-to-end pharmaceutical and surgical supply for healthcare institutions seeking reliability and quality.',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Professionals',
    description: 'Doctors, surgeons, and therapists who demand the best products and support for their patients.',
  },
  {
    icon: Users,
    title: 'Patients & Families',
    description: 'People looking for the pinnacle of healthcare — those who want compassionate, evidence-based solutions.',
  },
]

export default function WhoWeServeSection() {
  return (
    <section className="py-[100px] bg-medic-gray-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left - Heading */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-[120px]">
            <span className="text-medic-teal font-semibold text-[14px] uppercase tracking-wide">Who We Serve</span>
            <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-medic-navy mt-2 mb-5">
              Support to Expand Your Healthcare Vision
            </h2>
            <p className="text-[16px] text-medic-muted font-body leading-relaxed mb-6">
              Our target audience is anyone looking for the pinnacle of healthcare — from large hospitals to individual patients seeking better outcomes.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-medic-teal text-white text-[15px] font-semibold px-7 py-[14px] hover:bg-medic-teal-light transition-colors"
            >
              Explore Services <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right - Cards */}
          <div className="w-full lg:w-[60%] space-y-6">
            {audiences.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-medic-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-medic-teal group-hover:text-white transition-colors">
                      <Icon size={24} className="text-medic-teal group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[20px] text-medic-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[15px] text-medic-muted font-body leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
