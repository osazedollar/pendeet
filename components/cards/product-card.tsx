"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/ui/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ICON } from "@/utils/icon-export";
import { formatCurrency } from "@/utils/helper-functions";
import Link from "next/link";
import { LiaHeart, LiaHeartSolid } from "react-icons/lia";
import { PiShareFat } from "react-icons/pi";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import toast from "react-hot-toast";

interface Friend {
  avatar: string;
  name: string;
}

interface ProductCardProps {
  id: string;
  title: string;
  vendor: string;
  image: string;
  originalPrice: number;
  currentPrice: number;
  discount?: number;
  rating?: number;
  reviewCount?: number;
  variant?: "default" | "compact";
  imgTagText?: string;
  likedBy?: Friend[];
  additionalLikes?: number;
  onAddToCart?: () => void;
  onToggleFavorite?: () => void;
  onShare?: () => void;
  className?: React.CSSProperties | string;
  isInWishlist?: boolean;
  showAddToCart?: boolean;
  showRating?: boolean;
  allowShare?: boolean;
  backgroundColor?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  allowShare,
  showAddToCart,
  id,
  title,
  vendor,
  image,
  originalPrice,
  currentPrice,
  discount,
  rating,
  variant = "default",
  imgTagText,
  showRating,
  className,
  backgroundColor,
  // reviewCount,
  // likedBy = [],
  // additionalLikes = 0,
  // onAddToCart,
  // onToggleFavorite,
  // onShare,
}) => {
  const [mounted, setMounted] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, wishlistItems } = useWishlist();

  useEffect(() => setMounted(true), []);

  //check if item is in wishlist
  const isInWishlist = wishlistItems.some((item) => item.id === id);

  function handleAddToCart() {
    const newItem = {
      id,
      title,
      vendor,
      image,
      size: "xxl",
      color: "#597858",
      quantity: 1,
      unitPrice: currentPrice,
      bgColor: backgroundColor,
      // totalPrice: currentPrice * 1,
    };
    addToCart(newItem);
    toast.success("Product added to cart");
  }

  function handleAddToWishlist() {
    const newItem = {
      id,
      title,
      vendor,
      image,
      size: "xxl",
      color: "#597858",
      quantity: 1,
      originalPrice,
      currentPrice,
      bgColor: backgroundColor,
      isInWishlist: true,
      discount,
      rating,
      // totalPrice: currentPrice * 1,
    };
    addToWishlist(newItem);
    if (isInWishlist) {
      toast.success("Product removed from wishlist");
    } else {
      toast.success("Product added to wishlist");
    }
  }
  //////////////////////

  if (variant === "compact") {
    return (
      <Link href={`/product/${id}`}>
        <div className="relative flex flex-col gap-3  rounded-2xl bg-white overflow-hidden cursor-pointer hover:shadow-lg duration-300 h-full">
          {/* Image */}
          <div
            className="relative rounded-t-2xl w-full h-50 group"
            style={{
              backgroundColor: backgroundColor ?? "#CDE49F",
            }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain group-hover:scale-105 duration-300 p-2"
            />

            <div className="w-full flex items-center px-2 py-1  top-1 justify-between absolute ">
              {discount && (
                <span className=" bg-primary text-white text-[9px] px-2 py-1 md:text-[10px] lg:text-xs rounded-lg">
                  -{discount}%
                </span>
              )}
              <button
                onClick={(e) => {
                  // e.stopPropagation();
                  e.preventDefault();
                  handleAddToWishlist();
                }}
                className="size-7 lg:size-8 rounded-lg bg-[#FFFFFFBF] flex-center shadow-md text-primary"
              >
                {mounted && !isInWishlist ? (
                  <LiaHeart className="text-lg lg:text-xl" />
                ) : (
                  <LiaHeartSolid className="text-lg lg:text-xl" />
                )}
              </button>
            </div>
          </div>

          {/* Content */}
          <div className=" flex flex-col pb-3 px-2 gap-1.5">
            <h3 className="font-bold text-base text-[#343434] truncate capitalize">
              {title}
            </h3>
            <div>
              <p className="text-xs font-medium text-[#999999]">@{vendor}</p>

              {/* Rating */}
              {rating && (
                <div className="flex items-center  text-xs font-medium text-[#999999]">
                  {[1, 2, 3, 4, 5].map((el) => (
                    <Icon
                      fontSize={20}
                      icon={ICON.STAR}
                      className="text-[#ffce31]"
                      key={el}
                    />
                  ))}
                  <p>({rating})</p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-[#999999] line-through">
                {formatCurrency(originalPrice)}
              </span>
              <span className="text-sm md:text-base font-bold text-[#343434]">
                {formatCurrency(currentPrice)}
              </span>
            </div>

            {/* Render liked array: TODO */}
            {/* <p className="text-black/60 font-medium">+32 Liked</p> */}
          </div>
        </div>
      </Link>
    );
  }

  //old container classes-  max-w-md bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg w-full
  return (
    <Link href={`/product/${id}`}>
      <div
        className={`relative flex flex-col gap-3 p-2  rounded-2xl bg-white overflow-hidden shadow hover:shadow-lg cursor-pointer snap-start snap-always w-full duration-300 ${className}`}
      >
        {/* Image */}
        <div
          className={`relative rounded-2xl w-full group h-40 md:h-48`}
          style={{
            backgroundColor: backgroundColor ?? "#E1D6CD",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            //  className="object-contain"
            className="object-contain group-hover:scale-105 duration-300 p-2"
          />

          <div
            className={`w-full flex items-center px-2 py-1  top-1  absolute ${
              imgTagText ? "justify-between" : "justify-end"
            }`}
          >
            {imgTagText && (
              <span className="bg-primary text-white text-[9px] px-2 py-1 rounded-lg md:text-[10px]">
                {imgTagText}
              </span>
            )}
            <button
              className="size-7 rounded-lg bg-[#FFFFFFBF] flex-center shadow-md self-end text-primary"
              onClick={(e) => {
                // e.stopPropagation();
                e.preventDefault();
                handleAddToWishlist();
              }}
            >
              {mounted && !isInWishlist ? (
                <LiaHeart size={18} />
              ) : (
                <LiaHeartSolid size={18} />
              )}
              {/* <Icon
              icon={isInWishlist ? ICON.HEART_FILLED : ICON.HEART}
              className="text-primary"
              fontSize={18}
            /> */}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className=" flex flex-col gap-2">
          <h3 className="font-bold text-base text-[#343434] truncate capitalize">
            {title}
          </h3>
          <p className="text-xs font-medium text-[#999999]">@{vendor}</p>

          <div className="flex items-center gap-1 md:gap-2">
            <span className="text-xs font-medium text-[#999999] line-through">
              {formatCurrency(originalPrice)}
            </span>
            <span className="text-sm md:text-base font-bold text-[#343434]">
              {formatCurrency(currentPrice)}
            </span>
            {discount && (
              <span className="ml-auto bg-primary text-white text-[8px] md:text-xs px-1 md:px-2 py-0.5 rounded-full">
                -{discount}%
              </span>
            )}
          </div>

          {showRating && (
            <div className="flex items-center text-xs font-medium text-[#999999]">
              {[1, 2, 3, 4, 5].map((el) => (
                <Icon
                  fontSize={20}
                  icon={ICON.STAR}
                  className="text-[#ffce31] shrink-0"
                  key={el}
                />
              ))}
              <p>({rating})</p>
            </div>
          )}

          {/* Actions */}
          {showAddToCart && (
            <div className="flex  gap-2">
              <Button
                config={{
                  className: "text-xs! w-full rounded-lg!",
                  onClick: (e) => {
                    // e.stopPropagation();
                    e.preventDefault();
                    handleAddToCart();
                  },
                }}
                size="medium"
                variant="primary"
              >
                <Icon icon={ICON.ADD_CART} fontSize={18} />
                Add to Cart
              </Button>
              {allowShare && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="px-2 rounded-lg border border-primary hover:bg-primary hover:border-primary duration-300 text-primary hover:text-white"
                >
                  <PiShareFat fontSize={20} />
                  {/* <Icon icon={ICON.SHARE} fontSize={20} /> */}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

// const renderStars = () => {
//   if (!rating) return null;

//   return (
//     <div className="flex items-center gap-1">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <span
//           key={star}
//           className={`text-xs ${
//             star <= Math.floor(rating) ? "text-[#FFCC00]" : "text-[#D0D0D0]"
//           }`}
//         >
//           ★
//         </span>
//       ))}
//       <span className="text-[#999999] text-xs ml-1">({reviewCount})</span>
//     </div>
//   );
// };

{
  /* 
        /////////////////////////////
        <div className="relative aspect-square" style={{ backgroundColor }}>
          <Image src={image} alt={title} fill className="object-contain p-8" />
          <button
            onClick={onToggleFavorite}
            className="absolute top-4 right-4 p-1 bg-[#FFFFFFBF] cursor-pointer rounded-2xl flex items-center justify-center"
          >
            <FiHeart className="w-6 h-6 text-primary" />
          </button>
        </div>
        ////////////////////////////
        */
}

{
  /* 
        ///////////////////////////
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 text-xs mb-3">{vendor}</p>

          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm line-through">
              {formatCurrency(originalPrice)}
            </span>
            <span className="text-lg font-bold">
              {formatCurrency(currentPrice)}
            </span>
            {discount && (
              <span className="ml-auto bg-primary text-white px-2 py-0.5 rounded-full text-xs">
                -{discount}%
              </span>
            )}
          </div>
        </div>
        //////////////////////////
        */
}

{
  /*
      /////////////////////////////////////
       <div className="relative aspect-square" style={{ backgroundColor }}>
        {variant === "suggested" && imgTagText && (
          <div className="absolute top-4 left-4 bg-primary text-white p-2 rounded-lg text-xs">
            {imgTagText}
          </div>
        )}
        {discount && variant === "default" && (
          <div className="absolute top-4 left-4 bg-primary text-white px-5 py-3 rounded-2xl text-xl">
            -{discount}%
          </div>
        )}

        <button
          onClick={onToggleFavorite}
          className="absolute top-4 right-4 p-1 bg-[#FFFFFFBF] cursor-pointer rounded-2xl flex items-center justify-center"
        >
          <FiHeart className="w-6 h-6 text-primary" />
        </button>

        <Image src={image} alt={title} fill className="object-contain p-12" />
      </div>
      //////////////////////////////////////
      */
}

{
  /* 
      ////////////////////////////////
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>

        {variant === "suggested" && imgTagText && (
          <p className="text-gray-400 text-xs mb-1">
            Because you follow {vendor}
          </p>
        )}
        {variant === "default" && (
          <p className="text-gray-400 text-xs mb-1">{vendor}</p>
        )}

        <div className="flex items-center gap-3 mb-1">
          <span className="text-gray-400 text-sm line-through">
            {formatCurrency(originalPrice)}
          </span>
          <span className="text-lg font-bold">
            {formatCurrency(currentPrice)}
          </span>
        </div>

        {rating && reviewCount && <div className="mb-4">{renderStars()}</div>}

        {renderLikedBy()}

        <div className="flex gap-3 mt-6">
          <Button
            config={{
              onClick: onAddToCart,
              className: "text-xs! w-full rounded-lg!",
            }}
            size="medium"
            variant="primary"
          >
            <Icon icon={ICON.ADD_CART} fontSize={18} />
            Add to Cart
          </Button>

          {variant === "suggested" && (
            <button
              onClick={onShare}
              className="px-4 bg-[#999999] rounded-xl cursor-pointer flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <PiShareFatThin className="w-6 h-6 text-[#595959]" />
            </button>
          )}
        </div>
      </div> 
      //////////////////////////
      */
}

// const renderLikedBy = () => {
//   if (likedBy.length === 0) return null;

//   return (
//     <div className="flex items-center gap-3">
//       <div className="flex -space-x-2">
//         {likedBy.slice(0, 3).map((friend, index) => (
//           <div
//             key={index}
//             className="p-1 rounded-full border-2 border-white overflow-hidden bg-gray-200 flex items-center justify-center"
//           >
//             {friend.avatar ? (
//               <Image
//                 src={friend.avatar}
//                 alt={friend.name}
//                 width={28}
//                 height={28}
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <FiUser className="w-6 h-6 text-gray-500" />
//             )}
//           </div>
//         ))}
//       </div>
//       {additionalLikes > 0 && (
//         <span className="text-[#00000099] text-sm">
//           +{additionalLikes}{" "}
//           {variant === "suggested" ? "friends Liked" : "Liked"}
//         </span>
//       )}
//     </div>
//   );
// };
