// export default function ContactForm() {
//     return (
//       <section id="contact" className="bg-white py-24 px-8">
//        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center uppercase">Contact Me</h2>
//        <div className="w-28 h-1 bg-black mx-auto my-6" />
//         <form className="max-w-2xl mx-auto space-y-4">
//           <input
//             type="text"
//             placeholder="Full name"
//             className="w-full border rounded-lg px-4 py-2"
//           />
//           <input
//             type="email"
//             placeholder="Email address"
//             className="w-full border rounded-lg px-4 py-2"
//           />
//           <input
//             type="tel"
//             placeholder="Phone number"
//             className="w-full border rounded-lg px-4 py-2"
//           />
//           <textarea
//             placeholder="Message"
//             rows={4}
//             className="w-full border rounded-lg px-4 py-2"
//           ></textarea>
//           <button className="bg-teal-500 text-white rounded-lg px-4 py-2">
//             Send
//           </button>
//         </form>
//       </section>
//     );
//   }
  

export default function ContactForm() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-24 px-4 sm:px-8">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center uppercase">
        Contact Me
      </h2>
      <div className="w-16 sm:w-20 h-1 bg-black mx-auto my-4 sm:my-6" />

      {/* Form */}
      <form className="max-w-lg sm:max-w-2xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Full name"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        ></textarea>

        <button className="bg-teal-500 text-white rounded-lg px-6 py-3 sm:px-8 sm:py-4 text-lg font-semibold hover:bg-teal-600 transition duration-300">
          Send
        </button>
      </form>
    </section>
  );
}
