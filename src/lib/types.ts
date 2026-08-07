export interface CartItem {
  key: string;
  title: string;
  price: number;
}

export type DrawerKind = "shop" | "collections" | "journal" | "cart" | null;
