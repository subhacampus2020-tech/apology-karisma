import { useState, useEffect, useRef } from "react";
import songMusic from "../assets/song.mp3";

const BackgroundMusic = ({ musicSrc = songMusic }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play error:", err));
    }
  };

  useEffect(() => {
    // Attempt auto-play on first click/touch/keydown anywhere on page
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src={musicSrc} loop preload="auto" />
      <button
        onClick={togglePlay}
        className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold shadow-xl transition-all duration-300 border border-white/50 ${
          isPlaying
            ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white animate-pulse"
            : "bg-white/90 backdrop-blur-md text-gray-700 hover:bg-white hover:scale-105"
        }`}
      >
        <span>{isPlaying ? "🎵 Music On" : "🔇 Music Off"}</span>
      </button>
    </div>
  );
};

export default BackgroundMusic;
