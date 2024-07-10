import "./Carousel.css"

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import FirstImage from "../../assets/disabled2.jpeg"
import SecondImage from "../../assets/disabled.avif"
import ThirdImage from "../../assets/disabled3.webp"
import FourthImage from "../../assets/disabled4.webp"
import FifthImage from "../../assets/carousel-hands.jpg"
import SixthImage from "../../assets/carousel-caretaker.jpg"
import Shop from "../../assets/shop.webp"

import {Link} from "react-router-dom";


export default function Carousel1() {
  return (
    <>
    <div className="carousels">
      <Carousel fade indicators={false} controls={false} interval={1000}>
        
        {/* Desc */}
        <Carousel.Item>
              <div className="carousel-img1"> 
                  <img src={FirstImage} alt="" className="carousel-img img-fluid" />
              </div>
              <Carousel.Caption>
                <h3><q> Empower Yourself </q></h3>
                <div className="para">
                  <p>Empowering abilities through accessible digital solutions, ensuring everyone can thrive online. Join us in creating a limitless, inclusive digital world.</p>
                </div>
              </Carousel.Caption>
        </Carousel.Item>

          {/* Shop */}
        <Carousel.Item>
              <div className="carousel-img1"> 
                  <img src={Shop} alt="" className="carousel-img img-fluid" />
              </div>
              <Carousel.Caption>
                <h3><q>Handicap Helpers Store</q></h3>
                <div className="para">
                  <p>Explore our store for cutting-edge devices that enhance independence and accessibility. We offer solutions to make everyday life easier for people with physical disabilities.</p>
                  <Link to="/shop">
                    <button className="btn common-btn">
                      Explore Shop
                    </button>
                  </Link>
                </div>
              </Carousel.Caption>
        </Carousel.Item>

          {/* CareTaker */}
        <Carousel.Item>
              <div className="carousel-img1"> 
                  <img src={SixthImage} alt="" className="carousel-img img-fluid" />
              </div>
              <Carousel.Caption>
                <h3><q>Care Services for Disabled Individuals</q></h3>
                <div className="para">
                  <p>Our caretaker services provide compassionate support and assistance tailored to meet the unique needs of individuals with physical disabilities, ensuring comfort and quality of life.</p>
                  <Link to="/caretaker">
                    <button className="btn common-btn">
                      Hire Care Taker
                    </button>
                  </Link>
                </div>
              </Carousel.Caption>
        </Carousel.Item>

        {/* Motivation */}
        <Carousel.Item>
          <div className="carousel-img1"> 
              <img src={SecondImage} alt="" className="carousel-img img-fluid" />
          </div>
          <Carousel.Caption>
            <h3><q>Motivational Moments</q></h3>
            <div className="para">
                <p>Step into our Inspiration Hub—a place where uplifting videos ignite courage and determination. Explore stories that empower and inspire, showing you the strength to conquer any obstacle.</p>
                <button className="btn common-btn">
                  Explore Motivational Videos
                </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Jobs */}
        <Carousel.Item>
          <div className="carousel-img1"> 
              <img src={ThirdImage} alt="" className="carousel-img img-fluid" />
          </div>
          <Carousel.Caption>
            <h3><q>Job Opportunities</q></h3>
            <div className="para">
                <p>Our website connects disabled individuals with job opportunities that support diversity and accessibility. Find empowering careers that value your unique skills and abilities.</p>
                <Link to="/jobs">
                  <button className="btn common-btn">
                    Find Jobs
                  </button>
                </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>


        {/* Volunteer  */}
        <Carousel.Item>
          <div className="carousel-img1"> 
              <img src={FifthImage} alt="" className="carousel-img img-fluid" />
          </div>
          <Carousel.Caption>
            <h3><q>Hands-On Help for People With Disabilities</q></h3>
            <div className="para">
              <p>oin us in volunteering to support people with disabilities and make a positive impact in their lives today.</p>
              <Link to="/volunteer">
                <button className="btn common-btn">
                    Volunteer
                </button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Chat */}
        <Carousel.Item>
          <div className="carousel-img1"> 
              <img src={FourthImage} alt="" className="carousel-img img-fluid" />
          </div>
          <Carousel.Caption>
            <h3><q>Peer Support Connect</q></h3>
            <div className="para">
              <p>Our website offers a feature to connect you with others facing similar disabilities. Get guidance and support from peers who understand, helping you navigate life challenges together.</p>
              <button className="btn common-btn">
                  Have A Chat
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
    </>
  )
}
