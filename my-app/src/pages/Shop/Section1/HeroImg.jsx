import "./HeroImg.css";
import HeroImage from "../../../assets/shop.jpg"
// import { IoSearchOutline } from "react-icons/io5";
export default function HeroImg(props) 
{
    const handleSubmit = (e) => 
    {
        e.preventDefault();
    }
  return (
    <div className="heroImg">
        <div className="mask">
            <img src={props.image}  className="into-img"  alt="" />
        </div>
        <div className="content">
            <h3>{props.title}</h3>
            {
            props.data === "para" ? 
            (
                <div className="para px-lg-2 mt-3">
                    <p>Our mission is straightforward yet profound: to empower individuals with physical disabilities and ensure they have the resources and support needed to lead fulfilling lives. We believe that every person, regardless of their physical abilities, deserves equal opportunities and access to participate fully in society.</p>
                </div>
            ) : <div className="form">
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" placeholder={props.search} name="searchInput" id="searchInput" />
                        <button type="submit">Search</button>
                    </form>
                </div>    
            }
        </div>

    </div>
  )
}
