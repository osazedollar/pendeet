import React from "react";
import { ClipLoader } from "react-spinners";

interface SpinnerProps {
  size?: number;
  color?: string;
}

export default function MiniSpinner({
  size = 20,
  color = "white",
}: SpinnerProps) {
  return <ClipLoader size={size} color={color} />;
}
