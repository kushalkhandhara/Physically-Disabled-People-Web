import "./Contact.css";
import contact from '../../assets/contact1.jpg'

import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
export default function Contact() 
{
    const handleSubmit = (event) => 
    {
        event.preventDefault();
    }


  return (
    <>
        <div className="contact container">
            <div className="contact-img">
                    <img src={contact} className="img-fluid" alt="" />
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="form-inp">
                        <div className="inp-name">
                            Name*
                        </div>
                        <input type="text" name="name" placeholder="Enter Name" />
                    </div>

                    <div className="form-inp">
                        <div className="inp-name">
                            Email*
                        </div>
                        <input type="email" name="email" placeholder="Enter Email Address" />
                    </div>

                    <div className="form-inp">
                        <div className="inp-name">
                            Contact No.*
                        </div>
                        <input type="text" name="phone" placeholder="Enter Contact Number" />
                    </div>

                    <div className="form-inp">
                        <div className="inp-name">
                            Subject*
                        </div>
                        <input type="text" name="subject" placeholder="Enter Subject" />
                    </div>

                    <div className="form-inp">
                        <div className="inp-name">
                            Message*
                        </div>
                        <textarea name="message" rows="8" placeholder="Enter Message"id=""></textarea>
                    </div>
                    <div className="form-btns">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="also-contact">
            <div className="also-contact-header">
                <h3>You Can Also Contact Us On</h3>
            </div>
            <div className="social-icons">
                <div className="instaicon">
                    <FaInstagramSquare />
                </div>
                <div className="faceicon">
                    <FaFacebookSquare />
                </div>
                <div className="linkicon">
                    <FaLinkedin />
                </div>
                <div className="whatsicon">
                    <FaWhatsappSquare />
                </div>
            </div>
        </div>
        {/* <Footer/> */}
    </>
  )
}
