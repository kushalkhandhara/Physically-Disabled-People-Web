import PopularJobCard from "./PopularJobCard";
import "./PopularJobs.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function PopularJobs() 
{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className="popular-jobs container">
        <div className="popular-jobs-header">
            <h2><b>Popular</b> Jobs</h2>
        </div>
        <div className="popular-jobs-cards">
            <Carousel showDots={false} responsive={responsive} autoPlay={true}  autoPlaySpeed={1500}   infinite={true}>
                <PopularJobCard/>
                <PopularJobCard/>
                <PopularJobCard/>
                <PopularJobCard/>
                <PopularJobCard/>
                <PopularJobCard/>
            </Carousel>
        </div>
    </div>
  )
}
