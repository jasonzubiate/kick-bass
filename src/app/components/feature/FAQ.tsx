import { TbArrowUpRight } from "react-icons/tb";
import QuestionsList from "./QuestionsList";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="flex flex-col lg:flex-row w-full gap-16 lg:gap-0 lg:justify-between px-4 lg:px-8"
    >
      <div className="flex flex-col gap-6 items-start">
        <h3 className="default__p">Frequently Asked Questions</h3>
        <h2 className="text-5xl">
          We&apos;ve got the answers
          <br />
          you need.
        </h2>
        <button className="default__button">
          <span className="default__p">Get in touch</span>
          <TbArrowUpRight className="button__icon" />
        </button>
      </div>
      <QuestionsList />
    </section>
  );
}
