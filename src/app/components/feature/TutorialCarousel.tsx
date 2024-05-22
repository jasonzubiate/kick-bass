"use client";
import useEmblaCarousel from "embla-carousel-react";
import { tutorialSlides } from "@/data";
import TutorialSlide from "../ui/TutorialSlide";
import { useCallback } from "react";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";

export default function TutorialCarousel() {
  const tutorials = tutorialSlides;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {tutorials.map((tutorial, index) => (
            <TutorialSlide tutorial={tutorial} key={index} />
          ))}
        </div>
      </div>
      <div className="embla__buttons">
        <button className="embla__prev" onClick={scrollPrev}>
          <TbArrowLeft className="w-8 h-8" />
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <TbArrowRight className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
