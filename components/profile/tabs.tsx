type tabs = "items" | "trends" | "wishlist";

interface TabsProps {
  tabs: { label: tabs; count: number }[];
  activeTab: tabs;
  setActiveTab: (tab: tabs) => void;
}

function Tabs({ tabs, activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="flex justify-center border-b border-gray-400">
      {tabs.map(({ label, count }, i) => (
        <button
          className={`relative px-6 py-3 font-medium  duration-300 rounded-t hover:bg-primary/30 focus:outline-none capitalize ${
            label === activeTab
              ? "text-primary before:absolute before:bottom-0 before:h-[2px] before:bg-primary before:w-full before:left-0 before:translate-y-[2px]"
              : ""
          }`}
          onClick={() => setActiveTab(label)}
          key={i}
        >
          {label}&nbsp;({count})
        </button>
      ))}
    </div>
  );
}

export default Tabs;
