import "./CareTaker1.css";
import bd1 from "../../../assets/blind-with-dog.jpg";
import {Link} from "react-router-dom";

export default function CareTaker1() {
  return (
    <div className="caretaker1 container">
        <div className="caretaker1-header">
            <h2>
                Hire or Buy a Service Dog             
            </h2>
        </div>
        <div className="caretaker1-main">
            <div className="caretaker1-side1">
                <img src={bd1} className="img-fluid" alt="" />
            </div>
        
            <div className="caretaker1-side2">
                <div className="caretaker1-side2-header">
                    <h4>
                    Hire a caretaker who is as loyal and dedicated as man's best friend.
                    </h4>
                </div>
                <div className="caretaker1-side2-para mt-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio amet similique optio ratione dolorem eligendi cupiditate eaque, exercitationem illum aspernatur voluptatem totam, dolorum, tenetur dolor. Eaque sint ipsum cumque quo voluptas repudiandae aliquid harum, consequatur delectus voluptates beatae veniam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi reprehenderit nemo adipisci nobis est perferendis consequuntur odio deserunt, mollitia eaque, veniam similique odit ducimus iusto consequatur magni tempore eligendi, ab reiciendis dolores architecto. Libero, facilis maiores dolorum mollitia deserunt fugit dicta! Cupiditate, itaque aut quos minima dignissimos aliquam neque!
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, rerum!

                    </p>
                </div>
                <Link to="/hiredog">
                    <button> Get A Service Dog Now</button>
                </Link>

            </div>
        </div>

    </div>
  )
}
