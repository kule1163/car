import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Benefits from "./pages/Benefits/Benefits";
import Cars from "./pages/Cars/Cars";
import Inroduction from "./pages/Cars/Inroduction";
import ContactUs from "./pages/contact/ContactUs";
import Footer from "./components/Footer";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setNavbarScroll, setNavToggle } from "./features/car/carSlice";

function App() {
  const dispatch = useAppDispatch();

  const scroll = useCallback(() => {
    console.log(window.scrollY);
    if (window.scrollY >= 70) {
      dispatch(setNavbarScroll(true));
    } else {
      dispatch(setNavbarScroll(false));
    }
  }, [window.scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, [scroll]);

  return (
    <div className="relative flex min-h-screen max-w-[100vw] flex-col overflow-hidden   bg-main ">
      <Navbar />
      <Home />
      <div className="flex flex-col child:py-10">
        <AboutUs />
        <Benefits />
        <Cars />
        <Inroduction />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
