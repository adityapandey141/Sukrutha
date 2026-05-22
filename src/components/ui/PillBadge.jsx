import React from 'react'

const variants = {
  'outline-teal': 'border-[1.5px] border-medic-teal text-medic-teal bg-transparent',
  'outline-white': 'border-[1.5px] border-white text-white bg-transparent',
}

export default function PillBadge({ variant = 'outline-teal', children }) {
  return (
    <span
      className={`inline-block rounded-full px-4 py-[5px] text-[12px] font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
