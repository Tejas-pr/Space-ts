const Hero = () => {
  return (
    <div className="text-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
        {/* Left Grid */}
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Exploring Beyond Horizons
          </h1>
          <p className="text-sm mt-5">
            Discover the cutting-edge innovations in satellite technology.Unlock
            the mysteries of distant galaxies and celestial bodies.Empowering
            communication and navigation worldwide. Pioneering the future of
            space exploration and discovery.
          </p>
          <button className="py-2 px-4 rounded-md mt-5 font-normal text-md bg-blue-600 hover:bg-blue-500 transition-all duration-300 hover:border-0">
            Learn More
          </button>
        </div>

        {/* Right Grid (Placeholder for content) */}
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
