import { v4 as uuidV4 } from "uuid";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";

interface BoxItem {
  id: string;
  item: string;
}

interface BoxItemLink extends BoxItem {
  url: string;
}

const whereAreWe: BoxItem[] = [
  { id: uuidV4(), item: "Georgia" },
  { id: uuidV4(), item: "Texas" },
  { id: uuidV4(), item: "California" },
  { id: uuidV4(), item: "Virginia" },
  { id: uuidV4(), item: "Colorado" },
  { id: uuidV4(), item: "Pennsylvania" },
  { id: uuidV4(), item: "Massachusetts" },
];

const quickLinks: BoxItemLink[] = [
  { id: uuidV4(), item: "About US", url: "aboutus" },
  { id: uuidV4(), item: "our services", url: "services" },
  { id: uuidV4(), item: "contact us", url: "contactus" },
];

const emailUs: BoxItem[] = [{ id: uuidV4(), item: "contact@primecar.com" }];

const callUs: BoxItem[] = [
  { id: uuidV4(), item: "+999-9-999-9999" },
  { id: uuidV4(), item: " +111-11-111-1111" },
];

const footerBoxHeader = "body body-1 capitalize";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 pb-20 m-container bg-secondary">
      <div className="flex flex-col gap-8 ">
        <div className="w-full mx-auto text-center heading heading-1 ">
          Prime Car
        </div>
        <div className="flex flex-wrap items-start justify-between w-full lg:justify-around lg:gap-x-14 lg:gap-y-7">
          <div className="footer-box">
            <div className={`${footerBoxHeader}`}>where are we</div>
            {whereAreWe.map((item) => (
              <div key={item.id} className="footer-text">
                {item.item}
              </div>
            ))}
          </div>
          <div className="footer-box">
            <div className={`${footerBoxHeader}`}>quick links</div>
            {quickLinks.map((item) => (
              <div key={item.id} className="footer-text">
                {item.item}
              </div>
            ))}
          </div>
          <div className="footer-box">
            <div className={`${footerBoxHeader}`}>email us</div>
            {emailUs.map((item) => (
              <div key={item.id} className="footer-text">
                {item.item}
              </div>
            ))}
          </div>
          <div className="footer-box">
            <div className={`${footerBoxHeader}`}>call us</div>
            {callUs.map((item) => (
              <div key={item.id} className="footer-text">
                {item.item}
              </div>
            ))}
            <div className="flex gap-3 mt-3 text-2xl child:text-white">
              <AiOutlineFacebook />
              <FiTwitter />
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-y-3 gap-x-20 md:flex-wrap md:justify-around">
        <div className="flex gap-5">
          <div className="footer-text">Privacy policy</div>
          <div className="footer-text">Term and conditions </div>
        </div>
        <div className="footer-text ">
          Copyright &copy; 2022 Prime Car. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
