import "./Carousel.css"

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import FirstImage from "../../assets/disabled2.jpeg"
import ThirdImage from "../../assets/disabled3.webp"

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
                <h1>Hello World</h1>

              </Carousel.Caption>
      
        </Carousel.Item>



        <Carousel.Item>
          <div className="carousel-img1"> 
              <img src={ThirdImage} alt="" className="carousel-img img-fluid" />
          </div>
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
    </>
  )
}
