import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  children: JSX.Element;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton = ({ children, type }: Props) => {
  const buttonMotion = {
    hover: {
      scale: [1, 0.9, 1.1, 1],
      transition: {
        scale: {
          duration: 1,
          ease: "linear",
        },
      },
    },
  };

  const arrowMotion = {
    hover: {
      x: [0, 10, 0],
      scale: 1.3,
      transition: {
        x: {
          repeat: Infinity,
          duration: 0.5,
        },
      },
    },
  };

  return (
    <motion.button
      whileHover="hover"
      variants={buttonMotion}
      type={type ? type : "button"}
      className="color-white flex flex-row items-center justify-center gap-3 rounded-lg border-2 border-white py-[10px] px-[22px] font-bold capitalize text-white"
    >
      {children}
      <motion.div className="child:font-bold" variants={arrowMotion}>
        <BsArrowRightShort size={23} />
      </motion.div>
    </motion.button>
  );
};

export default PrimaryButton;
