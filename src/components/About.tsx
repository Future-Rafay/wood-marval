export default function About() {
  return (
    <section id="about" className="bg-teal-500 py-16 sm:py-24 px-4 sm:px-8 text-white">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center uppercase">
        About
      </h2>
      <div className="w-16 sm:w-20 h-1 bg-white mx-auto my-4 sm:my-6" />

      {/* Content */}
      <div className="flex flex-col sm:flex-row gap-6 max-w-4xl mx-auto mt-6">
        <p className="text-base sm:text-lg leading-relaxed">
          As a versatile freelance Graphic Artist, Web Designer, and Illustrator, I bring creativity to life...
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem accusantium nemo consequatur excepturi, in voluptas voluptatibus obcaecati quae quasi voluptatem quam sint adipisci suscipit? In iure est nesciunt qui sed!
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          As a versatile freelance Graphic Artist, Web Designer, and Illustrator, I bring creativity to life...
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem accusantium nemo consequatur excepturi, in voluptas voluptatibus obcaecati quae quasi voluptatem quam sint adipisci suscipit? In iure est nesciunt qui sed!
        </p>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center">
        <button className="bg-transparent border-4 border-white px-8 py-3 sm:px-10 sm:py-4 rounded-lg mt-8 text-base sm:text-lg font-semibold hover:bg-white hover:text-teal-500 transition-colors duration-300">
          Free Download
        </button>
      </div>
    </section>
  );
}
