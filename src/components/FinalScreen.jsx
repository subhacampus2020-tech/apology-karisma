// export default FinalScreen;
import { useEffect, useState } from "react";
import celebration from "../assets/images/celebration.png";

const FinalScreen = ({ onReplay }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center relative px-4 sm:px-10 py-10 sm:py-20">
      <div
        className={`bg-white/90 backdrop-blur-xl rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-14 shadow-2xl text-center max-w-2xl w-full transition-all duration-700 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Celebration Image */}
        <img
          src={celebration}
          alt="celebration"
          className="w-full max-h-[200px] sm:max-h-[300px] object-contain mb-6 sm:mb-10"
        />

        {/* Final Message */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-4 sm:mb-6 leading-relaxed">
          Mu janichi Bahhuuuttt Ragichi Mo Khushi Maa, Please Please Please Suna tw, Karisma! 💖
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-rose-600 mb-6 sm:mb-10">
          Abe tw tk Hasa Please, Mo Khushbu 🎉❤️
        </p>

        {/* Replay */}
        <button
          onClick={onReplay}
          className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg sm:text-xl font-medium shadow-lg hover:scale-105 transition-all duration-300"
        >
          Replay 🔁
        </button>
      </div>
    </div>
  );
};

export default FinalScreen;
