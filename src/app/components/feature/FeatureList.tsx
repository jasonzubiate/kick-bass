export default function FeatureList() {
  return (
    <section
      id="package__features"
      className="flex flex-col items-center w-full gap-12 lg:gap-16 px-4 lg:px-8"
    >
      <p className="text-2xl">
        &123; Plans can be changed or cancelled at any time &125;
      </p>
      <table id="features-table">
        <thead>
          <tr className="table__row">
            <th className="py-8 border-b border-x-grunge50 w-3/12">Features</th>
            <th className="py-8 border-b border-x-grunge50 w-3/12">Basic</th>
            <th className="py-8 border-b border-x-grunge50 w-3/12">Standard</th>
            <th className="py-8 border-b border-x-grunge50 w-3/12">Premium</th>
          </tr>
        </thead>
      </table>
    </section>
  );
}
