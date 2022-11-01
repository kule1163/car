import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setNavToggle } from "../features/car/carSlice";

interface Props {
  menuRef: React.RefObject<HTMLDivElement> | null;
}

interface MenuItem {
  id: string;
  item: string;
}

const menuItems: MenuItem[] = [
  { id: uuidV4(), item: "home" },
  { id: uuidV4(), item: "about" },
  { id: uuidV4(), item: "benefits" },
  { id: uuidV4(), item: "cars" },
];

const MenuItems = ({ menuRef }: Props) => {
  const [currentItem, setCurrentItem] = useState<string>("home");
  const dispatch = useAppDispatch();

  return (
    <div
      ref={menuRef}
      className="flex items-center gap-x-10 nav:flex-col nav:gap-y-5 "
    >
      {menuItems.map((item) => (
        <a
          href={`#${item.item}`}
          onClick={() => {
            setCurrentItem(item.item);
            dispatch(setNavToggle(false));
          }}
          key={item.id}
          className={`body relative cursor-pointer list-none text-lg font-bold capitalize text-white after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-white after:transition-all ${
            item.item === currentItem ? "after:w-full" : "after:w-0"
          } after:duration-300 after:content-[''] hover:after:w-full`}
        >
          {item.item}
        </a>
      ))}
    </div>
  );
};

export default MenuItems;
