import { useState, useEffect } from "react";
import Confetti from "react-confetti";

function ConfettiDelay({ width, height, delay = 1000, pieces = 150 }) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Start confetti after a short delay
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Once the delay expires, render Confetti (one-time burst, no recycle)
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

export default ConfettiDelay;
