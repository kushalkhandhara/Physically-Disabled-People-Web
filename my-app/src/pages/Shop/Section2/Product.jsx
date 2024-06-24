import "./Product.css";

export default function Product(props) {
  return (
    <div className="product">
        
        <div className="product-img">
            <img src={props.image} alt="" />
        </div>

        <h5 className="mt-3">{props.name}</h5>
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
    </div>
  )
}
