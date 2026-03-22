// import { motion } from "framer-motion";
// import { FaBullhorn, FaSearch, FaLaptopCode } from "react-icons/fa";

// const services = [
//   { icon: <FaBullhorn />, title: "Social Media Management" },
//   { icon: <FaSearch />, title: "SEO Services" },
//   { icon: <FaLaptopCode />, title: "Website Design & Development" },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="py-24 px-6">
//       <h2 className="text-4xl font-bold text-center mb-16">
//         Our Services
//       </h2>

//       <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05, rotateY: 10 }}
//             className="backdrop-blur-xl bg-white/10 p-10 rounded-3xl shadow-2xl"
//           >
//             <div className="text-4xl text-pink-400 mb-6">
//               {service.icon}
//             </div>
//             <h3 className="text-xl font-semibold">
//               {service.title}
//             </h3>
//           </motion.div>
          
//         ))}
//       </div>
//     </section>
//   );
// }




import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBullhorn, FaSearch, FaLaptopCode, FaCheck } from "react-icons/fa";

const services = [
  {
    id: "social",
    icon: <FaBullhorn />,
    title: "Social Media Management",
    description:
      "Grow your brand with strategic content, engagement, and analytics-driven campaigns.",
    packages: [
      {
        name: "Silver",
        features: ["8 Posts / Month", "Basic Analytics", "1 Platform Management"],
      },
      {
        name: "Gold",
        features: ["16 Posts / Month", "Advanced Analytics", "2 Platforms Management", "Ad Campaign Setup"],
      },
      {
        name: "Platinum",
        features: ["Daily Posts", "Full Analytics Report", "All Platforms", "Ad Campaign + Optimization"],
      },
    ],
  },
  {
    id: "seo",
    icon: <FaSearch />,
    title: "SEO Services",
    description:
      "Rank higher on Google with technical optimization, content strategy, and backlinks.",
    packages: [
      {
        name: "Silver",
        features: ["Keyword Research", "On-Page SEO", "Monthly Report"],
      },
      {
        name: "Gold",
        features: ["Everything in Silver", "Technical SEO", "Backlink Building"],
      },
      {
        name: "Platinum",
        features: ["Everything in Gold", "Content Strategy", "Competitor Analysis"],
      },
    ],
  },
  {
    id: "web",
    icon: <FaLaptopCode />,
    title: "Website Design & Development",
    description:
      "Modern, responsive, and high-converting websites built for performance.",
    packages: [
      {
        name: "Silver",
        features: ["5 Pages Website", "Responsive Design", "Basic SEO"],
      },
      {
        name: "Gold",
        features: ["10 Pages Website", "CMS Integration", "Speed Optimization"],
      },
      {
        name: "Platinum",
        features: ["Custom Web App", "Full SEO", "Performance + Security Optimization"],
      },
    ],
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="services" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        Our Services
      </h2>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(service)}
            className={`cursor-pointer backdrop-blur-xl bg-white/10 p-10 rounded-3xl shadow-2xl transition-all duration-300 ${
              selected?.id === service.id
                ? "ring-2 ring-pink-500"
                : ""
            }`}
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

      {/* Packages Section */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-center mb-4">
              {selected.title}
            </h3>

            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              {selected.description}
            </p>

            <div className="grid md:grid-cols-3 gap-10">
              {selected.packages.map((pkg, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/10"
                >
                  <h4 className="text-2xl font-bold mb-6 text-pink-400">
                    {pkg.name} Package
                  </h4>

                  <ul className="space-y-4">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <FaCheck className="text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                   onClick={() => {
                              const phoneNumber = "919900673304"; // replace with your number (no +, no spaces)

                              const message = `Hi Hype Ritual, I'm interested in the ${selected.title} - ${pkg.name} Package. Please share more details.`;

                              const encodedMessage = encodeURIComponent(message);

                              window.open(
                                `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
                                "_blank"
                              );
                          }}
                            className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-all"
                          >
  Get Started with {pkg.name}
</button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}