import { useState } from "react";
import React from "react";
import "../CSS/Cart.css";
export default function Cart(props) {
  const qtyHandler = (event, lst) => {
    let tot=0;
    const name = event.target.name;
    console.log(name);
    console.log("Inside qyHandler");
    let updatedCartList;
    if (name === "minusQty" && lst.qty === 1) {
      if (lst.qty - 1 === 0) {
        updatedCartList = props.cartList.filter((item) => {
          console.log("item :id = " + item.id);
          console.log("lst.id = " + lst.id);
          return item.id !== lst.id;
        });
        props.setCartList(updatedCartList);
        console.log("updated= " + JSON.stringify(updatedCartList));
        console.log("cartList lenght= " + props.cartList.length);
      }
    } else {
      props.setCartList(
        props.cartList.map((item) =>
          item.id === lst.id && name === "PlusQty"
            ? {
                ...item,
                qty: lst.qty + 1,
                amount:(lst.qty + 1)*lst.rate
              }
            : item.id === lst.id && name === "minusQty" && lst.qty - 1 !== 0
            ? {
                ...item,
                qty: lst.qty - 1,
                amount:(lst.qty-1)*lst.rate
              }
            : item
        )
      );
    }
    // for(var i of props.cartList){
    //   tot=tot+i["amount"]
    //   console.log(tot)
    // }
    // props.setTotal(tot);
    // console.log(props.total)
  };

  return (
    <>
      <h1 id="cartTag">Cart</h1>
      <>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <table class="table table-striped" id="table">
                <thead>
                  <tr>
                    <th scope="col">SI</th>
                    <th scope="col">Image</th>
                    <th scope="col">Phone Name</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {props.cartList.length > 0 ? (
                    props.cartList.map((lst) => (
                      <>
                        <tr>
                          <th scope="row">{lst.id}</th>
                          <td class="w-25">
                            <img
                              src={lst.img}
                              class="img-fluid img-thumbnail"
                              alt=""
                            />
                          </td>
                          <td>{lst.name}</td>
                          <td>{lst.rate}</td>
                          {/* <td>{lst.qty}</td> */}
                          <td>
                            <div class="container">
                              <div class="row justify-content-center ">
                                <div class="col-sm-0">
                                  {" "}
                                  <button
                                    type="button"
                                    class="btn btn-warning"
                                    name="minusQty"
                                    style={{
                                      fontSize: "15px",
                                      fontWeight: "bold",
                                    }}
                                    onClick={(event) => qtyHandler(event, lst)}
                                  >
                                    -
                                  </button>
                                </div>
                                <div class="col-sm-0">
                                  <button
                                    type="button"
                                    class="btn btn-light"
                                    disabled={true}
                                    style={{ fontWeight: "bold" }}
                                  >
                                    {lst.qty}
                                  </button>
                                </div>
                                <div class="col-sm-0">
                                  <button
                                    type="button"
                                    class="btn btn-warning"
                                    name="PlusQty"
                                    style={{
                                      fontSize: "15px",
                                      fontWeight: "bold",
                                    }}
                                    onClick={(event) => qtyHandler(event, lst)}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{lst.amount}</td>
                        </tr>
                      </>
                    ))
                  ) : (
                    <>
                   
                    <div id="cartEmptyTag"><h1 >Cart Is Empty</h1></div>
                    </>
                  )}
                </tbody>
              </table>
              <div>
                <hr />
              </div>
              <div id="price">Total :Rs. {props.total}</div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
