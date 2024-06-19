import "./Section1.css";
import store1 from "../../../assets/store.jpg"
import store2 from "../../../assets/store1.jpg"

export default function Section1() {
  return (
    <div className="section1">
        <div className="section1-header">
            <h1>Accessible Tech Store</h1>
        </div>
        <div className="main-content">
            
            <div className="side1">
                <div className="image-stack">
                    <div className="image-stack__item image-stack__item--bottom">
                        <img src={store1}  className="img-fluid" alt="" />
                    </div>
                    <div className="image-stack__item image-stack__item--top">
                        <img src={store2}  className="img-fluid" alt="" />
                    </div>
                </div>
            </div>

            <div className="side2">
                <h2>Best Devices, Unbeatable Quality, Lowest Prices - Shop with Confidence</h2>
                <div className="para">
                    <p>
                    Discover our commitment to excellence with top-tier devices at unbeatable prices. At our store, we prioritize quality and affordability, ensuring every purchase meets your expectations
                    </p>
                    <p>
                    We strive to provide superior value without compromising on performance, making our store a trusted choice for customers seeking the best deals.With our competitive pricing, you can shop confidently knowing you are getting the most out of your investment.
                    </p>
                    <p>Join countless satisfied customers who rely on us for superior products and unbeatable prices. Discover why we are your go-to destination for premium devices at affordable rates</p>
                    <button className="button-48" role="button"><span className="text">Explore Our Shop</span></button>
                </div>
                

            </div>
        </div>

    </div>
  )
}
