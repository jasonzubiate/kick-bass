import Image from "next/image";
import { Tutorial } from "@/types";

export default function TutorialSlide({ tutorial }: { tutorial: Tutorial }) {
  return (
    <div className="embla__slide">
      <div className="video__container">
        <Image
          src={tutorial.img}
          alt={tutorial.name}
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-col items-center gap-3 mt-8">
        <h3 className="text-2xl">{tutorial.name}</h3>
        <h4 className="text-xl text-grunge50">
          &#123; {tutorial.coach} &#125;
        </h4>
      </div>
    </div>
  );
}
