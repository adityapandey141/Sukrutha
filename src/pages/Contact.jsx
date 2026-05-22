import React, { useState } from 'react'
import { MapPin, Clock, Mail, Phone, Send, Building2 } from 'lucide-react'
import PillBadge from '../components/ui/PillBadge.jsx'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out! We will get back to you shortly.')
    setFormData({ name: '', email: '', phone: '', organization: '', subject: '', message: '' })
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-[72px]">
        <div className="bg-medic-navy py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <PillBadge variant="outline-white">Get in Touch</PillBadge>
            <h1 className="font-heading font-bold text-[40px] md:text-[52px] text-white mt-4">
              Contact Us
            </h1>
            <p className="text-medic-muted text-[17px] mt-4 max-w-[600px] mx-auto leading-relaxed">
              Whether you're a healthcare provider looking for a supply partner or have a general inquiry — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left - Contact Info */}
            <div className="w-full lg:w-[40%]">
              <span className="text-medic-teal font-semibold text-[14px] uppercase tracking-wide">Reach Out</span>
              <h2 className="font-heading font-bold text-[28px] md:text-[32px] text-medic-navy mt-2 mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-[16px] text-medic-muted font-body leading-relaxed mb-8">
                Sukrutha Healthcare Pvt Ltd has been serving the health and wellness needs of Karnataka since 1960. We're always ready to discuss how we can support your healthcare goals.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-medic-teal/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-medic-teal" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[15px] text-medic-navy mb-1">Location</h4>
                    <p className="text-[14px] text-medic-muted">Karnataka, India</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-medic-teal/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-medic-teal" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[15px] text-medic-navy mb-1">Email</h4>
                    <a href="mailto:info@sukruthahealthcare.com" className="text-[14px] text-medic-teal hover:text-medic-teal-light transition-colors">
                      info@sukruthahealthcare.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-medic-teal/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-medic-teal" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[15px] text-medic-navy mb-1">Working Hours</h4>
                    <p className="text-[14px] text-medic-muted">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-medic-teal/10 flex items-center justify-center flex-shrink-0">
                    <Building2 size={20} className="text-medic-teal" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[15px] text-medic-navy mb-1">Company</h4>
                    <p className="text-[14px] text-medic-muted">Sukrutha Healthcare Pvt Ltd</p>
                    <p className="text-[13px] text-medic-muted">Est. 1960 | Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="w-full lg:w-[60%]">
              <div className="bg-medic-gray-bg rounded-3xl p-8 md:p-10">
                <h3 className="font-heading font-bold text-[22px] text-medic-navy mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[13px] font-semibold text-medic-text mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-medic-border bg-white text-[14px] text-medic-text focus:outline-none focus:border-medic-teal focus:ring-1 focus:ring-medic-teal transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[13px] font-semibold text-medic-text mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-medic-border bg-white text-[14px] text-medic-text focus:outline-none focus:border-medic-teal focus:ring-1 focus:ring-medic-teal transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-[13px] font-semibold text-medic-text mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-medic-border bg-white text-[14px] text-medic-text focus:outline-none focus:border-medic-teal focus:ring-1 focus:ring-medic-teal transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-[13px] font-semibold text-medic-text mb-2">Organization</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-medic-border bg-white text-[14px] text-medic-text focus:outline-none focus:border-medic-teal focus:ring-1 focus:ring-medic-teal transition-colors"
                        placeholder="Hospital / Clinic name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[13px] font-semibold text-medic-text mb-2">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-medic-border bg-white text-[14px] text-medic-text focus:outline-none focus:border-medic-teal focus:ring-1 focus:ring-medic-teal transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="medicinal">Medicinal Products Inquiry</option>
                      <option value="therapeutics">Therapeutics & Recovery Products</option>
                      <option value="surgical">Surgical & Day Care Support</option>
                      <option value="wellness">Wellness Products</option>
                      <option value="partnership">Partnership / Supply Agreement</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[13px] font-semibold text-medic-text mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-medic-border bg-white text-[14px] text-medic-text focus:outline-none focus:border-medic-teal focus:ring-1 focus:ring-medic-teal transition-colors resize-none"
                      placeholder="Tell us about your healthcare needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-medic-teal text-white text-[15px] font-semibold px-8 py-[14px] hover:bg-medic-teal-light transition-colors"
                  >
                    <Send size={16} /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[80px] bg-medic-gray-bg">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-[28px] md:text-[32px] text-medic-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'What areas of Karnataka do you serve?', a: 'We serve all 30+ districts of Karnataka with a robust supply chain network that ensures timely delivery across the state.' },
              { q: 'How can hospitals partner with Sukrutha Healthcare?', a: 'Simply reach out through our contact form or email us directly. We will schedule a consultation to understand your needs and propose a tailored supply agreement.' },
              { q: 'What types of products do you supply?', a: 'We supply medicinal products, therapeutics, physical recovery items, wellness products, surgical supplies, and post-operative care solutions.' },
              { q: 'Do you support individual patients or only institutions?', a: 'While our primary partners are healthcare institutions, we ultimately serve individual patients through our network of hospital and clinic partners.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6">
                <h4 className="font-heading font-bold text-[16px] text-medic-navy mb-2">{faq.q}</h4>
                <p className="text-[14px] text-medic-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
