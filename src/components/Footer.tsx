import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2e3f51]">
      {/* Main Footer Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center text-white py-10 px-4">
        {/* Location Section */}
        <div>
          <h4 className="font-bold text-lg mb-2 uppercase">Location</h4>
          <p className="text-sm">
            2231 John Daniel Drive, <br /> Clark, MO 65243
          </p>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="font-bold text-lg mb-2 uppercase">Around the Web</h4>
          <div className="flex justify-center space-x-4 mt-3">
            <div className="bg-transparent border-2 border-solid border-white rounded-full h-10 w-10 flex items-center justify-center">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-white hover:text-blue-500 transition-colors"
              >
                <FaFacebook size={24} />
              </Link>
            </div>
            <div className="bg-transparent border-2 border-solid border-white rounded-full h-10 w-10 flex items-center justify-center">
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-white hover:text-sky-400 transition-colors"
              >
                <FaTwitter size={24} />
              </Link>
            </div>
            <div className="bg-transparent border-2 border-solid border-white rounded-full h-10 w-10 flex items-center justify-center">
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-white hover:text-blue-700 transition-colors"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h4 className="font-bold text-lg mb-2 uppercase">About Freelancer</h4>
          <p className="text-sm">
            Freelance Graphic Artist and Web Designer. <br /> Delectus aliquis neque suscipit numquam.
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#1d242c] flex items-center justify-center text-white h-16 text-xs md:text-sm px-4">
        &copy; Copy Right,&nbsp;
        <Link
          href="https://my-portfolio-nine-pi-32.vercel.app/"
          className="hover:text-slate-600 hover:underline"
        >
          Abdul Rafay
        </Link>
        &nbsp;All Rights Reserved!
      </div>
    </footer>
  );
}
