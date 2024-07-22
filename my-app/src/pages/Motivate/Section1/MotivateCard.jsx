import {Link} from "react-router-dom";

import "./MotivateCard.css";
// import Nick from "../../../assets/nick_vujicic.jpg";

const truncateParagraph = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

export default function MotivateCard(props) {
  return (
    <div className="motivate-card">
        <div className="motivateCard-img">
            <img src={props.image} className="img-fluid" alt="Error" />
        </div>
        <div className="motivateCard-header">
            <h5>{props.header}</h5>
        </div>
        <div className="motivateCard-para">
            <p>
            {truncateParagraph(props.para, 50)}
            </p>
        </div>
        <div className="read">
            <Link to="/">Read More</Link>
        </div>
    </div>
  )
}
