import type { OrderItem } from "../types";

type OrderItemProps = {
  order: OrderItem[];
};

export function OrderItem({ order }: OrderItemProps) {
  return (
    <div>
      {order.map((item) => (
        <div key={item.id} className="flex justify-between">
          <p>
            {item.name} - {item.price}
          </p>
          <button className="w-6 h-6 bg-red-500 rounded-full text-white font-bold">
            X
          </button>
        </div>
      ))}
    </div>
  );
}
