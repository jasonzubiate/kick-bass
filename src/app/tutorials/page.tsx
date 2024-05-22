import TutorialCarousel from "../components/feature/TutorialCarousel";

export default function Page() {
  return (
    <section id="tutorials" className="flex flex-col gap-24 mt-36">
      <p className="px-8 default__p">
        Dive into weekly tutorials, track breakdowns,
        <br /> and expert tips designed to elevate your
        <br />
        EDM production skills.
      </p>
      <div className="w-full flex justify-center">
        <TutorialCarousel />
      </div>
    </section>
  );
}
