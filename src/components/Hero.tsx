export default function Hero() {
  return (
    <section className="bg-teal-500 text-white w-full">
      <div className="container mx-auto flex flex-col items-center py-16 sm:py-24 md:py-32 px-4">
        {/* Image Placeholder */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gray-200 rounded-xl w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]">
            <span className="flex items-center justify-center h-full text-gray-500 text-sm sm:text-base md:text-lg">
              Image Placeholder
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-lg px-4">
          <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
            Showcase your skills, projects, and accomplishments with a stunning portfolio that stands out.
          </p>
        </div>
      </div>
    </section>
  );
}



///////////////////////////// HERO Code with my aspect //////////////////////////


// export default function Hero() {
//   return (
//     <section className="bg-teal-500 w-full">
//       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-16 px-6 sm:px-10 lg:px-16">
//         {/* Text Content */}
//         <div className="text-center md:text-left max-w-xl">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//             Build Your Dream Portfolio
//           </h1>
//           <p className="text-lg sm:text-xl mb-8">
//             Showcase your skills, projects, and accomplishments with a stunning portfolio that stands out.
//           </p>
//           <button className="bg-white text-teal-500 px-6 py-3 rounded-lg font-medium hover:bg-teal-600 hover:text-white transition-all duration-300">
//             Get Started
//           </button>
//         </div>

//         {/* Image Placeholder */}
//         <div className="flex justify-center items-center mb-10 md:mb-0">
//           <div className="bg-gray-200 rounded-xl w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
//             <span className="flex items-center justify-center h-full text-gray-500 text-lg">
//               Image Placeholder
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
