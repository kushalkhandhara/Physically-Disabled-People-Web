import "./FindDis.css";
import ReseachFinal from "../../../assets/research-final.avif";
import { CiSearch } from "react-icons/ci";

export default function FindDis() 
{
  return (
    <div className="find-dis">
        
        <div className="find-dis-header">
            <h2>Bridging Disability Knowledge</h2>
        </div>
        <div className="find-dis-contain container">
            <div className="find-dis1">
                <div className="find-dis1-img">
                    <img src={ReseachFinal} className="research-img img-fluid" alt="" />
                </div>
            </div>
            <div className="find-dis2">
                
                <div className="find-dis2-header">
                    <h4>
                    Empowering communities through disability research studies
                    </h4>
                </div>
                
                <div className="find-dis2-para mt-3">
                    <p>
                    Research is the careful investigation and study of a subject to discover new information or deepen understanding. It involves gathering and analyzing data, examining facts, and drawing conclusions to answer questions or solve problems
                    </p>
                    <p>
                    The research often aims to identify barriers and challenges faced by individuals with disabilities and explore effective strategies for overcoming these barriers. This can involve studying assistive technologies, accessibility accommodations, healthcare interventions, policy initiatives, and societal attitudes towards disability.
                    </p>
                </div>

                <div className="input-box mt-4">
                    <CiSearch/>
                    <input  type="text"  placeholder="Search here..." />
                    <button className="button">Search</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
