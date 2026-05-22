import React from 'react'
import { Heart, Clock, RefreshCw, Users } from 'lucide-react'

const usps = [
  {
    icon: Clock,
    title: '65 Years of Excellence',
    description: 'Six decades in the health industry means unmatched experience, deep institutional knowledge, and a proven track record of reliability.',
  },
  {
    icon: Heart,
    title: 'Emotional Grassroot Connection',
    description: 'We build relationships at the grassroot level with patients — understanding their needs, fears, and aspirations for better health.',
  },
  {
    icon: RefreshCw,
    title: 'Redefined Healthcare',
    description: 'We continuously reinvent our approach to healthcare delivery — combining tradition with modern solutions for every generation.',
  },
  {
    icon: Users,
    title: 'Commitment to Service',
    description: 'Our unwavering commitment to excellent service sets us apart. Every interaction is guided by compassion and professionalism.',
  },
]

export default function USPSection() {
  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-medic-teal font-semibold text-[14px] uppercase tracking-wide">Why We Stand Apart</span>
          <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-medic-navy mt-2">
            What Makes Sukrutha Healthcare Different
          </h2>
          <p className="text-medic-muted text-[16px] mt-4 max-w-[600px] mx-auto leading-relaxed">
            We hope and strive to excel all others — not through competition, but through deep commitment to the people we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon
            return (
              <div
                key={usp.title}
                className="flex gap-5 p-6 rounded-2xl border border-medic-border hover:border-medic-teal/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl medic-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={26} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[18px] text-medic-navy mb-2">
                    {usp.title}
                  </h3>
                  <p className="text-[15px] text-medic-muted font-body leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
