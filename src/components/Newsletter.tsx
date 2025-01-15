const Newsletter = () => {
    return (
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
          <form className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded w-full md:w-auto text-black"
            />
            <button className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-200">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Newsletter;
  