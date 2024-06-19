import "./Home.css";
import Carousel from "../../components/Carousel/Carousel"
import Section1 from "./Section1/Section1";
export default function Home() {
  return (
    <>
    <div className="home">
      <Carousel/>
      <Section1/>
    </div>
     
    </>
  )
}
