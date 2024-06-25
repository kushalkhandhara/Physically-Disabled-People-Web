import ImageDisplay from "./Display/ImageDisplay";
import RelatedProducts from "./Display/RelatedProducts";
import Tabs from "./Display/Tabs";
import "./ProductDisplay.css";


export default function ProductDisplay() 
{
  return (
    <div className="product-display">
        <ImageDisplay/>
        <Tabs/>
        <RelatedProducts/>
    </div>
  )
}
