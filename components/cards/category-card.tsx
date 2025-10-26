import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  image: string | StaticImageData;
  name: string;
}

export default function CategoryCard({ image, name }: Props) {
  return (
    <article className="w-50 p-2 rounded-2xl text-xs shadow-md ring ring-gray-200 hover:shadow-lg col-center gap-3 snap-start snap-always cursor-pointer">
      <figure className="rounded-full size-38 bg-purple-600 flex-center relative overflow-hidden">
        <Image src={image} alt={name} fill className="object-contain" />
      </figure>

      <figcaption className="font-medium text-base text-[#383838]">
        {name}
      </figcaption>
    </article>
  );
}
