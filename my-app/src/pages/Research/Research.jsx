import "./Research.css";
import HeroImg from "../Shop/Section1/HeroImg"
import Research1 from "../../assets/research-hero.jpg"
import CommonDis from "./Section1/CommonDis";
import FindDis from "./Section2/FindDis";
export default function Research() {
  return (
    <div className="research">
        <HeroImg image={Research1} title="Inclusive Research Hub Understanding Disabilities"  data = "para" paragraph="offers comprehensive information on various disabilities and provides medical, educational, social, and financial support solutions to help individuals overcome challenges and thrive." />
        <CommonDis/>
        <FindDis/>
    </div>
  ) 
}
