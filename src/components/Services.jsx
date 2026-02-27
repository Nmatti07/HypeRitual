import { motion } from "framer-motion";
import { FaBullhorn, FaSearch, FaLaptopCode } from "react-icons/fa";

const services = [
  { icon: <FaBullhorn />, title: "Social Media Management" },
  { icon: <FaSearch />, title: "SEO Services" },
  { icon: <FaLaptopCode />, title: "Website Design & Development" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className="backdrop-blur-xl bg-white/10 p-10 rounded-3xl shadow-2xl"
          >
            <div className="text-4xl text-pink-400 mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}