import { useEffect } from "react";
import gsap from "gsap";

export default function MagneticCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className =
      "fixed w-8 h-8 bg-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference";
    document.body.appendChild(cursor);

    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2,
      });
    });
  }, []);

  return null;
}