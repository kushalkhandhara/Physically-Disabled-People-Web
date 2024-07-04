import "./HireDog2.css";
import HireDogCard from "../HireDog1/HireDogCard/HireDogCard"

import dog1 from "../../../../assets/dogs.jpeg"
import dog2 from "../../../../assets/dogs1.jpg"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HireDog2() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
    <div className="hiredog2 container">
      <div className="hiredog2-header">
        <h2>
          Get a Service Dog
        </h2>
      </div>
      <div className="hiredog2-container mt-5">
        <Carousel showDots={false} responsive={responsive} autoPlay={true}  autoPlaySpeed={1500}   infinite={true}>
          <HireDogCard image={dog1} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at deleniti aperiam necessitatibus. Minus sed ex corrupti neque minima cupiditate aperiam, consequatur vel quae. Quae ipsam aperiam voluptates? Tenetur nulla natus optio impedit doloribus unde!" name="Scooby John's" service="2 years in Millatry"/>
          <HireDogCard image={dog2} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at deleniti aperiam necessitatibus. Minus sed ex corrupti neque minima cupiditate aperiam, consequatur vel quae. Quae ipsam aperiam voluptates? Tenetur nulla natus optio impedit doloribus unde!" name="Julie John's" service="1 years in Home Service"/>
          <HireDogCard image={dog1} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at deleniti aperiam necessitatibus. Minus sed ex corrupti neque minima cupiditate aperiam, consequatur vel quae. Quae ipsam aperiam voluptates? Tenetur nulla natus optio impedit doloribus unde!" name="Scooby John's" service="2 years in Millatry"/>
          <HireDogCard image={dog2} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at deleniti aperiam necessitatibus. Minus sed ex corrupti neque minima cupiditate aperiam, consequatur vel quae. Quae ipsam aperiam voluptates? Tenetur nulla natus optio impedit doloribus unde!" name="Julie John's" service="1 years in Home Service"/>
        </Carousel>
      </div>
    </div>
  )
}
