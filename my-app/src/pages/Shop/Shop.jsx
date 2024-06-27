import HeroImg from "./Section1/HeroImg";
import Products from "./Section2/Products";
import Disablity from "./Section3/Blind";
import "./Shop.css";

export default function Shop() {
  return (
    <>
        <div className="shop">
            <HeroImg/>
            <Products/>
            <Disablity header="Blind People"/>
            <Disablity header="Deaf People"/>
            <Disablity header="Handicaped People"/>
        </div>
    </>
  )
}
