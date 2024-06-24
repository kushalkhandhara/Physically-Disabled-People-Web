import "./Section5.css";
import Research from "../../../assets/research.jpg";

export default function Section5() {
  return (
    <div className="section5">
        <div className="section5-header">
            <h1>Reasearch On Disability</h1>
        </div>
        <div className="desc container">
            <div className="desc1">
                <img src={Research} alt="" />
            </div>
            <div className="desc2">
                <h2>Understanding Disability: Latest Research Findings</h2>
                <div className="desc2-para">
                    <p>Explore the latest insights and research dedicated to empowering individuals with disabilities. Discover advancements, strategies, and inclusive practices that promote equality and enhance quality of life.</p>
                    <p>
                    Stay updated on cutting-edge research pushing beyond limits in disability studies. Our platform offers a deep dive into innovative approaches, transformative technologies, and impactful findings shaping the future of inclusion.
                    </p>
                    <p>
                    Unlock the potential of disability research through explorative insights and discoveries. Engage with diverse perspectives, innovative strategies, and impactful studies driving positive change and empowerment.
                    </p>
                </div>
                <div className="section4-btns">
                    <button className="button-48 mt-4" role="button"><span className="text">Research On Disablity</span></button>
                </div>
            </div>
        </div>
    </div>
  )
}
