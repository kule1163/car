import HomeBg from "../../assets/home-bg.png";
import PrimaryButton from "../../components/framer/PrimaryButton";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  return (
    <div
      id="home"
      style={{ backgroundImage: `url(${HomeBg})`, boxSizing: "border-box" }}
      className="relative h-[calc(100vh-3px)] w-full bg-cover text-white"
    >
      <div className="absolute w-full h-full bg-black bg-opacity-40"></div>
      <div className="absolute top-32 right-20 flex flex-col items-end gap-5 text-right md:!w-[100vw] md:px-3 lg:top-1/2 lg:left-1/2 lg:w-8/12 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:items-center lg:text-center">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-end gap-5 lg:items-center lg:px-5"
        >
          <div className="heading heading-1 w-7/12 lg:!w-full">
            More economy, same speed
          </div>
          <div className="body body-1 w-[280px] !font-normal lg:w-full lg:text-center">
            The most beloved cars of the moment for those who want to ride in
            style without spending too much
          </div>
          <a href="#cars">
            <PrimaryButton>
              <span>Discover</span>
            </PrimaryButton>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
