"use client";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import BaseLayout from "./base-layout";

function MainLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  const hiddenPathPrefixes = ["/trends/", "/chat"];

  // Find if the current pathname starts with any of the hidden prefixes.
  const shouldHideUI = hiddenPathPrefixes.some((prefix) =>
    pathname.startsWith(prefix)
  );

  return <BaseLayout showLayout={shouldHideUI}>{children}</BaseLayout>;
}

export default MainLayout;
