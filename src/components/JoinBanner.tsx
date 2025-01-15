import Image from "next/image";

const JoinBanner = () => {
    return (
      <section className="relative bg-[#F7F7F7] py-40 px-8">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/join-banner.webp"
            alt="Join Banner background"
            fill
            className="object-cover opacity-45"
            priority
          />
        </div>

        {/* Contenido superpuesto */}
        <div className="relative z-10 container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#1A6163]">
            Únete a nuestra red de profesionales
          </h2>
          <p className="text-lg mb-6 text-gray-800">
            Forma parte de la comunidad médica más grande del país
          </p>
          <button className="px-6 py-3 bg-[#EF4D63] text-white hover:text-gray-800 rounded-lg hover:bg-[#BBDDD5] transition-colors duration-300">
            Registrarme ahora
          </button>
        </div>
      </section>
    );
  };
  
  export default JoinBanner;