import sateliteImg from "../assets/satellite3.jpg";
import { motion } from "motion/react"
interface DATA {
  image: string;
  subTitle: string;
  title: string;
  description: string;
}

const data: DATA[] = [
  {
    image: sateliteImg,
    subTitle: "Our Mission",
    title: "Rapidscat",
    description:
      "RapidScat is a satellite instrument designed to measure ocean surface wind speeds and directions. It helps improve weather forecasting, storm tracking, and climate modeling by providing valuable wind data.",
  },
];

const Banner2 = () => {
  return (
    <>
      <section className="bg-black text-white pb-12 pt-12">
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="container">
          {data.map((items, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"
            >
              
              <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 pl-10">
                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="text-sky-800 uppercase"
                >
                  {items.subTitle}
                </p>
                <h1
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="uppercase text-5xl"
                >
                  {items.title}
                </h1>
                <p data-aos="fade-up" data-aos-delay="700">
                  {items.description}
                </p>
                <button
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
                >
                  View All
                </button>
              </div>
              <div data-aos="zoom-in">
                <img
                  src={items.image}
                  alt={items.title}
                  className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Banner2;
