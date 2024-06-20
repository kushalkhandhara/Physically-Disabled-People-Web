import "./Section3.css";
import Jobs from "../../../assets/jobs.png"

export default function Section3() 
{

  return (
    <div className="section3">
      <div className="section3-header">
          <h1>Career Access Point</h1>
      </div>

        <div className="section3-main-content container">
          <div className="side1">
            <div className="side-img">
              <img src={Jobs} className="img-fluid" alt="" />
              <div className="side-desc">
                <h4>
                  Discover Jobs across Popular Roles
                </h4>
                <p>
                  Select a role and we ll show you relevant jobs for it!
                </p>
              </div>
            </div>
          </div>
          
          <div className="side2">
            <div className="job-cards">

              <div className="job-card">
                <h5>Full Stack Developer</h5>
                <p>10k+ Jobs Available</p>
              </div>
              <div className="job-card">
                <h5>Full Stack Developer</h5>
                <p>10k+ Jobs Available</p>
              </div>
              <div className="job-card">
                <h5>Full Stack Developer</h5>
                <p>10k+ Jobs Available</p>
              </div>
              <div className="job-card">
                <h5>Full Stack Developer</h5>
                <p>10k+ Jobs Available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section3-btns" >
          <button className="button-48 mt-4" role="button"><span className="text">Explore Job Oppurtunuties</span></button>
        </div>
    </div>
  )
}
