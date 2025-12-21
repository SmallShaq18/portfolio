import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

const techs = [
  { Icon: SiReact, color: "text-cyan-400", angle: 0 },
  { Icon: SiTailwindcss, color: "text-teal-400", angle: 60 },
  { Icon: SiNodedotjs, color: "text-green-400", angle: 120 },
  { Icon: SiMongodb, color: "text-green-500", angle: 180 },
  { Icon: SiTypescript, color: "text-blue-400", angle: 240 },
  { Icon: SiJavascript, color: "text-yellow-400", angle: 300 },
];

export default function TechOrb() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useTransform(mouseX, [-60, 60], [-10, 10]);
  const glowY = useTransform(mouseY, [-60, 60], [-10, 10]);

  useEffect(() => {
    const container = document.getElementById("tech-orb");
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      id="tech-orb"
      className="relative w-full h-[340px] flex items-center justify-center"
    >
      {/* Blended background glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-3xl
                   bg-gradient-to-tr from-teal-400/25 via-cyan-400/20 to-purple-500/20"
        style={{ x: glowX, y: glowY }}
      />

      {/* Orbit */}
      <motion.div>
        {techs.map(({ Icon, color, angle }) => (
          <motion.div
            key={angle}
            className={`absolute top-1/2 left-1/2 ${color} opacity-80`}
            style={{
              transform: `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`,
            }}
            whileHover={{
              //scale: 1.25,
              size: 32,
              opacity: 1,
              filter:
                "drop-shadow(0 0 14px rgba(45, 212, 191, 0.6))",
            }}
            initial={{ opacity: 0.75 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 14,
            }}
          >
            <Icon size={28} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
