import MainLayout from "@/components/layout/main-layout";
import { PropsWithChildren } from "react";

//NB: I extracted the components logic here so i could get the current pathname and conditionally render header or footer wihout turning the entire routes into a client component; i extracted into a MainLayout which handle the conditional rendering and in turn renders base-layout

function MainPage({ children }: PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>;
}

export default MainPage;
