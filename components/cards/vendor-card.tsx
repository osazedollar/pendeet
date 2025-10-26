import Button from "../../ui/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ICON } from "@/utils/icon-export";
import { RxCross2 } from "react-icons/rx";
// shrink-0 snap-start snap-always size-48 shadow-md ring ring-gray-300
export default function VendorCard({ className }: { className?: string }) {
  return (
    <article
      className={`relative p-2 rounded-2xl text-xs ring-1 ring-gray-200 shadow-md duration-200 justify-end flex flex-col items-center gap-3  ${className}`}
    >
      <button className="absolute top-2 right-2 text-gray-400 text-sm hover:scale-125 duration-200 transition-all cursor-pointer">
        <RxCross2 />
      </button>

      <div className="relative">
        <figure className="size-16 rounded-full bg-gray-100 relative overflow-hidden"></figure>
        {/* Online Status Indicator */}
        <span className="absolute bottom-0 right-0 h-4 w-4 bg-green-500 border-[2.5px] border-white rounded-full">
          <span className="animate-ping absolute h-full w-full rounded-full bg-green-400"></span>
        </span>
      </div>
      <figcaption className="font-semibold text-[#343434]">
        @Username
      </figcaption>
      <p className="inline-flex gap-1 items-center text-[#4B5563] font-medium">
        <Icon icon={ICON.FOLLOWERS} fontSize={15} />0 Followers
      </p>
      <Button
        size="full"
        config={{
          className: "rounded-xl!",
        }}
        variant="secondary"
      >
        Follow
      </Button>
    </article>
  );
}
