import "./JobCate.css";
import HeroImg from "../../Shop/Section1/HeroImg";
import Hero from "../../../assets/jobCate1.avif"
import JobCate1 from "./Section1/JobCate1";

export default function JobCate() {
  return (
    <div className="jobcategory">
        <HeroImg image={Hero} data="para" title="Find Your Career Path" paragraph="Explore diverse job categories tailored to your career aspirations. Whether you're seeking new opportunities or refining your career path, discover a range of roles suited to your skills and interests." />
        <JobCate1/>
    </div>
  )
}
