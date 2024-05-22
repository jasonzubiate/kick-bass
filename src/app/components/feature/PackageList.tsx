import PackageCard from "../ui/PackageCard";
import { packages } from "@/data";

export default function PackageList() {
  // TODO: Fetch packages from API

  return (
    <ul
      id="packages"
      className="flex justify-center w-full gap-4 max-w-screen-2xl"
    >
      {packages.map((pkg) => (
        <li key={pkg.tier}>
          <PackageCard pkg={pkg} />
        </li>
      ))}
    </ul>
  );
}
