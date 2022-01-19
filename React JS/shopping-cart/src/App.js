import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [count, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  const cartCounter = () => {
    setCartCount(count + 1);
  };

  const goToCartPage = () => {
    navigate("/cart");
  };

  // const calculateTotal=()=>{
  //  console.log(JSON.stringify(cartState))
  // }

  const setCartList=(updatedCartList)=>{
    let tot=0;
    setCart(updatedCartList);
    updatedCartList.map((item)=>{
      tot+=item.amount;
      // console.log("item.total "+item.amount)
      // console.log("inside "+tot)
    })
    console.log(tot)
    setTotal(tot);
  }



  const cartDataHandler = (lst) => {
    lst.qty = 1;
    var state = {
      id: lst.id,
      img: lst.img,
      name: lst.name,
      rate: lst.rate,
      qty: lst.qty,
      amount: lst.rate * lst.qty,
    };
    setCart([...cartState, state]);
    cartCounter();
    // setTotal(parseInt(state.rate) + total);
    // calculateTotal();
  };

  const [cartState, setCart] = useState([]);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Home
            cartDataHandler={cartDataHandler}
            cartCount={count}
            goToCartPage={goToCartPage}
            total={total}
          />
        }
      ></Route>
      <Route
        exact
        path="/cart"
        element={
          <Cart
            cartList={cartState}
            setCartList={setCartList}
            total={total}
            setTotal={setTotal}
            cartDataHandler={cartDataHandler}
          />
        }
      />
    </Routes>
  );
}
