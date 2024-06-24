import HeroImg from "./Section1/HeroImg";
import Products from "./Section2/Products";
import "./Shop.css";

export default function Shop() {
  return (
    <>
        <div className="shop">
            <HeroImg/>
            <Products/>
        </div>
    </>
  )
}
