import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Image src={"/svgs/logo.svg"} width={162} height={44} alt="pendeet_logo" />
  );
}
