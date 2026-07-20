import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const updatedItem = order.map((orderItem) => {
        if (orderItem.id === item.id) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        } else {
          return orderItem;
        }
      });
      setOrder(updatedItem);
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (item: MenuItem) => {
    setOrder(order.filter((orderItem) => orderItem.id !== item.id));
  };

  return {
    order,
    setOrder,
    addItem,
    removeItem,
  };
};
