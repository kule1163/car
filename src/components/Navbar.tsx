import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setNavToggle } from "../features/car/carSlice";
import PrimaryButton from "./framer/PrimaryButton";
import { motion } from "framer-motion";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const { navbarScroll, navToggle } = useAppSelector((item) => item.car);
  const dispatch = useAppDispatch();

  const menuRef = useRef<HTMLDivElement>(null);
  const menuHeight = menuRef.current?.getBoundingClientRect().height;

  return (
    <div
      className={`fixed top-0 z-50 flex h-[70px] w-full items-center justify-between p-6 backdrop-blur-3xl ${
        navbarScroll
          ? "bg-[#2E2E2E]"
          : "child: bg-white all-child:!border-main all-child:text-main all-child:after:bg-main"
      }`}
    >
      <div className="absolute left-0 w-full h-full bg-black bg-opacity-10"></div>
      <div className="heading heading-2">Prime Car</div>
      <div
        onClick={() => dispatch(setNavToggle(!navToggle))}
        className={`z-50 hidden cursor-pointer flex-col  gap-2 child:h-[2px] child:w-7 child:bg-white child:duration-500 nav:flex ${
          navbarScroll ? "child:bg-white" : "child:bg-main"
        }`}
      >
        <span className={`${navToggle && "origin-[0%_0%] rotate-45 "}`}></span>
        <span className={`${navToggle && "opacity-0"}`}></span>
        <span
          className={`${navToggle && " origin-[0%_100%] -rotate-45"}`}
        ></span>
      </div>

      <div className="flex nav:hidden">
        <MenuItems menuRef={menuRef} />
      </div>
      <motion.div
        style={{
          height: navToggle ? (menuHeight ? menuHeight + 30 : 0) : 0,
        }}
        className="hidden items-center justify-center overflow-hidden bg-[#2E2E2E] duration-1000 all-child:!text-white all-child:after:!bg-white nav:absolute nav:left-0 nav:top-full nav:flex nav:w-full nav:flex-col"
      >
        <MenuItems menuRef={menuRef} />
      </motion.div>
      <a href="#contact" className="z-50 flex nav:hidden">
        <PrimaryButton>
          <span>Contact Us</span>
        </PrimaryButton>
      </a>
    </div>
  );
};

export default Navbar;
