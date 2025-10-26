interface Props {
  className?: string;
}

function ProductCardSkeleton({ className }: Props) {
  return (
    <li
      className={`relative space-y-3 rounded-t-xl transition-all duration-200 before:absolute before:inset-0 before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/80 before:animate-shimmer overflow-hidden ${className} `}
    >
      {/*image */}
      <div className="h-44 rounded-xl bg-zinc-300"></div>

      {/*other contents */}
      <div className="flex flex-col w-full gap-3">
        <div className="h-3 w-full bg-zinc-300 rounded-full"></div>

        <div className="space-y-1">
          <div className="h-2 w-1/2 bg-zinc-300 rounded-full"></div>
          <div className="h-2 w-7/10 bg-zinc-300 rounded-full"></div>
        </div>

        <div className="items-center grid grid-cols-3 gap-3 rounded-full">
          <div className="bg-zinc-300 h-2 rounded-full"></div>
          <div className="bg-zinc-300 h-4 rounded-full"></div>
          <div className="bg-zinc-300 h-4 rounded-full"></div>
        </div>

        <div className="flex h-10 gap-2.5">
          <div className="flex-1 bg-primary rounded-md flex items-center justify-center">
            <div className="bg-zinc-300 w-9/10 h-3 rounded-full"></div>
          </div>
          <div className=" w-2/10 bg-zinc-300 rounded-md"></div>
        </div>
      </div>
    </li>
  );
}

export default ProductCardSkeleton;
