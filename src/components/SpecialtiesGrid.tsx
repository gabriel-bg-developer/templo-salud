import Image from "next/image";

const specialties = [
    { name: "Cardiología", image: "/images/Icons/cardiologia.webp" },
    { name: "Dermatología", image: "/images/Icons/dermatologia.webp" },
    { name: "Odontología", image: "/images/Icons/odontologia.webp" },
    { name: "Ginecología", image: "/images/Icons/ginecologia.webp" },
    { name: "Psiquiatría", image: "/images/Icons/psiquiatria.webp" },
    { name: "Medicina General", image: "/images/Icons/medicina-general.webp" },
    { name: "Traumatología", image: "/images/Icons/traumatologia.webp" },
    { name: "Enfermería", image: "/images/Icons/enfermeria.webp" },
  ];
  
  const SpecialtiesGrid = () => {
    return (
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1A6163] px-4">
            Encuentra al médico ideal para ti en un solo lugar
          </h2>
          <div className="flex justify-end mb-4 px-4">
            <button className="px-4 py-2 bg-[#1A6163] text-[#BBDDD5] rounded hover:bg-[#BBDDD5] hover:text-gray-800 transition-colors duration-300">
              Filtros
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4 md:px-0">
            {specialties.map((specialty, index) => (
              <div key={index} className="text-center p-2 md:p-4 rounded-lg cursor-pointer hover:bg-white group transition-all duration-300">
                <div className="relative overflow-hidden rounded-full h-24 w-24 md:h-40 md:w-40 mx-auto mb-4">
                  <Image
                    src={specialty.image}
                    alt={specialty.name}
                    width={160}
                    height={160}
                    className="group-hover:opacity-75 hover:bg-[#BBDDD5] transition-all duration-300"
                  />
                </div>
                <h3 className="font-bold text-[#1A6163] group-hover:text-gray-800 text-sm md:text-base">{specialty.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SpecialtiesGrid;