import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="w-full flex justify-between border-2 border-emerald-400 hover:bg-emerald-200 p-2 rounded-lg cursor-pointer"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </button>
  );
}
