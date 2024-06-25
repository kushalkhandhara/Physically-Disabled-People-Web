import { Link } from "react-router-dom";
import "./Product.css";

export default function Product(props) {
  return (
    <div className="product">
        <div className="product-img">
            <Link to={`/product/${props.id}`}>
                <img src={props.image} alt="" />
            </Link>
        </div>
        <Link to={`/product/${props.id}`}>
            <h6 className="mt-3">{props.name}</h6>
            <div className="product-desc mt-3">
                <p>
                    {props.desc}
                </p>
            </div>
            <div className="product-prices">
                <div className="product-price-new">
                    ${props.oldPrice}
                </div>
                <div className="product-price-old">
                    ${props.newPrice}
                </div>
            </div>
        </Link>
    </div>
  )
}
