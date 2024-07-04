import "./CareTaker2.css";
import bd1 from "../../../assets/helper.jpg";
import { Link } from "react-router-dom";

export default function CareTaker2() {
  return (
    <div className="caretaker2 container">
        <div className="caretaker2-header">
            <h2>
                Hire a Helper
            </h2>
        </div>
        <div className="caretaker2-main">
            <div className="caretaker2-side2">
                <div className="caretaker2-side2-header">
                    <h4>
                        Hire the helpers helps disabled people live more independently and inclusively
                    </h4>
                </div>
                <div className="caretaker2-side2-para mt-4">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi eum distinctio, ratione facilis alias ullam tenetur, ex aliquid aspernatur animi, incidunt corporis porro sed nemo aperiam iure nulla culpa sapiente?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quos.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam iusto porro tempora dolores quia atque doloribus commodi nam eligendi omnis!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi possimus delectus ipsam, repellat et temporibus cum perspiciatis porro nostrum repellendus doloribus, asperiores labore excepturi!
                    </p>
                    
                </div>
                <Link>
                    <button>Hire A Helper</button>
                </Link>

            </div>
            <div className="caretaker2-side1">
                <img src={bd1} className="img-fluid" alt="" />
            </div>
        </div>
    </div>
  )
}
