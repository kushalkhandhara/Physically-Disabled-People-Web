import HeroImg from "./Section1/HeroImg";
import Products from "./Section2/Products";
import Disablity from "./Section3/Blind";
import HeroImage from "../../assets/shop.jpg"
import "./Shop.css";

export default function Shop() {
  return (
    <>
        <div className="shop">
            <HeroImg image={HeroImage} title="Accessible Living Solutions : Mobility Made Easy" search="Search Products"/>
            <Products/>
            <Disablity header="Blind People"/>
            <Disablity header="Deaf People"/>
            <Disablity header="Handicaped People"/>
        </div>
    </>
  )
}
