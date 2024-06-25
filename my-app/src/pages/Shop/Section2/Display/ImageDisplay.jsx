import "./ImageDisplay.css";
import Carousel from 'react-bootstrap/Carousel';
import bs from "../../../../assets/BlindStick.png"
import bs1 from "../../../../assets/sb3.jpg"
import bs2 from "../../../../assets/blind.jpg"
import { IoIosStar } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

export default function ImageDisplay() 
{
  return (
    <div className="image-display container">
        <div className="images">
            <Carousel variant="dark" indicators={false}>
                <Carousel.Item>
                    <img src={bs} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={bs1} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={bs2} alt="" />
                </Carousel.Item>
            </Carousel>
        </div>

        <div className="prod-desc p-2">
            <div className="prod-header">
                <h4>
                    Smart Stick For Blind People
                </h4>
                <div className="prod-reviews">
                    <div className="prod-stars">
                        <IoIosStar color="orange" />
                        <IoIosStar color="orange" />
                        <IoIosStar  color="orange"/>
                        <IoIosStar  color="orange"/>
                        <IoIosStar />
                    </div>
                    <div className="prod-re">
                        (100)
                    </div>
                </div>
                <div className="prod-prices">
                    <div className="prod-price-new">
                        $10
                    </div>
                    <div className="prod-price-old">
                        $5
                    </div>
                </div>
            </div>
            <div className="prod-word mt-4">
                <p>
                Discover enhanced mobility and safety with the SmartSense Blind Stick: equipped with ultrasonic sensors for obstacle detection within 3 meters, intuitive vibration alerts for guidance, and adjustable length for personalized comfort. Ideal for empowering individuals with visual impairments in navigating their surroundings independently and confidently.
                </p>
                <p>
                    <span style={{fontWeight: "600"}}>Category</span> : Blind People
                </p>
                <button>
                    <FaCartPlus className="me-1" /> Add to Cart 
                </button>
            </div>
        </div>
    </div>
  )
}
