import Image from "next/image";
import hatImg from "../../../public/img/Hat-Blue.png";
import mixImg from "../../../public/img/Fresh-Mix-Pink.png";
import PackageList from "../components/feature/PackageList";
import FeatureList from "../components/feature/FeatureList";
import FAQ from "../components/feature/FAQ";

export default function Page() {
  return (
    <section
      id="pricing"
      className="flex items-center flex-col gap-32 mt-80 px-4 lg:px-8"
    >
      <div className="flex w-full justify-center relative">
        {/* <Image
          src={hatImg}
          alt="Blue Hat"
          className="absolute w-64 h-48 -left-20 -rotate-[30deg] -top-12"
        /> */}

        <h1 className="uppercase">Join Kick & Bass</h1>

        {/* <Image
          src={mixImg}
          alt="Blue Hat"
          className="absolute w-48 h-64 -right-20 -top-40 rotate-45"
        /> */}
      </div>
      <PackageList />
      {/* <FeatureList/> */}
      <FAQ/>
    </section>
  );
}
