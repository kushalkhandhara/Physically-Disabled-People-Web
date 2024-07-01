import { Link } from "react-router-dom";
import "./DisablityCard.css";

export default function DisablityCard() {
  return (
    <div className="disablity-card">
        <div className="disablity-card-header">
            <h4>Muscle Weakness</h4>
            <h6>Over 30 Million people are facing this Problem</h6>
        </div>
        <div className="disablity-card-para">
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat atque ea quae eaque perspiciatis perferendis, culpa iure esse quidem?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat atque ea quae eaque perspiciatis perferendis, culpa iure esse quidem?
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, laborum!</p>

        </div>
        <div className="dis-btn">
            <Link to="/disablity/1"><button>Read More</button></Link>
        </div>
    </div>
  )
}
