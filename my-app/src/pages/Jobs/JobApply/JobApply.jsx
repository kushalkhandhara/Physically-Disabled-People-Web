import "./JobApply.css";
import logoImg from "../../../assets/Amazon logo.png"
import applyImg from "../../../assets/job-apply.png"

export default function JobApply() {
  
    const handleSubmit = (event) => 
    {
        event.preventDefault();
    }

    return (
    <div className="jobapply">
        <div className="job-apply-main container">
            <div className="jobapply-side1">
                <img src={logoImg} className="img-fluid" alt="" />
            </div>
            <div className="jobapply-side2">
                <div className="jobapply-side2-header">
                    <h3>
                        Amazon Inc.
                    </h3>
                </div>
                <div className="jobapply-side2-para pt-2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda nulla quasi consequatur dignissimos saepe! Eaque obcaecati porro unde omnis minima laborum autem. Assumenda minus at dolore aliquam, repellat culpa animi optio mollitia suscipit dolorum cum vitae magni porro iure facilis. Porro quisquam fugiat consequatur, delectus nisi perspiciatis sed cum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime commodi molestias nesciunt rem in cumque ex odit. Ducimus maiores minus autem, expedita distinctio reiciendis repellendus nobis porro, explicabo minima officiis.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eligendi architecto minima in veniam. Nam laudantium error unde. Consequuntur, maxime. Culpa accusamus pariatur minima quasi tempora? Ullam voluptatibus quibusdam quisquam!</p>
                </div>
                <div className="job-salary">
                    <h6>Work From Home</h6>
                    <h3>Salary $4,33,120</h3>

                </div>
            </div>
        </div>

        <div className="apply-now-form container">
            <div className="apply-now-form-header">
                <h2>Apply Now!!</h2>
            </div>

            <div className="apply-form-main">
                <div className="apply-form-side1">
                    <form onSubmit={handleSubmit}>
                        
                        {/* Name */}
                        <div className="apply-form-ip">
                            <div className="apply-form-label">Name :</div>
                            <div className="apply-form-input">
                                <input type="text" placeholder="Enter Name" />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="apply-form-ip">
                            <div className="apply-form-label">Email :</div>
                            <div className="apply-form-input">
                                <input type="text" placeholder="Enter Email" />
                            </div>
                        </div>

                        {/*  Phone Number */}
                        <div className="apply-form-ip">
                            <div className="apply-form-label">Phone No. :</div>
                            <div className="apply-form-input">
                                <input type="text" placeholder="Enter Phone Number" />
                            </div>
                        </div>

                        {/*  Years of Experience */}
                        <div className="apply-form-ip">
                            <div className="apply-form-label">Years of Experience :</div>
                            <div className="apply-form-input">
                                <input type="text" placeholder="Years of Experience" />
                            </div>
                        </div>

                        {/* Resume */}
                        <div className="apply-form-ip">
                            <div className="apply-form-label">Attach Your Resume :</div>
                            <div className="apply-form-input">
                                <input type="file" placeholder="Your Resune" />
                            </div>
                        </div>

                        {/* Submit button */}
                        <div className="apply-form-button">
                            <div className="apply-form-submit">
                                <button>
                                    Apply
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="apply-form-side2">
                    <img src={applyImg} className="img-fluid" alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}
