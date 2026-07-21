import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
};

export function OrderTotal({ order, tip }: OrderTotalProps) {
  const subTotalAmount = order.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const tipAmount = subTotalAmount * tip;

  const totalAmount = subTotalAmount + tipAmount;

  return (
    <div className="mt-5">
      <p className="font-bold">Subtotal: {formatCurrency(subTotalAmount)}</p>
      <p className="font-bold">Propina: {formatCurrency(tipAmount)}</p>
      <p className="font-bold">Total: {formatCurrency(totalAmount)}</p>
    </div>
  );
}
