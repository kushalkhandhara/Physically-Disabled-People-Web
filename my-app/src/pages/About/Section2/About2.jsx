import "./About2.css";

export default function About2() {
  return (
    <div className="about2">
        <div className="about2-header container">
            <h2>Helping Hands Volunteer Assistance and Chat Feature for Physically Disabled Individuals.</h2>
        </div>
        <div className="about2-para container">
            <p>
            Helping Hands offers volunteer support and a chat feature designed for physically disabled individuals. Connect with volunteers for assistance tailored to your needs, and enjoy a supportive community environment.Empower yourself with resources and companionship on your journey toward greater independence.
            </p>
        </div>
        <div className="about2-counter container">
            <div className="about2-counter-header">
                <h4>How Many <b style={{color:'red'}}>Trust</b> Us ?</h4>
            </div>
            <div className="about2-counter1">
                <div className="percfam">
                    <div className="percent">
                        <h3>
                           <b>43%</b> 
                        </h3>
                    </div>
                    <div className="fami">
                        <h6>
                            of low-income families
                        </h6>
                    </div>
                </div>
            </div>
            <div className="about2-counter1">
                <div className="percfam">
                    <div className="percent">
                        <h3>
                        <b>13.38%</b> 
                        </h3>
                    </div>
                    <div className="fami">
                        <h6 className="px-1">
                            of tribal residents
                        </h6>
                    </div>
                </div>
            </div>
            <div className="about2-counter1">
                <div className="percfam">
                    <div className="percent">
                        <h3>
                        <b>19%</b> 
                        </h3>
                    </div>
                    <div className="fami">
                        <h6>
                            million school-aged children
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
