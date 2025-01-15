import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="block">
              <Image
                src="/images/templo-salud-logo-2.webp"
                alt="Templo Salud Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Enlaces */}
          <nav className="flex gap-6 mb-4 md:mb-0">
            <Link className="text-gray-600 hover:text-gray-900" href="/">
              Inicio
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="/">
              Servicios
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="/">
              Contacto
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            {new Date().getFullYear()} Templo Salud. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer