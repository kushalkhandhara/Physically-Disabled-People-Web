import "./Jobs.css";
import JobsHero from "./Section1/JobsHero";
import JobsCategory from "./Section2/JobsCategory";
import PopularJobs from "./Section3/PopularJobs";
import Jobs4 from "./Section4/Jobs4";

export default function Jobs() {
  return (
    <div className="jobs">
        <JobsHero/>
        <JobsCategory/>
        <PopularJobs/>
        <Jobs4/>
    </div>
  )
}
