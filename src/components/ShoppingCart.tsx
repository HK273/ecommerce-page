"use client";
import { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import CartItem from "./CartItem";
import storeItems from "../data/product.json";

export default function ShoppingCart() {
  const { cartItems } = useShoppingCart();
  const [show, setShow] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const target = useRef(null);

  useEffect(() => {
    // Calculate the total whenever cartItems change
    let accumulatedTotal = 0;

    for (const cartItem of cartItems) {
      const item = storeItems.find((item) => item.id === cartItem.id);

      // Calculate the total cost of the current item
      const itemTotal = (item?.price || 0) * cartItem.quantity;

      // Update the accumulated total
      accumulatedTotal += itemTotal;

      // Log the accumulated total and item's total cost
      console.log("Accumulated Total:", accumulatedTotal);
      console.log("Item Total:", itemTotal);
    }

    // Update the final total
    setTotal(accumulatedTotal);

    // Log the final total
    console.log("Final Total:", accumulatedTotal);
  }, [cartItems]);

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)}>
        <HiOutlineShoppingCart size={25} />
      </Button>
      <Overlay target={target.current} show={show} placement="bottom">
        {/* Need to add a bg color to this to otherwise will be transparent */}
        <div className="cart rounded-md mt-10 w-96 p-5 bg-white divide-y divide-black leading-relaxed">
          {/* Check cartItems is not undefined before mapping */}
          {cartItems &&
            cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          {total == 0 ? (
            <div className="f-kumb-400">
              <div className="mb-4">
                <h1 className="font-bold">Cart</h1>
              </div>
              {/* Divider */}
              <hr className="h-0.5 bg-black" />
              <div className="text-center my-5">
                <h1>Your cart is empty...</h1>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Overlay>
    </>
  );
}
