// components/Navbar.js

import Image from 'next/image'
import Link from 'next/link'
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <nav className="bg-white p-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
         <div className="flex-shrink-0 sm:order-2">
            <Image src={logo} alt="Logo" width={140} height={140} className="" />
          </div>
        </Link>
        {/* User Login */}
        <div className="order-2  sm:block">
          <Link href="/">
            <div className="text-black">List Your Property</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
