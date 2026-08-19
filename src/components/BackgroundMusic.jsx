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
    const playAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    };

    // Immediate attempt on mount
    playAudio();

    // Unlock on any touch/scroll/click event on mobile & desktop
    const events = ["click", "touchstart", "touchend", "pointerdown", "scroll", "keydown"];
    const handleUserInteraction = () => {
      playAudio();
    };

    events.forEach((evt) => window.addEventListener(evt, handleUserInteraction, { passive: true }));

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, handleUserInteraction));
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <audio ref={audioRef} src={musicSrc} loop preload="auto" />
      <button
        onClick={togglePlay}
        className={`flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-xl transition-all duration-300 border border-white/50 ${
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
