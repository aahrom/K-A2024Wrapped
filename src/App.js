import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import IntroPage from "./components/IntroPage";
import FavoriteSongs from "./components/FavoriteSongs";
import WrappedHighlights from "./components/WrappedHighlights";
import './App.css';

function App() {
  const pages = [
    { component: <IntroPage />, color: "bg-gradient-to-r from-purple-400 to-blue-600" },
    { component: <WrappedHighlights />, color: "bg-white" },
    { component: <FavoriteSongs />, color: "bg-gradient-to-r from-green-400 to-blue-500" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // Adjust the slide based on scroll position
  const handleScroll = (e) => {
    const scrollLeft = containerRef.current.scrollLeft;
    const slideWidth = window.innerWidth; // Each slide is 100vw
    const index = Math.round(scrollLeft / slideWidth);
    if (index !== currentIndex) setCurrentIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [currentIndex]);

  // Smooth scrolling on dot click
  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const slideWidth = window.innerWidth;
    container.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  return (
    <div
      ref={containerRef}
      className="overflow-x-scroll h-screen flex snap-x snap-mandatory"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Main Slides */}
      {pages.map((page, index) => (
        <motion.div
          key={index}
          className={`snap-center flex-shrink-0 w-screen h-screen ${page.color}`}
        >
          {page.component}
        </motion.div>
      ))}

      {/* Dot Navigation (Hide when WrappedHighlights is active) */}
      {currentIndex !== 1 && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
          {pages.map((_, index) => (
            <div
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
