import React from 'react'
import Button from './Button'
import Link from 'next/link'

export default function Nav({ activeLink }) {
  return (
    <div className="flex px-12  items-center justify-between">
      <div>
        <img src="/icon.svg" />
      </div>
      <div>
        <Link
          href="#"
          className={`mx-4 font-medium text-base ${activeLink === 'Home' ? 'text-[#034AA6]' : '#646464'}`}
        >
          Home
        </Link>
        <Link
          href="#"
          className={`mx-4 font-medium text-base ${activeLink === 'About' ? 'text-[#034AA6]' : '#646464'}`}
        >
          About
        </Link>
        <Link
          href="#"
          className={`mx-4 font-medium text-base ${activeLink === 'Pricing' ? 'text-[#034AA6]' : '#646464'}`}
        >
          Pricing
        </Link>
        <Link
          href="#"
          className={`mx-4 font-medium text-base ${activeLink === 'Download' ? 'text-[#034AA6]' : '#646464'}`}
        >
          Download
        </Link>
        <Link
          href="#"
          className={`mx-4 font-medium text-base ${activeLink === 'Contact' ? 'text-[#034AA6]' : '#646464'}`}
        >
          Contact
        </Link>
        <Button
          text="Sign in"
          type="stroke"
          url="#"
          style="border-[#034AA6] mx-4 py-3 px-6"
        />
        <Button
          text="Sign Up"
          type="background"
          url="#"
          style="from-[#00CCFF] to-[#034AA6] mx-1 py-3 px-6"
        />
      </div>
    </div>
  )
}
