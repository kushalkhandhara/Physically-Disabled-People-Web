import "./CareTaker.css";
import HeroImg from "../Shop/Section1/HeroImg";
import CareTakerimg from "../../assets/herocare.jpg"

export default function CareTaker() {
  return (
    <div className="caretaker">
        <HeroImg image ={CareTakerimg} title="Get A Care Taker" data="para" paragraph="Our mission is straightforward yet profound: to empower individuals with physical disabilities and ensure they have the resources and support needed to lead fulfilling lives. We believe that every person, regardless of their physical abilities, deserves equal opportunities and access to participate fully in society." /> 
    </div>
  )
}
