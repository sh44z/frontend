import Image from 'next/image'
import React from 'react'
import ssf1 from "../(images)/ssfi/ssf1.jpg"
import ssf2 from "../(images)/ssfi/ssf2.jpg"
import ss3 from "../(images)/ssfi/ss3.jpg"
import BookingWidget from "../../../components/BookingWidget"

const page = () => {
  return (
    <div className="mt-4 -mx-8 px-8 pt-8">
        <h1 className='text-2xl'>Beautiful Sloane Square Apartment</h1>
        <a className='my-2 block font-semibold underline' target='_blank' href={"https://www.google.com/maps/place/Sloane+Square,+London/@51.4927684,-0.1570174,17z/data=!3m1!4b1!4m6!3m5!1s0x4876051614d622e1:0x7918c355ffd357f5!8m2!3d51.4927684!4d-0.1570174!16zL20vMDJmODk2?entry=ttu"}>Sloane Square, London, UK</a><br/>
        <div className='grid gap-2 grid-cols-3 grid-rows-2 mb-4'>
            <div className="col-span-2 row-span-2">
                <Image 
                    src={ssf1}
                    width={1000}
                    height={600}
                    alt='sloane sq'
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <Image 
                    src={ssf2}
                    width={500}
                    height={300}
                    alt='sloane sq'
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <Image 
                    src={ss3}
                    width={500}
                    height={300}
                    alt='sloane sq'
                    className="w-full h-full object-cover"
                />
            </div>
    </div>
        <div className='mb-5'>
          <h2 className='font-bold text-2xl mb-2'>Description</h2>
          <p className='text-l'>
            About this space
              In the heart of Constable Country, on the Essex Way, nestled amongst farmers fields and woodland you will find The Willows.

              A perfect balance of rustic and contemporary, The Willows provides a rurual get away with all the modern comforts. WIFI, Smart TV's, air con, jacuzzi bath, private outdoor hot tub and plenty of parking.
              It is positioned 5 minutes from an A12 link, 10 minutes from Colchester town and less than an hour from London.
          </p>
        </div>
        <div>
          <BookingWidget />
        </div>
    </div>
  )
}

export default page
