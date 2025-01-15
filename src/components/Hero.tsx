import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-[600px]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero.jpg"
          alt="Hospital background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Contenido superpuesto */}
      <div className="relative h-full flex flex-col items-start justify-center text-left px-12">
        <h1 className="text-7xl font-extrabold text-white  mb-4" >
          Templo Salud
        </h1>
        <p className="text-2xl text-white mb-8 max-w-2xl">
          Tu bienestar es nuestra prioridad. Encuentra los mejores especialistas para tu salud.
        </p>
        <button className="px-8 py-3 bgblue-600 text-white text-lg rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-lg">
          Agenda tu consulta
        </button>
      </div>
    </section>
  );
};

export default Hero;