const Frame = ({ image, isVideo, text, onNext }) => {
  const isVideoContent =
    isVideo ||
    (typeof image === "string" &&
      (image.endsWith(".mp4") || image.includes(".mp4")));

  return (
    <div className="relative flex-1 flex items-center justify-center px-4 sm:px-10 py-6 sm:py-16 overflow-hidden">

      {/* soft decorative background */}
      <div className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-pink-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-purple-300 rounded-full blur-3xl opacity-40"></div>

      {/* main layout */}
      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 md:gap-20 items-center">

        {/* LEFT : MEDIA FRAME */}
        <div className="flex justify-center">
          <div className="w-full max-w-[440px] h-[320px] xs:h-[380px] sm:h-[480px] md:h-[560px] bg-white/90 backdrop-blur-xl rounded-[2rem] sm:rounded-[3rem] shadow-2xl p-4 sm:p-6 flex items-center justify-center overflow-hidden">
            {isVideoContent ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="auto"
                className="w-full h-full object-cover rounded-[1.5rem] sm:rounded-[2.5rem]"
              >
                <source src={image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={image}
                alt="memory"
                className="w-full h-full object-contain rounded-[1.5rem] sm:rounded-[2.5rem]"
              />
            )}
          </div>
        </div>

        {/* RIGHT : TEXT CARD */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-12 shadow-2xl text-center md:text-left">
          <p className="text-xl sm:text-3xl md:text-4xl font-medium text-gray-700 leading-relaxed mb-6 sm:mb-12 whitespace-pre-line">
            {text}
          </p>

          <button
            onClick={onNext}
            className="w-full sm:w-auto px-10 sm:px-14 py-3.5 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-xl sm:text-2xl font-medium shadow-lg hover:scale-105 transition-all duration-300"
          >
            Next 💖
          </button>
        </div>

      </div>
    </div>
  );
};

export default Frame;
