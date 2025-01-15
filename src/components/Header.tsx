import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/templo-salud-logo-2.webp"
            alt="Templo Salud Logo"
            width={150}
            height={40}
          />
        </Link>
        <div className="flex items-center gap-8">
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
      </div>
    </header>
  );
};

export default Header;
