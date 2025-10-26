"use client";
import Shirt1 from "@/public/products/shirt1.jpg";
import Shirt2 from "@/public/products/shirt2.jpg";
import Shirt3 from "@/public/products/shirt3.jpg";
import Shirt4 from "@/public/products/shirt4.jpg";
import Shirt5 from "@/public/products/shirt5.jpg";
// import Shirt6 from "@/public/products/shirt6.jpg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TiZoomIn } from "react-icons/ti";
import Modal, { useModalContext } from "@/context/modal-context";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import ImageViewModal from "./image-view-modal";

const productImages = [Shirt1, Shirt2, Shirt3, Shirt4, Shirt5];
const MODAL_NAME = "view-product-images";

function ImageGallery() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0.5, y: 0.5 });
  const [currIndex, setCurrIndex] = useState(0);

  const { openName } = useModalContext();
  const isImageModalOpen = openName === MODAL_NAME;

  const productViewsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (isImageModalOpen) return;
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    if (isImageModalOpen) return;
    setIsZoomed(false);
  };

  //Reset zoom state when the modal opens ---
  useEffect(() => {
    if (isImageModalOpen) {
      setIsZoomed(false);
      setZoomPosition({ x: 0.5, y: 0.5 });
    }
  }, [isImageModalOpen]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isImageModalOpen || !isZoomed || !imageContainerRef.current) return;

    const { left, top, width, height } =
      imageContainerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;

    const zoomX = offsetX / width;
    const zoomY = offsetY / height;

    setZoomPosition({ x: zoomX, y: zoomY });
  };

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (isZoomed && imageContainerRef.current) {
  //     const { left, top, width, height } =
  //       imageContainerRef.current.getBoundingClientRect();
  //     const offsetX = e.clientX - left;
  //     const offsetY = e.clientY - top;

  //     const zoomX = offsetX / width;
  //     const zoomY = offsetY / height;

  //     setZoomPosition({ x: zoomX, y: zoomY });
  //   }
  // };

  function handleScrollRight() {
    productViewsRef.current?.scrollBy({
      left: 240,
      behavior: "smooth",
    });
  }

  function handleScrollLeft() {
    if (!productViewsRef.current) return;

    productViewsRef.current.scrollBy({
      left: -240,
      behavior: "smooth",
    });
  }

  function gotoSlide(index: "next" | "prev" | number) {
    if (index === "next") {
      if (currIndex >= productImages.length - 1) return;
      setCurrIndex((curr) => curr + 1);
    } else if (index === "prev") {
      if (currIndex <= 0) return;
      setCurrIndex((curr) => curr - 1);
    } else {
      setCurrIndex(index);
    }
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      {/*main view */}
      <div
        ref={imageContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative aspect-square rounded-lg  overflow-hidden ${
          isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
        }`}
      >
        {/*larger-view btn */}
        <Modal.Open opens={MODAL_NAME}>
          <button className="absolute top-2 right-2 z-10  cursor-pointer text-white transition-all duration-200 ease-in-out rounded-full size-7 grid place-items-center bg-black/50 group shadow-md">
            {/* <TbCameraSearch /> */}
            <TiZoomIn
              size={19}
              className="group-hover:scale-125 duration-200"
            />
          </button>
        </Modal.Open>
        <Modal.Window name={MODAL_NAME} type="product">
          <ImageViewModal
            currentIndex={currIndex}
            images={productImages}
            gotoSlide={gotoSlide}
          />
        </Modal.Window>

        {/*main image */}
        <Image
          src={productImages[currIndex] || Shirt1}
          alt="main-view"
          fill
          sizes="800px"
          className="object-cover transition-all duration-300"
          placeholder="blur"
          style={{
            transform: isZoomed && !isImageModalOpen ? "scale(2)" : "scale(1)",
            transformOrigin: `${zoomPosition.x * 100}%  ${
              zoomPosition.y * 100
            }%`,
          }}
        />
        {/* <ProductImage propertyName="main-image" imageUrl={Shirt1} /> */}
      </div>

      {/*other views */}
      <div className="relative w-full">
        <div
          className={`flex overflow-x-auto snap-x snap-mandatory gap-2 scrollbar-hide ${
            productImages.length < 5 && "justify-center"
          }`}
          ref={productViewsRef}
        >
          {/* {Array.from({ length: 6 }).map((_, i) => ( */}
          {productImages.map((image, i) => (
            <div
              className={`relative aspect-square min-w-22  cursor-pointer duration-200 rounded-lg snap-always snap-start  border-[3px] ${
                currIndex === i
                  ? "border-purple-500"
                  : "border-transparent hover:border-purple-300"
              }`}
              key={i}
              onClick={() => setCurrIndex(i)}
            >
              <Image
                src={image}
                alt={`prod-${i}`}
                fill
                sizes="96px"
                placeholder="blur"
                className="object-cover rounded-[5px]"
              />
            </div>
          ))}
          {/* ))} */}

          {/*control buttons */}
          {productImages.length > 4 && (
            <>
              <button
                onClick={handleScrollLeft}
                className="rounded-full size-7 flex-center bg-white shadow-md absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 hover:shadow-lg duration-200 group"
              >
                <PiCaretLeftBold className="group-hover:scale-115 " />
              </button>
              <button
                onClick={handleScrollRight}
                className="rounded-full size-7 flex-center bg-white shadow-md absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 hover:shadow-lg duration-200 group"
              >
                <PiCaretRightBold className="group-hover:scale-115 " />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
