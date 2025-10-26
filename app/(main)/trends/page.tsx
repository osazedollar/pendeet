import TrendsFilter from "@/components/trends/trends-filter";
import { trendsData } from "@/data";
import Image from "next/image";
import { CiPlay1 } from "react-icons/ci";

export const metadata = {
  title: "Trends",
  description: "View fashion trends.",
};

const trendFilters = [
  { label: "All", value: "all" },
  { label: "GRMW", value: "grmw" },
  { label: "Trends", value: "trends" },
  { label: "Female wears", value: "female-wears" },
  { label: "Male wears", value: "male-wears" },
];

function Trends({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const filter = searchParams?.trends ?? "all";

  const displayedTrends = trendsData;
  {
    /*
     if (filter === "all") displayedTrends = cabins;
  if (filter === "small")
    displayedTrends = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displayedTrends = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    displayedTrends = cabins.filter((cabin) => cabin.maxCapacity >= 8);
    */
  }

  return (
    <section className="w-9/10 mx-auto max-w-7xl pb-14 flex flex-col gap-14 min-h-dvh">
      <div className="space-y-8">
        <div className="flex justify-center">
          <TrendsFilter
            activeFilter={filter as string}
            filters={trendFilters}
          />
        </div>
        <div className="grid gap-3 lg:gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(min(192px,100%),1fr))]">
          {displayedTrends.map(({ image, views, text }, i) => (
            <div key={i} className="space-y-2">
              <div className="rounded-lg cursor-pointer relative h-60 group overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-black/30 rounded-lg z-1 translate-y-full group-hover:translate-y-0 duration-300" />
                <Image
                  src={image}
                  alt="trend-img"
                  fill
                  placeholder="blur"
                  className="object-cover rounded-lg"
                />
                {/*counts */}
                <p className="absolute left-4 bottom-4  text-white flex items-center gap-1 text-xs z-10">
                  {views} <CiPlay1 size={17} />
                </p>
              </div>
              <p className="font-medium leading-tight line-clamp-2">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trends;
