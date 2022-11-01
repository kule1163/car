import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  direction: "left" | "right";
}

const PrimaryBox = ({ children, direction }: Props) => {
  return (
    <motion.div
      className="flex"
      initial={{ opacity: 0, x: direction === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default PrimaryBox;
