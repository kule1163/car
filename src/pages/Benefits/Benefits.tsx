import PrimaryHeaderBox from "../../components/framer/PrimaryHeaderBox";
import { motion } from "framer-motion";
import { benefitBoxes } from "./veriables";
import useWindowSize from "../../hooks/useWindowSize";

const CornerMotif = ({ className }: { className: string }) => {
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
      <div className="-z-10 h-[280px] w-[280px] rounded-full border-2  border-benefits-blue">
        <div className="-z-10 h-[300px] w-[300px] rounded-full border-2  border-benefits-green"></div>
      </div>
    </motion.div>
  );
};

const Benefits = () => {
  const size = useWindowSize();

  return (
    <div
      id="benefits"
      className="relative flex flex-col overflow-hidden m-container bg-secondary"
    >
      <CornerMotif className="absolute -top-[130px] -left-[130px] lg:hidden" />
      <CornerMotif className="absolute -bottom-[130px] -right-[130px] rotate-[180deg] lg:hidden" />
      <div className="flex flex-col items-center gap-20 lg:text-center">
        <PrimaryHeaderBox>
          <div className="flex flex-col items-center gap-6">
            <div className="heading heading-1 w-11/12 text-center lg:!w-full">
              All the benefits you will get when you shop with us
            </div>
            <div className="body body-1 !font-medium">
              Take advantage of everything you can have now by buying your new
              car at Prime Car
            </div>
          </div>
        </PrimaryHeaderBox>
        <motion.div className="flex flex-wrap items-center justify-center gap-8">
          {benefitBoxes.map((box, i) => (
            <motion.div
              key={box.id}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition:
                  size.width && size.width > 816
                    ? { delay: i * 0.5 }
                    : undefined,
              }}
              exit={{ opacity: 0, transition: { delay: 0 } }}
              viewport={{ once: true }}
              style={{ backgroundColor: box.bgColor }}
              className="relative flex flex-col items-center px-10 mt-10 text-center h-60 w-80 rounded-3xl bg-benefits-green pt-14"
            >
              <div className="absolute -top-16">
                <img src={box.img} className="object-contain w-32 h-w-32" />
              </div>

              <div className="flex flex-col gap-5">
                <div className="body body-1">{box.title}</div>
                <div className="body body-2">{box.content}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
