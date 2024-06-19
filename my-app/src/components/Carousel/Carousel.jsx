import "./Carousel.css"

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import FirstImage from "../../assets/disabled2.jpeg"
import SecondImage from "../../assets/disabled.avif"
import ThirdImage from "../../assets/disabled3.webp"
import FourthImage from "../../assets/disabled4.webp"
import Shop from "../../assets/shop.webp"

export default function Carousel1() {
  return (
    <>
    <div className="carousels">
      <Carousel fade indicators={true} controls={false}>
        
        <Carousel.Item>
              <div className="carousel-img1"> 
                  <img src={FirstImage} alt="" className="carousel-img img-fluid" />
              </div>
              <Carousel.Caption>
                <h1><q> Empower Yourself </q></h1>
                <div className="para">
                  <p>Empowering abilities through accessible digital solutions, ensuring everyone can thrive online. Join us in creating a limitless, inclusive digital world.</p>
                </div>
              </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
              <div className="carousel-img1"> 
                  <img src={Shop} alt="" className="carousel-img img-fluid" />
              </div>
              <Carousel.Caption>
                <h1><q>Handicap Helpers Store</q></h1>
                <div className="para">
                  <p>Explore our store for cutting-edge devices that enhance independence and accessibility. We offer solutions to make everyday life easier for people with physical disabilities.</p>
                  <button className="btn common-btn">
                    Explore Shop
                  </button>
                </div>

              </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-img1"> 
              <img src={SecondImage} alt="" className="carousel-img img-fluid" />
          </div>
          <Carousel.Caption>
            <h1><q>Motivational Moments</q></h1>
            <div className="para">
                <p>Step into our Inspiration Hub—a place where uplifting videos ignite courage and determination. Explore stories that empower and inspire, showing you the strength to conquer any obstacle.</p>
                <button className="btn common-btn">
                  Explore Motivational Videos
                </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-img1"> 
              <img src={ThirdImage} alt="" className="carousel-img img-fluid" />
          </div>
          <Carousel.Caption>
            <h1><q>Job Opportunities</q></h1>
            <div className="para">
                <p>Our website connects disabled individuals with job opportunities that support diversity and accessibility. Find empowering careers that value your unique skills and abilities.</p>
                <button className="btn common-btn">
                  Find Jobs
                </button>
            </div>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-img1"> 
              <img src={FourthImage} alt="" className="carousel-img img-fluid" />
          </div>
          <Carousel.Caption>
            <h1><q>Peer Support Connect</q></h1>
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
