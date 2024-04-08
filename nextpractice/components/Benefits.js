import React from 'react'
import Box from './Box'
import { benefits } from '@/app/utils'

export default function Benefits() {
  return (
    <div className="px-12 py-5 bg-white">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-[#F27105]">Just For You</h2>
        <h2 className="font-bold text-[#034AA6] text-4xl">
          Benefits & Advantages
        </h2>
        <p className="text-center text-[#969696] leading-[25px] w-full md:w-[25vw]">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go
        </p>
      </div>
      <div className="flex flex-wrap gap-10 py-3 justify-center">
        {benefits.map((benefit, key) => (
          <Box
            key={key}
            iconURL={benefit.iconURL}
            iconBGColor={benefit.iconBGColor}
            heading={benefit.heading}
            desc={benefit.desc}
            url={`benefits/${benefit.url}`}
          />
        ))}
      </div>
    </div>
  )
}
