import "./Home.css";
import Carousel from "../../components/Carousel/Carousel"
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
export default function Home() {
  return (
    <>
    <div className="home">
      <Carousel/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
     
    </>
  )
}
