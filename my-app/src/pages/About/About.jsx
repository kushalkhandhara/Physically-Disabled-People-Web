import HeroImg from "../Shop/Section1/HeroImg";
import "./About.css";
import AboutImg from "../../assets/about1.avif"
import About1 from "./Section1/About1";
import About2 from "./Section2/About2";
import About3 from "./Section3/About3";
import About4 from "./Section4/About4";

export default function About() {
  return (
    <div className="about">
      <HeroImg image ={AboutImg} title="About Us" data="para" />
      <About1/>
      <About2/>
      <About3/>
      <About4/>
    </div>
  )
}
