import React from "react";
import { User } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sundaresh A.S.",
    qualification: "M.B.B.S., D.N.B., OBG",
    specialty: "Gynecologist",
  },
  {
    name: "Dr. Sudhaendran N.S.",
    qualification: "M.B.B.S.",
    specialty: "General Physician",
  },
  {
    name: "Dr. Deepak Kumar M.M.",
    qualification: "M.B.B.S., M.S. Ortho, DNB",
    specialty: "Orthopedic Surgeon",
  },
  {
    name: "Dr. Mohetha",
    qualification: "M.B.B.S., M.D. OBG",
    specialty: "Obstetrician & Gynecologist",
  },
  {
    name: "Dr. Bojovu Kumar",
    qualification: "M.B.B.S., M.D.",
    specialty: "Pediatrician",
  },
  {
    name: "Dr. Ravindra Naik",
    qualification: "",
    specialty: "Duty Doctor",
  },
];

export default function DoctorsSection() {
  return (
    <section className="py-[100px] bg-medic-gray-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-medic-teal font-semibold text-[14px] uppercase tracking-wide">
            Our Medical Team
          </span>
          <h2 className="font-heading font-bold text-[32px] md:text-[38px] text-medic-navy mt-2">
            Meet Our Doctors
          </h2>
          <p className="text-medic-muted text-[16px] mt-4 max-w-[550px] mx-auto leading-relaxed">
            Experienced healthcare professionals dedicated to providing the best
            care for patients across Karnataka.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group"
            >
              <div className="w-20 h-20 rounded-full bg-medic-teal/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-medic-teal transition-colors">
                <User
                  size={32}
                  className="text-medic-teal group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="font-heading font-bold text-[18px] text-medic-navy mb-1">
                {doctor.name}
              </h3>
              <p className="text-medic-teal font-semibold text-[14px] mb-1">
                {doctor.specialty}
              </p>
              {doctor.qualification && (
                <p className="text-[13px] text-medic-muted">
                  {doctor.qualification}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
