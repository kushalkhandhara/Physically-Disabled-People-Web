import "./Jobs.css";
import JobsHero from "./Section1/JobsHero";
import JobsCategory from "./Section2/JobsCategory";
import PopularJobs from "./Section3/PopularJobs";

export default function Jobs() {
  return (
    <div className="jobs">
        <JobsHero/>
        <JobsCategory/>
        <PopularJobs/>
    </div>
  )
}
