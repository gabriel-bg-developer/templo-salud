import Image from "next/image";

const Carousel = () => {
    const specialties = [
      { title: "Traumatología", description: "Mejora tu calidad de vida recuperando la movilidad y superando lesiones y enfermedades del aparato locomotor", image: "/images/especialidad1.webp" },
      { title: "Neumología", description: "Recupera tu respiración y tu bienestar, diagnosticando y tratando enfermedades del aparato respiratorio", image: "/images/especialidad2.webp" },
      { title: "Pediatria", description: "Protege la salud y el bienestar de tus hijos, contando con nosotros para su crecimiento y desarrollo", image: "/images/especialidad3.webp" },
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        {/* <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">Especialidades Médicas</h2> */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((item, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <div className="relative aspect-[16/9] w-full mb-4 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={`Imagen de ${item.title}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Carousel;