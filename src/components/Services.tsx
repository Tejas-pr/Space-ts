import { FaBroadcastTower, FaGlobe, FaRegMoon, FaRocket } from "react-icons/fa";
import { GiSatelliteCommunication } from "react-icons/gi";
import { MdSatellite } from "react-icons/md";
import wave2 from "../assets/wave2.gif";

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

const Services = () => {
  return (
    <div className="pt-4 pb-10 text-white bg-black relative z-50">
      <div className="min-h-[400px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative mt-10 z-10">
          {ServiceData.map((services, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 bg-sky-900/60 p-8 rounded-md w-full"
            >
              <div className="text-5xl">{services.icon}</div>
              <h1 className="text-2xl">{services.title}</h1>
              <p className="text-sm">{services.content}</p>
              <p className="text-sm px-12">{services.description}</p>
            </div>
          ))}
        </div>
        <img src={wave2} alt="wave" className="h-[200px] w-full object-cover mix-blend-screen -translate-y-20 relative z-[0]"/>
      </div>
    </div>
  );
};

export default Services;
