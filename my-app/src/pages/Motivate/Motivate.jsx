import HeroImg from "../Shop/Section1/HeroImg";
import "./Motivate.css";
import Motivate1 from "./Section1/Motivate1";
import mothero from "../../assets/motivate1.avif"
import Motivate2 from "./Section2/Motivate2";

export default function Motivate() 
{


  return (
    <div className="motivate">
        <HeroImg image={mothero} title="Stories of Success and Determination" data="para" paragraph="We shares inspiring tales of physically disabled individuals who have overcome challenges, achieved their dreams, and proved that nothing is impossible. These stories celebrate resilience, courage, and the unbreakable human spirit." />

        <Motivate2/>
        <Motivate1/>
    </div>
  )
}
