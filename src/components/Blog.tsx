import Image from "next/image";
const Blog = () => {
    const articles = [
      { title: "Cómo prevenir el cáncer de mama", description: "La detecci n temprana es clave para curar esta enfermedad.", image: "/images/especialidad1.webp" },
      { title: "Síndrome de fatiga crónica", description: "Un trastorno que afecta a la energ a y la productividad.", image: "/images/especialidad2.webp" },
    ];
  
    return (
      <section className="py-16 bg-gray-100 text-gray-800">
        <h2 className="text-center text-2xl font-bold mb-6">Blog</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded">
              <div className="h-40 mb-4 relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover h-[300px] w-[300px]"
                />
              </div>
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p className="mt-2">{article.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Blog;