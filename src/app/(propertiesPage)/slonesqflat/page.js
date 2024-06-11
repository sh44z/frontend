import Image from 'next/image'
import React from 'react'
import ssf1 from "../(images)/ssfi/ssf1.jpg"


const page = () => {
  return (
    <div className="mt-4 -mx-8 px-8 pt-8">
        <h1 className='text-2xl'>Beautiful Slone Square Apartment</h1>
        <a className='my-2 block font-semibold underline' target='_blank' href={"https://www.google.com/maps/place/Sloane+Square,+London/@51.4927684,-0.1570174,17z/data=!3m1!4b1!4m6!3m5!1s0x4876051614d622e1:0x7918c355ffd357f5!8m2!3d51.4927684!4d-0.1570174!16zL20vMDJmODk2?entry=ttu"}>Sloane Square, London, UK</a><br/>
        <div className='mb-4'>
            <Image 
            src={ssf1}
            width={500}
            height={300}
            alt='ssq'
             />
        </div>

     
    </div>
  )
}

export default page
