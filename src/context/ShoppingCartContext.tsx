"use client";
import { createContext, useContext } from "react";
import { ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Props = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartquantity: (id: number) => void;
  decreaseCartquantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  addToCart: (id: number, itemQuantity: number) => void;
  cartQuantitiy: number;
  cartItems: CartItem[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart-data",
    []
  );

  const cartQuantitiy = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function addToCart(id: number, itemQuantity: number) {
    setCartItems((currItems) => {
      if (itemQuantity === 0) {
        return currItems; // Do nothing if itemQuantity is zero
      }

      if (currItems.find((item) => item.id === id) == null) {
        return [...cartItems, { id, quantity: itemQuantity }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + itemQuantity };
          } else {
            return item;
          }
        });
      }
    });
  }

  function increaseCartquantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  // ? optional chaining operator for values that might be null or undefined
  function decreaseCartquantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartquantity,
        decreaseCartquantity,
        removeFromCart,
        addToCart,
        cartItems,
        cartQuantitiy,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
