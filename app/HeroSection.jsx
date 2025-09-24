
const HeroSection = () => {
  return (
    <section className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="text-white block mb-2 animate-fade-in">Fight</span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent block mb-2 animate-fade-in-delay-1">
              fake news
            </span>
            <span className="text-white block animate-fade-in-delay-2">
              with AI
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-3">
          CheckMate helps you instantly verify claims and detect misinformation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-4">
          <span
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <span className="relative z-10">Try a Fact-Check</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </span>

          <button
            type="button"
            className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg font-medium text-white hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
