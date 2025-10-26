import Trend from "@/assets/images/trends/trend.png";
// import Showcase from "@/assets/images/trends/showcase-trend.jpg";
import Image from "next/image";
import TrendOptions from "./trend-options";
import TextExpander from "../general/text-expander";
import ViewTrendModalButton from "./view-trend-modal-btn";
import TrendBackButton from "./trend-back-btn";
// import getStarted from "@/videos/trend-video.mp4";
// import Video from "next-video";

function SelectedTrendContent() {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_12%]">
      {/* bg-[linear-gradient(to_right, rgba(255,0,0,0), rgba(255,0,0,1))] */}
      {/*section--1 trend content */}
      <div className="relative">
        {/* <Video
          src={getStarted}
          autoplay
          muted
          loop
          playsInline
          // controls={false}
          className=""
        ></Video> */}
        <Image
          src={Trend}
          alt="trend"
          fill
          placeholder="blur"
          className="object-cover"
        />

        <div className="absolute top-3 left-2 md:hidden">
          <TrendBackButton />
        </div>

        {/* bg-linear-to-b from-black/0 to-black/30 */}
        <div className="absolute inset-0 z-1 overlay">
          {/*trend details */}
          <div className="absolute space-y-2 left-0 bottom-0  w-full p-3">
            <ViewTrendModalButton />

            <div className="flex items-center gap-2 text-white">
              <div className="bg-gray-500 size-9 rounded-full animate-pulse"></div>
              <p className="font-medium">Alex Osaze</p>
            </div>
            <div className="text-[10px] lg:text-xs text-white">
              <TextExpander>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                impedit, tempora ducimus recusandae possimus ullam cum
                asperiores illum quos accusamus.
              </TextExpander>
            </div>
          </div>
        </div>
      </div>
      {/*section --2 trend options */}
      <div className="lg:relative absolute right-0 h-full">
        <TrendOptions />
      </div>
    </div>
  );
}

export default SelectedTrendContent;
