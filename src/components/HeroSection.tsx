import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white py-8 px-4 md:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-4 md:px-0">
        <div className="text-center lg:text-left ">
          <h1 className="text-4xl font-bold mb-4 text-[#1A6163]">Tu salud es nuestra prioridad.</h1>
          <p className="text-lg mb-6 text-[#9F7C6A]">
            En un mundo lleno de opciones, te ofrecemos una plataforma confiable donde podrás
            encontrar médicos especializados en diferentes áreas.
          </p>
          <button className="px-6 py-2 bg-[#1A6163] text-white hover:text-gray-800 rounded hover:bg-[#BBDDD5] transition-colors duration-300">
            Comienza aquí
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/images/online-doctor.jpg"
            alt="Hero Image"
            width={400}
            height={300}
            className="rounded "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
