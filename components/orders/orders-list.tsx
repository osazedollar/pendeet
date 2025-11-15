import { ordersData } from "@/data";
import OrdersCard from "../cards/orders-card";
import { nanoid } from "nanoid";

function OrdersList() {
  return (
    <ul className="space-y-3">
      {ordersData.map((order) => (
        <OrdersCard key={nanoid()} item={order} />
      ))}
    </ul>
  );
}

export default OrdersList;
