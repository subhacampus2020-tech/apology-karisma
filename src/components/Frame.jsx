const Frame = ({ image, isVideo, text, onNext, currentStep, totalSteps }) => {
  const isVideoContent =
    isVideo ||
    (typeof image === "string" &&
      (image.endsWith(".mp4") || image.includes(".mp4")));

  return (
    <div className="relative flex-1 flex items-center justify-center px-4 sm:px-8 py-6 sm:py-12 overflow-hidden w-full">

      {/* soft decorative background */}
      <div className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-pink-300/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-purple-300/40 rounded-full blur-3xl pointer-events-none"></div>

      {/* main layout: symmetric 2-column grid on desktop, stacked on mobile */}
      <div className="relative max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-stretch justify-items-center">

        {/* LEFT : PHOTO / MEDIA WHITE CARD */}
        <div className="w-full max-w-md bg-white/95 backdrop-blur-2xl rounded-[2.5rem] sm:rounded-[3rem] p-5 sm:p-7 shadow-2xl border border-white/60 flex flex-col justify-between transition-all duration-300 hover:shadow-rose-200/50">
          
          {/* Card Header Badge */}
          {currentStep && (
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-rose-100/80 text-rose-600 rounded-full text-xs font-semibold tracking-wide uppercase">
                ✨ Special Memory #{currentStep}
              </span>
              {totalSteps && (
                <span className="text-xs font-semibold text-rose-400">
                  {currentStep} of {totalSteps}
                </span>
              )}
            </div>
          )}

          {/* Media Frame Container */}
          <div className="w-full flex-1 min-h-[260px] xs:min-h-[300px] sm:min-h-[360px] md:min-h-[400px] bg-slate-900/5 rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden flex items-center justify-center relative shadow-inner border border-gray-100">
            {isVideoContent ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="auto"
                className="w-full h-full object-cover rounded-[1.8rem] sm:rounded-[2.2rem]"
              >
                <source src={image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={image}
                alt="memory"
                className="w-full h-full object-cover rounded-[1.8rem] sm:rounded-[2.2rem] transition-transform duration-500 hover:scale-105"
              />
            )}
          </div>
        </div>

        {/* RIGHT : MATCHING WHITE TEXT CARD */}
        <div className="w-full max-w-md bg-white/95 backdrop-blur-2xl rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-10 shadow-2xl border border-white/60 flex flex-col justify-between text-center md:text-left transition-all duration-300">
          
          <div className="flex-1 flex flex-col justify-center my-auto">
            <div className="text-3xl sm:text-4xl mb-4 text-rose-500">💌</div>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed whitespace-pre-line">
              {text}
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-6 mt-auto">
            <button
              onClick={onNext}
              className="w-full py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white rounded-full text-lg sm:text-xl font-semibold shadow-lg hover:shadow-pink-300/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Next Memory</span>
              <span className="text-xl">💖</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Frame;
