import CarOne from "../../assets/cars/car-1.png";
import { v4 as uuidV4 } from "uuid";
import Marquee from "../../components/Marquee";
import PrimaryHeaderBox from "../../components/framer/PrimaryHeaderBox";

export interface CarImage {
  id: string;
  src: string;
}

export const carImages: CarImage[] = [
  { id: uuidV4(), src: CarOne },
  { id: uuidV4(), src: CarOne },
  { id: uuidV4(), src: CarOne },
  { id: uuidV4(), src: CarOne },
  { id: uuidV4(), src: CarOne },
];

const Cars = () => {
  return (
    <div id="cars" className="flex flex-col gap-10">
      <PrimaryHeaderBox>
        <div className="flex flex-col gap-8 text-center m-container -5">
          <div className="heading heading-1">
            The cars that are hot right now
          </div>
          <div className="body body-1">
            Buy yours and be the most stylish in the neighborhood
          </div>
        </div>
      </PrimaryHeaderBox>
      <div className="flex flex-col">
        <Marquee rotate={false} images={carImages} />
        <Marquee rotate={true} images={carImages} />
      </div>
    </div>
  );
};

export default Cars;
