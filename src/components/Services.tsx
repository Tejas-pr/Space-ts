import { FaBroadcastTower, FaGlobe, FaRegMoon, FaRocket } from "react-icons/fa";
import { GiSatelliteCommunication } from "react-icons/gi";
import { MdSatellite } from "react-icons/md";
import wave2 from "../assets/wave2.gif";
import { motion } from "framer-motion";

export interface SERVICE {
  title: string;
  content: string;
  description: string;
  icon: JSX.Element;
  aosDelay: string;
}

const ServiceData: SERVICE[] = [
  {
    title: "Hubble Space Telescope",
    content: "300-1500km",
    description: "Used for observations, capturing stunning images of the universe.",
    icon: <FaRocket />,
    aosDelay: "300",
  },
  {
    title: "Geostationary Satellite",
    content: "35,786km",
    description: "Orbits Earth to provide constant communication and weather monitoring.",
    icon: <MdSatellite />,
    aosDelay: "400",
  },
  {
    title: "Navigation Satellite",
    content: "20,200km",
    description: "Enables GPS technology for accurate positioning and navigation worldwide.",
    icon: <FaGlobe />,
    aosDelay: "500",
  },
  {
    title: "Communication Satellite",
    content: "8,000-36,000km",
    description: "Facilitates television, internet, and radio broadcasting across the globe.",
    icon: <FaBroadcastTower />,
    aosDelay: "600",
  },
  {
    title: "Lunar Satellite",
    content: "384,400km",
    description: "Monitors the lunar surface and assists with space exploration efforts.",
    icon: <FaRegMoon />,
    aosDelay: "700",
  },
  {
    title: "Satellite Dish Array",
    content: "Various distances",
    description: "Collects data from multiple satellites to support global communications.",
    icon: <GiSatelliteCommunication />,
    aosDelay: "800",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <div className="pt-4 pb-10 p-8 text-white bg-black relative z-50">
      <div className="min-h-[400px]">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 relative mt-10 z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {ServiceData.map((services, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center gap-3 bg-sky-900/60 p-8 rounded-md w-full"
            >
              <div className="text-5xl">{services.icon}</div>
              <h1 className="text-1xl md:text-2xl">{services.title}</h1>
              <p className="text-sm">{services.content}</p>
              <p className="text-sm text-center">{services.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <img
          src={wave2}
          alt="wave"
          className="hidden md:flex md:h-[300px] w-full object-cover mix-blend-screen translate-y-3 relative z-[0]"
        />
      </div>
    </div>
  );
};

export default Services;
