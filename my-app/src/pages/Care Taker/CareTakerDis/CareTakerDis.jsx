import "./CareTakerDis.css";
import dogimg from "../../../assets/dogs.jpeg";

export default function CareTakerDis() 
{
    const handleSubmit = (event) => 
    {
        event.preventDefault();
    }

  return (
    <div className="caretakerdis container">
        <div className="caretakerdis-main">
            <div className="caretakerdis-side1">
                <img src={dogimg} className="img-fluid" alt="" />
            </div>
            <div className="caretakerdis-side2">
                <div className="caretakerdis-side2-header">
                    <h4>
                        Scooby John's
                    </h4>
                </div>
                <div className="caretakerdis-side2-para mt-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat quisquam non iusto quod accusantium a architecto nesciunt minima tempore. Alias earum expedita illo, temporibus et cupiditate ab perspiciatis possimus.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium facere iste officia aliquid sunt a molestiae tenetur cumque, commodi tempora sequi quas. Accusantium dolorum dolore blanditiis sunt vitae, saepe vel autem laboriosam enim nobis voluptatib5us aliquam quas placeat nihil aliquid.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia harum cumque ipsam dolores voluptas debitis maxime mollitia magnam ipsum!
                    </p>
                </div>
                <div className="caretaker-price">
                    <h5> <b>10$</b> per day</h5>
                </div>
            </div>
        </div>


        <div className="get-caretaker">
            <div className="get-caretaker-header">
                <h4>Get The Caretaker Now <span style={{color:"red"}}>(Please Read The Note Before Filling Form)</span></h4>
            </div>
            <div className="caretaker-form-main  mt-4">
                <div className="caretaker-form">
                    <form onSubmit={handleSubmit}>
                        
                        {/* Name */}
                        <div className="caretaker-ip">
                            <div className="caretaker-label">
                                Name :
                            </div>
                            <div className="caretaker-input">
                                <input type="text" name="caretakername" placeholder="Enter Name" />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="caretaker-ip">
                            <div className="caretaker-label">
                                Email :
                            </div>
                            <div className="caretaker-input">
                                <input type="email" name="caretakername" placeholder="Enter Email" />
                            </div>
                        </div>
                        
                        {/* Phone Number */}
                        <div className="caretaker-ip">
                            <div className="caretaker-label">
                                Phone No. : 
                            </div>
                            <div className="caretaker-input">
                                <input type="text" name="caretakerphone" placeholder="Enter Phone Number" />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="caretaker-ip">
                            <div className="caretaker-label">
                                Address : 
                            </div>
                            <div className="caretaker-input">
                                <textarea rows="10"  name="caretakeraddress" placeholder="Enter Address"></textarea>
                            </div>
                        </div>

                        {/* Start Date Care Taker */}
                        <div className="caretaker-ip">
                            <div className="caretaker-label">
                            Start Date for Care Taker
                            </div>
                            <div className="caretaker-input">
                                <input type="date" placeholder="Enter Date" name="caretakerphone" />
                            </div>
                        </div>
                        
                        {/* End Date Care Taker */}
                        <div className="caretaker-ip">
                            <div className="caretaker-label">
                                End Date for Care Taker
                            </div>
                            <div className="caretaker-input">
                                <input type="date" placeholder="Enter Date" name="caretakerphone" />
                            </div>
                        </div>
                        
                        <div className="caretaker-ip">
                            <div className="caretaker-label">
                                So You Want CareTaker For 
                            </div>
                            <div className="caretaker-days-count mt-1">
                                <h5>10 Days</h5>
                            </div>
                        </div>

                        <div className="caretaker-btn mt-4 ps-2">
                            <button>Submit</button>
                        </div>

                    </form>
                </div>
                <div className="caretaker-note">
                    <div className="caretaker-note-header">
                        <h4>Note</h4>
                    </div>
                    <div className="caretaker-note-para">
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rerum libero corporis nam autem suscipit non enim quisquam animi dolores.

                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quis.
                            </li>
                            <li>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quae consequatur, minus odit sequi adipisci quam delectus iusto ea error.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet quam eum et, illo at.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur aliquam facilis quo esse autem placeat quam fugiat! Officiis, nobis.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur aliquam facilis quo esse autem placeat quam fugiat! Officiis, nobis.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}
