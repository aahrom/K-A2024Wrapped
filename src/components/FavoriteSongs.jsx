import { motion } from "framer-motion";

function FavoriteSongs() {
  const qrCodeUrl = "./images/spotifyplaylist.png"; // Ensure this path is correct
  const playlistLink = "https://open.spotify.com/playlist/1rWHhY0BWsiFcYpPrl5yoy?si=7d2cdc2060a44178"; // Your Spotify playlist URL

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white overflow-hidden p-8">
      {/* Title */}
      <h2 style={{ fontFamily: "Rubik, sans-serif" }} className="text-5xl font-extrabold mb-6">K+A 2024 Spotify Wrapped</h2>
      
      <p style={{ fontFamily: "Inter, sans-serif" }} className="text-xl mb-8">
        Scan the QR code or click below to enjoy our curated playlist!
      </p>

      {/* QR Code Card */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src={qrCodeUrl} 
          alt="Playlist QR Code" 
          className="w-64 h-64 object-contain mb-4"
        />
        <a
          href={playlistLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors"
        >
          Open Playlist
        </a>
      </motion.div>
    </div>
  );
}

export default FavoriteSongs;
