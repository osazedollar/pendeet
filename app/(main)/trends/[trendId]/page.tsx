import SelectedTrendContent from "@/components/trends/selected-trend-content";
import TrendDetails from "@/components/trends/trend-details";
import TrendSidenav from "@/components/trends/trend-sidenav";

function SelectedTrend() {
  return (
    <section className="h-dvh flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
      <div className="flex-[1_0_100%] md:basis-3/10 snap-start snap-always hidden md:grid">
        <TrendSidenav />
      </div>
      <div className=" flex-[1_0_100%] md:basis-4/10 snap-start snap-always grid">
        <SelectedTrendContent />
      </div>
      <div className="flex-[1_0_100%] md:basis-3/10 snap-start snap-always grid">
        <TrendDetails />
      </div>
    </section>
  );
}

export default SelectedTrend;
