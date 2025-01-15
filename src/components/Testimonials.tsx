const Testimonials = () => {
    const testimonials = [
      { name: "Alex Turner", feedback: "¡Este producto es increíble! Lo amo." },
      { name: "Jamie Cook", feedback: "Ha traído mucho valor a mi vida." },
      { name: "Matt Helders", feedback: "Lo recomiendo al 100%." },
    ];
  
    return (
      <section className="py-16 bg-blue-600">
        <h2 className="text-center text-2xl font-bold mb-6">Testimonios</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded text-center text-gray-800">
              <p className="italic">"{item.feedback}"</p>
              <p className="mt-4 font-bold">{item.name}</p>
              <div className="flex justify-center mt-2">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  