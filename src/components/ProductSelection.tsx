"use client";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";

interface ItemProps {
  id: number;
  name: string;
  price: number;
}

export default function ProductSelection(props: ItemProps) {
  const [itemQuantity, setItemQuantatity] = useState<number>(0);
  const { getItemQuantity, addToCart, increaseCartquantity } =
    useShoppingCart();
  // const currency = formatCurrency(props.price);
  const quantity = getItemQuantity(props.id);

  return (
    <div className="f-kumb-400 flex flex-col justify-center mt-14 gap-3 text-center sm:text-left">
      <h2 className="text-orange text-lg font-bold mb-4">SNEAKER COMPANY</h2>
      <h1 className="text-5xl font-bold mb-10">
        Fall Limited Edition Sneakers
      </h1>
      <p className="f-kumb-400 text-xl text-gray-600 mb-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div>
        <h2 className="text-2xl font-bold">
          $125.00
          <span className="ml-5 text-orange-400 bg-orange-100 p-1 rounded-md">
            50%
          </span>
        </h2>
        <p className="mt-1 text-lg text-slate-400 line-through">$250.00</p>
      </div>
      <div className="grid grid-cols-5 grid-rows-5 gap-4 mt-4">
        <div className="col-span-2 items-baseline">
          <div className="grid grid-cols-3 bg-c-g-b p-3 rounded-md shadow-md">
            <Button
              onClick={() => {
                if (itemQuantity > 0) {
                  setItemQuantatity(itemQuantity - 1);
                }
              }}
              className="text-2xl text-orange"
            >
              -
            </Button>
            <div className="text-lg text-center">
              <h1>{itemQuantity}</h1>
            </div>
            <Button
              onClick={() => setItemQuantatity(itemQuantity + 1)}
              className="text-2xl text-orange"
            >
              +
            </Button>
          </div>
        </div>
        <div className="grid bg-c-o p-3 col-span-3 justify-center rounded-md text-white shadow-md">
          <Button
            onClick={() => addToCart(props.id, itemQuantity)}
            className="bg-c-o"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
