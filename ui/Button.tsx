import Image, { StaticImageData } from "next/image";
import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import MiniSpinner from "./MiniSpinner";
import { Icon } from "@iconify/react/dist/iconify.js";

export type ButtonVariant =
  | "primary"
  | "primary_outlined"
  | "secondary"
  | "danger"
  | "outlined";

type ButtonSize = "small" | "medium" | "regular" | "large" | "full";

interface ButtonProps extends PropsWithChildren {
  config?: ButtonHTMLAttributes<HTMLButtonElement>;
  variant: ButtonVariant;
  size: ButtonSize;
  icon?: string;
  customIcon?: string | StaticImageData;
  loading?: boolean;
  children: React.ReactNode;
  link?: boolean;
  href?: string;
}

const baseStyle =
  "flex items-center hover:opacity-80 text-sm cursor-pointer gap-2 font-semibold disabled:cursor-not-allowed disabled:opacity-70 justify-center rounded-full transition-all duration-200 focus:outline-none focus:scale-[0.98]";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white disabled:bg-placeholder!",
  primary_outlined:
    "ring text-primary ring-primary hover:bg-primary hover:text-white",
  secondary: "bg-blue-500 text-white disabled:bg-[#D9D9D9]",
  outlined: "ring-1 ring-placeholder-dark bg-white text-[#4F4F4F]",
  danger: "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300",
};

const sizes: Record<ButtonSize, string> = {
  small: "py-1",
  medium: "p-2",
  regular: "p-3 w-fit",
  large: "",
  full: "p-3 w-full",
};

export default function Button({
  config,
  children,
  size,
  variant,
  customIcon,
  href,
  icon,
  link,
  loading,
}: ButtonProps) {
  if (link && href) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className={`${baseStyle} ${variantStyles[variant]} ${sizes[size]} ${config?.className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={config?.type || "button"}
      {...config}
      className={`${baseStyle} ${variantStyles[variant]} ${sizes[size]} ${config?.className}`}
      disabled={config?.disabled || loading}
    >
      {loading ? (
        <MiniSpinner />
      ) : (
        <>
          {customIcon ? (
            <Image src={customIcon} width={16} height={16} aria-hidden alt="" />
          ) : icon ? (
            <Icon icon={icon!} fontSize={20} />
          ) : null}
          {children}
        </>
      )}
    </button>
  );
}
