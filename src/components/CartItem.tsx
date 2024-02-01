"use client";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/product.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import Image from "next/image.js";
import CartImg from "../../public/images/image-product-1-thumbnail.jpg";

type CartItemProps = {
  id: number;
};

export default function CartItem({ id }: CartItemProps) {
  function calculateTotalItem(price: number | undefined, quant: number) {
    return (price || 0) * quant;
  }

  const {
    removeFromCart,
    getItemQuantity,
    increaseCartquantity,
    decreaseCartquantity,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const item = storeItems.find((item) => item.id === id);
  const itemsPrice = calculateTotalItem(item?.price, quantity);
  if (item == null) return null;

  return (
    <>
      <div className="grid f-kumb-400 leading-relaxed">
        <div className="flex gap-2 items-center mb-4">
          <Image
            width={110}
            height={110}
            className="rounded-lg"
            src={CartImg}
            alt="cart-image"
          />
          <h1>{item.name}</h1>
        </div>

        {/* Divider */}
        <hr className="h-0.5 bg-black" />
        <h1 className="mt-4">
          <span className="font-bold mr-1">Item Price:</span>
          {formatCurrency(item.price)}
        </h1>
        <h1>
          <span className="font-bold mr-1">Total:</span>
          {formatCurrency(itemsPrice)}
        </h1>
        <div className="flex gap-3 my-3 items-center">
          <h1>
            <span className="font-bold mr-1">Quantity:</span>
            {quantity}
          </h1>
          <Button
            className="bg-c-g-b w-10 p-2 rounded-md shadow-md"
            onClick={() => increaseCartquantity(id)}
          >
            +
          </Button>
          <Button
            className="bg-c-g-b w-10 p-2 rounded-md shadow-md"
            onClick={() => decreaseCartquantity(id)}
          >
            -
          </Button>
          <Button className="" onClick={() => removeFromCart(id)}>
            <MdDelete size={40} />
          </Button>
        </div>
        <Button className="bg-c-o rounded-md text-white f-kumb-400 p-3 font-bold">
          Checkout
        </Button>
      </div>
    </>
  );
}
