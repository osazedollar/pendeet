import Button from "@/ui/Button";
import CustomFilter from "@/ui/custom-filter";
import SearchBox from "@/ui/SearchBox";
import { periodOptions, statusOptions } from "@/data";
import BackButton from "@/components/general/back-btn";
import OrdersMobileFilter from "@/components/orders/orders-mobile-filter";
import OrdersHeader from "@/components/orders/orders-header";
import OrdersList from "@/components/orders/orders-list";

export const metadata = {
  title: "Orders",
  description: "See your orders.",
};

function Orders() {
  return (
    <section className="w-9/10 mx-auto max-w-7xl min-h-dvh space-y-4 pb-20">
      {/*header desktop */}
      <OrdersHeader />

      {/*header mobile */}
      <h2 className="text-lg font-semibold text-gray-900 md:hidden flex flex-row items-center gap-1">
        <BackButton />
        Orders Center
      </h2>

      {/*mobile filter */}
      <div className="lg:hidden">
        <OrdersMobileFilter />
      </div>

      {/*main content */}
      <div className="grid grid-cols-1 lg:grid-cols-[25%_1fr] gap-5">
        {/*section--1 */}
        <div className="bg-white rounded-2xl shadow-md p-5 lg:flex flex-col gap-3 h-fit hidden">
          <h3 className="font-semibold mb-1 lg:text-xl">Filter</h3>

          <CustomFilter
            label="Order Status"
            filterKey="status"
            options={statusOptions}
          />

          <CustomFilter
            label="Time"
            filterKey="period"
            options={periodOptions}
          />

          <Button
            config={{
              // onClick: () => onAddNewAddress(),
              className: "!rounded-lg !py-2",
            }}
            variant="primary"
            size="full"
          >
            Apply Filter
          </Button>
        </div>

        {/*section--2 */}
        <div className="space-y-3">
          <SearchBox
            placeholder="Search by product name or order id"
            className="hidden md:flex"
          />

          <OrdersList />

          {/*pagination */}
        </div>
      </div>
    </section>
  );
}

export default Orders;
