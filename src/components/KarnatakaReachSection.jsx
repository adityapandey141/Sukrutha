import React, { useState, useEffect, useRef } from 'react'
import { MapPin, Building2, Truck, Users } from 'lucide-react'

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, target, duration])

  return { count, ref }
}

const stats = [
  { icon: MapPin, value: 30, suffix: '+', label: 'Districts Covered' },
  { icon: Building2, value: 500, suffix: '+', label: 'Partner Institutions' },
  { icon: Truck, value: 10000, suffix: '+', label: 'Products Delivered Monthly' },
  { icon: Users, value: 65, suffix: ' Yrs', label: 'Of Trusted Service' },
]

export default function KarnatakaReachSection() {
  const { count: c1, ref: r1 } = useCountUp(30, 1500)
  const { count: c2, ref: r2 } = useCountUp(500, 2000)
  const { count: c3, ref: r3 } = useCountUp(10000, 2500)
  const { count: c4, ref: r4 } = useCountUp(65, 1500)

  const counters = [
    { ...stats[0], count: c1, ref: r1 },
    { ...stats[1], count: c2, ref: r2 },
    { ...stats[2], count: c3, ref: r3 },
    { ...stats[3], count: c4, ref: r4 },
  ]

  return (
    <section className="py-[100px] bg-medic-navy relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full border-2 border-white" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full border-2 border-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-medic-teal font-semibold text-[14px] uppercase tracking-wide">Our Reach</span>
          <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-white mt-2">
            Serving All of Karnataka
          </h2>
          <p className="text-medic-muted text-[16px] mt-4 max-w-[550px] mx-auto leading-relaxed">
            From Bangalore to Belgaum, Mysore to Mangalore — our supply chain reaches every corner of the state.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                ref={stat.ref}
                className="text-center p-6 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl medic-gradient flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <span className="block font-heading font-extrabold text-[36px] md:text-[42px] text-medic-teal leading-none">
                  {stat.count.toLocaleString()}{stat.suffix}
                </span>
                <span className="block text-[14px] text-medic-muted mt-2">{stat.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
