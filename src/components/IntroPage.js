import { motion } from "framer-motion";
import { useEffect } from "react";

function IntroPage({ onStart }) {
  useEffect(() => {
    // Optional sound on load:
    // const audio = new Audio('/sounds/soft_chime.mp3');
    // audio.play().catch(() => {});
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-blue-600 text-white">
      {/* Animated Background Circle 1 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-white opacity-20"
        initial={{ scale: 0.8, x: -200, y: -200 }}
        animate={{ 
          scale: [1, 1.2, 1], 
          rotate: 360, 
          x: [0, 50, 0], 
          y: [-100, -50, -100] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ zIndex: 0 }}
      />

      {/* Animated Background Circle 2 */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-pink-300 opacity-20"
        initial={{ scale: 0.8, x: 200, y: 200 }}
        animate={{ 
          scale: [1, 1.2, 1], 
          rotate: -360, 
          x: [0, -50, 0], 
          y: [100, 50, 100] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ fontFamily: "Montserrat, sans-serif", zIndex: 10 }}
      >
        Karreya's 2024 Wrapped
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl mt-4 max-w-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        style={{ fontFamily: "Montserrat, sans-serif", zIndex: 10 }}
      >
        A little rewind of what we both got up to this year
      </motion.p>

      {/* "Swipe to Start" Indicator */}
      <motion.div
        className="absolute bottom-24 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p className="text-sm md:text-base font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Swipe to Start
        </p>
        <motion.div
          className="text-2xl"
          initial={{ x: 0 }}
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          style={{ fontFamily: "'Fredoka One', sans-serif" }}
        >
          ➜
        </motion.div>
      </motion.div>
    </div>
  );
}

export default IntroPage;
