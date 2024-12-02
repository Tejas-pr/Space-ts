import logoo from "../assets/logoo.png";
import { motion } from "motion/react";
const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      id="navbar"
      className="flex items-center justify-between bg-black/80 py-2 md:py-4"
    >
      <div className="flex items-center ml-10 md:ml-20 hover:cursor-pointer">
        <img src={logoo} alt="logo" className="w-12" />
      </div>
      <div className="text-white">
        <ul className="hidden md:flex gap-x-10">
          <li className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-700 hover:after:w-full">
            <a href="#about">About Us</a>
          </li>
          <li className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-700 hover:after:w-full">
            <a href="#technology">Technology</a>
          </li>
          <li className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-700 hover:after:w-full">
            <a href="#galaxy">Galaxy</a>
          </li>
          <li className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-700 hover:after:w-full">
            <a href="#satellite">Satellite</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center mr-10 md:mr-20">
        <button className="text-white border-2 px-5 py-2 rounded-md">
          Login
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
