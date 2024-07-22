import "./Motivate2.css";
import motsuc from "../../../assets/motsuc.png"

import { IoSearchOutline } from "react-icons/io5";

export default function Motivate2() {
  return (
    <div className="motivate2 container">
        <div className="motivate2-main">

            <div className="motivate2-img">
                <img src={motsuc} className="img-fluid" alt="" />
            </div>
            <div className="motivate2-desc">
                <div className="motivate2-header">
                    <h4>
                    Inspiring Journeys: Stories of the Physically Challenged
                    </h4>
                </div>
                <div className="motivate2-para">
                    <p>
                    Discover the remarkable journeys of individuals who have turned their physical challenges into sources of strength and inspiration. These stories showcase the power of resilience and the human spirit.
                    </p>
                    <p>
                    ive into the heartwarming and motivational tales of people who faced physical challenges with courage and determination. Their stories will inspire you to overcome your own obstacles.
                    </p>
                    <p>
                    Be inspired by stories of people who have conquered their physical challenges with unwavering courage. These tales highlight the strength of the human spirit and the power of determination.
                    </p>
                </div>

                <div className="search-inp">
                    <input type="text" placeholder="Search" />
                    <IoSearchOutline size={25} color="grey" />
                    <button>Search</button>
                </div>



            </div>

        </div>
    </div>
  )
}
