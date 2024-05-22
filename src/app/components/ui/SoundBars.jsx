"use client";
import { useEffect, useRef } from "react";

export default function SoundBars() {
  const barsRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      barsRef.current.forEach((bar, index) => {
        const height = Math.random() * 100;
        bar.style.height = `${height}%`;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (barsRef.current[index] = el)}
          className="bg-hardLime w-[4%] rounded-t-sm mx-1 transition-all duration-200"
        ></div>
      ))}
    </div>
  );
}
