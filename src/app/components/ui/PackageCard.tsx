import { Package } from "@/types";
import { capitalizeFirstLetter } from "@/utils";

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className={`package__card border-2 border-${
        pkg.tier === "standard" ? "hardLime" : "grunge50"
      }`}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h3 className={`text-[32px] text-${pkg.color}`}>
            {capitalizeFirstLetter(pkg.tier)}
          </h3>
          <div className="flex gap-3 items-end">
            <h4
              className={`text-${pkg.color} text-[64px] leading-none font-semibold`}
            >
              ${pkg.price}
            </h4>
            <p className={`text-${pkg.color} text-xl uppercase`}>/ month</p>
          </div>
        </div>
        <p className="text-grunge50">{pkg.description}</p>
      </div>
      <div className="flex flex-col gap-8">
        <a
          href="https://www.launchpass.com/k-and-b-tech-house/k-and-b-tech-house/v3"
          target="_blank"
          className={`flex justify-center py-5 rounded-full w-full border-2 border-${pkg.color} hover:bg-${pkg.color} hover:text-codGray transition-colors duration-300 text-2xl`}
        >
          Join Kick & Bass
        </a>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <span>•</span>
            <p>Kick & Bass Community</p>
          </div>
          <div className="flex gap-2">
            <span>•</span>
            <p>Tutorial Library</p>
          </div>
          <div className="flex gap-2">
            <span>•</span>
            <p>Community Discounts</p>
          </div>
          <div className="flex gap-2">
            <span>•</span>
            <p>Coach Livestreams</p>
          </div>
          <div className="flex gap-2">
            <span>•</span>
            <p>Weekly Giveaways</p>
          </div>
        </div>
      </div>
    </div>
  );
}
