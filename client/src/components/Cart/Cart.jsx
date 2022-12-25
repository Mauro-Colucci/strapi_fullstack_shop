import "./cart.scss";
import { DeleteOutline } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeReques";

const Cart = () => {
  const dispatch = useDispatch();

  /*  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg",
      img2: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "descriptive title",
      desc: "asdfasd fasd fasdfhaskdjfhasdjfhasdk fhaskdjfhaksd jhkas jd",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img2: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg",
      img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "descriptive title",
      desc: "asdfasd fasd fasdfhaskdjfhasdjfhasdk fhaskdjfhaksd jhkas jd",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ]; */

  const products = useSelector((state) => state.cart.products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51L5zZdIPTF8bDtv6VrIuggGVETFExuRcylFlkwn8OpNMsHvnup4mwHmdXmwjs5vCRQtDVAZG0hYdAkWDr9839Vd7008CoBIQhD"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div key={item.id} className="item">
          <img src={import.meta.env.VITE_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutline
            onClick={() => dispatch(removeItem(item.id))}
            className="delete"
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset cart
      </span>
    </div>
  );
};

export default Cart;
