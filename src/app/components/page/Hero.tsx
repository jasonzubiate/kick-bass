"use client";
// components/Hero.tsx
import SoundBars from "../ui/SoundBars";
import { TbArrowUpRight } from "react-icons/tb";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col gap-12 mt-80 px-4 lg:px-8">
      <h1 className="flex flex-col overflow-hidden ">
        <span className="flex justify-between w-full">
          <span className="overflow-hidden">
            <span className="uppercase">Level Up</span>
          </span>
          <span className="overflow-hidden">
            <span className="uppercase">Your</span>
          </span>
        </span>
        <span className="flex justify-between w-full">
          <SoundBars />
          <span className="overflow-hidden">
            <span className="uppercase">Music Production</span>
          </span>
        </span>
      </h1>
      <div className="flex flex-col gap-16 md:gap-0 md:flex-row w-full justify-between items-start md:items-center">
        <div className="flex gap-2 items-center">
          <span className="hero__brackets">&#123;</span>
          <p className="hero__p">
            Elevate your house tracks with expert
            <br /> guidance from touring artists.
          </p>
          <span className="hero__brackets">&#125;</span>
        </div>
        <button className="flex justify-center w-full md:w-auto items-center gap-1 md:gap-2 px-5 md:px-6 py-3 ld:py-4 rounded-full border-2 text-demoSmoke hover:text-codGray border-hardLime hover:bg-hardLime transition-colors duration-300">
          <span className="hero__cta__text">Join Now</span>
          <TbArrowUpRight className="hero__cta__icon" />
        </button>
      </div>
    </section>
  );
}
