import "./Tabs.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IoIosStar } from "react-icons/io";
export default function Tabs1() {
  return (
    <div className="multitabs container">
    <Tabs defaultActiveKey="Description" id="uncontrolled-tab-example" className="mb-0">
        <Tab eventKey="Description" title="Description">
            <div className="tab-desc">
 
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias totam dolore nemo laboriosam dolorum. Vel labore, voluptas quia sequi laboriosam commodi natus, dolores numquam, mollitia nisi eaque quam omnis voluptate reiciendis est? Consectetur deserunt nam perferendis illo corrupti harum, aperiam quaerat soluta officiis explicabo, quidem ab esse quam nulla?

                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rem cum, deleniti nulla animi quidem debitis distinctio perferendis mollitia eum! Quam voluptatum quibusdam optio officia dolorum eum. Voluptas explicabo, nobis sed totam maiores harum reiciendis quae eligendi porro, natus fuga?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rem cum, deleniti nulla animi quidem debitis distinctio perferendis mollitia eum! Quam voluptatum quibusdam optio officia dolorum eum. Voluptas explicabo, nobis sed totam maiores harum reiciendis quae eligendi porro, natus fuga?
                </p>
                <div className="prod-video">
                    <iframe src="https://www.youtube.com/embed/J-VVh5ezqGA">
                    </iframe>
                </div>

            </div>
        </Tab>
        <Tab eventKey="Reviews" title="Reviews">
            <div className="tab-reviews mb-3">
                <div className="tab-user">
                    <div className="tab-user-header">
                        <h6>Kushal Khandhara</h6>
                        <div className="tab-stars">
                            <IoIosStar color="orange" />
                            <IoIosStar color="orange" />
                            <IoIosStar  color="orange"/>
                            <IoIosStar  color="orange"/>
                            <IoIosStar />
                        </div>
                    </div>
                    <div className="tab-user-desc mt-2 px-2">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi eaque eum dolores facere provident dignissimos in. Officia nam dolorem fuga at? Voluptatem doloremque eligendi commodi dolorem sapiente voluptate alias corrupti repellendus molestiae, voluptas minus nihil, fugit perferendis officiis dolorum?
                        </p>
                    </div>
                </div>
                <div className="tab-user">
                    <div className="tab-user-header">
                        <h6>Kushal Khandhara</h6>
                        <div className="tab-stars">
                            <IoIosStar color="orange" />
                            <IoIosStar color="orange" />
                            <IoIosStar  color="orange"/>
                            <IoIosStar  color="orange"/>
                            <IoIosStar />
                        </div>
                    </div>
                    <div className="tab-user-desc mt-2 px-2">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi eaque eum dolores facere provident dignissimos in. Officia nam dolorem fuga at? Voluptatem doloremque eligendi commodi dolorem sapiente voluptate alias corrupti repellendus molestiae, voluptas minus nihil, fugit perferendis officiis dolorum?
                        </p>
                    </div>
                </div>
            </div>
        </Tab>
    </Tabs>
    </div>
  )
}
