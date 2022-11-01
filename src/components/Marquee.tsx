import { useState } from "react";
import { CarImage } from "../pages/Cars/Cars";

interface Props {
  images: CarImage[];
  rotate: boolean;
}

const Marquee = ({ images, rotate }: Props) => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const ImageBox = (images: CarImage[]) => {
    return (
      <>
        {images.map((item) => (
          <div
            onMouseEnter={() => setCurrentImage(item.id)}
            onMouseLeave={() => setCurrentImage(null)}
            key={item.id}
            className="group relative h-full w-[30vw] md:w-[50vw]"
          >
            <img className="h-full w-full object-cover" src={item.src} />
            <div
              className={`absolute top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center gap-3 bg-black bg-opacity-60 ${
                currentImage === item.id ? "blok" : "hidden"
              }`}
            >
              <div className="body body-1">Tesla Model 3</div>
              <div className="body body-2">
                Disruptive, avant-garde, futuristic, innovative.
              </div>
              <button className="primary-button">contact</button>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div
      className={`group relative flex w-[150vw] md:w-[250vw] ${
        rotate && "rotate-180"
      } h-40 !overflow-hidden text-white `}
    >
      <div
        className={`group-hover:pause flex animate-marquee ${
          rotate && "child:rotate-180"
        } h-full items-center`}
      >
        {ImageBox(images)}
      </div>
      <div
        className={`absolute top-0 left-0 flex ${
          rotate && "child:rotate-180"
        } group-hover:pause h-full animate-marquee2 items-center`}
      >
        {ImageBox(images)}
      </div>
    </div>
  );
};

export default Marquee;
