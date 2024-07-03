import "./VolunteerDis.css";
import NgoImg from "../../../../assets/ngo.jpg";
import volunteerSide from "../../../../assets/volunteerside.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function VolunteerDis() 
{
    const handleSubmit = (event) => 
    {
        event.preventDefault();
    }
    return (
    <div className="volunteerdisplay container">
        <div className="volunteerdis">
            <div className="volunteer-img">
                <img src={NgoImg} className="img-fluid" alt="" />
            </div>
            <div className="volunteer-desc">
                <div className="volunteer-heading">
                    <h3>
                        Karna Foundation
                    </h3>
                    <h6>
                        <FaLocationDot /> Ahemdabad, Vastrapur
                    </h6>
                </div>
                <div className="volunteer-para mt-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quis nobis non necessitatibus perferendis nostrum officia animi magni repudiandae deserunt unde delectus, facilis accusantium quam quas dolorum voluptas ducimus, sit ipsa tempora incidunt fuga. Nulla odit velit ratione sed perspiciatis aperiam deleniti, enim iusto adipisci recusandae odio reprehenderit nostrum nobis minima placeat doloremque debitis atque quis a distinctio. Officiis, quos?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quis nobis non necessitatibus perferendis nostrum officia animi magni repudiandae deserunt unde delectus, facilis accusantium quam quas dolorum voluptas ducimus, sit ipsa tempora incidunt fuga. Nulla odit velit ratione sed perspiciatis aperiam deleniti, enim iusto adipisci recusandae odio reprehenderit nostrum nobis minima placeat doloremque debitis atque quis a distinctio. Officiis, quos?</p>
                </div>
                <div className="ngo-detail">
                    <div className="phone">
                        <FaPhoneAlt size={18} className="me-2" /> <span>+91 1234567890</span>
                    </div>
                    <div className="mail mt-2">
                        <IoIosMail size={28} className="me-2"  /> <span>abc@gmail.com</span>
                    </div>

                
                </div>
            </div>
        </div>

        <div className="form-fill">
            <div className="form-header">
                <h3>
                    Join Our NGO, Make a Difference
                </h3>
            </div>
            
            <div className="form-main">
            
                <div className="form-img-vol">
                    <img src={volunteerSide} className="img-fluid" alt="" />
                </div>

                <div className="form-side">
                    <form onSubmit={handleSubmit}>
                        <div className="volun-form-inp">
                            <div className="volun-label ps-3 ">
                                Enter Your Name
                            </div>
                            <div className="volun-input">
                                <input type="text" placeholder="Enter Name" name="" id="" />
                            </div>
                        </div>

                        <div className="volun-form-inp">
                            <div className="volun-label ps-3">
                                Enter Your Phone Number
                            </div>
                            <div className="volun-input">
                                <input type="text" placeholder="Enter Phone Number" name="" id="" />
                            </div>
                        </div>

                        <div className="volun-form-inp">
                            <div className="volun-label ps-3">
                                Enter Your E-Mail
                            </div>
                            <div className="volun-input">
                                <input type="email" placeholder="Enter Email" name="" id="" />
                            </div>
                        </div>

                        <div className="volun-form-inp">
                            <div className="volun-label ps-3">
                                Enter Your Birth Date
                            </div>
                            <div className="volun-input">
                                <input type="date" placeholder="Enter Birth Date" name="" id="" />
                            </div>
                        </div>

                        <div className="volun-form-inp">
                            <div className="volun-label ps-3">
                                Enter Your Qualification
                            </div>
                            <div className="volun-input">
                                <input type="text" placeholder="Enter Qualification" name="" id="" />
                            </div>
                        </div>
                        <div className="volun-submit ps-4 mt-4">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    </div>
  )
}
