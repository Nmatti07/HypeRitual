import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();

  // Scale logo slightly on scroll
  const scale = useTransform(scrollY, [0, 200], [1, 0.92]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo Section */}
        <motion.div
        //   style={{ scale }}
        //   whileHover={{ scale: 1.05 }}
        //   className="flex items-center gap-3 cursor-pointer group"
        // >
        //   {/* SVG Icon */}
        //   <svg
        //     width="36"
        //     height="36"
        //     viewBox="0 0 100 100"
        //     className="transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.7)]"
        //   >
        //     <defs>
        //       <linearGradient id="luxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        //         <stop offset="0%" stopColor="#6366f1" />
        //         <stop offset="50%" stopColor="#ec4899" />
        //         <stop offset="100%" stopColor="#8b5cf6" />
        //       </linearGradient>
        //     </defs>

        //     {/* Futuristic H shape */}
        //     <rect x="20" y="20" width="15" height="60" fill="url(#luxGradient)" rx="4"/>
        //     <rect x="65" y="20" width="15" height="60" fill="url(#luxGradient)" rx="4"/>
        //     <rect x="35" y="45" width="30" height="10" fill="url(#luxGradient)" rx="4"/>
        //   </svg>

        //   {/* Brand Text */}
        //   <h1 className="text-2xl font-extrabold tracking-wide 
        //                  bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 
        //                  bg-clip-text text-transparent 
        //                  transition-all duration-500 
        //                  group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
        //     HYPE RITUAL
        //   </h1>
        style={{ scale }}
  whileHover={{ scale: 1.05 }}
  className="flex items-center gap-3 cursor-pointer group"
>
  {/* <img
    src="/Hype_Ritual_HR_Animated.svg"
    alt="Hype Ritual Logo"
    className="w-12 h-12 transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]"
  /> */}

  <h1 className="text-2xl font-extrabold tracking-wide 
                 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 
                 bg-clip-text text-transparent 
                 transition-all duration-500 
                 group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
    HYPE RITUAL
  </h1>
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <a href="#services" className="hover:text-pink-400 transition">
            Services
          </a>
          <a href="#work" className="hover:text-pink-400 transition">
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