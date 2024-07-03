import "./Ngo.css";
import { IoIosStar } from "react-icons/io";
import {Link} from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
// import Ngoimg from "../../../../assets/ngo.jpg";

export default function Ngo(props) {
  return (
    <div className="ngo">
        <div className="ngo-img">
            <img src={props.image} className="img-fluid" alt="" />
        </div>
        <div className="ngo-desc">
            <div className="ngo-header">
                <h5>
                    {props.heading}
                </h5>
                <p>
                    <FaLocationDot color="grey" /> {props.location}
                </p>
            </div>
            <div className="ngo-reviews mt-2">
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
                <IoIosStar />
            </div>
            <div className="ngo-para">
                <p>
                    {props.para}
                </p>
            </div>
            <div className="apply">
                <Link to="/volunteer/1">
                    <button>Apply Now</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
