import { cache } from 'react'

export const benefits = [
    {
      iconURL: '/qhome.svg',
      iconBGColor: 'bg-[#034AA6]',
      url: "easytouse",
      heading: 'Easy To Use',
      desc: 'Our platform is designed with simplicity and usability in mind, ensuring that users of all levels can effortlessly navigate and utilize its features.',
    },
    {
      iconURL: '/qhome.svg',
      iconBGColor: 'bg-[#F27105]',
      url: "speedysearching",
      heading: 'Speedy Searching',
      desc: 'Say goodbye to endless scrolling and frustrating searches. Our platform leverages cutting-edge technology to deliver lightning-fast search results.',
    },
    {
      iconURL: '/qhome.svg',
      iconBGColor: 'bg-[#00CCFF]',
      url: "intuitivebookmark",
      heading: 'Intuitive Bookmark Organization',
      desc: 'Our bookmark manager provides an intuitive and user-friendly interface that empowers you to categorize and tag your bookmarks with ease.',
    },
    {
      iconURL: '/qhome.svg',
      iconBGColor: 'bg-[#00CCFF]',
      url: 'multidevicesync',
      heading: 'Multi-Device Sync',
      desc: "Never again experience the frustration of bookmarks being inaccessible on one device while you're browsing on another.",
    },
    {
      iconURL: '/qhome.svg',
      iconBGColor: 'bg-[#F27105]',
      url: 'advancedsearchcapabilities',
      heading: 'Advanced Search Capabilities',
      desc: 'Searching for a specific bookmark made easy. With our advanced search functionality, you can effortlessly locate any bookmark within seconds.',
    },
    {
      iconURL: '/qhome.svg',
      iconBGColor: 'bg-[#034AA6]',
      url: 'easysharing',
      heading: 'Easy Sharing',
      desc: 'Sharing your bookmarks with friends, colleagues, or collaborators has never been simpler.',
    },
  ]
 
export const getItem = cache(async (benefitId) => {
  const item = benefits.find((benefit) => benefit.url === benefitId)
  return item
})