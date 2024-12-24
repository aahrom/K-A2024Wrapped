import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import LazyImage from "./LazyImage";

/** 
 * Delayed confetti component to ensure confetti is visible 
 * after a short wait (instead of disappearing too quickly). 
 */
function ConfettiDelay({ width, height, delay = 1000, pieces = 150 }) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={pieces}
          recycle={false}
        />
      )}
    </>
  );
}

/** The main highlight data array */
const highlights = [
  {
    title: "We Travelled to",
    bigHighlight: "6 different places",
    subtext: "even visiting a couple places multiple times...",
    background: "bg-gradient-to-r from-green-400 to-blue-500",
    type: "intro",
    confetti: true,
  },
  {
    title: "Here They Are!",
    bigHighlight: "Our Travel Destinations",
    subtext: "Denver(THRICE), Washington D.C., San Francisco, Chicago(TWICE)",
    background: "bg-gradient-to-r from-pink-500 to-yellow-500",
    type: "reveal",
    images: [
      "/images/april_ka.jpg",
      "/images/april_chinatown.jpg",
      "/images/chicago.jpg",
      "/images/april_portrait.jpg",
      "/images/april_sanfran.jpg",
      "/images/april_sfpose.jpg",
      "/images/denverka.jpg",
      "/images/fam_denver.jpg",
    ],
    confetti: false,
  },
  {
    title: "Together, We Tried...",
    bigHighlight: "20 new restaurants in Omaha",
    subtext:
      "Can you believe it? I think it's time we kickstart our foodie influencer era",
    background: "bg-gradient-to-r from-green-400 to-blue-500",
    type: "intro",
    confetti: true,
  },
  {
    title: "",
    bigHighlight: "We ATE",
    subtext:
      "Clio, Yoshitomo, bb.q Chicken, Koko Fried Chikkin, Hip Bao, El Basha, Hokkaido Ramen, The Churro Spot, Omaha Tap House, Dumpling Empire, Salted EDGE, La Poblanita, El Alteño Taqueria, El Rancho, V. Mertz, Dundee Dell, Dolomiti, Izzy's Pizza, Khao Niao, Thai Esarn",
    background: "bg-gradient-to-r from-pink-500 to-yellow-500",
    type: "reveal",
    images: [
      "/images/saltededge.jpg",
      "/images/bbq.jpg",
      "/images/birria.jpg",
      "/images/izzys.jpg",
      "/images/poblanita.jpg",
      "/images/yoshitomo2.jpg",
      "/images/clio.jpg",
      "/images/clio2.jpg",
    ],
    confetti: false,
  },
  {
    title: "We celebrated.. ",
    bigHighlight: "2 weddings this year!",
    subtext: "That's a lot of vows and even more celebratory drinks",
    background: "bg-gradient-to-r from-green-400 to-blue-500",
    type: "intro",
    confetti: true,
  },
  {
    title: "You're my plus one forever",
    bigHighlight: "We LOVE love",
    subtext: "Crunch + Milkboy, Kinzie + Riley",
    background: "bg-gradient-to-r from-pink-500 to-yellow-500",
    type: "reveal",
    images: [
      "/images/crunchmilkboy.jpg",
      "/images/weddingbells.jpg",
      "/images/kinzieriley.jpg",
      "/images/bridesmaids.jpg",
    ],
    confetti: false,
  },
  {
    title: "Let's forget about numbers for a second....",
    bigHighlight: "Here are some ICONIC moments",
    subtext: "",
    background: "bg-gradient-to-r from-green-400 to-blue-500",
    type: "intro",
    confetti: true,
  },
  {
    title: "What can't we do together?",
    bigHighlight: "Life is FULL of joy with you",
    subtext: "Did I mention we also moved in together? ICONIC",
    background: "bg-gradient-to-r from-pink-500 to-yellow-500",
    type: "reveal",
    images: [
      "/images/clown1.jpg",
      "/images/clown2.jpg",
      "/images/grandma.jpg",
      "/images/grandma1.jpg",
      "/images/grandmak.jpg",
      "/images/676.jpg",
      "/images/dresstoimpress.jpg",
      "/images/sailing.jpg",
      "/images/sailing2.jpg",
      "/images/clown3.jpg",
      "/images/moving.jpg",
    ],
    confetti: false,
  },
  {
    title: "Now, Back To Business...",
    bigHighlight: "We saw 4 concerts",
    subtext: "LET'S UP THESE ROOKIE NUMBERS IN 2025",
    background: "bg-gradient-to-r from-green-400 to-blue-500",
    type: "intro",
    confetti: true,
  },
  {
    title: "",
    bigHighlight: "Maybe we should invest in some earplugs?",
    subtext: "Kehlani, Peso Pluma, Faye Webster, Banda MS",
    background: "bg-gradient-to-r from-pink-500 to-yellow-500",
    type: "reveal",
    images: [
      "/images/denver.jpg",
      "/images/kehlani.jpg",
      "/images/kehlani2.jpg",
      "/images/banda.jpg",
      "/images/peso.jpg",
    ],
    confetti: false,
  },
  {
    title: "We Watched...",
    bigHighlight: "43 movies this year at AMC",
    subtext: "Long Live Nicole Kidman",
    background: "bg-gradient-to-r from-green-400 to-blue-500",
    type: "intro",
    confetti: true,
  },
  {
    title: "The average length of a movie is between 75 to 210 minutes long",
    bigHighlight: "We've spent around 4000~ minutes at the cinema",
    subtext: "Here were some of our favorites",
    background: "bg-gradient-to-r from-pink-500 to-yellow-500",
    type: "reveal",
    images: [
      "/images/dune.jpeg",
      "/images/kaguya.webp",
      "/images/monkeyman.jpg",
      "/images/furiosa.jpg",
      "/images/challengers.webp",
      "/images/weliveintime.jpg",
      "/images/aquietplace.jpg",
      "/images/anora.jpg",
    ],
    confetti: false,
  },
  {
    title: "",
    bigHighlight: "Let's revisit some of our most played songs this year",
    subtext: "Swipe right for a bonus round!",
    background: "bg-gradient-to-r from-green-400 to-blue-500",
    type: "intro",
    confetti: true,
  },
];

function WrappedHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = highlights[currentIndex];

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % highlights.length);
  };
  const goToPrev = () => {
    setCurrentIndex((currentIndex - 1 + highlights.length) % highlights.length);
  };

  /** For measuring window size (used by Confetti) */
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const containerRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center text-white"
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 ${current.background} transition-all duration-700 z-0`}
      ></div>

      {/* Kaleidoscope for intro slides */}
      {current.type === "intro" && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="relative w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            {/* Triangle 1 */}
            <motion.div
              className="absolute w-96 h-96"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                background:
                  "linear-gradient(to bottom right, rgba(255,0,150,0.4), rgba(0,255,255,0.3))",
                top: "20%",
                left: "35%",
              }}
              initial={{ scale: 0.8, rotate: 0, opacity: 0.2 }}
              animate={{ scale: 1.2, rotate: 360, opacity: 0.4 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            ></motion.div>

            {/* Triangle 2 */}
            <motion.div
              className="absolute w-72 h-72"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                background:
                  "linear-gradient(to bottom right, rgba(0,255,150,0.4), rgba(255,255,0,0.3))",
                top: "40%",
                left: "10%",
              }}
              initial={{ scale: 1, rotate: 0, opacity: 0.3 }}
              animate={{ scale: 0.9, rotate: -360, opacity: 0.5 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            ></motion.div>

            {/* Triangle 3 */}
            <motion.div
              className="absolute w-64 h-64"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                background:
                  "linear-gradient(to bottom right, rgba(255,255,255,0.5), rgba(255,0,255,0.3))",
                bottom: "15%",
                right: "20%",
              }}
              initial={{ scale: 1.2, rotate: 0, opacity: 0.2 }}
              animate={{ scale: 1.05, rotate: 360, opacity: 0.4 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </motion.div>
        </div>
      )}

      {/* Delayed Confetti on "confetti: true" slides */}
      {current.confetti && (
        <ConfettiDelay
          width={width}
          height={height}
          delay={1000} // 1-second delay
          pieces={150}
        />
      )}

      {/* Slide Content with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center text-center px-4 max-w-screen-md"
        >
          {/* Title */}
          <motion.h2
            className="text-2xl font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            {current.title}
          </motion.h2>

          {/* Big Highlight */}
          <motion.h1
            className="text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            {current.bigHighlight}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {current.subtext}
          </motion.p>

          {/* If reveal slide with images, display them using LazyImage */}
          {current.type === "reveal" && current.images && current.images.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {current.images.map((imgSrc, idx) => (
                <LazyImage
                  key={idx}
                  src={imgSrc}
                  alt={`${current.title} image ${idx + 1}`}
                  className="overflow-hidden rounded-lg shadow-lg w-40 h-40"
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Navigation (Arrows & Dots) */}
      <div className="absolute bottom-8 w-full flex justify-center items-center gap-4 z-10">
        <button
          onClick={goToPrev}
          className="text-white text-2xl font-bold hover:scale-110 transition-transform"
        >
          &larr;
        </button>
        <div className="flex gap-2">
          {highlights.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                i === currentIndex ? "bg-white" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={goToNext}
          className="text-white text-2xl font-bold hover:scale-110 transition-transform"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default WrappedHighlights;
