import React, { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "Sukrutha Healthcare has been our primary pharmaceutical partner for over 20 years. Their reliability and product quality is unmatched in Karnataka.",
    name: "Dr. Rajesh Kumar",
    role: "Chief Medical Officer, District Hospital",
    location: "Mysore",
  },
  {
    quote: "What sets them apart is their understanding of our needs. They don't just supply — they partner with us to improve patient outcomes.",
    name: "Dr. Priya Sharma",
    role: "Hospital Administrator",
    location: "Bangalore",
  },
  {
    quote: "In 15 years of association, not once has Sukrutha Healthcare let us down on a critical supply. That kind of trust is rare in this industry.",
    name: "Dr. Venkatesh Murthy",
    role: "Surgeon, Multi-Specialty Hospital",
    location: "Hubli",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-medic-teal font-semibold text-[14px] uppercase tracking-wide">Testimonials</span>
          <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-medic-navy mt-2">
            Trusted by Healthcare Leaders
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-medic-gray-bg rounded-3xl p-8 md:p-12">
            <Quote size={48} className="text-medic-teal/20 absolute top-6 left-6" />
            
            <div className="relative z-10">
              <p className="text-[18px] md:text-[20px] text-medic-navy font-body leading-relaxed italic mb-8">
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-bold text-[16px] text-medic-navy">
                    {testimonials[current].name}
                  </p>
                  <p className="text-[14px] text-medic-muted">
                    {testimonials[current].role}
                  </p>
                  <p className="text-[13px] text-medic-teal font-semibold">
                    {testimonials[current].location}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-medic-border flex items-center justify-center hover:bg-medic-teal hover:text-white hover:border-medic-teal transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-medic-border flex items-center justify-center hover:bg-medic-teal hover:text-white hover:border-medic-teal transition-all"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? 'bg-medic-teal w-6' : 'bg-medic-border'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
