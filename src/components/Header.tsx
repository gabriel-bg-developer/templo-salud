'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow-md relative w-full">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/templo-salud-logo-2.webp"
            alt="Templo Salud Logo"
            width={150}
            height={40}
          />
        </Link>
        
        {/* Botón hamburguesa para móvil */}
        <button 
          className="lg:hidden z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-[#1A6163] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[#1A6163] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[#1A6163]"></div>
        </button>

        {/* Menú para desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-gray-800 text-[#1A6163]">Home</Link></li>
              <li><Link href="/" className="hover:text-gray-800 text-[#1A6163]">About</Link></li>
              <li><Link href="/" className="hover:text-gray-800 text-[#1A6163]">Contact</Link></li>
            </ul>
          </nav>
          <Link 
            href="/" 
            className="px-4 py-2 border-2 border-[#BBDDD5] text-[#1A6163] rounded-full hover:bg-[#1A6163] hover:text-white transition-colors duration-300"
          >
            Soy médico
          </Link>
        </div>

        {/* Menú móvil */}
        <div className={`fixed inset-0 bg-white z-40 lg:hidden transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out max-w-full`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <nav>
              <ul className="flex flex-col space-y-6 text-center">
                <li>
                  <Link 
                    href="/" 
                    className="text-xl hover:text-gray-800 text-[#1A6163]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/" 
                    className="text-xl hover:text-gray-800 text-[#1A6163]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/" 
                    className="text-xl hover:text-gray-800 text-[#1A6163]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <Link 
              href="/" 
              className="px-6 py-3 border-2 border-[#BBDDD5] text-[#1A6163] rounded-full hover:bg-[#1A6163] hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Soy médico
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
