import "./Blind.css"

// Images
import Blindp from "../../../assets/blind.jpg";
import Smart from "../../../assets/smartwheelchair.jpg";
import Eyes from "../../../assets/smartgog.jpg";
import Legs from "../../../assets/smartlegs.jpg";
import Product from "../Section2/Product";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Blind(props) 
{

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div className="blind">
      <div className="blind-header">
        <h2>
          {props.header} Products
        </h2>
      </div>
      <div className="products-container container mt-5">
        <Carousel showDots={false} responsive={responsive} autoPlay={true}  autoPlaySpeed={1500}   infinite={true}>
            <Product id="1" image = {Blindp} name="Smart Stick" desc="Helps blind people walk safely with our user-friendly cane." oldPrice="15" newPrice="10" />
            <Product id="2" name="Smart Wheel Chair" image = {Smart} desc="Helps blind people walk safely with our user-friendly cane." oldPrice="45" newPrice="40" />
            <Product name="Smart Goggles" image = {Eyes} desc="Helps blind people walk safely with our user-friendly cane." oldPrice="45" newPrice="40"/>
            <Product  name="Smart Goggles" image = {Legs} desc="Helps blind people walk safely with our user-friendly cane." oldPrice="45" newPrice="40"/>
            <Product  name="Smart Goggles" image = {Legs} desc="Helps blind people walk safely with our user-friendly cane." oldPrice="45" newPrice="40"/>
            <Product name="Smart Goggles" image = {Eyes} desc="Helps blind people walk safely with our user-friendly cane." oldPrice="45" newPrice="40"/>
            <Product  name="Smart Goggles" image = {Legs} desc="Helps blind people walk safely with our user-friendly cane." oldPrice="45" newPrice="40"/>
            <Product  name="Smart Goggles" image = {Legs} desc="Helps blind people walk safely with our user-friendly cane." oldPrice="45" newPrice="40"/>
        </Carousel>
      </div>

    </div>
  )
}
