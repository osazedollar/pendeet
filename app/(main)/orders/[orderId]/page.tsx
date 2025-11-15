import OrdersHeader from "@/components/orders/orders-header";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineChat } from "react-icons/md";
import Button from "@/ui/Button";
import { FiRefreshCcw } from "react-icons/fi";
import ItemsOrdered from "@/components/orders/items-ordered";
import OrdersInfo from "@/components/orders/orders-info";
import Statustracker from "@/components/orders/status-tracker";
import PaymentSummary from "@/components/orders/payment-summary";
import VendorDetails from "@/components/orders/vendor-details";
import NeedHelp from "@/components/orders/need-help";
import CurrentStatus from "@/components/orders/current-status";

function OrderDetails({ params }: { params: { orderId: string } }) {
  const orderId = params.orderId;

  return (
    <section className="w-9/10 mx-auto max-w-7xl min-h-dvh space-y-4 pb-20">
      {/*header desktop */}
      <OrdersHeader showTab={false} />

      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-gray-900">
          Order #{orderId}
        </h2>
        <div className="flex flex-row items-center justify-between text-xs md:text-sm font-medium">
          <span>Placed on October 29, 2025</span>
          <div className="flex flex-row gap-3">
            <button className="md:flex flex-row items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-md duration-200 hover:bg-primary hover:text-white hidden">
              <MdOutlineChat size={15} />
              Chat Vendor
            </button>
            <button className="flex flex-row items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-md duration-200 hover:bg-primary hover:text-white">
              <CgFileDocument size={15} />
              Invoice
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_35%] gap-5">
        {/*section--1 */}
        <div className="flex flex-col gap-3">
          {/*Mobile---current-status */}
          <div className="lg:hidden">
            <CurrentStatus />
          </div>

          {/*ITEMS ORDERED */}
          <ItemsOrdered />

          {/*BUYER INFORMATION */}
          {/* <BuyersInformation /> */}

          {/*ORDER INFORMATION */}
          <OrdersInfo />

          {/*PAYMENT SUMMARY */}
          <PaymentSummary />
        </div>

        {/*section--2 */}
        <div className="flex flex-col gap-3">
          {/*CURRENT STATUS */}
          <CurrentStatus />

          {/* STATUS UPDATE*/}
          <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
            <h3 className="text-base font-semibold text-gray-900">
              Order Status Update
            </h3>

            {/*vendor status update */}
            {/* <VendorStatusUpdate /> */}

            {/*status tracker */}
            <Statustracker />

            <Button
              config={{
                // onClick: () => onAddNewAddress(),
                className: "!rounded-lg !py-2",
              }}
              variant="primary"
              size="full"
            >
              <FiRefreshCcw />
              Update Status
            </Button>
          </div>

          {/*PAYMENT SUMMARY */}
          {/* <PaymentSummary /> */}

          {/*VENDOR DETAILS */}
          <VendorDetails />

          {/*HELP */}
          <NeedHelp />
        </div>
      </div>
    </section>
  );
}

export default OrderDetails;
