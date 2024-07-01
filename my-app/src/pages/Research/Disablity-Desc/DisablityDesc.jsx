import "./DisablityDesc.css";
import Carousel from 'react-bootstrap/Carousel';
import Product from "../../Shop/Section2/Product"

import Blind from "../../../assets/blind.jpg";
import m1 from "../../../assets/muscleweak.webp"
import m2 from "../../../assets/muscleweak1.jpg"
import m3 from "../../../assets/muscleweak2.jpg"
import m4 from "../../../assets/muscleweak3.jpg"

export default function DisablityDesc() {
  return (
    <>
        <div className="disablitydesc">
            <div className="disablity-main container">
                <div className="disablity-side1 p-1">
                    <div className="disab-images">
                        <Carousel variant="dark" indicators={false}>
                            <Carousel.Item>
                                <img src={m1} alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={m2} alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={m3} alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={m4} alt="" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="disablity-descrip">
                    <div className="disab-header">
                        <h4>
                        Managing Muscle Weakness: Causes, Treatment, and Improving Daily Life
                        </h4>
                    </div>
                    <div className="disab-para">
                        <p>
                        Muscle weakness refers to a condition where muscles <b>lack the strength to perform normal activities effectively.</b>  It can manifest as difficulty in lifting objects, climbing stairs, or even standing up from a seated position. <b> Causes include aging, sedentary lifestyle, nutritional deficiencies, or underlying medical conditions like muscular dystrophy or neuropathy.</b> Symptoms vary from mild <b>fatigue</b> to significant impairment in daily tasks, impacting quality of life.
                        </p>
                        <p>
                        Addressing muscle weakness involves a multifaceted approach. Regular physical activity, including strength training and <b> aerobic exercises, can improve muscle tone and endurance.</b> Proper nutrition, with a focus on protein intake and essential vitamins and minerals, supports muscle health. Physical therapy and stretching exercises help maintain flexibility and reduce stiffness. In some cases, medications or surgical interventions may be necessary, depending on the underlying cause diagnosed by a healthcare professional.
                        </p>
                        <p>
                        To effectively address muscle weakness, consider purchasing a comprehensive muscle strengthening and rehabilitation tool like <b>resistance bands or a set of dumbbells</b> . These products are versatile and can be used for various exercises targeting different muscle groups, helping to improve strength and endurance over time. Additionally, consulting with a healthcare professional can provide personalized recommendations based on your specific needs and condition. And You can purchase a <b>stick</b>  for elder people because this might be a permenent sollution for them.
                        </p>
                    </div>

                </div>
            </div>

        </div>
        <div className="disab-products">
            <h4>
                Products for Muscle Weakness Relief
            </h4>
            <div className="disablity-products mt-5 container">
                <Product id="1" image = {Blind} name="Smart Stick" desc="Helps blind people walk safely with our user-friendly cane." oldPrice="15" newPrice="10" />
                <Product id="1" image = {Blind} name="Smart Stick" desc="Helps blind people walk safely with our user-friendly cane." oldPrice="15" newPrice="10" />
                <Product id="1" image = {Blind} name="Smart Stick" desc="Helps blind people walk safely with our user-friendly cane." oldPrice="15" newPrice="10" />
                <Product id="1" image = {Blind} name="Smart Stick" desc="Helps blind people walk safely with our user-friendly cane." oldPrice="15" newPrice="10" />
            </div>

        </div>
    </>
  )
}
