import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A] text-white"
    >
      {/* Animated Gradient Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[160px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-pink-500 rounded-full blur-[160px] opacity-40 animate-pulse" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="text-center max-w-5xl px-6"
      >
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold leading-tight"
        >
          We Build Brands
          <span className="block bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            That Dominate Online
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-xl text-gray-300"
        >
          Social Media • SEO • PPC • Branding • Website Development
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col md:flex-row gap-6 justify-center"
        >
          <button className="relative px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 hover:scale-110 transition-all duration-300 overflow-hidden group">
            <span className="relative z-10">Get Free Consultation</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition" />
          </button>

          <button className="px-10 py-4 rounded-full border border-white/30 hover:bg-white hover:text-black transition-all duration-300">
            View Our Work
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}