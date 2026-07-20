import { MenuItem } from "./components/MenuItem";
import { OrderContents } from "./components/OrderContents";
import { menuItems } from "./data/db";
import { useOrder } from "./hooks/useOrder";

function App() {
  const { order, setOrder, addItem, removeItem } = useOrder();

  return (
    <>
      <header className="bg-emerald-400 py-6">
        <h1 className="text-4xl font-black text-center">
          Cálculadora de Propinas y Consumo
        </h1>
      </header>
      <section className="max-w-7xl w-[90%] mx-auto grid gap-10 md:grid-cols-2 py-20">
        <div>
          <h2 className="text-3xl font-black mb-10">Menú</h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed p-2 rounded-lg">
          <h2 className="text-3xl font-black mb-10">Orden y Consumo</h2>
          <div>
            <OrderContents order={order} removeItem={removeItem} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
