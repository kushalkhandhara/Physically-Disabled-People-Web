import Product from "./Product";
import "./Products.css";
import Blind from "../../../assets/blind.jpg";
import Smart from "../../../assets/smartwheelchair.jpg";
import Eyes from "../../../assets/smartgog.jpg";
import Legs from "../../../assets/smartlegs.jpg";

export default function Products() {
  return (
    <div className="products">
        <div className="products-header">
            <h1>Our Most Selling Products</h1>
        </div>
        <div className="popular-products container-fluid">
          <Product image = {Blind} name="Smart Stick" desc="Helps blind people walk safely with our user-friendly cane." oldPrice="15" newPrice="10" />
          <Product name="Smart Wheel Chair" image = {Smart} desc="Helps blind people walk safely with our user-friendly cane." oldPrice="45" newPrice="40" />
          <Product name="Smart Goggles" image = {Eyes} desc="Helps blind people walk safely with our user-friendly cane." oldPrice="45" newPrice="40"/>
          <Product  name="Smart Goggles" image = {Legs} desc="Helps blind people walk safely with our user-friendly cane." oldPrice="45" newPrice="40"/>

        </div>
    </div>
  )
}
