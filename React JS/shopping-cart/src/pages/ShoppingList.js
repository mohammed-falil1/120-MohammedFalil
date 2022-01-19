import "../CSS/ShoppingList.css";
import { useNavigate } from "react-router-dom";

export default function ShoppingList(props) {
  const navigate = useNavigate();
  const checkAddToCart = (lst) => {
    if (lst.addedToCart === "Add To Cart") {
      props.cartDataHandler(lst);
      props.setList(
        props.list.map((item) =>
          item.id === lst.id
            ? {
                ...item,
                addedToCart: "Go To Cart",
              }
            : item
        )
      );
      //   const {name ,value}=event.target;
      //   props.setList({...props.list,[name]:"Go To Cart"});
      console.log("props.list " + JSON.stringify(props.list));
    } else {
      navigate("/cart");
    }
  };
  return (
    <>
      <div id="badge">
        <h2>
          <button
            type="button"
            class="btn btn-primary"
            onClick={props.goToCartPage}
          >
            Cart <span class="badge badge-light">{props.cartCount}</span>
            <span class="sr-only">unread messages</span>
          </button>
        </h2>
      </div>
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
                  <th scope="col">Add To Cart</th>
                </tr>
              </thead>
              <tbody>
                {props.list.length > 0 ? (
                  props.list.map((lst) => (
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

                        <td>
                          <button
                            type="button"
                            class="btn btn-warning"
                            name="addedToCart"
                            onClick={() => checkAddToCart(lst)}
                          >
                            {lst.addedToCart}
                          </button>
                        </td>
                      </tr>
                    </>
                  ))
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
