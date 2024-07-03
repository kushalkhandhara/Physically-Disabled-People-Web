import "./Volunteer.css";
import HeroImg from "../Shop/Section1/HeroImg";
import VolunteerImg from "../../assets/volunteerhero.jpg";
import Volunteer1 from "./Section1/Volunteer1";
import Volunteer2 from "./Section2/Volunteer2";

export default function Volunteer() {
  return (
    <div className="volunteer">
        <HeroImg image={VolunteerImg} title="NGO Volunteer Opportunities Supporting the Physically Disabled People" data="para" paragraph="Discover meaningful volunteer opportunities at our NGO, dedicated to supporting physically disabled individuals. Join us in fostering inclusivity and making a positive impact on lives through diverse and rewarding experiences." />
        <Volunteer1/>
        <Volunteer2/>
        
    </div>
  )
}
