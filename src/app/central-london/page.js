import React from 'react'
import property from "../../images/property.jpg"
import Image from 'next/image'

const page = () => {
  return (
    <div className='mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <div className=' mb-2 rounded-2xl flex'>
        <div>
          <Image alt='' src={property} />
          <h2>Slone Square, London, UK</h2>
          <h3>£230 per night</h3>
        </div>
      </div>
      
    </div>
      
  
  )
}

export default page
