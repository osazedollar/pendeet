import React, { FormHTMLAttributes, PropsWithChildren } from "react";

interface FormInputProps extends PropsWithChildren {
  config?: FormHTMLAttributes<HTMLFormElement>;
}

export default function FormInput({ config, children }: FormInputProps) {
  return (
    <form
      className="max-w-4xl w-full flex flex-col gap-4 items-center"
      {...config}
    >
      {children}
    </form>
  );
}
