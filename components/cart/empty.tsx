import Button from "@/ui/Button";
import Link from "next/link";
import { IconType } from "react-icons/lib";

interface EProp {
  icon: IconType;
  title: string;
  description: string | React.ReactNode;
  btnText?: string;
  showBtn?: boolean;
}

function Empty({
  icon: Icon,
  title,
  description,
  btnText,
  showBtn = true,
}: EProp) {
  return (
    <div className="text-center flex flex-col items-center gap-2">
      <span className="size-16 md:size-20 flex-center text-white bg-primary rounded-full">
        <Icon size={35} />
      </span>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
        {title}
      </p>
      {typeof description === "string" ? (
        <p className="text-xs md:text-base">{description} </p>
      ) : (
        description
      )}
      {showBtn && (
        <Button
          config={{
            className: "rounded-2xl!",
          }}
          size="regular"
          variant="primary_outlined"
        >
          <Link href={"/"}>{btnText}</Link>
        </Button>
      )}
    </div>
  );
}

export default Empty;
