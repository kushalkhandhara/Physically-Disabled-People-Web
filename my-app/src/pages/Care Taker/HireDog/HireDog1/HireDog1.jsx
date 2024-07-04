import "./HireDog1.css";
import HireDogCard from "./HireDogCard/HireDogCard";
import dog1 from "../../../../assets/dogs1.jpg"
import dog2 from "../../../../assets/dogs.jpeg"
export default function HireDog1() {
  return (
    <div className="hiredog1 container">
        <div className="hiredog1-header">
            <h2>Our Most Hired Service Dogs</h2>
        </div>
        <div className="hiredog1-cards">
            <HireDogCard image={dog1} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at deleniti aperiam necessitatibus. Minus sed ex corrupti neque minima cupiditate aperiam, consequatur vel quae. Quae ipsam aperiam voluptates? Tenetur nulla natus optio impedit doloribus unde!" name="Scooby John's" service="2 years in Millatry" />
            <HireDogCard image={dog2} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at deleniti aperiam necessitatibus. Minus sed ex corrupti neque minima cupiditate aperiam, consequatur vel quae. Quae ipsam aperiam voluptates? Tenetur nulla natus optio impedit doloribus unde!" name="Julie John's" service="1 years in Home Service" />
            <HireDogCard image={dog1} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at deleniti aperiam necessitatibus. Minus sed ex corrupti neque minima cupiditate aperiam, consequatur vel quae. Quae ipsam aperiam voluptates? Tenetur nulla natus optio impedit doloribus unde!" name="Scooby John's" service="2 years in Millatry" />
            <HireDogCard image={dog2} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at deleniti aperiam necessitatibus. Minus sed ex corrupti neque minima cupiditate aperiam, consequatur vel quae. Quae ipsam aperiam voluptates? Tenetur nulla natus optio impedit doloribus unde!" name="Julie John's" service="1 years in Home Service" />
            <HireDogCard image={dog1} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at deleniti aperiam necessitatibus. Minus sed ex corrupti neque minima cupiditate aperiam, consequatur vel quae. Quae ipsam aperiam voluptates? Tenetur nulla natus optio impedit doloribus unde!" name="Scooby John's" service="2 years in Millatry" />
            <HireDogCard image={dog2} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at deleniti aperiam necessitatibus. Minus sed ex corrupti neque minima cupiditate aperiam, consequatur vel quae. Quae ipsam aperiam voluptates? Tenetur nulla natus optio impedit doloribus unde!" name="Julie John's" service="1 years in Home Service" />

        </div>

    </div>
  )
}
