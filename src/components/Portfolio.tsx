export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-16 sm:py-24 px-4 sm:px-8">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center uppercase">
        Portfolio
      </h2>
      <div className="w-16 sm:w-20 h-1 bg-black mx-auto my-6 sm:my-8" />

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-[1280px] mx-auto">
        {/* Portfolio Images */}
        {['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg'].map((image, index) => (
          <div
            key={index}
            className="h-[200px] sm:h-[250px] lg:h-[300px] bg-gray-200 rounded-lg flex items-center justify-center shadow hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`/images/${image}`}
              alt={`Portfolio Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
