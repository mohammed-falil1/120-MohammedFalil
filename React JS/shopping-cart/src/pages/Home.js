import { useState } from "react";
import ShoppingList from "./ShoppingList";

export default function Home(props) {
  const phoneData = [
    {
      id: 101,
      name: "Samsung Galaxy F21",
      rate: "20000",
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-fe-5g.jpg",
      addedToCart:"Add To Cart",
    },
    {
      id: 102,
      name: "Xiaomi 11i HyperCharge",
      rate: "18000",
      img: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-11i-hypercharge.jpg",
      addedToCart:"Add To Cart",
    },
    {
      id: 103,
      name: "Asus ROG Phone 5s Pro",
      rate: "25000",
      img: "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-5s-pro.jpg",
      addedToCart:"Add To Cart",
    },
  ];

  const [data, setData] = useState(phoneData);

  return (
    <>
      <div>
        <ShoppingList
          list={data}
          setList={setData}
          cartDataHandler={props.cartDataHandler}
          cartCount={props.cartCount}
          goToCartPage={props.goToCartPage}
          total={props.total}
          setTotal={props.setTotal}
        />
      </div>
    </>
  );
}
