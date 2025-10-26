"use client";

import { useState } from "react";

function TextExpander({ children }: { children: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 15).join(" ") + "...";

  return (
    <span className="flex justify-between items-end">
      {displayText}{" "}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "less" : "more"}
      </button>
    </span>
  );
}

export default TextExpander;
