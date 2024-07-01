import "./Cart.css";
import CartSec1 from "./Section1/CartSec1";
import CartSec2 from "./Section2/CartSec2";
import Footer from "../../components/Footer/Footer"
export default function Cart() {
  return (
    <div className="cart">
        <CartSec1/>
        <CartSec2/>
        {/* <Footer/> */}
    </div>
  )
}
