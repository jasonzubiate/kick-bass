"use client";
import { useState } from "react";
import { faqs } from "@/data";
import FAQCard from "../ui/FAQCard";

export default function QuestionsList() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleFAQClick = (index: number) => {
    setOpenFAQ((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <ul className="flex flex-col gap-4 w-full lg:w-1/2">
      {faqs.map((faq, index) => (
        <FAQCard
          key={index}
          faq={faq}
          isOpen={index === openFAQ}
          onClick={() => handleFAQClick(index)}
        />
      ))}
    </ul>
  );
}
