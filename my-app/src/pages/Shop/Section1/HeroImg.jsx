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
            <h4>{props.title}</h4>
            {
            props.data === "para" ? 
            (
                <div className="para mt-4">
                    <p>{props.paragraph}</p>
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
