import { Suspense } from "react";

const { getItem } = require("@/app/utils");

async function AllBenefits({ item }) {

  return (
    <div className="p-4 border rounded-lg shadow-md hover:shadow-lg flex flex-col items-center justify-center">
      <div className={`w-12 h-12 rounded-full ${item.iconBGColor} flex items-center justify-center`}>
        <img src={item.iconURL} alt={item.heading} className="w-8 h-8" />
      </div>
      <h3 className="mt-2 text-lg font-semibold">{item.heading}</h3>
      <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
    </div>
  );
}



export default async function Page({
  params: { benefitId },
}) {
  // Wait for the artist
  const item = await getItem(benefitId)
 
  return (
    <> 
      <Suspense fallback={<div>Loading...</div>}>
        <AllBenefits item={item} />
      </Suspense>
    </>
  )
}