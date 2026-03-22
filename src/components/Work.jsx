// import { motion } from "framer-motion";
// import { FaStar } from "react-icons/fa";

// // const clients = [
// //   "/logos/nike.png",
// //   "/logos/apple.png",
// //   "/logos/google.png",
// //   "/logos/netflix.png",
// //   "/logos/amazon.png",
// //   "/logos/spotify.png",
// // ];
// const clients = [
//   { logo: "/logos/nike.png", url: "https://www.nike.com" },
//   { logo: "/logos/apple.png", url: "https://www.apple.com" },
//   { logo: "/logos/google.png", url: "https://www.google.com" },
//   { logo: "/logos/netflix.png", url: "https://www.netflix.com" },
//   { logo: "/logos/amazon.png", url: "https://www.amazon.com" },
//   { logo: "/logos/spotify.png", url: "https://www.spotify.com" },
// ];
// const testimonials = [
//   {
//     name: "Rahul Mehta",
//     text: "Hype Ritual completely transformed our online presence. The ROI was incredible.",
//   },
//   {
//     name: "Sarah Johnson",
//     text: "Professional execution, strong branding, and powerful SEO growth.",
//   },
//   {
//     name: "Arjun Patel",
//     text: "Our leads doubled within months. Highly recommended team.",
//   },
// ];

// export default function Work() {
//   return (
//     <section id="work" className="py-24 bg-[#0F172A] text-white overflow-hidden">

//       {/* ================= CLIENTS ================= */}
//       <div className="mb-32 relative">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           Our Clients
//         </h2>

//         {/* Fade Edges */}
//         <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0F172A] to-transparent z-10" />
//         <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0F172A] to-transparent z-10" />

//         <div className="overflow-hidden group">
//           <motion.div
//             className="flex items-center"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               repeat: Infinity,
//               duration: 20,
//               ease: "linear",
//             }}
//             whileHover={{ animationPlayState: "paused" }}
//           >
//             {/* {[...clients, ...clients].map((logo, index) => (
//               <img
//                 key={index}
//                 src={logo}
//                 alt="client logo"
//                 className="h-16 grayscale hover:grayscale-0 transition duration-500"
//               />
//             ))} */}
//     {[...clients, ...clients].map((client, index) => (
//   <a
//     key={index}
//     href={client.url}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex-shrink-0 flex items-center justify-center px-10"
//   >
//     <img
//       src={client.logo}
//       alt="client logo"
//       className="h-34 w-auto object-contain transition duration-300 hover:scale-110"
//     />
//   </a>
// ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* ================= TESTIMONIALS ================= */}
//       <div className="relative">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           What Our Clients Say
//         </h2>

//         {/* Fade Edges */}
//         <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0F172A] to-transparent z-10" />
//         <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0F172A] to-transparent z-10" />

//         <div className="overflow-hidden group">
//           <motion.div
//             className="flex gap-10"
//             animate={{ x: ["-50%", "0%"] }}
//             transition={{
//               repeat: Infinity,
//               duration: 25,
//               ease: "linear",
//             }}
//             whileHover={{ animationPlayState: "paused" }}
//           >
//             {[...testimonials, ...testimonials].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ rotateY: 8, rotateX: 4 }}
//                 className="min-w-[350px] bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl transition-transform duration-500"
//                 style={{ transformStyle: "preserve-3d" }}
//               >
//                 {/* Stars */}
//                 <div className="flex gap-1 mb-4 text-yellow-400">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar key={i} />
//                   ))}
//                 </div>

//                 <p className="text-gray-300 mb-6">
//                   "{item.text}"
//                 </p>

//                 <h4 className="font-semibold text-pink-400">
//                   — {item.name}
//                 </h4>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { FaStar } from "react-icons/fa";

const clients = [
  { logo: "/logos/nike.png", url: "https://www.nike.com" },
  { logo: "/logos/apple.png", url: "https://www.apple.com" },
  { logo: "/logos/google.png", url: "https://www.google.com" },
  { logo: "/logos/netflix.png", url: "https://www.netflix.com" },
  { logo: "/logos/amazon.png", url: "https://www.amazon.com" },
  { logo: "/logos/spotify.png", url: "https://www.spotify.com" },
];

const testimonials = [
  {
    name: "Rahul Mehta",
    text: "Hype Ritual completely transformed our online presence. The ROI was incredible.",
  },
  {
    name: "Sarah Johnson",
    text: "Professional execution, strong branding, and powerful SEO growth.",
  },
  {
    name: "Arjun Patel",
    text: "Our leads doubled within months. Highly recommended team.",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="py-24 bg-[#0F172A] text-white overflow-hidden"
    >

      {/* ================= CLIENTS ================= */}
      <div className="mb-32 relative">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Clients
        </h2>

        {/* Fade Edges */}
        <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0F172A] to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0F172A] to-transparent z-10" />

        <div className="overflow-hidden marquee-container">
          <div className="flex w-max animate-marquee-left">

            {/* First Set */}
            <div className="flex items-center">
              {clients.map((client, index) => (
                <a
                  key={`first-${index}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-16"
                >
                  <img
                    src={client.logo}
                    alt="client logo"
                    className="h-40 w-auto object-contain"
                  />
                </a>
              ))}
            </div>

            {/* Duplicate Set */}
            <div className="flex items-center">
              {clients.map((client, index) => (
                <a
                  key={`second-${index}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-16"
                >
                  <img
                    src={client.logo}
                    alt="client logo"
                    className="h-40 w-auto object-contain"
                  />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ================= TESTIMONIALS ================= */}
      <div className="relative">
        <h2 className="text-4xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>

        {/* Fade Edges */}
        <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0F172A] to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0F172A] to-transparent z-10" />

        <div className="overflow-hidden marquee-container">
          <div className="flex w-max animate-marquee-right gap-10">

            {/* First Set */}
            <div className="flex gap-10">
              {testimonials.map((item, index) => (
                <div
                  key={`first-${index}`}
                  className="min-w-[350px] flex-shrink-0 bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl"
                >
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6">
                    "{item.text}"
                  </p>

                  <h4 className="font-semibold text-pink-400">
                    — {item.name}
                  </h4>
                </div>
              ))}
            </div>

            {/* Duplicate Set */}
            <div className="flex gap-10">
              {testimonials.map((item, index) => (
                <div
                  key={`second-${index}`}
                  className="min-w-[350px] flex-shrink-0 bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl"
                >
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6">
                    "{item.text}"
                  </p>

                  <h4 className="font-semibold text-pink-400">
                    — {item.name}
                  </h4>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}