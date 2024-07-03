import "./Volunteer1.css"
import { FaLocationDot } from "react-icons/fa6";

export default function Volunteer1() 
{
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
  return (
    <div className="volunteer1">
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className="volunteer-inputs container">    
                <div className="volunteer-ip">
                    <div className="volunteer-label ps-3">
                        Enter Country Name : 
                    </div>
                    <div className="volunteer-input mt-1">
                        <FaLocationDot />
                        <input type="text" placeholder="Enter Country Name" name="" id="" />
                    </div>
                </div>
                <div className="volunteer-ip">
                    <div className="volunteer-label ps-3">
                        Enter State Name : 
                    </div>
                    <div className="volunteer-input mt-1">
                        <FaLocationDot />
                        <input type="text"  placeholder="Enter State Name"  name="" id="" />
                    </div>
                </div>
                <div className="volunteer-ip">
                    <div className="volunteer-label ps-3" >
                        Enter City Name : 
                    </div>
                    <div className="volunteer-input mt-1">
                        <FaLocationDot />
                        <input type="text" placeholder="Enter City Name" name="" id="" />
                    </div>
                </div>
            </div>
            {/* <div className="submit-btn container mt-4 ps-4">
                <button>Submit</button>
            </div> */}
        </form>
    </div>
  )
}
