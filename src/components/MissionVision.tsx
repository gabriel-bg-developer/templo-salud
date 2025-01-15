import Image from "next/image";
const MissionVision = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative h-[300px]">
              <Image 
                src="/images/mision.webp" 
                fill
                alt="Mission" 
                className="object-cover"
                priority
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Misión</h3>
              <p className="text-gray-600">
                Nuestra misión es brindar atención médica de alta calidad a nuestros pacientes, con un equipo de profesionales capacitados y comprometidos con la excelencia.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative h-[300px]">
              <Image 
                src="/images/vision.webp" 
                fill
                alt="Vision" 
                className="object-cover"
                priority
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Visión</h3>
              <p className="text-gray-600">
                Ser un referente en la atención médica, conocidos por nuestra excelencia, nuestra dedicación y nuestra capacidad para brindar soluciones innovadoras y personalizadas.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MissionVision;