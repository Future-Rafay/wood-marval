import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}
