import "./Footer.css";
import logo from "../../assets/logo.avif";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
export default function Footer() 
{
    const handleSubmit = (e) => 
    {
        e.preventDefault();
    }
  return (
    <>
        <div className="footer">
            <div className="row px-3 pt-5">

                <div className="col-sm-3 footer1">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <h3 className="mt-4">Care Mate</h3>
                    <div className="social-icons mt-5">
                        <BsInstagram size={30}/>
                        <FaLinkedin size={30} />
                        <FaFacebookSquare size={30} />
                        <FaTwitter size={30} />
                    </div>
                    <p className="mt-5 ">
                    Care Mate empowers physically disabled individuals with resources, assistive devices, and job opportunities. Join us in fostering independence and inclusivity.
                    </p>
                </div>

                <div className="col-sm-3 footer2">
                    <div className="footer2-header">
                        <h4>Features</h4>
                    </div>
                    <div className="footer2-links">
                        <h6>
                            Hire A Care Taker
                        </h6>
                        <h6>
                            Explore Futuristic Devices 
                        </h6>
                        <h6>
                            Research On Disablity
                        </h6>
                        <h6>
                            Watch Motivational Videos
                        </h6>
                        <h6>
                            Explore Job Oppurtunities
                        </h6>
                        <h6>
                            Chat With People
                        </h6>
                    </div>
                </div>

                <div className="col-sm-3 footer3">
                    <div className="footer3-header">
                        <h4>Headquarters</h4>
                    </div>

                    <div className="footer3-locations">

                        <div className="footer3-location">
                            <div className="footer3-icon p-2">
                                <IoLocationSharp size={24} color="red" />
                            </div>
                            <div className="footer3-desc">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vitae laborum harum asperiores iusto deserunt aperiam pariatur modi blanditiis enim.
                                </p>
                            </div>
                        </div>

                        <div className="footer3-location">
                            <div className="footer3-icon p-2">
                                <IoLocationSharp size={24} color="red" />
                            </div>
                            <div className="footer3-desc">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vitae laborum harum asperiores iusto deserunt aperiam pariatur modi blanditiis enim.
                                </p>
                            </div>
                        </div>

                        <div className="footer3-location">
                            <div className="footer3-icon p-2">
                                <IoLocationSharp size={24} color="red" />
                            </div>
                            <div className="footer3-desc">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vitae laborum harum asperiores iusto deserunt aperiam pariatur modi blanditiis enim.
                                </p>
                            </div>
                        </div>
                    
                    </div>

                
                </div>

                <div className="col-sm-3 footer4">
                    <div className="footer4-header">
                        <h4>Subscribe</h4>
                    </div>
                    <div className="footer4-form">
                        <h6>
                            Get Freshesh Update Directly On Your Phone
                        </h6>
                        <form onSubmit={handleSubmit}>
                            <div className="form-data d-flex">
                                <div className="form-input">
                                    <input type="email" placeholder="Enter Your Mail" />
                                </div>
                                <div className="form-btn"> 
                                    <button className="btn btn-danger">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="copyright mt-5">
                    <hr />
                    <h6>
                        &copy; Copy Right All Rights Reserved, 2024 Care Mate
                    </h6>
                </div>
            </div>

        </div>
    </>
  )
}
