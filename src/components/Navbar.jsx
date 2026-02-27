// import { useState } from "react";

// export default function Navbar() {
//   const [light, setLight] = useState(false);

//   const toggleTheme = () => {
//     document.documentElement.classList.toggle("light");
//     setLight(!light);
//   };

//   return (
// <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/30 border-b border-white/10">      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Hype Ritual</h1>

//         <div className="hidden md:flex gap-8">
//           <a href="#services" className="hover:text-pink-400">Services</a>
//           <a href="#contact" className="hover:text-pink-400">Contact</a>
//         </div>

//         <button
//           onClick={toggleTheme}
//           className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-sm"
//         >
//           {light ? "Dark" : "Light"}
//         </button>
//       </div>
//     </nav>
//   );
// }

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          HYPE RITUAL
        </h1>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <a href="#services" className="hover:text-pink-400 transition">
            Services
          </a>
          <a href="#contact" className="hover:text-pink-400 transition">
            Work
          </a>
          <a href="#contact" className="hover:text-pink-400 transition">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}