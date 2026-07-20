import type { MenuItem, OrderItem } from "../types";

type OrderItemProps = {
  order: OrderItem[];
  removeItem: (item: MenuItem) => void;
};

export function OrderContents({ order, removeItem }: OrderItemProps) {
  return (
    <div className="space-y-3">
      {order.map((item) => (
        <div key={item.id} className="flex justify-between">
          <p>
            {item.name} - ${item.price * item.quantity}
          </p>
          <button
            className="w-6 h-6 bg-red-500 rounded-full text-white font-bold cursor-pointer"
            onClick={() => removeItem(item)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
