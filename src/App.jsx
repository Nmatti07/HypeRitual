import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MagneticCursor from "./components/MagneticCursor";

export default function App() {
  return (
    <>
      <MagneticCursor />
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}