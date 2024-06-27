import DisablityCard from "../Disablity-Card/DisablityCard";
import "./CommonDis.css";

export default function CommonDis() {
  return (
    <div className="common-dis">
      <div className="common-dis-header">
          <h2>Common Disabilities Among People</h2> 
      </div>
      <div className="common-dis-cards container">
          <DisablityCard/>
          <DisablityCard/>
          <DisablityCard/>
      </div>
    </div>
  )
}
