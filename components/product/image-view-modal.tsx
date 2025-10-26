import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { CgClose, CgZoomIn, CgZoomOut } from "react-icons/cg";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";
import { RiFullscreenExitLine, RiFullscreenLine } from "react-icons/ri";

interface IViewModalProps {
  currentIndex: number;
  images: string[] | StaticImageData[];
  gotoSlide: (index: "next" | "prev" | number) => void;
  onCloseModal?: () => void;
  elementRef?: React.RefObject<HTMLDivElement>;
}

function ImageViewModal({
  currentIndex,
  images,
  gotoSlide,
  onCloseModal,
  elementRef,
}: IViewModalProps) {
  const [zoom, setZoom] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    function toggleFullscreen() {
      if (fullscreen) {
        elementRef?.current?.requestFullscreen();
        return;
      } else if (document.fullscreenElement === elementRef?.current) {
        document.exitFullscreen();
      }
    }
    toggleFullscreen();
  }, [elementRef, fullscreen]);

  return (
    <div
      className="flex flex-col gap-4 p-4 pt-2 w-full h-full"
      onClick={(e) => e.stopPropagation()}
    >
      {/*Setion--1: All controls */}
      <div className="flex items-center justify-between">
        <h4 className="text-white text-base">
          {currentIndex + 1}/{images.length}
        </h4>
        <div className="flex items-center gap-x-7 text-gray-400">
          <button
            className="hover:text-gray-100 duration-200 text-lg"
            onClick={() => setFullscreen((curr) => !curr)}
          >
            {!fullscreen ? <RiFullscreenLine /> : <RiFullscreenExitLine />}
          </button>
          <button
            className="hover:text-gray-100 duration-200 text-lg"
            onClick={() => setZoom((curr) => !curr)}
          >
            {!zoom ? <CgZoomIn /> : <CgZoomOut />}
          </button>
          <button
            className="hover:text-gray-100 duration-200 text-lg"
            onClick={onCloseModal}
          >
            <CgClose />
          </button>
        </div>
      </div>

      {/*Section--2: Main image view */}
      <div className="relative flex flex-1 items-center gap-4 duration-300">
        {/*Selected Image */}
        <div className="flex-1 h-full overflow-hidden">
          <div
            className="flex h-full duration-300"
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          >
            {images.map((image, i) => (
              <div key={i} className="relative flex-[1_0_100%] h-full">
                <Image
                  src={image}
                  alt={`prod-${i}`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  placeholder="blur"
                ></Image>
              </div>
            ))}
          </div>
        </div>

        {/*control buttons */}
        <button
          onClick={() => gotoSlide("prev")}
          className={`h-10 w-8 flex-center absolute left-0 top-1/2 -translate-y-1/2 duration-200 text-gray-400  text-xl bg-black/30 md:bg-transparent disabled:cursor-not-allowed ${
            currentIndex !== 0 && "hover:text-gray-100"
          }`}
          disabled={currentIndex === 0}
        >
          <PiCaretLeftBold />
        </button>
        <button
          onClick={() => gotoSlide("next")}
          className={`h-10 w-8 flex-center absolute right-0  top-1/2 -translate-y-1/2 duration-200 text-gray-400  text-xl bg-black/30 md:bg-transparent disabled:cursor-not-allowed ${
            currentIndex + 1 < images.length && "hover:text-gray-100"
          }`}
          disabled={currentIndex + 1 === images.length}
        >
          <PiCaretRightBold className="group-hover:scale-115 " />
        </button>
      </div>

      {/*Setion--3: Other views */}
      <div className={`flex justify-center gap-4 ${zoom ? "hidden" : ""}`}>
        {images.map((image, i) => (
          <div
            className={`relative border-[3px] ${
              currentIndex === i ? "border-purple-500" : "border-white"
            } rounded-lg w-24 overflow-hidden aspect-[1.1] duration-300 cursor-pointer `}
            key={i}
            onClick={() => gotoSlide(i)}
          >
            <Image
              src={image}
              alt={`prod-${i}`}
              fill
              sizes="180px"
              className="object-cover"
              placeholder="blur"
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageViewModal;
