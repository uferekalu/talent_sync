import React from 'react'
import Link from 'next/link'

export default function Button({ text, style, type, url }) {
  const classStyle =
    type == 'stroke'
      ? `text-[#034AA6] border-[1px] ${style}`
      : `text-white bg-gradient-to-r ${style}`
  return (
    <Link
      href={url}
      className={`font-medium text-base rounded-lg ${classStyle}`}
    >
      {text}
    </Link>
  )
}
