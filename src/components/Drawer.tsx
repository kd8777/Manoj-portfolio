import { X, ShoppingBag, ChevronRight } from "lucide-react";
import type { CartItem, DrawerKind } from "../lib/types";
import { PRODUCTS, COLLECTIONS, JOURNAL } from "../lib/constants";

const TITLES: Record<Exclude<DrawerKind, null>, string> = {
  shop: "Catalog",
  collections: "Archive 2026",
  journal: "Editorial",
  cart: "Shopping Bag",
};

const SUBTITLES: Record<Exclude<DrawerKind, null>, string | null> = {
  shop: "Featured Garments",
  collections: "Season Lineup",
  journal: "Latest Dispatches",
  cart: null,
};

export default function Drawer({
  kind,
  cart,
  onClose,
  onAddToCart,
  onRemoveFromCart,
  onCheckout,
}: {
  kind: DrawerKind;
  cart: CartItem[];
  onClose: () => void;
  onAddToCart: (title: string, price: number) => void;
  onRemoveFromCart: (key: string) => void;
  onCheckout: () => void;
}) {
  if (!kind) return null;

  return (
    <div className="fixed inset-0 z-40">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/20 backdrop-blur-xs"
      />

      <aside
        className="font-jakarta absolute right-0 top-0 flex h-full w-full flex-col border-l border-gray-200 bg-white"
        style={{ maxWidth: "var(--drawer-max)", padding: "var(--drawer-pad)" }}
      >
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-orbitron font-bold uppercase" style={{ fontSize: "var(--headline-sm, 1.25rem)" }}>
              {TITLES[kind]}
            </h2>
            {SUBTITLES[kind] && (
              <p
                className="mt-1 uppercase text-gray-500"
                style={{ fontSize: "var(--micro)", letterSpacing: "0.15em" }}
              >
                {SUBTITLES[kind]}
              </p>
            )}
          </div>
          <button onClick={onClose} aria-label="Close drawer" className="transition-opacity hover:opacity-50">
            <X style={{ width: "var(--icon)", height: "var(--icon)" }} />
          </button>
        </div>

        <div className="mt-8 flex-1 overflow-y-auto">
          {kind === "shop" && (
            <ul className="flex flex-col gap-6">
              {PRODUCTS.map((p) => (
                <li key={p.id} className="border-b border-gray-200 pb-6">
                  <p
                    className="uppercase text-gray-500"
                    style={{ fontSize: "var(--micro)", letterSpacing: "0.15em" }}
                  >
                    {p.tag}
                  </p>
                  <p className="mt-1 font-medium" style={{ fontSize: "var(--body)" }}>
                    {p.title}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span style={{ fontSize: "var(--body)" }}>${p.price}</span>
                    <button
                      onClick={() => onAddToCart(p.title, p.price)}
                      className="rounded-md border border-gray-400 px-4 py-1.5 uppercase tracking-[0.15em] transition-colors duration-300 hover:border-black hover:bg-black hover:text-white"
                      style={{ fontSize: "var(--micro)" }}
                    >
                      ADD
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {kind === "collections" && (
            <ul className="flex flex-col gap-6">
              {COLLECTIONS.map((c) => (
                <li key={c.id} className="border-b border-gray-200 pb-6">
                  <p
                    className="uppercase text-gray-500"
                    style={{ fontSize: "var(--micro)", letterSpacing: "0.15em" }}
                  >
                    {c.series}
                  </p>
                  <p className="mt-1 font-medium" style={{ fontSize: "var(--body)" }}>
                    {c.name}
                  </p>
                  <p className="mt-2 leading-relaxed text-gray-600" style={{ fontSize: "var(--micro)" }}>
                    {c.description}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {kind === "journal" && (
            <ul className="flex flex-col gap-6">
              {JOURNAL.map((j) => (
                <li key={j.id} className="border-b border-gray-200 pb-6">
                  <p
                    className="uppercase text-gray-500"
                    style={{ fontSize: "var(--micro)", letterSpacing: "0.15em" }}
                  >
                    {j.date} — {j.readTime}
                  </p>
                  <p className="mt-1 font-medium leading-snug" style={{ fontSize: "var(--body)" }}>
                    {j.title}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {kind === "cart" &&
            (cart.length === 0 ? (
              <div className="flex flex-col items-center gap-3 pt-16 text-center text-gray-500">
                <ShoppingBag style={{ width: "var(--globe)", height: "var(--globe)" }} strokeWidth={1} />
                <p style={{ fontSize: "var(--body)" }}>Your shopping bag is empty.</p>
              </div>
            ) : (
              <ul className="flex flex-col gap-5">
                {cart.map((item) => (
                  <li key={item.key} className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <div>
                      <p className="font-medium" style={{ fontSize: "var(--body)" }}>
                        {item.title}
                      </p>
                      <p className="mt-1 text-gray-500" style={{ fontSize: "var(--micro)" }}>
                        ${item.price}
                      </p>
                    </div>
                    <button
                      onClick={() => onRemoveFromCart(item.key)}
                      className="uppercase text-gray-500 underline-offset-2 transition-colors hover:text-black hover:underline"
                      style={{ fontSize: "var(--micro)", letterSpacing: "0.1em" }}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ))}
        </div>

        <div className="mt-6">
          {kind === "cart" && cart.length > 0 ? (
            <button
              onClick={onCheckout}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-black py-3 uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-85"
              style={{ fontSize: "var(--body)" }}
            >
              CHECKOUT NOW
              <ChevronRight size={16} />
            </button>
          ) : (
            <p
              className="text-center uppercase text-gray-400"
              style={{ fontSize: "var(--micro)", letterSpacing: "0.15em" }}
            >
              LGPSM © 2026 — FUTURE FORWARD FASHION
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}
