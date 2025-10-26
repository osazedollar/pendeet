"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

export default function ProductImage({
  propertyName,
  imageUrl,
}: {
  propertyName: string;
  imageUrl: StaticImageData;
}) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && (
        <div className="top-0 left-0 absolute bg-black/30 w-full h-full animate-pulse rounded-lg"></div>
      )}
      <Image
        src={imageUrl}
        alt={propertyName}
        fill
        hidden={loading}
        sizes="1000px"
        className="object-cover rounded-lg"
        priority
        onLoad={() => {
          setLoading(false);
        }}
      ></Image>
    </>
  );
}
