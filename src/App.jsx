import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MagneticCursor from "./components/MagneticCursor";
import Work from "./components/Work";

export default function App() {
  return (
    <>
      <MagneticCursor />
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}