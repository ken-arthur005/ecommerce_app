
"use client"
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu} from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="mb-4 p-6 bg-gray-300">
      <div className="flex space-x-4 space-between">  
        <div className="space-x-4 flex">
         <Link href="/"> Logo </Link>
        </div>

        {/* Desktop nav bar */}
        <div className="hidden md:flex md:space-x-4 text-center">
          <Link href="/categories/fashion">Fashion</Link>
          <Link href="/categories/stationery">Stationery</Link>
          <Link href="/categories/tech">Tech</Link>
        </div>

        {/* Mobile nav bar */}  
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
        </button>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-300 p-4 flex flex-col space-y-4 transition duration-700 ease-in-out">
          
            <Link href="/categories/fashion">Fashion</Link>
            <Link href="/categories/stationery">Stationery</Link>
            <Link href="/categories/tech">Tech</Link>

          </div>
        )}

      </div>  
    </nav>
  )
}
