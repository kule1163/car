import StarOne from "../../assets/star-1.png";
import StarTwo from "../../assets/star-2.png";
import InroductionImg from "../../assets/introduction.png";
import { BsFillPlayFill } from "react-icons/bs";
import PrimaryBox from "../../components/framer/PrimaryBox";
import { motion } from "framer-motion";

const Sticker = ({
  image,
  className,
}: {
  image: string;
  className: string;
}) => {
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      <img className="object-fit h-[20vw] w-full" src={image} />
    </motion.div>
  );
};

const Inroduction = () => {
  return (
    <div className="m-container relative flex w-full flex-col items-center justify-center gap-10 bg-secondary md:mb-[55vw]">
      <div className="z-10 flex w-full items-center justify-between lg:flex-col lg:gap-8 lg:text-center">
        <PrimaryBox direction="left">
          <div className="heading heading-1 w-[500px] lg:w-auto">
            Be amazed by the power
          </div>
        </PrimaryBox>
        <PrimaryBox direction="right">
          <div className="body body-1 w-[220px]">
            Speed and economy together in one place, use and abuse your car's
            potential.
          </div>
        </PrimaryBox>
      </div>
      <div className="relative z-10 h-[40vw] w-full md:absolute md:bottom-[-55vw] md:left-0 md:h-[45vw]">
        <img src={InroductionImg} className="object-fit h-full w-full" />
        <div className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-slate-500 bg-opacity-40">
          <BsFillPlayFill color="white" size={35} />
        </div>
      </div>
      <Sticker
        className="absolute left-0 top-[100px] lg:hidden"
        image={StarTwo}
      />
      <Sticker
        className="absolute right-0 bottom-[-100px] z-20 lg:hidden"
        image={StarOne}
      />
    </div>
  );
};

export default Inroduction;
