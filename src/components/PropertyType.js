// components/PropertyType.js

import Link from "next/link"

const PropertyType = () => {
    return (
      <div className=" text-black w-full h-24 flex items-center justify-center">
        <ul className="flex space-x-4">
        <Link href="/central-london"><li className="cursor-pointer hover:text-gray-300">Central London</li></Link>  
          <li className="cursor-pointer hover:text-gray-300">Budget</li>
          <li className="cursor-pointer hover:text-gray-300">High End</li>
        </ul>
      </div>
    )
  }
  
  export default PropertyType
  