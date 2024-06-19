import "./Section2.css"

export default function Section2() {
  return (
    <div className="section2">
        <div className="section2-header">
            <h1>Inspiration Hub</h1>
        </div>
        <div className="quotes">
            <h3>
               <q>Believe in yourself; you have the power to achieve anything</q>
            </h3>
        </div>
        <div className="desc">
            <p>
            Visit our motivational videos section for people with physical disabilities. Discover inspiring stories and uplifting messages to empower you on your journey. Click below to find strength and encouragement.
            </p>
        </div>
        <div className="play-video">
            <div className="video">
                <iframe src="https://www.youtube.com/embed/9XGekkdAIrk">
                </iframe>
            </div>
          
            <button className="button-48 mt-4" role="button"><span className="text">Explore Motivation Videos</span></button>
        </div>
    </div>
  )
}
