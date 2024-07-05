import "./JobsHero.css";
import jobsHeroImg from "../../../assets/jobs-hero.png"
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
export default function JobsHero() {
  return (
    <div className="jobs-hero ">
        <div className="container"> 
            
            <div className="jobs-hero-main">
                <div className="jobs-hero-side1 ">
                    <div className="jobs-hero-side1-header ">
                        <h1>
                            There are <b>1,26,344</b> jobs
                        </h1>
                        <h1>
                            <b>oppurtunities</b> for you
                        </h1>
                        <p>
                           Find,Jobs,Career and Employement Oppurtunities
                        </p>
                    </div>
                    <div className="jobs-searchbar mt-5">
                        <FaSearch />
                        <input  type="text"  placeholder="Find Jobs..." />
                        <button className="button">Search</button>
                    </div>
                </div>
                
                <div className="jobs-hero-side2">
                    <div className="jobs-hero-side2-img">
                        <img src={jobsHeroImg} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}
