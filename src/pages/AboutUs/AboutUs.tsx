import AboutUsImage from "../../assets/about-us.png";
import PrimaryHeaderBox from "../../components/framer/PrimaryHeaderBox";
import PrimaryBox from "../../components/framer/PrimaryBox";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="m-container relative flex flex-col justify-center md:mb-[55vw]"
    >
      <PrimaryHeaderBox>
        <div className="mx-auto text-center heading heading-1 mb-7">
          About us
        </div>
      </PrimaryHeaderBox>

      <div className="flex items-center gap-14 lg:flex-col ">
        <div className="w-full py-2 my-auto lg:text-center">
          <PrimaryBox direction="left">
            <div className="body body-2 ">
              We pride ourselves at being able to get our customer into the car
              that they want, and more importantly, at they price they are
              looking for. We maintain outstanding customer service by listening
              to our customers and making sure that we meet their needs. Even if
              you don't buy from us, we will offer free advice on whe to look
              for when buying a used car or truck. Our philosophy is to
              accomodate you, the customer, with outstanding service while
              providing you the highest quality automobile needs at wholesale
              prices. We have a wide selection of vehicles and the expertise to
              deal with what you are looking for.
            </div>
          </PrimaryBox>
        </div>
        <PrimaryBox direction="right">
          <div className="border-2 md:absolute md:bottom-[-55vw] md:left-0 md:w-[100vw]">
            <img className="w-full h-full" src={AboutUsImage} />
          </div>
        </PrimaryBox>
      </div>
    </div>
  );
};

export default AboutUs;
