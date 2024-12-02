const Hero = () => {
  return (
    <>
      <div className="text-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 h-screen">
          <div className="flex flex-col items-start justify-center ml-5 md:ml-10">
            <h1 className="text-4xl md:text-6xl font-bold">
              Exploring Beyond Horizons
            </h1>
            <p className="text-sm mt-5">
              Discover the cutting-edge innovations in satellite
              technology.Unlock the mysteries of distant galaxies and celestial
              bodies.Empowering communication and navigation worldwide.
              Pioneering the future of space exploration and discovery.
            </p>
            <button className="py-2 px-4 rounded-md mt-5 font-normal text-md bg-blue-600 hover:bg-blue-500 transition-all duration-300 hover:border-0">
              Learn More
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <div className="absolute -bottom-32 md:-bottom-20 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20%] sm:h-[50px] md:[60px]"></div>
    </>
  );
};

export default Hero;
