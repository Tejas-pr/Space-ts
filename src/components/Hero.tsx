import { motion } from "motion/react"
const Hero = () => {
  return (
    <>
      <div className="text-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 h-screen">
          <div className="flex flex-col items-start justify-center ml-5 md:ml-10">
            <motion.h1 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="text-4xl md:text-6xl font-bold">
              Exploring Beyond Horizons
            </motion.h1>
            <motion.p 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="text-sm mt-5">
              Discover the cutting-edge innovations in satellite
              technology.Unlock the mysteries of distant galaxies and celestial
              bodies.Empowering communication and navigation worldwide.
              Pioneering the future of space exploration and discovery.
            </motion.p>
            <motion.button 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="py-2 px-4 rounded-md mt-5 font-normal text-md bg-blue-600 hover:bg-blue-500 transition-all duration-300 hover:border-0">
              Learn More
            </motion.button>
          </div>
          <div></div>
        </div>
      </div>
      <div className="absolute -bottom-32 md:-bottom-20 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20%] sm:h-[50px] md:[60px]"></div>
    </>
  );
};

export default Hero;
