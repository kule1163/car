import { v4 as uuidV4 } from "uuid";
import Map from "../../assets/map.png";
import Key from "../../assets/key.png";
import Calendar from "../../assets/calendar.png";

interface BenefitBox {
  id: string;
  title: string;
  content: string;
  img: string;
  bgColor: string;
  a: number;
}
export const benefitBoxes: BenefitBox[] = [
  {
    id: uuidV4(),
    title: "Several Headquarters",
    content:
      "You can find several Prime Car stores around the United States! Find the store closest to you now",
    img: Map,
    bgColor: "rgba(0, 221, 168, 0.5)",
    a: 0,
  },
  {
    id: uuidV4(),
    title: "Several Headquarters",
    content:
      "You can find several Prime Car stores around the United States! Find the store closest to you now",
    img: Calendar,
    bgColor: "rgba(207, 41, 41, 0.6)",
    a: 1,
  },
  {
    id: uuidV4(),
    title: "Several Headquarters",
    content:
      "You can find several Prime Car stores around the United States! Find the store closest to you now",
    img: Key,
    bgColor: "rgba(0, 88, 221, 0.6)",
    a: 2,
  },
];
