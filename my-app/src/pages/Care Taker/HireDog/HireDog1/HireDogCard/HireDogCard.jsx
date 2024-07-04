import "./HireDogCard.css";
// import dog from "../../../../../assets/dogs.jpeg"
import {Link} from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";

export default function HireDogCard(props) {
  return (
    <div className="hiredog1-card">
        <Link>
            <div className="hiredog1-img">
                <img src={props.image} className="img-fluid" alt="" />
            </div>
        </Link>
        <Link>
        <div className="hiredog1-desc">
            <div className="hiredog1-rating mb-1">
                <IoStarSharp color="orange"/>
                <IoStarSharp color="orange"/>
                <IoStarSharp color="orange"/>
                <IoStarSharp color="orange"/>
                <IoStarSharp />
            </div>
            <div className="hiredog1-title mt-1">
                <h6>Name : {props.name}</h6>
                <h6>Service : {props.service}</h6>
            </div>
                {/* 35 words */}
            <div className="para">
                <p>
                    {props.desc}
                </p>
            </div>
        </div>
        </Link>

    </div>
  )
}
