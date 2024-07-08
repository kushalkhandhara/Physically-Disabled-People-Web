import PopularJobCard from "../../Section3/PopularJobCard";
import "./JobCate1.css";


export default function JobCate1() {
  return (
    <div className="jobcate1 container">
        <div className="jobcate1-header">
            <h2>Jobs in Software Development</h2>
        </div>
        <div className="jobcate1-cards">
            <PopularJobCard />
            <PopularJobCard />
            <PopularJobCard />
            <PopularJobCard />
            <PopularJobCard />
            <PopularJobCard />
            <PopularJobCard />
            <PopularJobCard />
            <PopularJobCard />
        </div>
    </div>
  )
}
