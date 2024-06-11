import Image from "next/image";
import property from "../images/property.jpg"
import property2 from "../images/property2.jpg"
import Link from "next/link";

export default function Home() {
  return (
    <div className='mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-5 mr-5'>
      <div className=' mb-2 rounded-2xl flex'>
        <div>
          <Link href="/slonesqflat">
          <Image className='rounded-2xl aspect-square object-cover' alt=""  src={property} />
          <h2 className="text-sm">Slone Square, London, UK</h2>
          <h3 className="font-bold">£230 per night</h3>
          </Link>
        </div>
      </div>
      <div className=' mb-2 rounded-2xl flex'>
        <div>
          <Image className='rounded-2xl aspect-square object-cover' alt="" src={property2} />
          <h2 className="text-sm">Slone Square, London, UK</h2>
          <h3 className="font-bold">£230 per night</h3>
        </div>
      </div>
      <div className=' mb-2 rounded-2xl flex'>
        <div>
          <Image className='rounded-2xl aspect-square object-cover' alt=""  src={property} />
          <h2 className="text-sm">Slone Square, London, UK</h2>
          <h3 className="font-bold">£230 per night</h3>
        </div>
      </div>
    </div>
      
  );
}
