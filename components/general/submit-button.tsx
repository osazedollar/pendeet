"use client";
import Button, { ButtonVariant } from "@/ui/Button";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({
  text,
  cannotSubmit,
  variant,
}: {
  text: string;
  cannotSubmit?: boolean;
  variant?: ButtonVariant;
}) => {
  const { pending } = useFormStatus();

  return (
    <>
      <Button
        config={{ disabled: pending || cannotSubmit, type: "submit" }}
        loading={pending}
        variant={variant ? variant : "primary"}
        size="full"
      >
        {text}
      </Button>
    </>
  );
};
//   <button
//     type="submit"
//     className={`flex mt-1.5 hover:opacity-30 duration-200 ease-in-out bg-black ${
//       pending && "opacity-30"
//     }  rounded-md w-full text-white disabled:cursor-not-allowed disabled:opacity-30 items-center justify-center py-2.5 gap-x-2`}
//     disabled={pending || cannotSubmit}
//   >
//     {pending ? (
//       <span>
//         {/* <BeatLoader color={"#fff"} size={12} loading={true} /> */}
//       </span>
//     ) : (
//       text
//     )}
//   </button>
