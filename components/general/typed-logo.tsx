"use client";
import { ReactTyped } from "react-typed";

function TypedLogo() {
  return (
    <span className="font-bold text-primary font-qurova">
      <ReactTyped strings={["Pendeet"]} typeSpeed={100} loop />
    </span>
  );
}

export default TypedLogo;
