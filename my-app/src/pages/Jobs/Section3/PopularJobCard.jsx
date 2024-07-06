import "./PopularJobCard.css";
import amazon from "../../../assets/Amazon logo.png"



export default function PopularJobCard() {
  return (
    <div className="popular-job-card">
        
        <div className="popular-job-header">
            <div className="popular-job-img">
                <img src={amazon} className="img-fluid" alt="" />
            </div>
            <h6 >Amazon Inc.</h6>
            <h3><b>$4,32,110</b></h3>
        </div>


        <div className="popular-job-desc">
            <h4>
                Senior Software Developer
            </h4>
            <div className="popular-job-location">
                <p>New York, USA</p>
                <p>Full Time</p>            
            </div>
            <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus tenetur debitis blanditiis, eaque ullam minima obcaecati aut! Obcaecati voluptates odit est cupiditate. Tempora fugit sed id nemo blanditiis, inventore velit eaque, aspernatur temporibus optio quibusdam? 
            </p>
        </div>

        <div className="job-apply-btn">
            <button>Apply Now</button>
        </div>
    </div>
  )
}
