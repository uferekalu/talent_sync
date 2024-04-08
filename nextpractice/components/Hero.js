import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className="flex flex-col px-12 py-5 justify-center items-center text-center">
      <h1 className="font-bold text-5xl text-[#152C5B] w-full leading-[60px] md:w-[45vw]">
        Never miss a brilliant idea. Capture the web with ease
      </h1>
      <p className="w-[35vw] leading-[32px] py-3 text-[#646464]">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>
      <div className="flex justify-between py-2">
        <Button
          text="Try For Free"
          type="background"
          url="#"
          style="from-[#00CCFF] to-[#034AA6] mr-6 px-6 py-3.5 shadow-md shadow-[#034AA6]"
        />
        <Button
          text="Pricing"
          type="stroke"
          url="#"
          style="border-[#034AA6] px-6 py-3 shadow-md shadow-[#034AA6]"
        />
      </div>
    </div>
  )
}
