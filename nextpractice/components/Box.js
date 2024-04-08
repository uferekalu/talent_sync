import React from 'react'
import Link from 'next/link'

export default function Box({ iconURL, heading, desc, url, iconBGColor }) {
  return (
    <div className="flex flex-col justify-between p-8 w-[23vw] min-h-[40vh] rounded-lg bg-white shadow-xl shadow-[#F2F2F2]">
      <div>
        <img
          src={iconURL}
          alt={heading}
          className={`p-3 rounded-lg ${iconBGColor}`}
        />
      </div>
      <div className="my-6">
        <h1 className="font-semibold text-xl text-[#323232]">{heading}</h1>
        <p className="font-medium text-[#969696] leading-[32px]">{desc}</p>
      </div>
      <Link
        href={url}
        className="font-medium text-[#3346D3] underline decoration-[#3346D3]"
      >
        Learn More.
      </Link>
    </div>
  )
}
