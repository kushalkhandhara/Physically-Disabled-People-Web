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
            <div className="form" >
                <form action="" onSubmit={handleSubmit}>

                    <input type="text" placeholder={props.search} name="" id="" />
                    <button type="submit"  name="">Search</button>
                </form>
            </div>
        </div>

    </div>
  )
}
