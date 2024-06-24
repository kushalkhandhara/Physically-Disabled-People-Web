import "./HeroImg.css";
import HeroImage from "../../../assets/shop.jpg"
// import { IoSearchOutline } from "react-icons/io5";
export default function HeroImg() 
{
    const handleSubmit = (e) => 
    {
        e.preventDefault();
    }
  return (
    <div className="heroImg">
        <div className="mask">
            <img src={HeroImage}  className="into-img"  alt="" />
        </div>
        <div className="content">
            <h2>Accessible Living Solutions : Mobility Made Easy</h2>
            <div className="form" >
                <form action="" onSubmit={handleSubmit}>

                    <input type="text" placeholder="Search Products" name="" id="" />
                    <button type="submit"  name="">Search</button>
                </form>
            </div>
        </div>

    </div>
  )
}
