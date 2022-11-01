import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
}

const PrimaryHeaderBox = ({ children }: Props) => {
  return (
    <motion.div
      className="flex"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default PrimaryHeaderBox;
