import "./JobsCatCard.css";
import {Link} from "react-router-dom";
import { useState } from "react";

export default function JobsCatCard(props) 
{
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
    <div className={`jobs-category-card ${isHovered ? 'hovered' : ''}`}  
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave} 
    isHovered={isHovered}>
        <Link>
            <div className={`jobs-category-icon  ${isHovered ? 'hovered' : ''}`}>
                {props.jobIcon}
            </div>
        </Link>
        <Link>
            <div className="jobs-categoryCard-header">
                <h6>{props.title}</h6>
                <p>{props.para1}</p>
                <p>{props.para2}</p>
            </div>
        </Link>
    </div>
  )
}
