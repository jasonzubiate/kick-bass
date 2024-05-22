"use client";
import { useLayoutEffect, useRef } from "react";
import { FAQ } from "@/types";
import { TbArrowUpRight } from "react-icons/tb";
import { gsap } from "gsap";

type FAQCardProps = {
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
};

export default function FAQCard({ faq, isOpen, onClick }: FAQCardProps) {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: "auto", duration: 0.3 });
      gsap.to(buttonRef.current, { rotation: 180, duration: 0.3 });
    } else {
      gsap.to(contentRef.current, { height: 0, duration: 0.3 });
      gsap.to(buttonRef.current, { rotation: 0, duration: 0.3 });
    }
  }, [isOpen]);

  return (
    <li
      onClick={onClick}
      className="rounded-lg overflow-hidden cursor-pointer bg-grunge90 p-5"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl">{faq.question}</h3>
        <button
          ref={buttonRef}
          className="flex items-center justify-center rounded-full bg-grunge80 p-3 transition-transform"
        >
          <TbArrowUpRight className="text-hardLime h-5 w-5" />
        </button>
      </div>
      <p
        ref={contentRef}
        className="text-lg text-grunge50 max-h-0 overflow-hidden"
        style={{ height: 0 }} // Start with closed state
      >
        {faq.answer}
      </p>
    </li>
  );
}
