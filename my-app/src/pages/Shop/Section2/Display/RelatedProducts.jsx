import Product from "../Product";
import "./RelatedProducts.css";
import Blind from "../../../../assets/blind.jpg"

export default function RelatedProducts() {
  return (
    <div className="related-products container">
        <div className="related-header">
            <h2>Related Products</h2>
        </div>
        <div className="related-prod">
            <Product id="1" image = {Blind} name="Smart Stick" desc="Helps blind people walk safely with our user-friendly cane." oldPrice="15" newPrice="10" />
            <Product id="1" image = {Blind} name="Smart Stick" desc="Helps blind people walk safely with our user-friendly cane." oldPrice="15" newPrice="10" />
            <Product id="1" image = {Blind} name="Smart Stick" desc="Helps blind people walk safely with our user-friendly cane." oldPrice="15" newPrice="10" />
            <Product id="1" image = {Blind} name="Smart Stick" desc="Helps blind people walk safely with our user-friendly cane." oldPrice="15" newPrice="10" />
        </div>
    </div>
  )
}
