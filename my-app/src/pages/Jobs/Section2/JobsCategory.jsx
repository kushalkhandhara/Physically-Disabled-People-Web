
import JobsCatCard from "./JobsCatCard";
import "./JobsCategory.css";
import { AiOutlineAccountBook } from "react-icons/ai";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { ImUserTie } from "react-icons/im";
import { FaRegFileVideo } from "react-icons/fa";
import { BsCloudFog2Fill } from "react-icons/bs";
import { GiHumanPyramid } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
export default function JobsCategory() 
{
    
    return (
    <div className="jobs-category container">
        <div className="jobs-category-header">
            <h2>
                Find Jobs in <b>Categories</b>
            </h2>
        </div>

        <div className="jobs-category-cards">
            <JobsCatCard jobIcon={<AiOutlineAccountBook />} 
            title="Accounts and Finance" para1="(331) Positions Available" para2="Remote Jobs Available" size={30} />

            <JobsCatCard jobIcon={<HiOutlineCodeBracketSquare />} title="Development" para1="(1000) Positions Available" para2="Hybrid Jobs Available" />
            
            <JobsCatCard jobIcon={<ImUserTie />} title="Human Resource" para1="(300) Positions Available" para2="Hybrid Jobs Available" />
            
            <JobsCatCard jobIcon={<FaRegFileVideo />} title="Video Editor" para1="(200) Positions Available" para2="Remote Jobs Available" />
            
            <JobsCatCard jobIcon={<BsCloudFog2Fill />} title="AI and ML (Cloud)" para1="(100) Positions Available" para2="Remote Jobs Available" />
            
            <JobsCatCard jobIcon={<GiHumanPyramid />} title="Marketing Jobs" para1="(150) Positions Available" para2="Remote Jobs Available" />
            
            <JobsCatCard jobIcon={<MdOutlineDesignServices />} title="Designing Jobs" para1="(40) Positions Available" para2="Remote Jobs Available" />
        </div>
    </div>
  )
}