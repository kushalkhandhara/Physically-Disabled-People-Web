import "./Jobs4.css";
import img from "../../../assets/job-apply.avif"
export default function Jobs4() {
  return (
    <div className="jobs4 container">
        <div className="jobs4-main">
            <div className="jobs4-side1">
                <img src={img} className="img-fluid" alt="" />
            </div>
            <div className="jobs4-side2">
                <div className="jobs4-side2-header">
                    <span><h2>3</h2></span>
                    <h2 className="easy"> Easy Steps to Apply</h2>
                    <h6 >Apply to your Dream Job in Three Easy Steps</h6>
                </div>
                <div className="jobs4-side2-content pt-4  ps-5 ">
                    <h6>
                        1. Search For Relevent Job in field.
                    </h6>
                    <h6>
                       2. Fill Application Form and Attach Resume.
                    </h6>
                    <h6>
                        3. Use Our Expert Advice and follow Up.
                    </h6>
                </div>
            </div>
        </div>
    </div>
  )
}
