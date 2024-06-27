import "./Research.css";
import HeroImg from "../Shop/Section1/HeroImg"
import Research1 from "../../assets/research-hero.jpg"
import CommonDis from "./Section1/CommonDis";
import FindDis from "./Section2/FindDis";
export default function Research() {
  return (
    <div className="research">
        <HeroImg image={Research1} title="Inclusive Research Hub : Understanding Disabilities" search="Search the Disablity" />
        <CommonDis/>
        <FindDis/>
    </div>
  ) 
}
