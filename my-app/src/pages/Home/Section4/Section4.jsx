import Cards from "./Cards"
import "./Section4.css"

export default function Section4() {
  return (
    <div className="section4">
        <div className="section4-header">
          <h1>Talk With Real People</h1>
        </div>
        <div className="section4-cards mt-5">
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
        <div className="section4-btns">
          <button className="button-48 mt-4" role="button"><span className="text">Chat With Real People</span></button>
        </div>
    </div>
  )
}
