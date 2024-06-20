import prof from "../../../assets/prof.jpg"

export default function Cards() {
  return (
    <>
    <div className="section4-card">
        <div className="sec4-card-header">
            <div className="profile-img">
                <img src={prof} className="img-fluid rounded-circle" alt="" />
            </div>
            <div className="profile-desc ">
                <h6>Kushal Khandhara</h6>
                <p>
                Software Developer
                </p>
            </div>
        </div>

        <div className="sec4-card-body">
            <div className="sec4-card-para mt-4">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod alias molestiae dolorum architecto reprehenderit sapiente, ipsa dolore ad officiis!
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
