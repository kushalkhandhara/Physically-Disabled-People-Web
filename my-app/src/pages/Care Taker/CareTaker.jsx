import "./CareTaker.css";
import HeroImg from "../Shop/Section1/HeroImg";
import CareTakerimg from "../../assets/herocare.jpg"
import CareTaker1 from "./Section1/CareTaker1";
import CareTaker2 from "./Section2/CareTaker2";

export default function CareTaker() {
  return (
    <div className="caretaker">
        <HeroImg image ={CareTakerimg} title="Get A Care Taker" data="para" paragraph="A caretaker for physically disabled individuals is akin to having a skilled and attentive service dog. They are trained to assist with daily needs, offer companionship, and ensure the well-being and comfort of their client." /> 
        <CareTaker1/>
        <CareTaker2/>
    </div>
  )
}
