import BottomNav from "./bottom-nav";
import Footer from "./footer";
import Header from "./header";

function BaseLayout({
  showLayout,
  children,
}: {
  showLayout: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`grid grid-rows-[auto_1fr_auto] grid-cols-1  bg-offWhite min-h-dvh relative ${
        !showLayout && "gap-5"
      }`}
    >
      {!showLayout && <Header />}
      {children}
      {!showLayout && <Footer />}
      {!showLayout && <BottomNav />}
    </section>
  );
}

export default BaseLayout;
